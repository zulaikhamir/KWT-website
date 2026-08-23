import SectionWrapper from "@/components/shared/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KWT_STATS } from "@/data/stats";
import { useCountUp, useInView } from "@/hooks/useCountUp";

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
// Fits the existing sticky-column dl layout — preserves font/spacing tokens.
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const displayValue = useCountUp(value, inView);

  return (
    <div ref={ref}>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block font-heading text-3xl font-bold tracking-[-0.03em] tabular-nums text-[var(--color-primary)]">
          {displayValue}
        </span>
        <span className="mt-2 block text-sm text-[var(--color-secondary)]">
          {label}
        </span>
      </dd>
    </div>
  );
}

// ─── OurStory ─────────────────────────────────────────────────────────────────
export default function OurStory() {
  const bodyRef = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="our-story" className="pt-16 sm:pt-24">
      {/* Hero — above the fold, use load animation.

          Two columns on desktop, stacked on mobile. Unlike the Home hero the
          illustration stays *after* the text when stacked, so the page's h1
          is the first thing on screen rather than being pushed down. */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow kwt-animate-fade-up" style={{ animationDelay: "0ms" }}>About KWT</p>
          <h1
            className="display mt-6 kwt-animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Building a community for Kashmiri women in technology
          </h1>
          <p
            className="lede mt-7 kwt-animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Kashmiri Women in Tech (KWT) is a community created to connect Kashmiri women
            interested in technology, science, engineering, research, and related fields. We are
            creating a space where women can learn from one another, discover opportunities, build
            meaningful professional connections, and contribute to a growing technology community.
          </p>
        </div>

        {/* Decorative — the heading carries the meaning, so no alt text. */}
        <img
          src="/illustrations/pencil.png"
          alt=""
          aria-hidden="true"
          width={408}
          height={408}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="kwt-animate-fade-up mx-auto h-auto w-full max-w-sm lg:max-w-md"
          style={{ animationDelay: "120ms" }}
        />
      </div>

      {/* Story body — scroll-revealed */}
      <div ref={bodyRef} className="mt-20 grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.15fr]">
        <div className="kwt-reveal lg:sticky lg:top-32 lg:self-start">
          <h2 className="heading">Our story</h2>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
            {KWT_STATS.map((milestone) => (
              <AnimatedStat key={milestone.label} value={milestone.value} label={milestone.label} />
            ))}
          </dl>
        </div>

        <div className="space-y-6 kwt-reveal kwt-stagger-2">
          <p className="body-copy text-[1.0625rem]">
            KWT began from a simple need: creating a space where Kashmiri women in technology
            could find one another, share opportunities, ask questions, and learn together.
            Instead of relying on scattered networks and conversations, KWT was created as a
            dedicated community for women at different stages of their technology journeys —
            from students and beginners to researchers and working professionals.
          </p>
          <p className="body-copy text-[1.0625rem]">
            Since its beginning, KWT has been growing as a community focused on practical
            learning, professional development, research, networking, and opportunities. Through
            community discussions, events, guest sessions, and shared resources, KWT aims to
            make it easier for members to learn from people around them and build connections
            that continue beyond individual events.
          </p>

          <figure className="!mt-12 border-l-2 border-[var(--color-primary)] pl-7">
            <blockquote>
              <p className="font-heading text-xl leading-[1.5] tracking-[-0.02em] text-[var(--color-primary)] sm:text-2xl">
                &ldquo;No one can whistle a symphony. It takes a whole orchestra to play it.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-5 text-sm text-[var(--color-secondary)]">
              <span className="font-medium text-[var(--color-primary)]">
                H. E. Luccock
              </span>
              {" · "}
              Author &amp; Yale Divinity Professor
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
