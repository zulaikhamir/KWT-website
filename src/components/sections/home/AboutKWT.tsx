import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GraduationCap, UsersThree, Ladder, HandHeart } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PILLARS = [
  {
    icon:  GraduationCap,
    label: "Learn",
    desc:  "Workshops, talks, and curated resources spanning technology, engineering, research, and more.",
  },
  {
    icon:  UsersThree,
    label: "Connect",
    desc:  "A community of Kashmiri women across disciplines, career stages, and geographies.",
  },
  {
    icon:  Ladder,
    label: "Grow",
    desc:  "Mentorship, career opportunities, and a network that opens real doors across STEM fields.",
  },
  {
    icon:  HandHeart,
    label: "Give Back",
    desc:  "Contribute your expertise and experience to strengthen the next generation of Kashmiri women in TECH.",
  },
] as const;

type PillarCardProps = (typeof PILLARS)[number] & { className?: string };

function PillarCard({ icon: Icon, label, desc, className }: PillarCardProps) {
  return (
    <li className={cn("surface-card surface-card-interactive flex flex-col p-7", className)}>
      <span
        className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]"
        aria-hidden="true"
      >
        <Icon className="size-[1.3rem] text-[var(--color-primary)]" weight="duotone" />
      </span>
      <h3 className="subheading mt-6">{label}</h3>
      <p className="mt-3 text-[0.9375rem] leading-7 text-[var(--color-secondary)]">{desc}</p>
    </li>
  );
}

// ─── About KWT ────────────────────────────────────────────────────────────────
export default function AboutKWT() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper tone="surface" divided>
      <div ref={ref}>
        <SectionHeading
          eyebrow="About KWT"
          title="A community built by and for Kashmiri women in TECH."
          description="KWT brings together Kashmiri women across technology, engineering, science, and research — at every stage of their journey — to learn, discover opportunities, build meaningful connections, and give back."
          className="mb-12 kwt-reveal"
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <PillarCard
              key={p.label}
              {...p}
              className={cn("kwt-reveal", `kwt-stagger-${(i + 1) as 1 | 2 | 3 | 4}`)}
            />
          ))}
        </ul>

        <div className="mt-10 kwt-reveal kwt-stagger-4">
          <Link
            to="/about"
            className={cn(
              "inline-flex items-center gap-2",
              "text-[0.9375rem] font-medium tracking-[-0.005em] text-[var(--color-primary)]",
              "border-b border-[var(--color-primary)]/30 pb-px",
              "hover:border-[var(--color-primary)]",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
            )}
          >
            Learn more about KWT
            <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
