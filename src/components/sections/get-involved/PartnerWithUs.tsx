import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaLink from "@/components/shared/CtaLink";

const partnerships = [
  {
    index: "01",
    title: "Co-hosted events",
    body: "Work with KWT to organise workshops, panels, talks, networking sessions, and other community events around topics relevant to our members.",
  },
  {
    index: "02",
    title: "Mentorship programs",
    body: "Collaborate with KWT to connect members with experienced professionals who can share knowledge, guidance, and practical career insights.",
  },
  {
    index: "03",
    title: "Hiring & opportunities",
    body: "Partner with KWT to share relevant jobs, internships, projects, and other professional opportunities with women in our community.",
  },
];

export default function PartnerWithUs() {
  return (
    <SectionWrapper id="partner-with-us" divided>
      <SectionHeading
        eyebrow="For organizations"
        title="Partner with us"
        description="We welcome organisations, companies, researchers, educators, and other communities that want to support opportunities for Kashmiri women in technology. Partnerships can help us create meaningful learning, networking, research, and career opportunities for our members."
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
        href="https://tally.so/r/kd8MrM"
        target="_blank"
        rel="noreferrer noopener"
        variant="outline"
        className="mt-10"
      >
        Start a conversation
      </CtaLink>
    </SectionWrapper>
  );
}
