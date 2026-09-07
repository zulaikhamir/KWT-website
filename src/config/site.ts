/**
 * Canonical production origin — single source of truth for absolute URLs
 * (og:image, canonical links, og:url, build-time prerendering).
 *
 * Keep in sync with public/sitemap.xml, public/robots.txt, and the static
 * og:image in index.html (those are plain files and can't import this).
 */
export const SITE_ORIGIN = "https://kashmiriwomenintech.org";

/** Absolute URL for a site-relative path, e.g. siteUrl("/about"). */
export function siteUrl(path: string): string {
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
