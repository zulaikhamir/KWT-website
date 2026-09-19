
/**
 * Page-specific hero. Its structure deliberately mirrors the Home and About
 * heroes while keeping the gratitude page's message and illustration distinct.
 */
export default function WallOfGratitudeHero() {
  return (
    <section aria-labelledby="wall-of-gratitude-heading" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-var(--nav-height))] items-center gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="eyebrow kwt-animate-fade-up" style={{ animationDelay: "0ms" }}>
              Wall of Gratitude
            </p>
            <h1
              id="wall-of-gratitude-heading"
              className="display mt-6 kwt-animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Thank you to everyone who helps build KWT.
            </h1>
            <p
              className="lede mt-7 max-w-xl kwt-animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              KWT grows through the time, care, knowledge, and generosity of every
              mentor, volunteer, speaker, sponsor, and community contributor.
            </p>
          </div>

          <img
            src="/illustrations/wall-of-gratitude-hero.png"
            alt=""
            aria-hidden="true"
            width={408}
            height={408}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="kwt-animate-fade-up mx-auto h-auto w-full max-w-sm opacity-80 lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
