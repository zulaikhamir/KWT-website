import { Check } from "lucide-react";

import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaLink from "@/components/shared/CtaLink";

const benefits = [
  "Learn from the community — access discussions, sessions, resources, and experiences shared by women working and learning across different areas of technology.",
  "Discover opportunities — find relevant jobs, internships, events, research opportunities, and other resources shared within the community.",
  "Build your network — connect with Kashmiri women studying, researching, and working across technology and related fields.",
  "Contribute and grow — share your knowledge, participate in discussions, support others, and contribute to building the community.",
];

export default function BecomeMember() {
  return (
    <SectionWrapper id="become-member" tone="surface" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">For individuals</p>
          <h2 className="heading mt-5">Become a member</h2>
          <p className="lede mt-5">
            KWT is for Kashmiri women who are interested in technology, science, engineering,
            research, or related fields — whether you're a student, beginner, researcher, or
            working professional. Joining the community gives you a space to connect with
            others, discover opportunities, learn from shared experiences, and take part in
            community activities.
          </p>
          <CtaLink
            href="https://tally.so/r/686aVB"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-9"
          >
            Join the Community
          </CtaLink>
        </div>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-4 py-6">
              <Check
                className="mt-1 size-[1.15rem] shrink-0 text-[var(--color-primary)]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="text-[1.0625rem] leading-7 text-[var(--color-secondary)]">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
