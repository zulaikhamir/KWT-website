import type { GratitudePerson } from "@/data/wall-of-gratitude";

type SpeakerCardProps = {
  person: GratitudePerson;
};

function initialFor(name: string) {
  return name.trim().charAt(0).toUpperCase() || "S";
}

/** Raised-avatar profile card for people who shared their expertise at KWT events. */
export default function SpeakerCard({ person }: SpeakerCardProps) {
  return (
    <article className="surface-card surface-card-interactive group relative mt-12 flex h-[calc(100%-3rem)] flex-col items-center overflow-visible bg-linear-to-b from-white to-[var(--color-bg-surface)]/70 px-6 pb-7 pt-16 text-center">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent-solid)]/65" />
      <div className="absolute -top-12 size-24 overflow-hidden rounded-full border-4 border-[var(--color-bg-surface)] bg-[var(--color-accent)] shadow-[0_4px_16px_-6px_rgba(27,42,82,0.22)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-2xl font-bold text-[var(--color-primary)]">
            {initialFor(person.name)}
          </div>
        )}
      </div>
      <h3 className="subheading">{person.name}</h3>
      {person.role && <p className="mt-1 text-sm text-[var(--color-secondary)]">{person.role}</p>}
      {person.description && <p className="mt-4 text-[0.9375rem] leading-6 text-[var(--color-secondary)]">{person.description}</p>}
    </article>
  );
}
