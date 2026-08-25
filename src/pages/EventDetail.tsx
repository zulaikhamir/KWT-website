import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Lock, MapPin, Video } from "lucide-react";

import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MembershipModal from "@/components/shared/MembershipModal";
import type { EventCardData } from "@/components/shared/EventCard";
import { findEventBySlug, isEventPast } from "@/data/events";
import { cn } from "@/lib/utils";

// ─── Format icon map (mirrors EventCard) ─────────────────────────────────────
const FORMAT_ICON = {
  Virtual:     <Video  size={15} strokeWidth={1.75} />,
  "In-Person": <MapPin size={15} strokeWidth={1.75} />,
  Hybrid:      <Video  size={15} strokeWidth={1.75} />,
} as const;

// ─── Event people ─────────────────────────────────────────────────────────────
function EventPeople({
  people,
}: {
  people: NonNullable<EventCardData["people"]>;
}) {
  if (people.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
        With
      </p>
      <ul className="mt-2 space-y-1.5">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex flex-wrap items-center gap-x-1.5 text-sm text-[var(--color-secondary)]"
          >
            <span className="font-medium text-[var(--color-primary)]">{person.name}</span>
            {person.role && (
              <>
                <span aria-hidden="true" className="text-[var(--color-secondary)]/40">
                  ·
                </span>
                <span>{person.role}</span>
              </>
            )}
            {person.linkedin && (
              <>
                <span aria-hidden="true" className="text-[var(--color-secondary)]/40">
                  ·
                </span>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${person.name} on LinkedIn`}
                  className="text-[var(--color-primary)] underline underline-offset-2 decoration-[var(--color-primary)]/30 hover:decoration-[var(--color-primary)] transition-colors"
                >
                  LinkedIn
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Register CTA ─────────────────────────────────────────────────────────────
function RegisterButton({ href }: { href: string }) {
  const className = cn(
    "inline-flex w-full items-center justify-center gap-1.5 rounded-full",
    "bg-[var(--color-primary)] px-5 py-2.5",
    "text-sm font-medium text-white",
    "hover:bg-[var(--color-primary)]/90",
    "hover:shadow-[0_8px_20px_-8px_rgba(27,42,82,0.45)]",
    "active:scale-[0.98] transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        Register for this event
        <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      Register for this event
      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
    </Link>
  );
}

// ─── Member-only resources section ───────────────────────────────────────────
/**
 * The resourcesUrl is intentionally NOT rendered in the DOM when locked.
 * Wire `isMember` to a real auth check when membership auth is implemented.
 */
function ResourcesSection({
  resourcesUrl,
  onJoinClick,
}: {
  resourcesUrl?: string;
  onJoinClick: () => void;
}) {
  // TODO: replace with real membership auth check (e.g. context, cookie, JWT)
  const isMember = false;

  return (
    <SectionWrapper id="session-resources" tone="surface" divided>
      <div className="max-w-2xl">
        <p className="eyebrow">Session materials</p>
        <h2 className="heading mt-5">Materials from this session</h2>

        {isMember && resourcesUrl ? (
          <div className="mt-8">
            <p className="lede mb-6 text-[var(--color-secondary)]">
              Access the slides, notes, and other materials shared during this session.
            </p>
            <a
              href={resourcesUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-full",
                "bg-[var(--color-primary)] px-6 py-3",
                "text-[0.9375rem] font-medium tracking-[-0.005em] text-white",
                "hover:bg-[var(--color-primary)]/90",
                "hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.55)]",
                "active:scale-[0.98] transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
              )}
            >
              View session materials
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-hairline bg-white p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]">
              <Lock
                className="size-[1.1rem] text-[var(--color-primary)]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <h3 className="subheading mt-5">KWT members only</h3>
            <p className="mt-3 max-w-md text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
              Session materials are available exclusively to KWT members. Join the community
              to access slides, notes, and materials from KWT sessions.
            </p>
            <button
              type="button"
              onClick={onJoinClick}
              className={cn(
                "mt-6 inline-flex items-center gap-1.5 rounded-full",
                "border border-[var(--color-primary)]/20 px-5 py-2.5",
                "text-sm font-medium text-[var(--color-primary)]",
                "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
                "active:scale-[0.98] transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:ring-offset-2",
              )}
            >
              Join KWT
              <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

// ─── EventDetail page ─────────────────────────────────────────────────────────
export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? findEventBySlug(slug) : undefined;
  const [modalOpen, setModalOpen] = useState(false);

  // ── 404 state ──────────────────────────────────────────────────────────────
  if (!event) {
    return (
      <PageContainer>
        <SEO
          title="Event Not Found"
          description="The event you're looking for doesn't exist or may have been removed."
          url={`https://kwtcommunity.org/events/${slug}`}
        />        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <h1 className="heading text-[var(--color-primary)]">Event not found</h1>
          <p className="lede text-[var(--color-secondary)]">
            This event doesn't exist or the link may have changed.
          </p>
          <Link
            to="/events"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
            Back to events
          </Link>
        </div>
      </PageContainer>
    );
  }

  const isPast = isEventPast(event.dateISO);

  return (
    <PageContainer>
      <MembershipModal open={modalOpen} onOpenChange={setModalOpen} />
      <SEO
        title={event.title}
        description={event.description}
        url={`https://kwtcommunity.org/events/${event.slug}`}
        type="article"
        article={{
          publishedTime: event.dateISO,
          section: event.category,
          tag: [event.category, event.format, "KWT Events", "Women in Tech"],
        }}
        keywords={`${event.title}, ${event.category}, ${event.format}, KWT events`}
      />
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <SectionWrapper id="event-header" className="pt-16 sm:pt-24">
        {/* Back link */}
        <Link
          to="/events"
          className={cn(
            "inline-flex items-center gap-1.5 mb-10",
            "text-sm font-medium text-[var(--color-secondary)]",
            "hover:text-[var(--color-primary)] transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
          )}
        >
          <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
          All events
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-start">
          <div>
            {/* Eyebrow row: category + status badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-2.5 py-1",
                  "text-[10px] font-semibold tracking-[0.14em] uppercase",
                  isPast
                    ? "border-hairline bg-[var(--color-background)] text-[var(--color-secondary)]"
                    : "border-[var(--color-accent)] bg-[var(--color-accent)]/60 text-[var(--color-primary)]",
                )}
              >
                {event.category}
              </span>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1",
                  "text-[10px] font-semibold tracking-[0.14em] uppercase",
                  isPast
                    ? "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]"
                    : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
                )}
              >
                {isPast ? "Past event" : "Upcoming"}
              </span>
            </div>

            {/* Title */}
            <h1 className="display mt-6 kwt-animate-fade-up" style={{ animationDelay: "80ms" }}>
              {event.title}
            </h1>

            {/* Meta row */}
            <dl className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-secondary)]">
              <div className="flex items-center gap-2">
                <CalendarDays size={15} strokeWidth={1.75} className="text-[var(--color-primary)] opacity-60" aria-hidden="true" />
                <dt className="sr-only">Date</dt>
                <dd>
                  <time dateTime={event.dateISO}>
                    {new Date(event.dateISO + "T00:00:00").toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  {event.time && <span className="ml-1.5 text-[var(--color-secondary)]/70">· {event.time}</span>}
                </dd>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] opacity-60" aria-hidden="true">
                  {FORMAT_ICON[event.format]}
                </span>
                <dt className="sr-only">Format</dt>
                <dd>
                  {event.format}
                  {event.location && <span className="ml-1.5 text-[var(--color-secondary)]/70">· {event.location}</span>}
                </dd>
              </div>
            </dl>

            {event.people && event.people.length > 0 && (
              <EventPeople people={event.people} />
            )}
          </div>

          {/* CTA card */}
          <div className="shrink-0 rounded-2xl border border-hairline bg-white p-6 shadow-[0_2px_12px_-4px_rgba(27,42,82,0.07)] lg:w-72">
            {isPast ? (
              <Link
                to="/events#upcoming-events"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-1.5 rounded-full",
                  "border border-[var(--color-primary)]/20 px-5 py-2.5",
                  "text-sm font-medium text-[var(--color-primary)]",
                  "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
                  "active:scale-[0.98] transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
                )}
              >
                See upcoming events
              </Link>
            ) : (
              <RegisterButton href={event.href} />
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Description ────────────────────────────────────────────────────── */}
      <SectionWrapper id="event-description" divided>
        <div className="max-w-2xl">
          <p className="eyebrow">{event.aboutLabel ?? "About this session"}</p>
          <p className="mt-5 text-[1.0625rem] leading-8 text-[var(--color-secondary)]">
            {event.description}
          </p>
        </div>
      </SectionWrapper>

      {/* ── Session materials (member-only) ──────────────────────────────────── */}
      <ResourcesSection
        resourcesUrl={event.resourcesUrl}
        onJoinClick={() => setModalOpen(true)}
      />
    </PageContainer>
  );
}
