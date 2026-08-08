import { Link } from "react-router-dom";
import { MapPin, Video, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
export interface EventCardData {
  /** e.g. "AUG 09" */
  dateShort: string;
  /** Full ISO-ish date for <time> datetime attribute */
  dateISO: string;
  /** e.g. "Community Q&A" */
  category: string;
  title: string;
  description: string;
  /** "Virtual" | "In-Person" | "Hybrid" */
  format: "Virtual" | "In-Person" | "Hybrid";
  location?: string;
  /** href for the Register/Learn More link */
  href: string;
}

interface EventCardProps {
  event: EventCardData;
  className?: string;
}

const FORMAT_ICON: Record<EventCardData["format"], React.ReactNode> = {
  Virtual:    <Video   size={12} strokeWidth={2} />,
  "In-Person":<MapPin  size={12} strokeWidth={2} />,
  Hybrid:     <Video   size={12} strokeWidth={2} />,
};

/**
 * Reusable event card.
 * Used on the homepage and can be reused on the /events page.
 */
export default function EventCard({ event, className }: EventCardProps) {
  const [month, day] = event.dateShort.split(" ");

  return (
    <article
      className={cn(
        "group flex flex-col",
        "rounded-2xl border border-[#E5E7EB] bg-white",
        "shadow-[0_2px_12px_-4px_rgba(27,42,82,0.07)]",
        "hover:shadow-[0_6px_28px_-6px_rgba(27,42,82,0.13)]",
        "hover:border-[var(--color-primary)]/20",
        "transition-all duration-200",
        "overflow-hidden",
        className,
      )}
    >
      {/* Date banner */}
      <div
        className={cn(
          "flex items-center gap-4 px-5 py-4",
          "border-b border-[#E5E7EB]",
          "bg-[#F8FAFC]",
        )}
      >
        {/* Date block */}
        <div className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-primary)] flex-shrink-0">
          <span className="text-[9px] font-bold tracking-widest text-white/70 uppercase leading-none">
            {month}
          </span>
          <span className="text-lg font-bold text-white leading-none mt-0.5">
            {day ?? month}
          </span>
        </div>

        {/* Category pill */}
        <span
          className={cn(
            "inline-flex items-center",
            "rounded-full border border-[var(--color-accent)]",
            "bg-[var(--color-accent)]/60 px-2.5 py-0.5",
            "text-[10px] font-semibold tracking-[0.14em] uppercase",
            "text-[var(--color-primary)]",
          )}
        >
          {event.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-5 gap-3">
        <h3 className="text-base font-semibold leading-snug text-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
          {event.title}
        </h3>
        <p className="text-sm leading-6 text-[var(--color-secondary)] flex-1">
          {event.description}
        </p>

        {/* Format badge */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-secondary)]">
          <span className="text-[var(--color-secondary)]/60">
            {FORMAT_ICON[event.format]}
          </span>
          <span>{event.format}</span>
          {event.location && (
            <>
              <span className="opacity-30">·</span>
              <span className="opacity-70">{event.location}</span>
            </>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-5 pb-5">
        <Link
          to={event.href}
          className={cn(
            "inline-flex items-center gap-1.5",
            "rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-accent)]/40",
            "px-4 py-2",
            "text-xs font-semibold text-[var(--color-primary)] tracking-wide",
            "hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]",
            "active:scale-[0.98]",
            "transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
          )}
        >
          Register
          <ArrowRight size={11} strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}
