import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Mic2, Building2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

// ─── Card data ───────────────────────────────────────────────────────────────
const CARDS = [
  {
    icon:  <HeartHandshake size={20} strokeWidth={1.6} />,
    title: "Volunteer",
    body:  "Help with events, content, community operations, and more. Every contribution strengthens KWT.",
    cta:   "Start Volunteering",
    href:  "/volunteer",
  },
  {
    icon:  <Mic2 size={20} strokeWidth={1.6} />,
    title: "Become a Mentor",
    body:  "Share your experience, guide others through their journeys, and help create real impact.",
    cta:   "Apply to Mentor",
    href:  "/mentorship",
  },
  {
    icon:  <Building2 size={20} strokeWidth={1.6} />,
    title: "Partner With Us",
    body:  "Collaborate with KWT as a university, company, nonprofit, or community organisation.",
    cta:   "Learn More",
    href:  "/partners",
  },
  {
    icon:  <Sparkles size={20} strokeWidth={1.6} />,
    title: "Sponsor KWT",
    body:  "Support KWT events and community initiatives. Help us build what matters.",
    cta:   "Sponsor",
    href:  "/sponsor",
  },
] as const;

// ─── Involvement card ────────────────────────────────────────────────────────
function InvolvementCard(props: (typeof CARDS)[number]) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-6",
        "rounded-2xl border border-[#E5E7EB] bg-white",
        "hover:border-[var(--color-primary)]/20",
        "hover:shadow-[0_4px_20px_-6px_rgba(27,42,82,0.1)]",
        "transition-all duration-200",
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          "bg-[var(--color-accent)]/60 border border-[var(--color-accent)]",
          "text-[var(--color-primary)]",
        )}
        aria-hidden="true"
      >
        {props.icon}
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="text-base font-semibold text-[var(--color-primary)]">
          {props.title}
        </h3>
        <p className="text-sm leading-6 text-[var(--color-secondary)]">
          {props.body}
        </p>
      </div>

      {/* CTA link */}
      <Link
        to={props.href}
        className={cn(
          "self-start inline-flex items-center gap-1",
          "text-xs font-semibold text-[var(--color-primary)]",
          "border-b border-[var(--color-primary)]/25 pb-px",
          "hover:border-[var(--color-primary)]",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
        )}
      >
        {props.cta}
        <ArrowRight size={11} strokeWidth={2.4} />
      </Link>
    </div>
  );
}

// ─── Get Involved ────────────────────────────────────────────────────────────
export default function GetInvolved() {
  return (
    <SectionWrapper id="get-involved">
      <SectionHeading
        align="center"
        title="Help Build KWT"
        description="KWT is built through community contribution. There are many ways to get involved."
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {CARDS.map((card) => (
          <InvolvementCard key={card.title} {...card} />
        ))}
      </div>
    </SectionWrapper>
  );
}
