import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  Megaphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  getLatestAnnouncements,
  type Announcement,
  type AnnouncementTag,
} from "@/data/announcements";
import { cn } from "@/lib/utils";

/** Time each announcement stays on screen before the banner advances. */
const ROTATE_MS = 3500;

const TAG_ICON: Record<AnnouncementTag, typeof Megaphone> = {
  New: Sparkles,
  Event: CalendarDays,
  Recap: Megaphone,
  Milestone: TrendingUp,
  Opportunity: Briefcase,
};

// Outline CTA — sits on the dark band, so it borrows white rather than brand navy.
const CTA_OUTLINE = cn(
  "group/cta inline-flex shrink-0 items-center gap-2 rounded-full",
  "border border-white/25 px-5 py-2.5",
  "text-sm font-medium tracking-[-0.005em] text-white",
  "hover:border-[var(--color-accent)]/70 hover:bg-white/10",
  "active:scale-[0.98] transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60",
);

// ─── Reduced motion ───────────────────────────────────────────────────────────
/** Tracks the user's prefers-reduced-motion setting, and updates if it changes. */
function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setPrefers(event.matches);

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefers;
}

// ─── One slide of the ticker ──────────────────────────────────────────────────
function AnnouncementSlide({
  announcement,
  isActive,
}: {
  announcement: Announcement;
  isActive: boolean;
}) {
  const { tag, title, body, cta } = announcement;
  const TagIcon = TAG_ICON[tag];

  return (
    <div
      // Every slide shares one grid cell, so the band keeps a fixed height and
      // the outgoing slide moves out as the incoming one arrives.
      className={cn(
        "col-start-1 row-start-1",
        "flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8",
        "transition-all duration-500 ease-out",
        isActive
          ? "translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-3 opacity-0",
      )}
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full",
            "bg-[var(--color-accent)] px-3 py-1.5",
            "text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)]",
          )}
        >
          <TagIcon size={12} strokeWidth={2.4} aria-hidden="true" />
          {tag}
        </span>

        <h3 className="mt-3.5 truncate text-base font-semibold tracking-[-0.015em] text-white sm:text-lg">
          {title}
        </h3>

        {body && (
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-white/55">
            {body}
          </p>
        )}
      </div>

      {cta &&
        (cta.href.startsWith("http") ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer noopener"
            className={CTA_OUTLINE}
          >
            {cta.label}
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
        ) : (
          <Link to={cta.href} className={CTA_OUTLINE}>
            {cta.label}
            <ArrowRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </Link>
        ))}
    </div>
  );
}

// ─── Announcements ticker ─────────────────────────────────────────────────────
export default function Announcements() {
  const announcements = useMemo(() => getLatestAnnouncements(), []);
  const revealRef = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const canRotate = announcements.length > 1 && !prefersReducedMotion;

  // Keyed on `index` so picking a segment restarts the full interval rather
  // than advancing again a moment later.
  useEffect(() => {
    if (!canRotate || isPaused) return;

    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % announcements.length),
      ROTATE_MS,
    );

    return () => clearTimeout(timer);
  }, [index, canRotate, isPaused, announcements.length]);

  // Nothing published — render no section at all rather than an empty shell.
  if (announcements.length === 0) return null;

  return (
    // Full-bleed band: the strip spans the viewport, its contents stay on the
    // same max-w-6xl / px-6 grid as every other section.
    <section
      id="announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className={cn(
        "relative isolate w-full overflow-hidden",
        "border-y border-white/10 bg-navy-deep",
        "shadow-[0_16px_36px_-24px_rgba(17,28,58,0.65)]",
      )}
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(234,230,255,0.13) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Lavender glow behind the tag pill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/2 -z-10 size-64 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234,230,255,0.22) 0%, transparent 70%)",
        }}
      />

      <div
        ref={revealRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Latest news and announcements from KWT"
        className={cn(
          "kwt-reveal mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)]",
          "px-6 py-8 sm:py-20 lg:px-8",
        )}
      >
        {announcements.map((announcement, i) => (
          <AnnouncementSlide
            key={announcement.id}
            announcement={announcement}
            isActive={i === index}
          />
        ))}
      </div>

      {/* Slide pills — one per announcement, centred along the bottom edge.
          The active one stretches; clicking any pill jumps to its slide. */}
      {announcements.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 sm:bottom-5">
          {announcements.map((announcement, i) => (
            <button
              key={announcement.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show announcement ${i + 1} of ${announcements.length}: ${announcement.title}`}
              aria-current={i === index}
              className="group/pill p-1.5 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  "group-focus-visible/pill:ring-2 group-focus-visible/pill:ring-[var(--color-accent)]/60",
                  i === index
                    ? "w-6 bg-[var(--color-accent)]"
                    : "w-1.5 bg-white/25 group-hover/pill:bg-white/50",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
