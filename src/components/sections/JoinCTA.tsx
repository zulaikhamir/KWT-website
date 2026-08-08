import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Full-width join CTA — acts as the natural conclusion of the homepage.
 * Uses the brand primary colour as a solid background.
 */
export default function JoinCTA() {
  return (
    <section
      aria-labelledby="join-cta-heading"
      className="bg-[var(--color-primary)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Eyebrow */}
          <span
            className={cn(
              "inline-flex items-center gap-2",
              "rounded-full border border-white/20",
              "bg-white/10 px-3.5 py-1",
              "text-xs font-semibold tracking-[0.18em] uppercase",
              "text-white/80",
            )}
          >
            <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
            Join the Community
          </span>

          {/* Heading */}
          <h2
            id="join-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl"
          >
            Ready to be part of KWT?
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg leading-7 text-white/70 max-w-xl">
            Whether you're here to learn or give back, there's a place for you
            in the community.
          </p>

          {/* CTA */}
          <Link
            to="/join"
            className={cn(
              "mt-2 inline-flex items-center gap-2",
              "rounded-xl bg-white px-7 py-3.5",
              "text-sm font-semibold text-[var(--color-primary)] tracking-wide",
              "hover:bg-[var(--color-accent)]",
              "active:scale-[0.98]",
              "transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]",
            )}
          >
            Join KWT
            <ArrowRight size={15} strokeWidth={2.2} />
          </Link>

        </div>
      </div>
    </section>
  );
}
