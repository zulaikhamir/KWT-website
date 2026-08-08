import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Role tags ───────────────────────────────────────────────────────────────
const ROLE_TAGS = [
  "students",
  "engineers",
  "researchers",
  "professionals",
] as const;

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      aria-label="Hero — KWT community introduction"
      className="relative overflow-hidden bg-[var(--color-background)] pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
    >
      {/* Faint radial tint, top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234,230,255,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start">

            {/* Eyebrow */}
            <div className="kwt-animate-fade-up" style={{ animationDelay: "0ms" }}>
              <span
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-full border border-[var(--color-accent)]",
                  "bg-[var(--color-accent)]/60 px-3.5 py-1",
                  "text-xs font-semibold tracking-[0.18em] uppercase",
                  "text-[var(--color-primary)]",
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-60"
                />
                Kashmiri Women in Tech
              </span>
            </div>

            {/* Main headline — no decorative underlines, emphasis via weight alone */}
            <h1
              className={cn(
                "kwt-animate-fade-up",
                "mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]",
                "font-bold leading-[1.1] tracking-tight",
                "text-[var(--color-primary)]",
              )}
              style={{ animationDelay: "80ms" }}
            >
              Where Kashmiri{" "}
              <br className="hidden sm:block" />
              women in technology{" "}
              <br className="hidden sm:block" />
              learn, connect, and grow.
            </h1>

            {/* Supporting paragraph */}
            <p
              className={cn(
                "kwt-animate-fade-up",
                "mt-6 max-w-2xl text-base sm:text-[1.05rem] leading-7",
                "text-[var(--color-secondary)]",
              )}
              style={{ animationDelay: "160ms" }}
            >
              KWT is a community bringing together Kashmiri women across
              technology, science, engineering, and research — creating space
              to learn from one another, build meaningful connections, discover
              opportunities, and give back.
            </p>

            {/* CTA buttons — clear primary / secondary hierarchy */}
            <div
              className="kwt-animate-fade-up mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: "240ms" }}
            >
              {/* Primary — solid fill, high visual weight */}
              <Link
                to="/join"
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-xl bg-[var(--color-primary)] px-6 py-3",
                  "text-sm font-semibold text-white tracking-wide",
                  "hover:bg-[var(--color-primary)]/90",
                  "active:scale-[0.98]",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
                )}
              >
                Join KWT
                <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </Link>

              {/* Secondary — outline only, no fill, visually lighter */}
              <Link
                to="/events"
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-xl border border-[var(--color-primary)]/30 px-6 py-3",
                  "text-sm font-semibold text-[var(--color-primary)] tracking-wide",
                  "hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-accent)]/30",
                  "active:scale-[0.98]",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:ring-offset-2",
                )}
              >
                Explore Events
              </Link>
            </div>

            {/* Audience micro-line */}
            <div
              className="kwt-animate-fade-up mt-7 flex flex-wrap items-center gap-x-3 gap-y-1"
              style={{ animationDelay: "320ms" }}
              aria-label="KWT welcomes students, engineers, researchers, and professionals"
            >
              <span className="text-xs text-[var(--color-secondary)] opacity-60 select-none">
                For
              </span>
              {ROLE_TAGS.map((role, i) => (
                <span key={role} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[var(--color-secondary)] opacity-80">
                    {role}
                  </span>
                  {i < ROLE_TAGS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="inline-block w-1 h-1 rounded-full bg-[var(--color-secondary)] opacity-30"
                    />
                  )}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
