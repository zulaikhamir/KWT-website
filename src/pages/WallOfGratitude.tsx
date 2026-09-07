import ContributorCarousel from "@/components/sections/wall-of-gratitude/ContributorCarousel";
import CommunitySponsorCard from "@/components/sections/wall-of-gratitude/CommunitySponsorCard";
import MentorCard from "@/components/sections/wall-of-gratitude/MentorCard";
import RecognitionCarousel from "@/components/sections/wall-of-gratitude/RecognitionCarousel";
import SpeakerCard from "@/components/sections/wall-of-gratitude/SpeakerCard";
import VolunteerCard from "@/components/sections/wall-of-gratitude/VolunteerCard";
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
  volunteers,
} from "@/data/wall-of-gratitude";

export default function WallOfGratitude() {
  return (
    <PageContainer>
      <SEO
        title="Wall of Gratitude"
        description="Meet the mentors, volunteers, speakers, sponsors, and contributors whose time and generosity help KWT grow."
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
          itemClassName="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          renderItem={(person) => <MentorCard person={person} />}
          trackGapClassName="gap-8"
        />
      </SectionWrapper>

      {/* Volunteers section */}
      <SectionWrapper id="volunteers" tone="default">
        <SectionHeading
          title="Volunteers"
          description="People who make KWT events, initiatives, and day-to-day activities possible."
          align="center"
          className="mb-10"
        />

        <RecognitionCarousel
          items={volunteers}
          ariaLabel="Volunteers"
          itemClassName="w-[88%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
          renderItem={(person) => <VolunteerCard person={person} />}
          controls="sides"
          circular
          sideControlsTopClassName="top-[38%]"
        />
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
          itemClassName="w-[88%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
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
          itemClassName="w-[88%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
          renderItem={(sponsor) => <CommunitySponsorCard sponsor={sponsor} />}
          controls="sides"
          circular
          sideControlClassName="border-[var(--color-accent)] bg-[var(--color-accent)]/65 text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
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
