import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import EventFlipCard from "@/components/shared/EventFlipCard";
import { ALL_EVENTS, isEventPast } from "@/data/events";

const VISIBLE_COUNT = 3;

export default function PastEvents() {
  const [showAll, setShowAll] = useState(false);
  const sorted = useMemo(
    () =>
      ALL_EVENTS
        .filter((e) => isEventPast(e.dateISO))
        .sort((a, b) => a.dateISO.localeCompare(b.dateISO)),
    [],
  );

  if (sorted.length === 0) return null;

  const visible = showAll ? sorted : sorted.slice(0, VISIBLE_COUNT);
  const hiddenCount = sorted.length - VISIBLE_COUNT;

  return (
    <SectionWrapper tone="surface" divided id="past-events">
      <SectionHeading
        eyebrow="Where we've been"
        title="Past events"
        description="A look back at the sessions, meetups, and conversations that have shaped the KWT community."
        className="mb-12"
      />

      <ul id="past-events-list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((event) => (
          <li key={event.dateISO + event.title}>
            <EventFlipCard event={event} variant="past" />
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="past-events-list"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full",
              "border border-[var(--color-primary)]/20 px-6 py-3",
              "text-sm font-medium tracking-[-0.005em] text-[var(--color-primary)]",
              "transition-all duration-200 active:scale-[0.98]",
              "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:ring-offset-2",
            )}
          >
            {showAll ? "Show fewer" : `See ${hiddenCount} more`}
            <ChevronDown
              size={15}
              strokeWidth={2.2}
              className={cn(
                "transition-transform duration-300 ease-out motion-reduce:transition-none",
                showAll && "rotate-180",
              )}
            />
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
