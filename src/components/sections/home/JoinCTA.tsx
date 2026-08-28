import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function JoinCTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="join-cta-heading"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={ref} className="flex flex-col items-center gap-6 text-center kwt-reveal-fade">

          {/* Eyebrow */}
          <span
            className={cn(
              "inline-flex items-center gap-2",
              "rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/8",
              "px-3.5 py-1",
              "text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)]/70",
            )}
          >
            <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/50" />
            Join the community
          </span>

          {/* Heading */}
          <h2
            id="join-cta-heading"
            className="heading max-w-2xl text-[var(--color-primary)]"
          >
            Find your place in KWT.
          </h2>

          {/* Subtext */}
          <p className="lede max-w-md text-[var(--color-primary)]/70">
           Come to learn, meet people, find opportunities, or give back.
          </p>

          <img
            src="/illustrations/community.webp"
            alt=""
            aria-hidden="true"
            width={396}
            height={394}
            loading="lazy"
            decoding="async"
            className="mt-2 h-auto w-full max-w-xs sm:max-w-sm"
          />

          {/* CTA */}
          <div>
            <Link
              to="/get-involved"
              className={cn(
                "group inline-flex items-center gap-1.5",
                "rounded-full bg-[var(--color-primary)] px-7 py-3",
                "text-[0.9375rem] font-medium tracking-[-0.005em] text-white",
                "hover:bg-[var(--color-primary)]/90",
                "hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.45)]",
                "active:scale-[0.98] transition-all duration-200",
                // Ring offset must match whatever sits behind the button —
                // now the page base, not the accent fill this section used to paint.
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)]",
              )}
            >
              Join KWT
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
