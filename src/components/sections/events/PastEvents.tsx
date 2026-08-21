import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import { PAST_EVENTS } from "@/data/events";

/**
 * EVT-03 — Past Events.
 *
 * Auto-fills columns from the PAST_EVENTS array.
 * Replace the static array with an API/CMS feed when dynamic data is ready.
 */
export default function PastEvents() {
  if (PAST_EVENTS.length === 0) return null;

  return (
    <SectionWrapper tone="surface" divided id="past-events">
      <SectionHeading
        eyebrow="Where we've been"
        title="Past events"
        description="A look back at the sessions, meetups, and conversations that have shaped the KWT community."
        className="mb-12"
      />

      {/*
        Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop.
        Works naturally as more events are added — no hardcoded column counts.
      */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PAST_EVENTS.map((event) => (
          <li key={event.dateISO + event.title}>
            <EventCard event={event} variant="past" className="h-full" />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
