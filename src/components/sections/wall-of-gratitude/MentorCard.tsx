import type { GratitudePerson } from "@/data/wall-of-gratitude";

type MentorCardProps = {
  person: GratitudePerson;
};

function initialFor(name: string) {
  return name.trim().charAt(0).toUpperCase() || "M";
}

/**
 * The mentor card adapts the supplied testimonial layout to KWT: portrait on
 * the left, role at top-right, contribution text below, and name at the base.
 */
export default function MentorCard({ person }: MentorCardProps) {
  return (
    <article className="surface-card surface-card-interactive group flex h-full flex-col items-center p-6 text-center lg:flex-row lg:items-start lg:gap-0 lg:border-0 lg:bg-transparent lg:p-1 lg:text-left lg:shadow-none">
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          decoding="async"
          className="h-32 w-full shrink-0 rounded-xl bg-[var(--color-accent)]/35 object-contain shadow-[0_8px_24px_-12px_rgba(27,42,82,0.3)] transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transition-none sm:h-36 lg:h-48 lg:w-36 lg:object-cover lg:object-top"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-4xl font-bold text-[var(--color-primary)] shadow-[0_8px_24px_-12px_rgba(27,42,82,0.3)] sm:h-36 lg:h-48 lg:w-36 lg:text-5xl"
        >
          {initialFor(person.name)}
        </div>
      )}
      <div className="mt-5 flex min-w-0 flex-1 flex-col lg:mt-0 lg:ml-5 lg:min-h-48">
        {person.role && (
          <p className="self-center rounded-full bg-[var(--color-accent)]/65 px-2.5 py-1 text-xs font-medium text-[var(--color-primary)] lg:self-start">
            {person.role}
          </p>
        )}
        <p className="mt-3 text-[0.875rem] leading-6 text-[var(--color-secondary)] lg:text-left">
          {person.description ?? "Helping KWT members learn, grow, and move forward in technology."}
        </p>
        <div className="mt-5 pt-1 lg:mt-auto lg:pt-3">
          <h3 className="subheading">{person.name}</h3>
        </div>
      </div>
    </article>
  );
}
