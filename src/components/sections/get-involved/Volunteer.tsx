import { CalendarDays, Megaphone, Users, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaLink from "@/components/shared/CtaLink";

const areas = [
  {
    icon: CalendarDays,
    title: "Event Support",
    body: "Help coordinate community sessions, communicate with speakers and participants, and support events before and during the session.",
  },
  {
    icon: Megaphone,
    title: "Content & Communications",
    body: "Help create community announcements, opportunity posts, social media content, and other communications.",
  },
  {
    icon: Users,
    title: "Community Support",
    body: "Help welcome members, share useful resources, support discussions, and identify ways to make the community more useful.",
  },
  {
    icon: BookOpen,
    title: "Research & Resources",
    body: "Help identify, organise, and share research, learning resources, opportunities, and useful information for members.",
  },
];

export default function Volunteer() {
  return (
    <SectionWrapper id="volunteer" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">For individuals</p>
          <h2 className="heading mt-5">Volunteer with KWT</h2>
          <p className="lede mt-5">
            KWT is built through community contribution. Volunteers can help us organise events,
            create resources, support community activities, share opportunities, and contribute
            their skills to projects that help the community grow.
          </p>
          <p className="mt-5 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
            KWT volunteer opportunities are posted as they open. If nothing is currently listed,
            you can still express interest — fill out our volunteer form and tell us your skills
            and the areas you'd like to help with, and we'll reach out if a suitable role
            becomes available.
          </p>
          {/* [PLACEHOLDER — VOLUNTEER FORM URL] — replace "#volunteer-form" with the real form URL */}
          <CtaLink
            href="#volunteer-form"
            variant="outline"
            className="mt-9"
          >
            Express Interest
          </CtaLink>
        </div>

        {/* Right column — contribution areas */}
        <ul className="grid gap-5 sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, body }) => (
            <li key={title} className="surface-card surface-card-interactive flex flex-col p-7">
              <span
                className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]"
                aria-hidden="true"
              >
                <Icon
                  className="size-[1.15rem] text-[var(--color-primary)]"
                  strokeWidth={1.75}
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
