import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export function useScrolledPastFirstSection(): boolean {
  const { pathname } = useLocation();
  const [isPast, setIsPast] = useState(false);
  const [trackedPath, setTrackedPath] = useState(pathname);

  if (trackedPath !== pathname) {
    setTrackedPath(pathname);
    setIsPast(false);
  }

  useEffect(() => {
    const target = document.querySelector<HTMLElement>("main > *:first-child");

    if (!target || typeof IntersectionObserver === "undefined") {
      const onScroll = () => setIsPast(window.scrollY > window.innerHeight * 0.6);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [pathname]);

  return isPast;
}
