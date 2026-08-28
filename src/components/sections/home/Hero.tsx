import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ROLE_TAGS = ["Students", "Engineers", "Researchers", "Professionals"] as const;

const FADE_DELAYS_MS = [0, 80, 160, 260, 340] as const;

type CSSVars = React.CSSProperties & { "--kwt-fade-scale"?: string };

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

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
             A community for Kashmiri women in technology.
            </h1>

            <p
              className="lede mt-7 max-w-xl kwt-animate-fade-up"
              style={{ animationDelay: `${FADE_DELAYS_MS[2]}ms` }}
            >
              Learn from each other. Find opportunities. Meet people who understand the journey. Build together.
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
              {/* <span className="text-xs text-[var(--color-secondary)] opacity-60 select-none">
                For
              </span> */}
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
          <div
            className="kwt-animate-fade-up relative flex items-center order-first lg:order-last"
            style={{ animationDelay: "120ms", "--kwt-fade-scale": "0.98" } as CSSVars}
          >
      
            <img
              src="/illustrations/home-hero.webp"
              alt=""
              aria-hidden="true"
              width={394}
              height={400}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
