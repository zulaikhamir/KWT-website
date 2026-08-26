import { ArrowRight } from "lucide-react";
import { IdentificationBadge, Toolbox, Handshake, Gift } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Cards ────────────────────────────────────────────────────────────────────
type CardDef =
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "anchor"; href: string }
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "external"; href: string }
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "internal"; href: string };

const CARDS: CardDef[] = [
  {
    icon:   IdentificationBadge,
    title:  "Become a Member",
    body:   "Join Kashmiri women in technology, engineering, science, and research at every stage of their journey.",
    cta:    "Join the Community",
    action: "anchor",
    href:   "#membership-paths",
  },
  {
    icon:   Toolbox,
    title:  "Volunteer",
    body:   "Help with events, content, community, partnerships, or operations.",
    cta:    "Start Volunteering",
    action: "external",
    href:   "https://tally.so/r/44leEO",
  },
  {
    icon:   Handshake,
    title:  "Partner With Us",
    body:   "Work with KWT through your university, company, nonprofit, or community.",
    cta:    "Partner With Us",
    action: "internal",
    href:   "/get-involved#partner",
  },
  {
    icon:   Gift,
    title:  "Sponsor KWT",
    body:   "Support KWT events, programs, and the work we are building together.",
    cta:    "Sponsor KWT",
    action: "internal",
    href:   "/get-involved#sponsor",
  },
];

// ─── Shared CTA style ─────────────────────────────────────────────────────────
const ctaClasses = cn(
  "mt-6 self-start inline-flex items-center gap-1.5",
  "text-[0.875rem] font-medium text-[var(--color-primary)]",
  "border-b border-[var(--color-primary)]/30 pb-px",
  "hover:border-[var(--color-primary)]",
  "transition-colors duration-150",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
);

// ─── Card ─────────────────────────────────────────────────────────────────────
function InvolvementCard({
  card,
  className,
}: {
  card: CardDef;
  className?: string;
}) {
  const { icon: Icon, title, body, cta } = card;

  const ctaContent = (
    <>
      {cta}
      <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
    </>
  );

  let ctaNode: React.ReactNode;
  if (card.action === "anchor") {
    ctaNode = (
      <a href={card.href} className={ctaClasses}>
        {ctaContent}
      </a>
    );
  } else if (card.action === "external") {
    ctaNode = (
      <a href={card.href} target="_blank" rel="noreferrer noopener" className={ctaClasses}>
        {ctaContent}
      </a>
    );
  } else {
    ctaNode = (
      <Link to={card.href} className={ctaClasses}>
        {ctaContent}
      </Link>
    );
  }

  return (
    <li className={cn("surface-card surface-card-interactive flex flex-col p-7", className)}>
      <span
        className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]"
        aria-hidden="true"
      >
        <Icon className="size-[1.3rem] text-[var(--color-primary)]" weight="duotone" />
      </span>

      <h3 className="subheading mt-6">{title}</h3>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">
        {body}
      </p>

      {ctaNode}
    </li>
  );
}

// ─── Get Involved section ─────────────────────────────────────────────────────
export default function GetInvolved() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper tone="surface" divided id="get-involved">
      <div ref={ref}>
       <SectionHeading
  align="center"
  title="Get involved with KWT"
  description="Join the community, volunteer your time, share what you know, or help us build what comes next."
  className="mb-12 kwt-reveal"
/>


        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <InvolvementCard
              key={card.title}
              card={card}
              className={cn("kwt-reveal", `kwt-stagger-${(i + 1) as 1 | 2 | 3 | 4}`)}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
