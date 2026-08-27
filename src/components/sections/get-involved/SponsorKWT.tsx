import { HandCoins } from "@phosphor-icons/react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaLink from "@/components/shared/CtaLink";

export default function SponsorKWT() {
  return (
    <SectionWrapper id="sponsor-kwt" tone="surface" divided>
     <SectionHeading
  align="center"
  eyebrow="For sponsors"
  title="Sponsor KWT"
  description="Support the work KWT is building for Kashmiri women in tech. Sponsorship can help us run community events, create learning resources, and build programs that create real opportunities for our members."
/>

<div className="mt-16 flex flex-col items-center gap-8 rounded-2xl border border-hairline bg-white p-9 text-center shadow-[0_32px_80px_-32px_rgba(27,42,82,0.18)] sm:flex-row sm:gap-10 sm:p-10 sm:text-left">
  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]">
    <HandCoins
      className="size-6 text-[var(--color-primary)]"
      weight="duotone"
      aria-hidden="true"
    />
  </span>

  <div className="flex-1">
    <h3 className="subheading text-xl">
      Interested in supporting KWT?
    </h3>

    <p className="mt-2.5 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
      We welcome conversations with organisations and individuals who want to
      support the community. Get in touch and let's explore how we can work
      together.
    </p>
  </div>

        <CtaLink
          href="https://tally.so/r/kd8MrM"
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0"
        >
          Contact us to discuss
        </CtaLink>
      </div>
    </SectionWrapper>
  );
}
