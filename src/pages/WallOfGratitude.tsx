import PersonCard from "@/components/wall-of-gratitude/PersonCard";
import SponsorCard from "@/components/wall-of-gratitude/SponsorCard";
import PageIntro from "@/components/shared/PageIntro";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  contributors,
  mentors,
  speakers,
  sponsors,
  volunteers,
} from "@/data/wall-of-gratitude";

export default function WallOfGratitude() {
  return (
    <main>
      {/* Page Introduction */}
      <PageIntro
        eyebrow="Wall of Gratitude"
        title="Thank you to everyone who helps build KWT."
        description="KWT would not be what it is without the time, care, knowledge, and generosity of every mentor, volunteer, speaker, sponsor, and contributor who helps our community grow."
      />

      {/* Mentors section */}
      <SectionWrapper id="mentors" bg="surface">
        <SectionHeading
          heading="Mentors"
          body="Experienced professionals who guide, support, and inspire our growing community."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {mentors.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </SectionWrapper>

      {/* Volunteers section */}
      <SectionWrapper id="volunteers" bg="surface">
        <SectionHeading
          heading="Volunteers"
          body="People who make KWT events, initiatives, and day-to-day activities possible."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {volunteers.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </SectionWrapper>

      {/* Speakers section */}
      <SectionWrapper id="speakers" bg="surface">
        <SectionHeading
          heading="Speakers"
          body="Experts and community members who generously share their knowledge and experiences."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {speakers.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </SectionWrapper>

      {/* Sponsors section */}
      <SectionWrapper id="sponsors" bg="surface">
        <SectionHeading
          heading="Sponsors"
          body="Organizations that support KWT's mission and help our community grow."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </SectionWrapper>

      {/* Contributors section */}
      <SectionWrapper id="contributors" bg="surface">
        <SectionHeading
          heading="Community Contributors"
          body="Everyone whose time, ideas, and efforts continue to strengthen the KWT community."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {contributors.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
