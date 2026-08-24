import { useState } from "react";
import { ArrowRight, UserPlus, HeartHandshake, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import MembershipModal from "@/components/shared/MembershipModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Cards ────────────────────────────────────────────────────────────────────
type CardDef =
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "modal" }
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "external"; href: string }
  | { icon: React.ElementType; title: string; body: string; cta: string; action: "internal"; href: string };

const CARDS: CardDef[] = [
  {
    icon:   UserPlus,
    title:  "Become a Member",
    body:   "KWT is open to all Kashmiri women in technology, engineering, science, and research — at any stage of their journey.",
    cta:    "Join the Community",
    action: "modal",
  },
  {
    icon:   HeartHandshake,
    title:  "Volunteer",
    body:   "Help with events, content, community operations, and more. Every contribution strengthens KWT.",
    cta:    "Start Volunteering",
    action: "external",
    href:   "https://tally.so/r/44leEO",
  },
  {
    icon:   Building2,
    title:  "Partner With Us",
    body:   "Collaborate with KWT as a university, company, nonprofit, or community organisation.",
    cta:    "Partner with us",
    action: "internal",
    href:   "/get-involved#partner",
  },
  {
    icon:   Sparkles,
    title:  "Sponsor KWT",
    body:   "Support KWT events and community initiatives. Help us build what matters.",
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
function InvolvementCard({ card, onMemberClick }: { card: CardDef; onMemberClick: () => void }) {
  const { icon: Icon, title, body, cta } = card;

  const ctaContent = (
    <>
      {cta}
      <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
    </>
  );

  let ctaNode: React.ReactNode;
  if (card.action === "modal") {
    ctaNode = (
      <button type="button" onClick={onMemberClick} className={ctaClasses}>
        {ctaContent}
      </button>
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
    <li className="surface-card surface-card-interactive flex flex-col p-7">
      <span
        className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent-solid)]"
        aria-hidden="true"
      >
        <Icon className="size-[1.15rem] text-[var(--color-primary)]" strokeWidth={1.75} />
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SectionWrapper tone="surface" divided id="get-involved">
      <MembershipModal open={modalOpen} onOpenChange={setModalOpen} />

      <div ref={ref}>
        <SectionHeading
          align="center"
          title="Get involved with KWT"
          description="KWT is built through community contribution. There are many ways to join and make an impact."
          className="mb-12 kwt-reveal"
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={cn("kwt-reveal", `kwt-stagger-${(i + 1) as 1 | 2 | 3 | 4}`)}
            >
              <InvolvementCard card={card} onMemberClick={() => setModalOpen(true)} />
            </div>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
