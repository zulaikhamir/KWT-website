import { ArrowUpRight, BookOpen, HandHelping } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── URLs ───────────────────────────────────────────────────────────────────── */

export const MEMBERSHIP_LEARN_URL = "https://tally.so/r/686aVB";
export const MEMBERSHIP_CONTRIBUTE_URL = "https://tally.so/r/9qjB64";

/* ─── Card data ──────────────────────────────────────────────────────────────── */

const PATHS = [
  {
    icon: BookOpen,
    eyebrow: "Join to Learn",
    heading: "I want to learn & connect",
    description:
      "Join KWT to learn, discover opportunities, attend sessions, and connect with Kashmiri women in tech.",
    cta: "Join to Learn",
    href: MEMBERSHIP_LEARN_URL,
  },
  {
    icon: HandHelping,
    eyebrow: "Join to Contribute",
    heading: "I want to give back",
    description:
      "Share your skills, mentor, speak, volunteer, or help create opportunities for others.",
    cta: "Join to Contribute",
    href: MEMBERSHIP_CONTRIBUTE_URL,
  },
] as const;

/* ─── Component ──────────────────────────────────────────────────────────────── */

export default function MembershipPathsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper tone="surface" divided id="membership-paths">
      <div ref={ref}>
        <SectionHeading
          align="center"
          eyebrow="For individuals"
          title="How would you like to get involved?"
          description="Choose the path that fits you best. You can always do both."
          className="mb-16 kwt-reveal"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {PATHS.map(({ icon: Icon, eyebrow, heading, description, cta, href }, i) => (
            <article
              key={href}
              className={cn(
                "flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white",
                "shadow-[0_2px_10px_-4px_rgba(27,42,82,0.10)]",
                "transition-all duration-300",
                "hover:shadow-[0_12px_40px_-10px_rgba(27,42,82,0.20)]",
                "hover:-translate-y-1",
                "kwt-reveal",
                `kwt-stagger-${(i + 1) as 1 | 2}`,
              )}
            >
              {/* Label band */}
              <div className="border-b border-hairline bg-[var(--color-accent)] px-5 py-3.5 text-center">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]/70">
                  {eyebrow}
                </p>
              </div>

              <div className="flex flex-1 flex-col items-center gap-5 px-8 py-10 text-center">
                <span
                  className="inline-flex size-14 items-center justify-center rounded-xl bg-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  <Icon
                    className="size-6 text-[var(--color-primary)]"
                    strokeWidth={1.75}
                  />
                </span>

                <h3 className="subheading text-[1.125rem]">{heading}</h3>

                <p className="text-[0.9375rem] leading-[1.7] text-[var(--color-secondary)]">
                  {description}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    "group mt-auto inline-flex items-center gap-1.5 rounded-full",
                    "bg-[var(--color-primary)] px-6 py-3",
                    "text-sm font-medium text-white",
                    "transition-all duration-200 active:scale-[0.98]",
                    "hover:bg-[var(--color-primary)]/90",
                    "hover:shadow-[0_8px_20px_-8px_rgba(27,42,82,0.45)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
                  )}
                >
                  {cta}

                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
