import type { Sponsor } from "@/data/wall-of-gratitude";
import { ArrowRight } from "lucide-react";

type SponsorCardProps = {
    sponsor: Sponsor;
};

export default function SponsorCard({ sponsor }: SponsorCardProps) {
    // In https data is encrypted 
    const website = sponsor.website?.startsWith("https://") 
        ? sponsor.website
        : undefined;

    return (
        <article className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-[0_2px_12px_-4px_rgba(27,42,82,0.07)] hover:border-[var(--color-primary)]/20  hover:shadow-[0_4px_20px_-6px_rgba(27,42,82,0.1)] transition-all duration-200 sm:p-7">
            {sponsor.logo ? (
                <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    loading="lazy"
                    className="h-28 w-36 rounded-xl object-contain sm:h-32 sm:w-40"
                />
            ) : (
                <div
                    aria-hidden="true"
                    className="flex h-28 w-36 items-center justify-center rounded-xl bg-[var(--color-accent)]/60 text-sm font-bold tracking-[0.16em] text-[var(--color-primary)] sm:h-32 sm:w-40"
                >
                    LOGO
                </div>
            )}

            <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">
                {sponsor.name}
            </h3>

            {website && (
                <a
                    href={website}
                    target="_blank" 
                    rel="noopener noreferrer" // Prevent the opened page from accessing the original tab.
                    className="mt-3 inline-flex items-center gap-1 self-center border-b border-[var(--color-primary)]/25 pb-px text-xs font-semibold text-[var(--color-primary)] transition-colors duration-150 hover:border-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30"
                >
                    Visit website
                    <ArrowRight size={11} strokeWidth={2.4} aria-hidden="true" />
                </a>
            )}
        </article>
    );
}
