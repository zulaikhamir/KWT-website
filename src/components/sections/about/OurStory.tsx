import SectionWrapper from "@/components/shared/SectionWrapper";

const milestones = [
  { value: "[157]", label: "Members" },
  { value: "[2]", label: "Events held" },
  { value: "[2026]", label: "Founded" },
];

export default function OurStory() {
  return (
    <SectionWrapper id="our-story" className="pt-16 sm:pt-24">
      <div className="max-w-3xl">
        <p className="eyebrow">About KWT</p>
        <h1 className="display mt-6">
          Building a place for women in Kashmir to grow in tech
        </h1>
        <p className="lede mt-7 max-w-2xl">
          [Placeholder] One or two sentences introducing KWT — who it serves and what it has
          set out to change.
        </p>
      </div>

      <div className="mt-20 grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.15fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="heading">Our story</h2>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
            {milestones.map((milestone) => (
              <div key={milestone.label}>
                <dt className="sr-only">{milestone.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-bold tracking-[-0.03em] text-[var(--color-primary)]">
                    {milestone.value}
                  </span>
                  <span className="mt-2 block text-sm text-[var(--color-secondary)]">
                    {milestone.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          <p className="body-copy text-[1.0625rem]">
            [Placeholder] Describe how KWT began — the moment or need that prompted a group of
            Kashmiri women in tech to come together, and who started it.
          </p>
          <p className="body-copy text-[1.0625rem]">
            [Placeholder] Describe how the community has grown since then: the kinds of events
            held, the people reached, and what members find here that they could not find
            elsewhere.
          </p>

          <figure className="!mt-12 border-l-2 border-[var(--color-primary)] pl-7">
            <blockquote>
              <p className="font-heading text-xl leading-[1.5] tracking-[-0.02em] text-[var(--color-primary)] sm:text-2xl">
                &ldquo;[Placeholder] A short quote from a founder or member that captures why
                this community exists.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-5 text-sm text-[var(--color-secondary)]">
              <span className="font-medium text-[var(--color-primary)]">[Name]</span> · [Role]
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
