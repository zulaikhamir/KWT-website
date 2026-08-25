import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaLink from "@/components/shared/CtaLink";

const partnerships = [
  {
    index: "01",
    title: "Co-hosted events",
    body: "Bring workshops, talks, panels, networking sessions, and other learning experiences to the KWT community.",
  },
  {
    index: "02",
    title: "Mentorship",
    body: "Connect our members with professionals who can offer guidance, share experience, and help them navigate their careers.",
  },
  {
    index: "03",
    title: "Hiring & opportunities",
    body: "Share relevant jobs, internships, projects, research opportunities, and other opportunities with our members.",
  },
];

export default function PartnerWithUs() {
  return (
    <SectionWrapper id="partner-with-us" divided>
      <SectionHeading
  eyebrow="For organizations"
  title="Partner with us"
  description="We work with organisations, companies, universities, researchers, and communities that want to create better opportunities for Kashmiri women in tech."
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
