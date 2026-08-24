import { Link } from "react-router-dom";
import { MapPin, Video, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface EventCardData {
  /** e.g. "AUG 09" — used to render the date badge */
  dateShort: string;
  /** ISO date string for the <time> datetime attribute */
  dateISO: string;
  /** e.g. "Community Q&A" */
  category: string;
  title: string;
  description: string;
  format: "Virtual" | "In-Person" | "Hybrid";
  location?: string;
  /** Optional time string, e.g. "6:00 PM IST" */
  time?: string;
  /** Optional image URL. Shown in "past" cards and the featured upcoming card. */
  image?: string;
  /** Optional Google Drive / external URL for session resources. */
  resourcesUrl?: string;
  /** URL for the register / details link */
  href: string;
}

export interface EventCardProps {
  event: EventCardData;
  /**
   * "upcoming" — accent CTA labelled "Register"
   * "past"     — muted CTA labelled "View Details"
   */
  variant?: "upcoming" | "past";
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FORMAT_ICON: Record<EventCardData["format"], React.ReactNode> = {
  Virtual:     <Video  size={12} strokeWidth={2} />,
  "In-Person": <MapPin size={12} strokeWidth={2} />,
  Hybrid:      <Video  size={12} strokeWidth={2} />,
};

// ─── EventCard ────────────────────────────────────────────────────────────────
/**
 * Reusable event card.
 *
 * variant="upcoming"  →  Register CTA (default)
 * variant="past"      →  View Details CTA, image shown if provided
 */
export default function EventCard({
  event,
  variant = "upcoming",
  className,
}: EventCardProps) {
  const [month, day] = event.dateShort.split(" ");
  const isPast = variant === "past";

  return (
    <article
      className={cn(
        "group flex flex-col",
        "rounded-2xl border border-hairline bg-white",
        "shadow-[0_2px_12px_-4px_rgba(27,42,82,0.07)]",
        "hover:shadow-[0_6px_28px_-6px_rgba(27,42,82,0.13)]",
        "hover:border-[var(--color-primary)]/20",
        "transition-all duration-200 overflow-hidden",
        className,
      )}
    >
      {/* Optional cover image (past cards + any card that supplies one) */}
      {event.image && (
        <div className="aspect-video w-full overflow-hidden bg-[var(--color-accent)]/30">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      {/* Date / category banner */}
      <div
        className={cn(
          "flex items-center gap-4 px-5 py-4",
          "border-b border-hairline bg-[var(--color-background)]",
        )}
      >
        {/* Date badge */}
        <time
          dateTime={event.dateISO}
          className={cn(
            "flex flex-col items-center justify-center w-11 h-11 rounded-xl flex-shrink-0",
            isPast
              ? "bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]"
              : "bg-[var(--color-primary)] text-white",
          )}
        >
          <span className="text-[9px] font-bold tracking-widest uppercase leading-none opacity-70">
            {month}
          </span>
          <span className="text-lg font-bold leading-none mt-0.5">
            {day ?? month}
          </span>
        </time>

        {/* Category pill */}
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5",
            "text-[10px] font-semibold tracking-[0.14em] uppercase",
            isPast
              ? "border-hairline bg-[var(--color-background)] text-[var(--color-secondary)]"
              : "border-[var(--color-accent)] bg-[var(--color-accent)]/60 text-[var(--color-primary)]",
          )}
        >
          {event.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-5 gap-3">
        <h3 className="text-base font-semibold leading-snug text-[var(--color-primary)]">
          {event.title}
        </h3>
        <p className="text-sm leading-6 text-[var(--color-secondary)] flex-1">
          {event.description}
        </p>

        {/* Meta row: format + optional time */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[var(--color-secondary)]">
          <span className="flex items-center gap-1.5">
            <span className="opacity-60">{FORMAT_ICON[event.format]}</span>
            {event.format}
            {event.location && (
              <>
                <span className="opacity-30 ml-1">·</span>
                <span className="opacity-70 ml-1">{event.location}</span>
              </>
            )}
          </span>
          {event.time && (
            <span className="flex items-center gap-1.5">
              <Clock size={11} strokeWidth={2} className="opacity-60" />
              {event.time}
            </span>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="flex flex-wrap items-center gap-2 px-5 pb-5">
        {event.href.startsWith("http") ? (
          <a
            href={event.href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2",
              "text-xs font-medium tracking-[-0.005em]",
              "active:scale-[0.98] transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
              isPast
                ? [
                    "border border-hairline text-[var(--color-secondary)]",
                    "hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]",
                  ]
                : [
                    "bg-[var(--color-primary)] text-white",
                    "hover:bg-[var(--color-primary)]/90",
                    "hover:shadow-[0_8px_20px_-8px_rgba(27,42,82,0.45)]",
                  ],
            )}
          >
            {isPast ? "View Details" : "Register"}
            <ArrowRight size={11} strokeWidth={2.4} />
          </a>
        ) : (
          <Link
            to={event.href}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2",
              "text-xs font-medium tracking-[-0.005em]",
              "active:scale-[0.98] transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
              isPast
                ? [
                    "border border-hairline text-[var(--color-secondary)]",
                    "hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]",
                  ]
                : [
                    "bg-[var(--color-primary)] text-white",
                    "hover:bg-[var(--color-primary)]/90",
                    "hover:shadow-[0_8px_20px_-8px_rgba(27,42,82,0.45)]",
                  ],
            )}
          >
            {isPast ? "View Details" : "Register"}
            <ArrowRight size={11} strokeWidth={2.4} />
          </Link>
        )}

        {/* Resources link — shown when a Google Drive / external URL is provided */}
        {event.resourcesUrl && (
          <a
            href={event.resourcesUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2",
              "text-xs font-medium tracking-[-0.005em]",
              "border border-[var(--color-primary)]/20 text-[var(--color-primary)]",
              "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
              "active:scale-[0.98] transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
            )}
          >
            View Session Resources
            <ArrowRight size={11} strokeWidth={2.4} />
          </a>
        )}
      </div>
    </article>
  );
}
