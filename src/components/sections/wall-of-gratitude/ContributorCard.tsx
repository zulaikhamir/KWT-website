import type { GratitudePerson } from "@/data/wall-of-gratitude";

type ContributorCardProps = {
  person: GratitudePerson;
};

function initialFor(name: string) {
  return name.trim().charAt(0).toUpperCase() || "C";
}

/** Compact card for the wider group of people strengthening the community. */
export default function ContributorCard({ person }: ContributorCardProps) {
  return (
    <article className="surface-card surface-card-interactive border-l-[3px] border-l-[var(--color-accent-solid)]/70 bg-white/90 p-5">
      <div className="flex items-center gap-4">
        {person.photo ? (
          <img src={person.photo} alt={person.name} loading="lazy" decoding="async" className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[var(--color-accent)]" />
        ) : (
          <div aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-bold text-[var(--color-primary)]">
            {initialFor(person.name)}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="subheading truncate">{person.name}</h3>
          {person.role && <p className="mt-1 text-sm text-[var(--color-secondary)]">{person.role}</p>}
        </div>
      </div>
      <p className="mt-4 text-[0.9375rem] leading-6 text-[var(--color-secondary)]">
        {person.description ?? "Contribution details will be added soon."}
      </p>
    </article>
  );
}
