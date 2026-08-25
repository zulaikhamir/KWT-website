import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    title: "Reach out",
    body: "Tell us who you are and how you'd like to get involved.",
  },
  {
    title: "Connect with KWT",
    body: "We'll review your request and get back to you with the next steps.",
  },
  {
    title: "Get involved",
    body: "Join the community, contribute your skills, attend events, or explore ways to work with KWT.",
  },
];

export default function WhatHappensNext() {
  return (
    <SectionWrapper id="what-happens-next" divided>
      <SectionHeading
        eyebrow="The process"
        title="What happens next?"
        description="Wherever you start, we'll help you find the right next step."
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
