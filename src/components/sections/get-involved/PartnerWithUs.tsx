import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaLink from "@/components/shared/CtaLink";

const partnerships = [
  {
    index: "01",
    title: "[Placeholder] Co-hosted events",
    body: "[Placeholder] Run workshops, talks, or hackathons together with the KWT community.",
  },
  {
    index: "02",
    title: "[Placeholder] Mentorship programs",
    body: "[Placeholder] Connect your team's engineers with members looking for guidance.",
  },
  {
    index: "03",
    title: "[Placeholder] Hiring pipelines",
    body: "[Placeholder] Share roles and internships directly with a community of women in tech.",
  },
];

export default function PartnerWithUs() {
  return (
    <SectionWrapper id="partner-with-us" divided>
      <SectionHeading
        eyebrow="For organizations"
        title="Partner with us"
        description="[Placeholder] What a partnership with KWT looks like and who it suits."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {partnerships.map((partnership) => (
          <article
            key={partnership.index}
            className="surface-card surface-card-interactive flex flex-col p-7"
          >
            <span className="eyebrow">{partnership.index}</span>
            <h3 className="subheading mt-5">{partnership.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
              {partnership.body}
            </p>
          </article>
        ))}
      </div>

      <CtaLink
        href="mailto:hello@example.org?subject=KWT%20partnership"
        variant="outline"
        className="mt-10"
      >
        Start a conversation
      </CtaLink>
    </SectionWrapper>
  );
}
