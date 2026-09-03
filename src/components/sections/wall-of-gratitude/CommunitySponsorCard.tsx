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

/** Logo-led card for organisations supporting the community. */
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
    <article className="surface-card surface-card-interactive group relative flex min-h-52 flex-col items-center overflow-hidden bg-linear-to-br from-white to-[var(--color-accent)]/25 p-5 text-center">
      <div aria-hidden="true" className="absolute -right-8 -top-8 size-24 rounded-full bg-[var(--color-accent)]/45" />
      <div aria-hidden="true" className="absolute inset-x-0 top-4 flex items-center justify-center">
        <span className="h-px w-3/5 bg-linear-to-r from-transparent via-[var(--color-primary)]/18 to-transparent" />
      </div>
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit ${sponsor.name} website`}
          className="relative mt-3 flex h-28 w-28 items-center justify-center rounded-2xl border border-[var(--color-primary)]/10 bg-white p-5 shadow-[0_10px_24px_-14px_rgba(27,42,82,0.32)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 motion-reduce:transition-none"
        >
          {logo}
        </a>
      ) : (
        <div className="relative mt-3 flex h-28 w-28 items-center justify-center rounded-2xl border border-[var(--color-primary)]/10 bg-white p-5 shadow-[0_10px_24px_-14px_rgba(27,42,82,0.32)]">
          {logo}
        </div>
      )}
      <h3 className="relative subheading mt-5">{sponsor.name}</h3>
    </article>
  );
}
