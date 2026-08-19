import { Users, Sprout, HeartHandshake, Sparkles } from "lucide-react";

import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  {
    icon: Users,
    title: "Community",
    body: "[Placeholder] What belonging and mutual support look like in practice at KWT.",
  },
  {
    icon: Sprout,
    title: "Growth",
    body: "[Placeholder] How KWT helps members learn, build skills, and progress in their careers.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusion",
    body: "[Placeholder] Who KWT is for and how the community stays open and welcoming to all.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    body: "[Placeholder] How KWT helps members take ownership of their goals and their voice.",
  },
];

export default function Values() {
  return (
    <SectionWrapper id="values" divided>
      <SectionHeading
        eyebrow="What guides us"
        title="Our values"
        description="[Placeholder] One sentence framing the principles that guide how this community operates."
      />

      <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="surface-card surface-card-interactive flex flex-col p-7"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]">
              <Icon
                className="size-[1.15rem] text-[var(--color-primary)]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <h3 className="subheading mt-6">{title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
