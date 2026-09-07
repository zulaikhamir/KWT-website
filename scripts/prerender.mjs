/**
 * Build-time prerendering.
 *
 * Runs after `vite build` (as the npm "postbuild" step). For each route below
 * it renders the app with react-dom/server, scrapes the <head> tags React 19
 * hoists from <Helmet> (title / description / og:* / twitter:* / canonical),
 * and writes a static HTML file with those tags baked in:
 *
 *   /                -> dist/index.html              (overwrites the SPA shell)
 *   /about           -> dist/about/index.html
 *   /events          -> dist/events/index.html
 *   /get-involved    -> dist/get-involved/index.html
 *   /faq             -> dist/faq/index.html
 *   /privacy         -> dist/privacy/index.html
 *   /events/<slug>   -> dist/events/<slug>/index.html   (one per ALL_EVENTS entry)
 *   <no match>       -> dist/404.html                   (the <NotFound> component)
 *
 * There is no SPA catch-all rewrite anymore: every real route is its own static
 * file, and Vercel automatically serves dist/404.html with a genuine HTTP 404
 * for any path that matches no file. dist/404.html is rendered from the "*"
 * route, so it is our real <NotFound> page (Navbar + illustration + Footer) and
 * still boots the SPA.
 *
 * EXCLUDED — see EXCLUDED_ROUTES below. /wall-of-gratitude is a dev-only route
 * (gated by import.meta.env.DEV in src/routes.tsx); it is not in the production
 * bundle at all, so there is nothing to prerender and a prod request for it
 * falls through to dist/404.html like any other unmatched path.
 *
 * The rendered <body> markup is discarded: this stays a client-rendered SPA,
 * and the goal is correct meta for non-JS scrapers (Slack, WhatsApp, iMessage,
 * Discord, LinkedIn, most X unfurls).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(rootDir, "dist-server", "entry-server.js");

const { render, ALL_EVENTS } = await import(pathToFileURL(serverEntry).href);

const template = await readFile(path.join(distDir, "index.html"), "utf8");

/**
 * Static routes to prerender besides "/". Keep in sync with src/routes.tsx —
 * every declared <Route> with a fixed path EXCEPT those in EXCLUDED_ROUTES and
 * the wildcard "*". Dynamic /events/:slug is expanded from ALL_EVENTS below.
 */
const STATIC_ROUTES = ["/about", "/events", "/get-involved", "/faq", "/privacy"];

/**
 * Routes that must NEVER receive a static file. /wall-of-gratitude is dev-only
 * (see src/routes.tsx) and absent from the production build; listed here
 * explicitly by path — not just omitted — and enforced by the guard below.
 */
const EXCLUDED_ROUTES = ["/wall-of-gratitude"];

/**
 * A path that matches no real route, so <StaticRouter> falls to the "*" route
 * and renders <NotFound>. Output goes to dist/404.html.
 */
const NOT_FOUND_PROBE = "/__prerender_404__";

const toOut = (url) =>
  url === "/" ? "index.html" : path.join(url.replace(/^\/+/, ""), "index.html");

/**
 * Full prerender list: "/" + static routes + one file per event + 404.
 * `body: true` also bakes the rendered component markup into #root (used for
 * 404.html so the NotFound page renders with its full design even before — or
 * without — the SPA JS; the SPA still boots and re-renders it identically via
 * createRoot). All other pages stay head-only; their #root is filled by the SPA.
 */
const routes = [
  { url: "/", out: toOut("/") },
  ...STATIC_ROUTES.map((url) => ({ url, out: toOut(url) })),
  ...ALL_EVENTS.map((event) => ({
    url: `/events/${event.slug}`,
    out: path.join("events", event.slug, "index.html"),
  })),
  { url: NOT_FOUND_PROBE, out: "404.html", body: true },
];

// Guard: refuse to run if an excluded route ever leaks into the list.
const leaked = routes.filter((r) => EXCLUDED_ROUTES.includes(r.url));
if (leaked.length > 0) {
  console.error(
    `prerender: excluded route(s) present in list: ${leaked.map((r) => r.url).join(", ")} - aborting.`,
  );
  process.exit(1);
}

/** Pull the SEO head tags out of the server-rendered markup for one route. */
function extractHead(html) {
  const tags = [];

  const title = html.match(/<title[^>]*>[\s\S]*?<\/title>/i);
  if (title) tags.push(title[0]);

  const metaRe = /<meta\b[^>]*>/gi;
  for (const [tag] of html.matchAll(metaRe)) {
    if (/\b(name|property)="(title|description|keywords|robots|og:[\w:]+|twitter:[\w:]+|article:[\w:]+)"/i.test(tag)) {
      tags.push(tag);
    }
  }

  const canonical = html.match(/<link\b[^>]*\brel="canonical"[^>]*>/i);
  if (canonical) tags.push(canonical[0]);

  return tags;
}

/**
 * Remove the shell's default SEO tags so we don't emit duplicates.
 * Trailing match eats horizontal whitespace + at most one newline — never the
 * next line's indentation.
 */
function stripDefaultHead(html) {
  const trail = "[^\\S\\r\\n]*\\r?\\n?";
  return html
    .replace(new RegExp(`[ \\t]*<title>[\\s\\S]*?<\\/title>${trail}`, "i"), "")
    .replace(new RegExp(`[ \\t]*<meta\\s+[^>]*\\bname="description"[^>]*>${trail}`, "i"), "")
    .replace(new RegExp(`[ \\t]*<meta\\s+[^>]*\\bproperty="og:[^"]*"[^>]*>${trail}`, "gi"), "")
    .replace(new RegExp(`[ \\t]*<meta\\s+[^>]*\\bname="twitter:[^"]*"[^>]*>${trail}`, "gi"), "");
}

/**
 * Strip the head-bound tags React 19 hoists (they're emitted inline by
 * renderToStaticMarkup) so the remainder is pure body markup for #root.
 */
function bodyMarkup(html) {
  return html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*>/gi, "")
    .replace(/<link\b[^>]*\brel="(?:canonical|preload|modulepreload|stylesheet)"[^>]*>/gi, "")
    .trim();
}

let failures = 0;

for (const { url, out, body } of routes) {
  const { html: rendered } = render(url);
  const headTags = extractHead(rendered);

  if (!headTags.some((t) => /^<title/i.test(t))) {
    console.error(`  x ${url} - no <title> in rendered output; skipping`);
    failures += 1;
    continue;
  }

  const head = headTags.join("\n    ");
  let html = stripDefaultHead(template).replace(
    /\s*<\/head>/,
    `\n    ${head}\n  </head>`,
  );

  if (body) {
    const markup = bodyMarkup(rendered);
    const injected = html.replace(
      /<div id="root">\s*<\/div>/,
      `<div id="root">${markup}</div>`,
    );
    if (injected === html) {
      console.error(`  x ${url} - could not find <div id="root"></div> to inject body; aborting.`);
      process.exit(1);
    }
    html = injected;
  }

  const dest = path.join(distDir, out);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, html, "utf8");
  const label = url === NOT_FOUND_PROBE ? '"*" (NotFound)' : url;
  console.log(`  ok ${label} -> dist/${out.split(path.sep).join("/")}`);
}

if (failures > 0) {
  console.error(`\nprerender: ${failures} route(s) failed - aborting build.`);
  process.exit(1);
}

console.log(`\nprerender: ${routes.length} route(s) written.`);
