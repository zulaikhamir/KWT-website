import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to the returned ref. When the element
 * enters the viewport the hook adds the `is-visible` class, which triggers
 * the CSS transition defined by `.kwt-reveal` / `.kwt-reveal-fade`.
 *
 * The observer disconnects after the first trigger so the animation only
 * plays once, and there is no ongoing observer cost after reveal.
 *
 * prefers-reduced-motion:
 *   The CSS already handles this by setting opacity:1 / transform:none on
 *   `.kwt-reveal` when reduced motion is preferred — the class toggle still
 *   happens, it just has no visible effect. This keeps the DOM consistent
 *   regardless of the user's motion preference.
 *
 * @param threshold  Fraction of the element that must be visible before
 *                   triggering. Default: 0.12 (12%) — reveals early enough
 *                   that the animation completes before the user's eye
 *                   reaches the element, but late enough that off-screen
 *                   content doesn't pre-reveal during fast scroll.
 * @param rootMargin Optional root margin passed to IntersectionObserver.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.12,
  rootMargin = "0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable (very old browsers / jsdom),
    // show the element immediately so content is never hidden.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          // Disconnect immediately — animation plays once only.
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
