import SectionWrapper from "@/components/shared/SectionWrapper";
import CtaLink from "@/components/shared/CtaLink";
import { areas } from "@/data/get-involved";

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
