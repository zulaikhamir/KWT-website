import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import type { EventCardData } from "@/components/shared/EventCard";

const FALLBACK_IMAGE = "/images/hero-image.png";

const ACTION_BASE = cn(
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2",
  "text-xs font-medium tracking-[-0.005em]",
  "transition-all duration-150 active:scale-[0.98]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
);

export interface PastEventCardProps {
  event: EventCardData;
  className?: string;
}

export default function PastEventCard({ event, className }: PastEventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const image = event.image ?? FALLBACK_IMAGE;
  const handleBackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    if (window.getSelection()?.toString()) return;
    setIsFlipped(false);
  };

  return (
    <article
      onKeyDown={(e) => {
        if (e.key === "Escape" && isFlipped) setIsFlipped(false);
      }}
      className={cn("group relative h-[26rem] perspective-[1400px]", className)}
    >
      <div
        className={cn(
          "relative size-full transform-3d transition-transform duration-500 ease-out",
          "motion-reduce:duration-0",
          isFlipped && "rotate-y-180"
        )}
      >
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          aria-hidden={isFlipped}
          inert={isFlipped}
          className={cn(
            "absolute inset-0 overflow-hidden rounded-2xl backface-hidden",
            "border border-white/10 text-left",
            "shadow-[0_2px_12px_-4px_rgba(27,42,82,0.18)]",
            "transition-shadow duration-300 hover:shadow-[0_14px_40px_-12px_rgba(27,42,82,0.4)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50 focus-visible:ring-offset-2"
          )}
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/65 to-navy-deep/10"
          />

          <div className="relative flex size-full flex-col justify-between p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                {event.category}
              </span>
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 backdrop-blur-sm transition-colors duration-200 group-hover:border-white/50 group-hover:bg-white/20 group-hover:text-white"
              >
                <RotateCcw size={13} strokeWidth={2.2} />
              </span>
            </div>

            <div>
              <time
                dateTime={event.dateISO}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
              >
                {event.dateShort}
              </time>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.01em] text-white">
                {event.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors duration-200 group-hover:text-white/90"
              >
                Read more
                <ArrowRight size={11} strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </button>

        <div
          aria-hidden={!isFlipped}
          inert={!isFlipped}
          onClick={handleBackClick}
          className={cn(
            "absolute inset-0 cursor-pointer overflow-hidden rounded-2xl backface-hidden rotate-y-180",
            "border border-white/15 bg-navy-deep",
            "shadow-[0_14px_40px_-12px_rgba(27,42,82,0.4)]"
          )}
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 size-full scale-110 object-cover object-center opacity-20 blur-sm"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/80" />

          <div className="relative flex size-full flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <time
                  dateTime={event.dateISO}
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60"
                >
                  {event.dateShort}
                </time>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-white">
                  {event.title}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                aria-label={`Hide details for ${event.title}`}
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors duration-200 hover:border-white/50 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <RotateCcw size={13} strokeWidth={2.2} />
              </button>
            </div>
            <p className="mt-5 flex-1 overflow-y-auto pr-1 text-sm leading-6 text-white/75">
              {event.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {event.href.startsWith("http") ? (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    ACTION_BASE,
                    "border border-white/25 bg-white/5 text-white/85 backdrop-blur-sm",
                    "hover:border-white/55 hover:bg-white/10 hover:text-white"
                  )}
                >
                  View details
                  <ArrowRight size={11} strokeWidth={2.4} />
                </a>
              ) : (
                <Link
                  to={event.href}
                  className={cn(
                    ACTION_BASE,
                    "border border-white/25 bg-white/5 text-white/85 backdrop-blur-sm",
                    "hover:border-white/55 hover:bg-white/10 hover:text-white"
                  )}
                >
                  View details
                  <ArrowRight size={11} strokeWidth={2.4} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
