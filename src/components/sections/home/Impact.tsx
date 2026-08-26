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

        {/* Break out of the section container's horizontal padding so the
            panel can stretch close to the viewport edges, while the heading
            above stays aligned to the normal content width. */}
      <div className="kwt-reveal kwt-stagger-2">
  <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
    <div className="mx-auto max-w-[1400px]">
      <StatsSection />
    </div>
  </div>
</div>
      </div>
    </SectionWrapper>
  );
}
