import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/images/hero-image.png";

const ROLE_TAGS = ["students", "engineers", "researchers", "professionals"] as const;

// Single source of truth for stagger timing. Add/reorder items here only.
const FADE_DELAYS_MS = [0, 80, 160, 260, 340] as const;

// Custom CSS properties aren't in React.CSSProperties by default —
// extend the type instead of casting keys to `string`.
type CSSVars = React.CSSProperties & { "--kwt-fade-scale"?: string };

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">

          {/* ── Text column ──────────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            <p className="eyebrow kwt-animate-fade-up" style={{ animationDelay: `${FADE_DELAYS_MS[0]}ms` }}>
              Kashmiri Women in Tech
            </p>

            <h1
              id="hero-heading"
              className="display mt-6 kwt-animate-fade-up"
              style={{ animationDelay: `${FADE_DELAYS_MS[1]}ms` }}
            >
              Where Kashmiri women in technology learn, connect, and grow.
            </h1>

            <p
              className="lede mt-7 max-w-xl kwt-animate-fade-up"
              style={{ animationDelay: `${FADE_DELAYS_MS[2]}ms` }}
            >
              KWT is a community bringing together Kashmiri women across
              technology, science, engineering, and research — creating space
              to learn from one another, build meaningful connections, discover
              opportunities, and give back.
            </p>

            <div
              className="kwt-animate-fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: `${FADE_DELAYS_MS[3]}ms` }}
            >
              <Link
                to="/get-involved"
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-full bg-[var(--color-primary)] px-6 py-3",
                  "text-sm font-medium tracking-[-0.005em] text-white",
                  "hover:bg-[var(--color-primary)]/90",
                  "hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.55)]",
                  "active:scale-[0.98] transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
                )}
              >
                Join KWT
                <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </Link>

              <Link
                to="/events"
                className={cn(
                  "inline-flex items-center gap-2",
                  "rounded-full border border-[var(--color-primary)]/25 px-6 py-3",
                  "text-sm font-medium tracking-[-0.005em] text-[var(--color-primary)]",
                  "hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
                  "active:scale-[0.98] transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 focus-visible:ring-offset-2",
                )}
              >
                Explore Events
              </Link>
            </div>

            <div
              className="kwt-animate-fade-up mt-8 flex flex-wrap items-center gap-x-3 gap-y-1"
              style={{ animationDelay: `${FADE_DELAYS_MS[4]}ms` }}
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

          {/* ── Image column ─────────────────────────────────────────── */}
          {/* order-first on mobile: image leads, text follows.
              lg:order-last restores the original left-text/right-image layout. */}
          <div
            className="kwt-animate-fade-up relative flex items-center order-first lg:order-last"
            style={{ animationDelay: "120ms", "--kwt-fade-scale": "0.98" } as CSSVars}
          >
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-hairline shadow-[0_24px_64px_-24px_rgba(27,42,82,0.18)]">
              <img
                src={heroImage}
                alt="Kashmiri Women in Tech community"
                width={680}
                height={520}
                className="h-full w-full object-cover object-center"
                style={{ maxHeight: "520px" }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(248,247,253,0.5) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
