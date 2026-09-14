import ContributorCarousel from "@/components/sections/wall-of-gratitude/ContributorCarousel";
import CommunitySponsorCard from "@/components/sections/wall-of-gratitude/CommunitySponsorCard";
import MentorCard from "@/components/sections/wall-of-gratitude/MentorCard";
import RecognitionCarousel from "@/components/sections/wall-of-gratitude/RecognitionCarousel";
import SpeakerCard from "@/components/sections/wall-of-gratitude/SpeakerCard";
import MemberSpotlight from "@/components/sections/wall-of-gratitude/MemberSpotlight";
import WallOfGratitudeHero from "@/components/sections/wall-of-gratitude/WallOfGratitudeHero";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import PageContainer from "@/components/layout/PageContainer";
import {
  contributors,
  mentors,
  speakers,
  sponsors,
  memberSpotlights,
} from "@/data/wall-of-gratitude";

export default function WallOfGratitude() {
  return (
    <PageContainer>
      <SEO
        title="Wall of Gratitude"
        description="Meet the mentors, members, speakers, sponsors, and contributors whose time and generosity help KWT grow."
        url="https://kwtcommunity.org/wall-of-gratitude"
      />
      <WallOfGratitudeHero />

      {/* Mentors section */}
      <SectionWrapper id="mentors" tone="surface">
        <SectionHeading
          title="Mentors"
          description="Experienced professionals who guide, support, and inspire our growing community."
          align="center"
          className="mb-10"
        />

        <RecognitionCarousel
          items={mentors}
          ariaLabel="Mentors"
          itemClassName="w-[74%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
          renderItem={(person) => <MentorCard person={person} />}
        />
      </SectionWrapper>

      {/* Member spotlight section */}
      <SectionWrapper id="member-spotlight" tone="default">
        <SectionHeading
          title="Member Spotlight"
          description="Message from the members of KWT."
          align="center"
          className="mb-10"
        />
        <MemberSpotlight items={memberSpotlights} />
      </SectionWrapper>

      {/* Speakers section */}
      <SectionWrapper id="speakers" tone="surface">
        <SectionHeading
          title="Speakers"
          description="Experts and community members who generously share their knowledge and experiences."
          align="center"
          className="mb-10"
        />

        <RecognitionCarousel
          items={speakers}
          ariaLabel="Speakers"
          itemClassName="w-[74%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
          renderItem={(person) => <SpeakerCard person={person} />}
        />
      </SectionWrapper>

      {/* Sponsors section */}
      <SectionWrapper id="sponsors" tone="default">
        <SectionHeading
          title="Sponsors"
          description="Organizations that support KWT's mission and help our community grow."
          align="center"
          className="mb-10"
        />

        <RecognitionCarousel
          items={sponsors}
          ariaLabel="Sponsors"
          itemClassName="w-[74%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
          renderItem={(sponsor) => <CommunitySponsorCard sponsor={sponsor} />}
        />
      </SectionWrapper>

      {/* Contributors section */}
      <SectionWrapper id="contributors" tone="surface">
        <SectionHeading
          title="Community Contributors"
          description="Everyone whose time, ideas, and efforts continue to strengthen the KWT community."
          align="center"
          className="mb-10"
        />

        <ContributorCarousel contributors={contributors} />
      </SectionWrapper>
    </PageContainer>
  );
}
