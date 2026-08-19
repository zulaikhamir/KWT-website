import { Award } from "lucide-react";
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
        description="[Placeholder] How sponsorship money is used and the impact it makes on the community."
      />

      <div className="mt-16 flex flex-col items-center gap-8 rounded-2xl border border-hairline bg-white p-9 text-center shadow-[0_32px_80px_-32px_rgba(27,42,82,0.18)] sm:flex-row sm:gap-10 sm:p-10 sm:text-left">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]">
          <Award
            className="size-6 text-[var(--color-primary)]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>

        <div className="flex-1">
          <h3 className="subheading text-xl">
            [Placeholder] Help fund a community built by and for Kashmiri women in tech
          </h3>
          <p className="mt-2.5 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
            [Placeholder] What sponsorship supports — events, resources, or member
            opportunities — and the recognition sponsors receive in return.
          </p>
        </div>

        <CtaLink
          href="mailto:hello@example.org?subject=KWT%20sponsorship"
          className="shrink-0"
        >
          Become a sponsor
        </CtaLink>
      </div>
    </SectionWrapper>
  );
}
