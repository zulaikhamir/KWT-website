import { ChatsCircle, Plant, DoorOpen, Lightning } from "@phosphor-icons/react";

import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    icon: ChatsCircle,
    title: "Community",
    body: "We make space for people to connect, ask questions, share experiences, and help each other.",
  },
  {
    icon: Plant,
    title: "Growth",
    body: "There is always something new to learn, and someone new to learn from.",
  },
  {
    icon: DoorOpen,
    title: "Inclusion",
    body: "There is a place here for every Kashmiri woman, wherever she is in her journey.",
  },
  {
    icon: Lightning,
    title: "Empowerment",
    body: "We want women to have the knowledge, connections, and confidence to move forward.",
  },
];

export default function Values() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="values" divided>
      <div ref={ref}>
        <SectionHeading
          eyebrow="What guides us"
          title="Our values"
          description="We want KWT to be a community where people can learn openly, support one another, and create opportunities together."
          className="kwt-reveal"
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={`surface-card surface-card-interactive flex flex-col p-7 kwt-reveal kwt-stagger-${(i + 1) as 1 | 2 | 3 | 4}`}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]">
                <Icon
                  className="size-[1.3rem] text-[var(--color-primary)]"
                  weight="duotone"
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
      </div>
    </SectionWrapper>
  );
}
