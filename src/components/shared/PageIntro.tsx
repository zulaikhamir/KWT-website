// Separate feature-specific page intro from Home Hero.
// Inner pages may share a calmer consistent introduction pattern.

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <section
      aria-labelledby="page-intro-title"
      className="bg-[var(--color-background)] pt-16 pb-10 sm:pt-20 sm:pb-12"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[var(--color-primary)] opacity-60"
            />
            {eyebrow}
          </span>

          <h1
            id="page-intro-title"
            className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[var(--color-primary)] sm:text-4xl"
          >
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-secondary)] sm:text-[1.05rem]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}