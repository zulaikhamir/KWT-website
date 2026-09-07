import type { GratitudePerson } from "@/data/wall-of-gratitude";

type VolunteerCardProps = {
  person: GratitudePerson;
};

function initialFor(name: string) {
  return name.trim().charAt(0).toUpperCase() || "V";
}

/** Editorial image-and-story card for people making KWT work possible. */
export default function VolunteerCard({ person }: VolunteerCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-navy-deep text-white shadow-[0_4px_16px_-6px_rgba(27,42,82,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_34px_-14px_rgba(27,42,82,0.42)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-primary)]">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <span aria-hidden="true" className="flex size-full items-center justify-center bg-linear-to-br from-[var(--color-primary)] to-navy-deep text-6xl font-bold text-white/70">
            {initialFor(person.name)}
          </span>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy-deep/75 via-navy-deep/10 to-transparent" />
      </div>
      <div className="relative p-5">
        <div aria-hidden="true" className="absolute left-5 top-0 h-px w-10 bg-[var(--color-accent-solid)]/75" />
        <p className="text-sm leading-6 text-white/75">
          {person.description ?? "Giving time and care to help KWT’s community grow."}
        </p>
        <div className="mt-4 border-t border-white/15 pt-3">
          <h3 className="font-heading text-lg font-bold tracking-[-0.015em] text-white">{person.name}</h3>
          {person.role && <p className="mt-1 text-sm text-white/70">{person.role}</p>}
        </div>
      </div>
    </article>
  );
}
