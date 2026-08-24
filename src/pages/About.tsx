import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import OurStory from "@/components/sections/about/OurStory";
import MissionVision from "@/components/sections/about/MissionVision";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import CommunityGuidelines from "@/components/sections/about/CommunityGuidelines";

export default function About() {
  return (
    <PageContainer>
      <SEO
        title="About Us"
        description="Learn about KWT's mission to empower Kashmiri women in technology through community, mentorship, and career opportunities. Discover our story, values, and the team behind the community."
        url="https://kwtcommunity.org/about"
        keywords="about KWT, Kashmiri women tech community, our mission, our story"
      />
      <OurStory />
      <MissionVision />
      <Values />
      <Team />
      <CommunityGuidelines />
    </PageContainer>
  );
}
