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
 *
 * EXCLUDED — see EXCLUDED_ROUTES below. /wall-of-gratitude is deliberately NOT
 * prerendered: it must have no static file and keep falling through the
 * vercel.json rewrite to dist/index.html exactly as before. The wildcard
 * NotFound route (path "*") is also not a real path and is not prerendered;
 * unknown URLs keep resolving via the rewrite -> dist/index.html -> the SPA
 * renders <NotFound> client-side.
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
 * Routes that must NEVER receive a static file — they keep resolving via the
 * vercel.json rewrite to dist/index.html. Listed explicitly by path, not just
 * omitted, and enforced by the guard below.
 */
const EXCLUDED_ROUTES = ["/wall-of-gratitude"];

const toOut = (url) =>
  url === "/" ? "index.html" : path.join(url.replace(/^\/+/, ""), "index.html");

/** Full prerender list: "/" + static routes + one file per event. */
const routes = [
  { url: "/", out: toOut("/") },
  ...STATIC_ROUTES.map((url) => ({ url, out: toOut(url) })),
  ...ALL_EVENTS.map((event) => ({
    url: `/events/${event.slug}`,
    out: path.join("events", event.slug, "index.html"),
  })),
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

let failures = 0;

for (const { url, out } of routes) {
  const { html: rendered } = render(url);
  const headTags = extractHead(rendered);

  if (!headTags.some((t) => /^<title/i.test(t))) {
    console.error(`  x ${url} - no <title> in rendered output; skipping`);
    failures += 1;
    continue;
  }

  const head = headTags.join("\n    ");
  const html = stripDefaultHead(template).replace(
    /\s*<\/head>/,
    `\n    ${head}\n  </head>`,
  );

  const dest = path.join(distDir, out);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, html, "utf8");
  console.log(`  ok ${url} -> dist/${out.split(path.sep).join("/")}`);
}

if (failures > 0) {
  console.error(`\nprerender: ${failures} route(s) failed - aborting build.`);
  process.exit(1);
}

console.log(`\nprerender: ${routes.length} route(s) written.`);
