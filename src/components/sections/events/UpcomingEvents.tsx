import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import EventCard from "@/components/shared/EventCard";
import { ALL_EVENTS, isEventPast } from "@/data/events";

export default function UpcomingEvents() {
  const upcoming = ALL_EVENTS
    .filter((event) => !isEventPast(event.dateISO))
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  if (upcoming.length === 0) {
    return (
      <SectionWrapper id="upcoming-events" divided>
        <SectionHeading
          eyebrow="What's next"
          title="Upcoming events"
          className="mb-12"
        />

        <div className="rounded-2xl border border-hairline bg-[var(--color-background)] px-8 py-16 text-center">
          <p className="lede">
            No upcoming events scheduled right now. Check back soon.
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
        description="See what's coming up in the KWT community."
        className="mb-12"
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {upcoming.map((event) => (
          <li key={event.dateISO + event.title}>
            <EventCard
              event={event}
              variant="upcoming"
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}