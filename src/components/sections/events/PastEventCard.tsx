import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import type { EventCardData } from "@/components/shared/EventCard";

export interface PastEventCardProps {
  event: EventCardData;
  className?: string;
}

export default function PastEventCard({ event, className }: PastEventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const image = event.image;
  const imageFit = event.imageFit ?? "cover";
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
        {/* ─── FRONT SIDE ─── */}
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          aria-hidden={isFlipped}
          inert={isFlipped}
          className={cn(
            "absolute inset-0 flex flex-col overflow-hidden rounded-2xl backface-hidden",
            "border border-hairline bg-white text-left",
            "shadow-[0_2px_12px_-4px_rgba(27,42,82,0.18)]",
            "transition-all duration-300",
            "hover:shadow-[0_14px_40px_-12px_rgba(27,42,82,0.4)]",
            "hover:border-[var(--color-primary)]/20",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50 focus-visible:ring-offset-2"
          )}
        >
          {/* Image area — upper ~42% of card */}
          <div
            className={cn(
              "relative h-[42%] w-full overflow-hidden",
              imageFit === "contain"
                ? "bg-[var(--color-primary)]/8"
                : "bg-[var(--color-accent)]/40",
            )}
          >
            {image ? (
              <img
                src={image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={cn(
                  "size-full transition-transform duration-500 group-hover:scale-[1.03]",
                  imageFit === "contain"
                    ? "object-contain object-center p-2"
                    : "object-cover object-center",
                )}
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/60"
              />
            )}
            {/* Flip affordance icon */}
            <span
              aria-hidden="true"
              className="absolute top-3 right-3 flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-white/80 text-[var(--color-secondary)] backdrop-blur-sm transition-all duration-200 group-hover:border-[var(--color-primary)]/30 group-hover:bg-white group-hover:text-[var(--color-primary)]"
            >
              <RotateCcw size={13} strokeWidth={2.2} />
            </span>
          </div>

          {/* Content area — lower ~58% of card */}
          <div className="flex flex-1 flex-col p-5 bg-white">
            {/* Category + Date row */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                {event.category}
              </span>
              <time
                dateTime={event.dateISO}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]"
              >
                {event.dateShort}
              </time>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--color-primary)] mb-4">
              {event.title}
            </h3>

            {/* Contributors section */}
            {event.people && event.people.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]/60 mb-1.5">
                  With
                </p>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                  {event.people.map((person, idx) => (
                    <span key={idx}>
                      {person.linkedin ? (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${person.name} on LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-medium text-[var(--color-primary)] hover:underline underline-offset-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:rounded"
                        >
                          {person.name}
                        </a>
                      ) : (
                        <span className="font-medium text-[var(--color-primary)]">
                          {person.name}
                        </span>
                      )}
                      {idx < event.people!.length - 1 && (
                        <span className="mx-1.5 opacity-40">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* Spacer to push Read more to bottom */}
            <div className="flex-1" />

            {/* Read more CTA */}
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-secondary)] transition-colors duration-200 group-hover:text-[var(--color-primary)]"
            >
              Read more
              <ArrowRight size={11} strokeWidth={2.4} />
            </span>
          </div>
        </button>

        {/* ─── BACK SIDE ─── */}
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
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full scale-110 object-cover object-center opacity-20 blur-sm"
            />
          )}
          <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/80" />

          <div className="relative flex size-full flex-col p-6">
            {/* Header with date, title, and flip button */}
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

            {/* Description */}
            <p className="mt-5 flex-1 overflow-y-auto pr-1 text-sm leading-6 text-white/75">
              {event.description}
            </p>

            {/* People / Contributors section */}
            {event.people && event.people.length > 0 && (
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-2.5">
                  With
                </p>
                <div className="flex flex-col gap-2">
                  {event.people.map((person, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white truncate">
                          {person.name}
                        </p>
                        {person.role && (
                          <p className="text-[11px] text-white/60 truncate">
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
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 text-[11px] font-medium text-white/60 hover:text-white underline underline-offset-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded px-1"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View details CTA section (hidden until event detail pages are live) */}
            <div className="mt-5 flex flex-wrap gap-2">
              {/* View details links hidden until event detail pages are live */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
