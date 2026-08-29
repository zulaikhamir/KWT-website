/* eslint-disable react-refresh/only-export-components --
   Server-only prerender entry: never part of the browser HMR graph, and it
   deliberately exports helpers (render, ALL_EVENTS) rather than a component. */
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./routes";

// Re-exported so the prerender script has the event list without needing to
// import src/data/events.ts directly (it pulls in .webp asset imports that
// only a bundler can resolve).
export { ALL_EVENTS } from "./data/events";

export interface RenderResult {
  /** Full rendered markup for `url`. */
  html: string;
}

/**
 * Render a route to static markup.
 *
 * react-helmet-async 3.x on React 19 is a transparent passthrough: <Helmet>
 * renders real <title>/<meta>/<link> elements and React 19 emits them inline
 * in the SSR output. The prerender script scrapes those tags out of `html`.
 *
 * The rendered <body> markup is otherwise discarded — this stays a
 * client-rendered SPA; the goal is correct <head> meta for non-JS scrapers.
 * Effects (IntersectionObserver, window access, etc.) do not run during SSR,
 * so the component tree is safe to render here.
 */
export function render(url: string): RenderResult {
  const html = renderToStaticMarkup(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { html };
}
