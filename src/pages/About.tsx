import PageContainer from "@/components/layout/PageContainer";
import OurStory from "@/components/sections/about/OurStory";
import MissionVision from "@/components/sections/about/MissionVision";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import CommunityGuidelines from "@/components/sections/about/CommunityGuidelines";

export default function About() {
  return (
    <PageContainer>
      <OurStory />
      <MissionVision />
      <Values />
      <Team />
      <CommunityGuidelines />
    </PageContainer>
  );
}
