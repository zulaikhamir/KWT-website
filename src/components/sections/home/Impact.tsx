import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import StatsSection from "@/components/shared/StatsSection";

// ─── Impact ───────────────────────────────────────────────────────────────────
export default function Impact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="impact" divided>
      <div ref={ref}>
       <SectionHeading
          align="center"
          eyebrow="By the numbers"
          title="Our community is growing"
          description="Built in Kashmir. Growing beyond it."
          className="mb-10 kwt-reveal"
        />

        {/* Spans the section's content width — same left and right edges as
            the heading above and every other section on the page. */}
        <div className="kwt-reveal kwt-stagger-2">
          <StatsSection />
        </div>
      </div>
    </SectionWrapper>
  );
}
