import { useEffect, useRef, useState } from "react";

/**
 * Splits "160+" into { target: 160, suffix: "+" }.
 * Splits "2026" into { target: 2026, suffix: "" }.
 * A value with no leading digits (target = 0) is returned as-is, unanimated —
 * don't count up decorative or non-numeric labels.
 */
function parseStatValue(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: Number(match[1]), suffix: match[2] };
}

/**
 * Animates an integer count from 0 to the numeric part of `value` over `durationMs`,
 * starting only when `active` becomes true. Runs once — flip `active` back to false
 * and forward again if you need a replay.
 */
export function useCountUp(value: string, active: boolean, durationMs = 1200) {
  const { target, suffix } = parseStatValue(value);

  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current || target === 0) return;

    hasRun.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(target);
      return;
    }

    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // ease-out-cubic: fast start, settles gently — matches kwt-animate-fade-up's feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, durationMs]);

  return `${display}${suffix}`;
}

/**
 * Reports whether `ref`'s element has entered the viewport. Fires once —
 * `inView` stays true after the first intersection, it doesn't flip back to
 * false when you scroll past. That's what you want for a "play once" stat count.
 */
export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // stop watching — we only need this once
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
