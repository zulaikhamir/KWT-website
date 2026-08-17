import { Check } from "lucide-react";

import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaLink from "@/components/shared/CtaLink";

const benefits = [
  "[Placeholder] Access to community events, workshops, and meetups.",
  "[Placeholder] A network of peers and mentors across the tech industry.",
  "[Placeholder] Early notice of jobs, internships, and learning opportunities.",
  "[Placeholder] A space to ask questions and share what you are building.",
];

export default function BecomeMember() {
  return (
    <SectionWrapper id="become-member" tone="surface" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">For individuals</p>
          <h2 className="heading mt-5">Become a member</h2>
          <p className="lede mt-5">
            [Placeholder] Who membership is for and what joining the community involves.
          </p>
          <CtaLink
            href="mailto:hello@example.org?subject=KWT%20membership"
            className="mt-9"
          >
            Join the community
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
