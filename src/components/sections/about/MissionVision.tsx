import SectionWrapper from "@/components/shared/SectionWrapper";

const statements = [
  {
    index: "01",
    title: "Our mission",
    body: "[Placeholder] What KWT does today — the concrete, ongoing commitment to the women it serves.",
  },
  {
    index: "02",
    title: "Our vision",
    body: "[Placeholder] The future KWT is working toward — what the tech landscape in Kashmir looks like if this succeeds.",
  },
];

export default function MissionVision() {
  return (
    <SectionWrapper id="mission-vision" tone="surface" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="heading">Mission &amp; vision</h2>

        <div className="divide-y divide-hairline border-y border-hairline">
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
