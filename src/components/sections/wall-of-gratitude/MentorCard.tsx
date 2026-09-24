import { useState } from "react";
import { LinkedinLogoIcon, UserIcon } from "@phosphor-icons/react";

import type { GratitudePerson } from "@/data/wall-of-gratitude";
import { cn } from "@/lib/utils";

type MentorCardProps = {
  person: GratitudePerson;
};

function initialFor(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "M";
}

export default function MentorCard({ person }: MentorCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const description = person.description ?? "Helping KWT members learn, grow, and move forward in technology.";

  return (
    <figure
      className={cn(
        "group relative aspect-[5/7] overflow-hidden rounded-3xl",
        "bg-[var(--color-primary)] ring-1 ring-black/5",
        "shadow-[0_14px_36px_-14px_rgba(27,42,82,0.28)]",
        "transition-shadow duration-300 hover:shadow-[0_20px_48px_-16px_rgba(27,42,82,0.4)]",
      )}
    >
      {!person.photo || imgFailed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-b from-[var(--color-primary)] to-[#0E1730] transition-opacity duration-500 group-hover:opacity-40 group-focus-within:opacity-40 motion-reduce:transition-none"
        >
          <span className="flex size-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
            <UserIcon className="size-11 text-white/25" weight="fill" />
          </span>
          <span className="select-none font-heading text-2xl font-bold tracking-tight text-white/20">
            {initialFor(person.name)}
          </span>
        </div>
      ) : (
        <img
          src={person.photo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={() => setImgFailed(true)}
          className={cn(
            "absolute inset-0 size-full object-cover object-top transition duration-500 ease-out",
             "sm:group-hover:scale-110 sm:group-hover:blur-[6px] sm:group-hover:brightness-[0.55] sm:group-focus-within:scale-110 sm:group-focus-within:blur-[6px] sm:group-focus-within:brightness-[0.55]",
            isDetailsOpen && "scale-110 blur-[6px] brightness-[0.55]",
            "motion-reduce:transition-none",
          )}
        />
      )}

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 via-black/25 to-transparent transition-opacity duration-300 sm:group-hover:opacity-0 sm:group-focus-within:opacity-0 motion-reduce:transition-none" />

      {person.linkedinUrl && (
        <a
          href={person.linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${person.name} on LinkedIn`}
          className="absolute right-2.5 top-2.5 z-20 flex size-8 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <LinkedinLogoIcon className="size-4" weight="fill" aria-hidden="true" />
        </a>
      )}

      <div className={cn(
        "absolute inset-0 z-10 flex items-center justify-center px-4 py-12 text-center transition-opacity duration-300 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 motion-reduce:transition-none",
        isDetailsOpen ? "opacity-100" : "opacity-0",
      )}>
        <p className="max-h-full overflow-y-auto text-[0.8125rem] leading-6 text-white">{description}</p>
      </div>

      <figcaption className={cn(
        "absolute inset-x-2.5 bottom-2.5 z-10 rounded-2xl border border-white/25 bg-white/10 px-3 py-2.5 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28)] transition-opacity duration-300 sm:group-hover:opacity-0 sm:group-focus-within:opacity-0 motion-reduce:transition-none",
        isDetailsOpen && "opacity-0",
      )}>
        <p className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-white">{person.name}</p>
        {person.role && <p className="mt-0.5 text-[0.8125rem] leading-snug text-white/75">{person.role}</p>}
      </figcaption>

      <button
        type="button"
        onClick={() => setIsDetailsOpen((open) => !open)}
        aria-expanded={isDetailsOpen}
        className="absolute bottom-3 right-3 z-30 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:hidden"
      >
        {isDetailsOpen ? "See less" : "See more"}
      </button>
    </figure>
  );
}
