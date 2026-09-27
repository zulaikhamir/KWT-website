import { useEffect, useState } from "react";

import type { GratitudePerson } from "@/data/wall-of-gratitude";

type MemberSpotlightProps = {
  items: GratitudePerson[];
};

const ROTATION_MS = 6000;

function initials(name: string) {
  return (
    name
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "KWT"
  );
}

export default function MemberSpotlight({ items }: MemberSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImageId, setFailedImageId] = useState<string | null>(null);
  const activeMember = items[activeIndex];

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [items.length]);

  if (!activeMember) return null;

  return (
    <div
      className="mx-auto w-full max-w-6xl"
    >
      <article className="relative h-[32rem] overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_14px_36px_-18px_rgba(27,42,82,0.3)] sm:h-[28rem] lg:h-[25rem]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-[var(--color-primary)]" />
        <div className="grid h-full grid-rows-[1fr_11rem] lg:grid-cols-[1.8fr_1fr] lg:grid-rows-1">
          <div className="order-2 relative min-h-0 bg-[var(--color-background)] lg:order-2">
            {activeMember.photo && failedImageId !== activeMember.id ? (
              <img
                key={activeMember.id}
                src={activeMember.photo}
                alt={activeMember.name}
                loading="lazy"
                decoding="async"
                onError={() => setFailedImageId(activeMember.id)}
                className="absolute left-1/2 top-3 size-44 -translate-x-1/2 rounded-full border-4 border-white object-cover object-top shadow-[0_10px_24px_-10px_rgba(27,42,82,0.35)] sm:top-1/2 sm:size-52 sm:-translate-y-1/2 lg:top-1/2 lg:size-56 lg:-translate-y-1/2"
              />
            ) : (
              <div className="flex size-full items-start justify-center bg-[var(--color-background)] pt-3 sm:items-center sm:pt-0">
                <span className="flex size-44 items-center justify-center rounded-full border-4 border-white bg-linear-to-b from-[var(--color-primary)] to-[#0E1730] text-2xl font-bold text-white/45 shadow-[0_10px_24px_-10px_rgba(27,42,82,0.35)] sm:size-52 lg:size-56">
                  {initials(activeMember.name)}
                </span>
              </div>
            )}
          </div>

          <div className="order-1 flex flex-col justify-center p-8 pb-16 sm:p-12 sm:pb-16 lg:order-1 lg:p-14 lg:pb-16">
            <span aria-hidden="true" className="font-heading text-6xl leading-none text-[var(--color-primary)]/20">&ldquo;</span>
            <p className="mt-4 max-w-lg text-base leading-7 text-[var(--color-primary)] sm:text-lg">
              {activeMember.description ?? "A valued member of the KWT community."}
            </p>
            <p className="mt-7 text-base font-medium text-[var(--color-primary)] sm:text-lg">
              &mdash; {activeMember.name}
              {activeMember.role && ","}
            </p>
            {activeMember.role && (
              <p className="mt-1 text-sm font-medium text-[var(--color-secondary)] sm:text-base">
                {activeMember.role}
              </p>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-center gap-3 border-t border-hairline bg-[var(--color-background)]/80" role="tablist" aria-label="Member spotlights">
        {items.map((member, index) => (
          <button
            key={member.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${member.name}`}
            onClick={() => setActiveIndex(index)}
            className={`size-3 rounded-full border-2 border-[var(--color-primary)]/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/35 focus-visible:ring-offset-2 ${
              index === activeIndex
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] shadow-[0_0_0_3px_rgba(27,42,82,0.12)]"
                : "bg-transparent hover:bg-[var(--color-primary)]/20"
            }`}
          />
        ))}
        </div>
      </article>
    </div>
  );
}
