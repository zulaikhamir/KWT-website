import { CalendarCheck, Megaphone, Lifebuoy, Books } from "@phosphor-icons/react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaLink from "@/components/shared/CtaLink";

const areas = [
  {
    icon: CalendarCheck,
    title: "Event Support",
    body: "Help plan and run KWT sessions, coordinate with speakers, and support attendees.",
  },
  {
    icon: Megaphone,
    title: "Content & Communications",
    body: "Create announcements, opportunity posts, social media content, and community updates.",
  },
  {
    icon: Lifebuoy,
    title: "Community Support",
    body: "Welcome members, share resources, support discussions, and help improve the member experience.",
  },
  {
    icon: Books,
    title: "Research & Resources",
    body: "Find, organise, and share research, learning resources, opportunities, and useful information.",
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
  KWT grows through the people who give their time, skills, and ideas.
  Volunteers help with events, content, community, research, and more.
</p>

<p className="mt-5 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
  Volunteer roles are shared as they open. If you do not see a role that fits,
  you can still fill out the volunteer form and tell us what you would like to
  contribute.
</p>
          <CtaLink
            href="https://tally.so/r/44leEO"
            target="_blank"
            rel="noreferrer noopener"
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
                  className="size-[1.3rem] text-[var(--color-primary)]"
                  weight="duotone"
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
