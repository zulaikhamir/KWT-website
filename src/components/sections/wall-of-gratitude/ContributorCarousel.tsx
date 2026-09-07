import { useEffect, useRef, useState } from "react";

import type { GratitudePerson } from "@/data/wall-of-gratitude";
import { cn } from "@/lib/utils";
import ContributorCard from "./ContributorCard";

type ContributorCarouselProps = {
  contributors: GratitudePerson[];
};

/** Continuously loops contributor cards, pausing only while they are read. */
export default function ContributorCarousel({ contributors }: ContributorCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!scroller || isInteractionPaused || reduceMotion || contributors.length < 2) return;

    const loopStart = scroller.querySelector<HTMLElement>("[data-loop-start]")?.offsetLeft;
    if (!loopStart) return;

    let frame = 0;
    let previousTime = performance.now();

    const advance = (now: number) => {
      const elapsed = now - previousTime;
      previousTime = now;
      scroller.scrollLeft += elapsed * 0.045;

      // The duplicate sequence begins at loopStart. Resetting by precisely
      // that distance keeps the incoming duplicate in the same position.
      if (scroller.scrollLeft >= loopStart) scroller.scrollLeft -= loopStart;
      frame = requestAnimationFrame(advance);
    };

    frame = requestAnimationFrame(advance);

    return () => cancelAnimationFrame(frame);
  }, [contributors.length, isInteractionPaused]);

  return (
    <div
      onMouseEnter={() => setIsInteractionPaused(true)}
      onMouseLeave={() => setIsInteractionPaused(false)}
      onFocusCapture={() => setIsInteractionPaused(true)}
      onBlurCapture={() => setIsInteractionPaused(false)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-5 overflow-x-hidden py-2",
        )}
      >
        {[...contributors, ...contributors].map((person, index) => (
          <li
            key={`${index < contributors.length ? "original" : "duplicate"}-${person.id}`}
            data-loop-start={index === contributors.length || undefined}
            aria-hidden={index >= contributors.length || undefined}
            className="w-[78%] shrink-0 sm:w-[calc((100%-1.75rem)/2)] lg:w-[calc((100%-3.5rem)/3)]"
          >
            <ContributorCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}
