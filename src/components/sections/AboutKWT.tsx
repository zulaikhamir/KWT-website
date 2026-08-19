import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, TrendingUp, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

// ─── Pillar cards ─────────────────────────────────────────────────────────────
// Icons: outline style, strokeWidth 1.6 — matches GetInvolved section exactly.
const PILLARS = [
  {
    icon:  <BookOpen size={20} strokeWidth={1.6} />,
    label: "Learn",
    desc:  "Workshops, talks, and curated resources spanning technology, engineering, research, and more.",
  },
  {
    icon:  <Users size={20} strokeWidth={1.6} />,
    label: "Connect",
    desc:  "A community of Kashmiri women across disciplines, career stages, and geographies.",
  },
  {
    icon:  <TrendingUp size={20} strokeWidth={1.6} />,
    label: "Grow",
    desc:  "Mentorship, career opportunities, and a network that opens real doors across STEM fields.",
  },
  {
    icon:  <Heart size={20} strokeWidth={1.6} />,
    label: "Give Back",
    desc:  "Contribute your expertise and experience to strengthen the next generation of Kashmiri women in STEM.",
  },
] as const;

// ─── Pillar card ─────────────────────────────────────────────────────────────
function PillarCard(props: (typeof PILLARS)[number]) {
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
      {/* Icon — identical treatment to GetInvolved cards */}
      <div
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
          "bg-[var(--color-accent)]/60 border border-[var(--color-accent)]",
          "text-[var(--color-primary)]",
        )}
        aria-hidden="true"
      >
        {props.icon}
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-[var(--color-primary)]">
          {props.label}
        </h3>
        <p className="text-sm leading-6 text-[var(--color-secondary)]">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

// ─── About KWT ───────────────────────────────────────────────────────────────
export default function AboutKWT() {
  return (


<SectionWrapper tone="surface">
      <SectionHeading
        eyebrow="About KWT"
        title="A community built by and for Kashmiri women in STEM."
        description="KWT brings together Kashmiri women across technology, engineering, science, and research — at every stage of their journey — to learn, discover opportunities, build meaningful connections, and give back."
        className="mb-10"
      />

      {/* 4 pillar cards — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {PILLARS.map((p) => (
          <PillarCard key={p.label} {...p} />
        ))}
      </div>

      {/* Learn More CTA */}
      <div className="mt-10">
        <Link
          to="/about"
          className={cn(
            "inline-flex items-center gap-2",
            "text-sm font-semibold text-[var(--color-primary)]",
            "border-b border-[var(--color-primary)]/30 pb-px",
            "hover:border-[var(--color-primary)]",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
          )}
        >
          Learn More About KWT
          <ArrowRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
