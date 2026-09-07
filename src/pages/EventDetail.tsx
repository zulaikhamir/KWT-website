import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Lock,
  MapPin,
  Video,
} from "lucide-react";
// LinkedinLogoIcon, not LinkedinLogo — the latter is deprecated upstream.
import { LinkedinLogoIcon } from "@phosphor-icons/react";

import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import EventCard, { type EventCardData } from "@/components/shared/EventCard";
import { ALL_EVENTS, findEventBySlug, isEventPast } from "@/data/events";
import { siteUrl } from "@/config/site";
import { cn } from "@/lib/utils";

// ─── Format icon map (mirrors EventCard) ─────────────────────────────────────
const FORMAT_ICON = {
  Virtual: Video,
  "In-Person": MapPin,
  Hybrid: Video,
} as const;

const MORE_EVENTS_COUNT = 3;

/** "20 September 2026" */
function formatLongDate(dateISO: string): string {
  return new Date(dateISO + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "Sunday" */
function formatWeekday(dateISO: string): string {
  return new Date(dateISO + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long",
  });
}

/** "Uzma Hamid" → "UH" */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

// ─── Detail row inside the summary card ──────────────────────────────────────
function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof CalendarDays;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/70 text-[var(--color-primary)]"
      >
        <Icon size={15} strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]/70">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-medium leading-6 text-[var(--color-primary)]">
          {children}
        </dd>
      </div>
    </div>
  );
}

// ─── Speakers ─────────────────────────────────────────────────────────────────
function EventPeople({
  people,
}: {
  people: NonNullable<EventCardData["people"]>;
}) {
  if (people.length === 0) return null;

  return (
    <div className="mt-10">
      <p className="eyebrow">
        {people.length > 1 ? "Speakers & facilitators" : "Speaker"}
      </p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {people.map((person) => (
          <li
            key={person.name}
            className={cn(
              "flex items-center gap-3 rounded-2xl border border-hairline bg-white",
              "px-4 py-3 shadow-[0_1px_3px_rgba(27,42,82,0.05)]",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full",
                "bg-[var(--color-primary)]/[0.07] text-[0.8125rem] font-semibold",
                "text-[var(--color-primary)]",
              )}
            >
              {initials(person.name)}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight text-[var(--color-primary)]">
                {person.name}
              </p>
              {person.role && (
                <p className="mt-0.5 text-xs leading-tight text-[var(--color-secondary)]">
                  {person.role}
                </p>
              )}
            </div>
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${person.name} on LinkedIn`}
                className={cn(
                  "ml-1 flex size-8 shrink-0 items-center justify-center rounded-full",
                  "border border-hairline text-[var(--color-secondary)]",
                  "hover:border-[var(--color-primary)]/35 hover:text-[var(--color-primary)]",
                  "transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
                )}
              >
                <LinkedinLogoIcon className="size-4" weight="fill" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Register CTA ─────────────────────────────────────────────────────────────
const CTA_PRIMARY = cn(
  "inline-flex w-full items-center justify-center gap-1.5 rounded-full",
  "bg-[var(--color-primary)] px-5 py-3",
  "text-sm font-medium text-white",
  "hover:bg-[var(--color-primary)]/90",
  "hover:shadow-[0_8px_20px_-8px_rgba(27,42,82,0.45)]",
  "active:scale-[0.98] transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
);

const CTA_GHOST = cn(
  "inline-flex w-full items-center justify-center gap-1.5 rounded-full",
  "border border-[var(--color-primary)]/20 px-5 py-3",
  "text-sm font-medium text-[var(--color-primary)]",
  "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
  "active:scale-[0.98] transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:ring-offset-2",
);

function RegisterButton({ href }: { href: string }) {
  const label = (
    <>
      Register for this event
      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={CTA_PRIMARY}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={CTA_PRIMARY}>
      {label}
    </Link>
  );
}

// ─── Summary card (image + key details + CTA) ────────────────────────────────
function EventSummaryCard({
  event,
  isPast,
  className,
}: {
  event: EventCardData;
  isPast: boolean;
  className?: string;
}) {
  const FormatIcon = FORMAT_ICON[event.format];
  const [month, day] = event.dateShort.split(" ");

  return (
    <aside
      className={cn(
        "overflow-hidden rounded-2xl border border-hairline bg-white",
        "shadow-[0_1px_3px_rgba(27,42,82,0.06),0_12px_32px_-16px_rgba(27,42,82,0.18)]",
        "lg:sticky lg:top-28",
        className,
      )}
    >
      {event.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-accent)]/30">
          <img
            src={event.image}
            alt={event.title}
            className="size-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-navy-deep/35 to-transparent"
          />
          <time
            dateTime={event.dateISO}
            className={cn(
              "absolute left-4 top-4 flex size-12 flex-col items-center justify-center",
              "rounded-xl bg-white/95 text-[var(--color-primary)] shadow-sm backdrop-blur-sm",
            )}
          >
            <span className="text-[9px] font-bold uppercase leading-none tracking-widest opacity-70">
              {month}
            </span>
            <span className="mt-0.5 text-lg font-bold leading-none">{day ?? month}</span>
          </time>
        </div>
      )}

      <div className="p-6">
        <dl className="space-y-4">
          <DetailRow icon={CalendarDays} label="Date">
            <time dateTime={event.dateISO}>{formatLongDate(event.dateISO)}</time>
            <span className="block text-xs font-normal text-[var(--color-secondary)]">
              {formatWeekday(event.dateISO)}
            </span>
          </DetailRow>

          {event.time && (
            <DetailRow icon={Clock} label="Time">
              {event.time}
            </DetailRow>
          )}

          <DetailRow icon={FormatIcon} label="Format">
            {event.format}
            {event.location && (
              <span className="block text-xs font-normal text-[var(--color-secondary)]">
                {event.location}
              </span>
            )}
          </DetailRow>
        </dl>

        <div className="mt-6 border-t border-hairline pt-6">
          {isPast ? (
            <>
              <p className="mb-4 text-xs leading-5 text-[var(--color-secondary)]">
                This session has already taken place.
              </p>
              <Link to="/events#upcoming-events" className={CTA_GHOST}>
                See upcoming events
              </Link>
            </>
          ) : (
            <RegisterButton href={event.href} />
          )}
        </div>
      </div>
    </aside>
  );
}

// ─── Member-only resources section ───────────────────────────────────────────
/**
 * The resourcesUrl is intentionally NOT rendered in the DOM when locked.
 * Wire `isMember` to a real auth check when membership auth is implemented.
 */
function ResourcesSection({
  resourcesUrl,
}: {
  resourcesUrl?: string;
}) {
  // TODO: replace with real membership auth check (e.g. context, cookie, JWT)
  const isMember = false;

  return (
    <SectionWrapper id="session-resources" tone="surface" divided>
      <div className="max-w-2xl">
        <p className="eyebrow">Session materials</p>

        {isMember && resourcesUrl ? (
          <>
            <h2 className="heading mt-5">Materials from this session</h2>
            <p className="lede mt-5">
              Access the slides, notes, and other materials shared during this session.
            </p>
            <a
              href={resourcesUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                "group mt-8 inline-flex items-center gap-1.5 rounded-full",
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
          </>
        ) : (
          <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-hairline bg-white p-8 sm:flex-row sm:items-start sm:gap-7">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]">
              <Lock
                className="size-[1.1rem] text-[var(--color-primary)]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <div>
              <h2 className="subheading">Materials are for KWT members</h2>
              <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
                Slides, notes, and recordings from KWT sessions are shared with the
                community. Join to get access to this session and everything that comes
                next.
              </p>
              <Link
                to="/#membership-paths"
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
              </Link>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

// ─── More events ──────────────────────────────────────────────────────────────
function MoreEvents({ currentSlug }: { currentSlug: string }) {
  const events = useMemo(() => {
    const others = ALL_EVENTS.filter((e) => e.slug !== currentSlug);
    const upcoming = others
      .filter((e) => !isEventPast(e.dateISO))
      .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    const past = others
      .filter((e) => isEventPast(e.dateISO))
      .sort((a, b) => b.dateISO.localeCompare(a.dateISO));

    return [...upcoming, ...past].slice(0, MORE_EVENTS_COUNT);
  }, [currentSlug]);

  if (events.length === 0) return null;

  return (
    <SectionWrapper id="more-events" divided>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <h2 className="heading mt-4">More KWT events</h2>
        </div>
        <Link
          to="/events"
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium",
            "text-[var(--color-primary)] underline underline-offset-4",
            "decoration-[var(--color-primary)]/30 hover:decoration-[var(--color-primary)]",
            "transition-colors duration-150",
          )}
        >
          All events
          <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <li key={event.slug ?? event.title} className="flex">
            <EventCard
              event={event}
              variant={isEventPast(event.dateISO) ? "past" : "upcoming"}
              className="w-full"
            />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

// ─── EventDetail page ─────────────────────────────────────────────────────────
export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? findEventBySlug(slug) : undefined;

  // ── 404 state ──────────────────────────────────────────────────────────────
  if (!event) {
    return (
      <PageContainer>
        <SEO
          title="Event Not Found"
          description="The event you're looking for doesn't exist or may have been removed."
          url={siteUrl(`/events/${slug}`)}
        />
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
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
      <SEO
        title={event.title}
        description={event.description}
        url={siteUrl(`/events/${event.slug}`)}
        image={event.image}
        type="article"
        article={{
          publishedTime: event.dateISO,
          section: event.category,
          tag: [event.category, event.format, "KWT Events", "Women in Tech"],
        }}
        keywords={`${event.title}, ${event.category}, ${event.format}, KWT events`}
      />

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <SectionWrapper id="event-header" className="pt-12 sm:pt-20">
        {/* Back link */}
        <Link
          to="/events"
          className={cn(
            "group inline-flex items-center gap-1.5 mb-10",
            "text-sm font-medium text-[var(--color-secondary)]",
            "hover:text-[var(--color-primary)] transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
          )}
        >
          <ArrowLeft
            size={14}
            strokeWidth={2.2}
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:-translate-x-0.5"
          />
          All events
        </Link>

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
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
              "text-[10px] font-semibold tracking-[0.14em] uppercase",
              isPast
                ? "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]"
                : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
            )}
          >
            {!isPast && (
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[var(--color-primary)] kwt-pulse-soft"
              />
            )}
            {isPast ? "Past event" : "Upcoming"}
          </span>
        </div>

        {/* Title */}
        <h1
          className="display mt-6 max-w-4xl kwt-animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {event.title}
        </h1>

        {/* Summary card is placed first in the DOM so it lands directly under the
            title on mobile (image + details + CTA above the fold); on lg it moves
            into the right column of the same row. */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14">
          <EventSummaryCard
            event={event}
            isPast={isPast}
            className="lg:col-start-2 lg:row-start-1 lg:self-start"
          />

          <div className="lg:col-start-1 lg:row-start-1">
            {/* Description */}
            <p className="eyebrow">{event.aboutLabel ?? "About this session"}</p>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-8 text-[var(--color-secondary)]">
              {event.description}
            </p>

            {event.people && event.people.length > 0 && (
              <EventPeople people={event.people} />
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Session materials (member-only) ──────────────────────────────────── */}
      <ResourcesSection
        resourcesUrl={event.resourcesUrl}
      />

      {/* ── More events ──────────────────────────────────────────────────────── */}
      <MoreEvents currentSlug={event.slug ?? ""} />
    </PageContainer>
  );
}
