import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrolledPastFirstSection
 *
 * Returns `true` once the page's first section (the first child of <main>)
 * has scrolled completely above the viewport — i.e. the user has moved past
 * the hero. Navbar uses this to collapse into its floating compact state.
 *
 * Implemented with IntersectionObserver rather than a scroll listener so
 * there is no per-frame work while scrolling: the browser fires a single
 * callback at each boundary crossing.
 *
 * Resets on route change (via `pathname`) so every page starts expanded.
 */
export function useScrolledPastFirstSection(): boolean {
  const { pathname } = useLocation();
  const [isPast, setIsPast] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  // Reset during render rather than in the effect below: navigating always
  // lands at the top of the new page, so collapsing must clear before paint.
  // Doing it in the effect would flash the compact bar for one frame.
  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setIsPast(false);
  }

  useEffect(() => {
    const target = document.querySelector<HTMLElement>("main > *:first-child");

    // No <main> content yet, or a browser without IntersectionObserver
    // (jsdom / very old engines): fall back to a viewport-height threshold.
    if (!target || typeof IntersectionObserver === "undefined") {
      const onScroll = () => setIsPast(window.scrollY > window.innerHeight * 0.6);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // `boundingClientRect.top < 0` distinguishes "scrolled above the
        // viewport" from "not yet reached" — only the former should collapse.
        setIsPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [pathname]);

  return isPast;
}
