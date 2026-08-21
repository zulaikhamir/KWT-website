import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import { UPCOMING_EVENTS } from "@/data/events";

/**
 * EVT-02 — Upcoming Events.
 *
 * Renders the next scheduled KWT events.
 * Cards come from the static UPCOMING_EVENTS array in src/data/events.ts —
 * swap that for an API/CMS call when real event data is available.
 */
export default function UpcomingEvents() {
  if (UPCOMING_EVENTS.length === 0) {
    return (
      <SectionWrapper id="upcoming-events" divided>
        <SectionHeading
          eyebrow="What's next"
          title="Upcoming events"
          className="mb-12"
        />
        <div className="rounded-2xl border border-hairline bg-[var(--color-background)] px-8 py-16 text-center">
          <p className="lede">
            No upcoming events scheduled right now — check back soon.
          </p>
          <p className="mt-2 text-sm text-[var(--color-secondary)]">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/kashmiriwomenintech"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-[var(--color-primary)] underline underline-offset-4"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/company/kashmiri-women-in-tech"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-[var(--color-primary)] underline underline-offset-4"
            >
              LinkedIn
            </a>{" "}
            for announcements.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="upcoming-events" divided>
      <SectionHeading
        eyebrow="What's next"
        title="Upcoming events"
        description="Register early — spots fill up fast."
        className="mb-12"
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {UPCOMING_EVENTS.map((event) => (
          <li key={event.dateISO + event.title}>
            <EventCard event={event} variant="upcoming" className="h-full" />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
