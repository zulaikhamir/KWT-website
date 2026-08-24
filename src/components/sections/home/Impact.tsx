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
          title="Our growing community"
          description="KWT is an active and growing space for Kashmiri women across STEM and technology — here's where we are so far."
          className="mb-8 kwt-reveal"
        />

        <div className="kwt-reveal kwt-stagger-2">
          <StatsSection />
        </div>
      </div>
    </SectionWrapper>
  );
}
