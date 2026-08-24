// Separated this from SponsorCard card since it represents a different 
// domain entity with its own fields and future requirements.

import type { GratitudePerson } from "@/data/wall-of-gratitude";

type PersonCardProps = {
    person: GratitudePerson;
};

export default function PersonCard({ person }: PersonCardProps) {
    // Fallback avatar when no photo is available.
    const initial = person.name.trim().charAt(0).toUpperCase() || "N"; 

    return (
        <article className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-[0_2px_12px_-4px_rgba(27,42,82,0.07)] sm:p-7 hover:border-[var(--color-primary)]/20  hover:shadow-[0_4px_20px_-6px_rgba(27,42,82,0.1)] transition-all duration-200">
            {person.photo ? (
                <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    className="size-32 rounded-full object-cover sm:size-36"
                />
            ) : (
                <div
                    aria-hidden="true"
                    className="flex size-32 items-center justify-center rounded-full bg-[var(--color-accent)]/60 text-3xl font-bold text-[var(--color-primary)] sm:size-36"
                >
                    {initial}
                </div>
            )}

            <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">
                {person.name}
            </h3>

            {person.role && (
                <p className="mt-1 text-sm text-[var(--color-secondary)]">
                    {person.role}
                </p>
            )}

            {person.description && (
                <p className="mt-3 text-sm leading-6 text-[var(--color-secondary)]">
                    {person.description}
                </p>
            )}
        </article>
    );
}
