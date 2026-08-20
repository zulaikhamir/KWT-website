import SectionWrapper from "@/components/shared/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const statements = [
  {
    index: "01",
    title: "Our mission",
    body: "Our mission is to connect and support Kashmiri women in technology by creating opportunities to learn, share knowledge, discover careers and research opportunities, build professional networks, and contribute to the community.",
  },
  {
    index: "02",
    title: "Our vision",
    body: "Our vision is to build a strong and connected community of Kashmiri women who are visible, confident, and active in technology, research, and STEM. We want KWT to become a space where women can find opportunities, mentorship, collaboration, and a network that supports them throughout their journey.",
  },
];

export default function MissionVision() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="mission-vision" tone="surface" divided>
      <div ref={ref} className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="heading kwt-reveal">Mission &amp; vision</h2>

        <div className="divide-y divide-hairline border-y border-hairline kwt-reveal kwt-stagger-2">
          {statements.map((statement) => (
            <article key={statement.title} className="grid gap-4 py-10 sm:grid-cols-[auto_1fr] sm:gap-10">
              <span className="eyebrow pt-1.5">{statement.index}</span>
              <div>
                <h3 className="subheading text-2xl">{statement.title}</h3>
                <p className="body-copy mt-4 text-[1.0625rem]">{statement.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
