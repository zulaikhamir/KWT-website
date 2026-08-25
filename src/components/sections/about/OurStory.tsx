import SectionWrapper from "@/components/shared/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KWT_STATS } from "@/data/stats";
import { useCountUp, useInView } from "@/hooks/useCountUp";

// ─── AnimatedStat ─────────────────────────────────────────────────────────────
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
    <>
      <section className="w-full">
        <div className="mx-auto grid min-h-[calc(100svh-var(--nav-height))] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-8">
          <div>
  <p
    className="eyebrow kwt-animate-fade-up"
    style={{ animationDelay: "0ms" }}
  >
    About KWT
  </p>

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
    KWT brings together Kashmiri women who are learning, working, researching,
    and building in technology.
  </p>

  <p
    className="lede mt-5 kwt-animate-fade-up"
    style={{ animationDelay: "240ms" }}
  >
    We created KWT because good opportunities, conversations, and connections
    should not depend on where you are. Here, we learn from each other, share
    what we find, and make space for more women to grow in tech.
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
      </section>

      <SectionWrapper id="our-story">
        {/* Story body — scroll-revealed */}
        <div ref={bodyRef} className="grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.15fr]">
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
            KWT began with a simple idea: Kashmiri women in technology should be able to find one another.
          </p>
          <p className="body-copy text-[1.0625rem]">
           A place to ask questions. Share opportunities. Learn from someone a little further ahead. And eventually, give back.
          </p>
            <p className="body-copy text-[1.0625rem]">
          What started as a small community is growing into a space for students, engineers, researchers, and professionals to learn, connect, and build together.
          </p>


          <figure className="!mt-12 border-l-2 border-[var(--color-primary)] pl-7">
            <blockquote>
  <p className="font-heading text-xl leading-[1.5] tracking-[-0.02em] text-[var(--color-primary)] sm:text-2xl">
    &ldquo;Alone we can do so little; together we can do so much.&rdquo;
  </p>
</blockquote>

<figcaption className="mt-5 text-sm text-[var(--color-secondary)]">
  <span className="font-medium text-[var(--color-primary)]">
    Helen Keller
  </span>
</figcaption>
          </figure>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
