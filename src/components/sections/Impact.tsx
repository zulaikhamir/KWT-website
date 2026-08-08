import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

// ─── Stat item ───────────────────────────────────────────────────────────────
interface StatItem {
  value: string;
  label: string;
}

// Replace values with real data when available.
const STATS: StatItem[] = [
  { value: "150+", label: "Members"     },
  { value: "2+",   label: "Events Held" },
  { value: "3+",   label: "Speakers"    },
  { value: "5+",   label: "Volunteers"  },
];

// ─── StatBlock ───────────────────────────────────────────────────────────────
function StatBlock({ stat }: { stat: StatItem }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        "py-8 px-6",
        // Dividers: right border on all except last; on mobile 2-col,
        // suppress right border on even items and top border between rows.
        "border-r border-[#E5E7EB] last:border-r-0",
        "[&:nth-child(2)]:sm:border-r-0 lg:[&:nth-child(2)]:border-r",
        "[&:nth-child(n+3)]:border-t [&:nth-child(n+3)]:sm:border-t-0 lg:[&:nth-child(n+3)]:border-t-0",
      )}
    >
      {/* Value — identical treatment for every stat */}
      <span className="text-4xl sm:text-[2.75rem] font-bold leading-none tracking-tight text-[var(--color-primary)]">
        {stat.value}
      </span>

      {/* Label */}
      <span className="mt-3 text-sm font-medium text-[var(--color-secondary)]">
        {stat.label}
      </span>
    </div>
  );
}

// ─── Impact ──────────────────────────────────────────────────────────────────
export default function Impact() {
  return (
    <SectionWrapper bg="white" id="impact">
      <SectionHeading
        align="center"
        heading="Our Growing Community"
        body="KWT is an active and growing space for Kashmiri women across STEM and technology — here's where we are so far."
        bodyMaxWidth="max-w-xl"
        className="mb-14"
      />

      <div
        className={cn(
          "rounded-2xl border border-[#E5E7EB]",
          "bg-[var(--color-background)]",
          "shadow-[0_2px_16px_-4px_rgba(27,42,82,0.07)]",
          "grid grid-cols-2 lg:grid-cols-4",
          "divide-x-0 lg:divide-x divide-[#E5E7EB]",
        )}
      >
        {STATS.map((stat) => (
          <StatBlock key={stat.label} stat={stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
