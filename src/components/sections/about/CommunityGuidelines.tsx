import SectionWrapper from "@/components/shared/SectionWrapper";

const guidelines = [
  {
    title: "Respect everyone",
    body: "Members span every level of experience and background. Challenge ideas, not people, harassment, discrimination, and personal attacks aren't welcome here.",
  },
  {
    title: "No question is too basic",
    body: "Whether you're writing your first line of code or leading a team, you belong. Help where you can, and it's always fine to say you don't know.",
  },
  {
    title: "Keep it relevant",
    body: "KWT is a space for tech, careers, and learning. Spam, unrelated promotion, and personal advertising crowd out what members actually come here for.",
  },
  {
    title: "Protect each other's privacy",
    body: "Don't share another member's contact details, messages, or personal information without their permission inside the community or beyond it.",
  },
  {
    title: "Honor your commitments",
    body: "If you register for a session or take on a role, follow through. Plans change just let organizers know as early as you can.",
  },
  {
    title: "Speak up, privately",
    body: "If something feels wrong, report it to KWT leadership directly rather than in the group. No one has to confront it alone.",
  },
];

const selfCheck = [
  "Is this respectful?",
  "Is this relevant?",
  "Does this add value?",
  "Am I respecting the other person's time and boundaries?",
];

export default function CommunityGuidelines() {
  return (
    <SectionWrapper id="community-guidelines" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">How we show up</p>
          <h2 className="heading mt-5">Community guidelines</h2>
          <p className="lede mt-5">
            KWT works because members look out for each other. These guidelines keep the
            community welcoming, useful, and safe.
          </p>
        </div>

        <div>
          <ol className="divide-y divide-hairline border-y border-hairline">
            {guidelines.map((guideline, index) => (
              <li
                key={guideline.title}
                className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <span className="eyebrow pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="subheading">{guideline.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
                    {guideline.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-l-2 border-[var(--color-primary)] py-1 pl-7">
            <p className="eyebrow">Before you post or speak up</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {selfCheck.map((question) => (
                <li
                  key={question}
                  className="text-[0.9375rem] leading-6 text-[var(--color-secondary)]"
                >
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
              If yes, you're contributing to the kind of community KWT is trying to build.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
