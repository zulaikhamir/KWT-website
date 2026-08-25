import SectionWrapper from "@/components/shared/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const guidelines = [
  {
    title: "Respect everyone",
    body: "Challenge ideas, not people. Harassment, discrimination, and personal attacks are not welcome.",
  },
  {
    title: "No question is too basic",
    body: "Everyone is learning something. Ask questions freely, share what you know, and be willing to say, “I don't know.”",
  },
  {
    title: "Keep it relevant",
    body: "Keep discussions focused on technology, careers, learning, and opportunities. No spam or unrelated promotion.",
  },
  {
    title: "Protect each other's privacy",
    body: "Do not share another member's contact details, messages, or personal information without their permission.",
  },
  {
    title: "Honor your commitments",
    body: "If you sign up for a session or take on a role, follow through. If plans change, let the organizers know.",
  },
  {
    title: "Speak up, privately",
    body: "If something feels wrong, contact KWT leadership directly. You do not have to handle it alone.",
  },
];

const selfCheck = [
  "Is this respectful?",
  "Is this relevant?",
  "Does this add value?",
  "Am I respecting the other person's time and boundaries?",
];

export default function CommunityGuidelines() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="community-guidelines" divided>
      <div
        ref={ref}
        className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="kwt-reveal lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">How we show up</p>
          <h2 className="heading mt-5">Community guidelines</h2>
          <p className="lede mt-5">
            KWT works because members look out for each other. These guidelines
            help keep it welcoming, useful, and safe.
          </p>
        </div>

        <div className="kwt-reveal kwt-stagger-2">
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
              If yes, you're helping build the kind of community we want KWT to be.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}