import type { Sponsor } from "@/data/wall-of-gratitude";

type CommunitySponsorCardProps = {
  sponsor: Sponsor;
};

function safeWebsite(value?: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

/** Floating logo for organisations supporting the community. */
export default function CommunitySponsorCard({ sponsor }: CommunitySponsorCardProps) {
  const website = safeWebsite(sponsor.website);
  const logo = sponsor.logo ? (
    <img
      src={sponsor.logo}
      alt={`${sponsor.name} logo`}
      loading="lazy"
      decoding="async"
      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
    />
  ) : (
    <span aria-hidden="true" className="text-sm font-semibold tracking-[0.14em] text-[var(--color-primary)]/65">LOGO</span>
  );

  return (
    <article className="group flex min-h-52 flex-col items-center justify-center p-5 text-center">
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${sponsor.name} website`}
          className="relative flex h-28 w-40 items-center justify-center p-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 motion-reduce:transition-none"
        >
          {logo}
        </a>
      ) : (
        <div className="relative flex h-28 w-40 items-center justify-center p-3">
          {logo}
        </div>
      )}
      <h3 className="relative subheading mt-5">{sponsor.name}</h3>
    </article>
  );
}
