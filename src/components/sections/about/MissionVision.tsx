import SectionWrapper from "@/components/shared/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const statements = [
  {
    index: "01",
    title: "Our mission",
    body: "To bring Kashmiri women in technology together to learn, share opportunities, build connections, and help each other move forward.",
  },
  {
    index: "02",
    title: "Our vision",
    body: "A world where Kashmiri women in tech are connected, visible, and building what comes next.",
  },
];

export default function MissionVision() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="mission-vision" tone="surface" divided>
      <div ref={ref} className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left column flows with the section; only the inner block is sticky,
            so the heading rides the page scroll, holds below the navbar while
            the statements scroll past, then leaves with the section. */}
        <div>
          <div className="kwt-reveal lg:sticky lg:top-32">
            <h2 className="heading">Mission &amp; vision</h2>
          </div>
        </div>

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
