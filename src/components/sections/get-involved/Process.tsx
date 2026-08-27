import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    title: "Reach out",
    body: "Tell us who you are and how you'd like to get involved.",
  },
  {
    title: "Connect with KWT",
    body: "We'll review your request and get back to you with the next steps.",
  },
  {
    title: "Get involved",
    body: "Join the community, contribute your skills, attend events, or explore ways to work with KWT.",
  },
];

function useReachedSteps(count: number) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [reached, setReached] = useState<boolean[]>(() => {
    const skip =
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
    return Array(count).fill(skip);
  });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setReached((prev) => {
          let next = prev;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const i = itemRefs.current.indexOf(entry.target as HTMLLIElement);
            if (i < 0 || prev[i]) continue;
            if (next === prev) next = [...prev];
            next[i] = true;
          }
          return next;
        });
      },

      { rootMargin: "0px 0px -45% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { itemRefs, reached };
}

export default function WhatHappensNext() {
  const { itemRefs, reached } = useReachedSteps(steps.length);

  return (
    <SectionWrapper id="what-happens-next" divided>
      <SectionHeading
        eyebrow="The process"
        title="What happens next?"
        description="Wherever you start, we'll help you find the right next step."
      />

      <ol className="relative mt-16 max-w-2xl">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-[7px] top-3 w-0.5 rounded-full bg-hairline"
        />

        {steps.map((step, index) => {
          const isLit = reached[index];

          return (
            <li
              key={step.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative pb-16 pl-12 last:pb-0 sm:pb-20"
            >

              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-1.5 size-4 rounded-full",
                  "ring-4 ring-[var(--color-bg-base)]",
                  "transition-all duration-500 ease-out motion-reduce:transition-none",
                  isLit
                    ? "scale-100 bg-[var(--color-primary)]"
                    : "scale-[0.6] bg-[var(--color-secondary)]/35",
                )}
              />

              <div
                className={cn(
                  "transition-opacity duration-500 ease-out motion-reduce:transition-none",
                  isLit ? "opacity-100" : "opacity-50",
                )}
              >
                <h3 className="font-heading text-xl font-bold leading-snug tracking-[-0.02em] text-[var(--color-primary)] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-7 text-[var(--color-secondary)]">
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}
