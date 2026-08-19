import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    title: "[Placeholder] You reach out",
    body: "[Placeholder] What the person should send and where it goes.",
  },
  {
    title: "[Placeholder] We get in touch",
    body: "[Placeholder] Who responds and roughly how long it takes.",
  },
  {
    title: "[Placeholder] You get involved",
    body: "[Placeholder] What happens once they are onboarded into the community.",
  },
];

export default function WhatHappensNext() {
  return (
    <SectionWrapper id="what-happens-next" divided>
      <SectionHeading
        eyebrow="The process"
        title="What happens next?"
        description="[Placeholder] One sentence setting expectations after someone reaches out."
      />

      <ol className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {/* Connecting rule behind the step markers, desktop only. */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-5 hidden h-px bg-hairline sm:block"
        />

        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="relative flex size-10 items-center justify-center rounded-full border border-hairline bg-[var(--color-background)] font-heading text-sm font-bold text-[var(--color-primary)]">
              {index + 1}
            </span>
            <h3 className="subheading mt-6">{step.title}</h3>
            <p className="mt-3 max-w-xs text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
