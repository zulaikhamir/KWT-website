import { CalendarCheck2, Globe, Plus, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { KWT_STATS, type StatItem } from "@/data/stats";
import { useCountUp, useInView } from "@/hooks/useCountUp";

// ─── Icon map ─────────────────────────────────────────────────────────────────
// Keyed off StatItem["icon"] so the data file stays free of component imports.
const STAT_ICON = {
  members: Users,
  sessions: CalendarCheck2,
  countries: Globe,
} as const satisfies Record<NonNullable<StatItem["icon"]>, typeof Users>;

// Blueprint-style crosshairs, one per panel corner.
const CORNER_POSITIONS = [
  "left-3 top-3",
  "right-3 top-3",
  "left-3 bottom-3",
  "right-3 bottom-3",
] as const;

// ─── Single stat ──────────────────────────────────────────────────────────────
function Stat({ value, label, context, icon }: StatItem) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const displayValue = useCountUp(value, inView);
  const Icon = icon ? STAT_ICON[icon] : null;

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col items-center px-6 py-9 text-center",
        "transition-colors duration-300 hover:bg-white/[0.035]",
      )}
    >
      {/* Accent hairline that lights up on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-8 top-0 h-px opacity-0",
          "bg-linear-to-r from-transparent via-[var(--color-accent)]/70 to-transparent",
          "transition-opacity duration-300 group-hover:opacity-100",
        )}
      />

      {Icon && (
        <span
          aria-hidden="true"
          className={cn(
            "mb-5 flex size-10 items-center justify-center rounded-xl",
            "border border-white/10 bg-white/[0.06] text-[var(--color-accent)]",
            "transition-colors duration-300",
            "group-hover:border-[var(--color-accent)]/40 group-hover:bg-[var(--color-accent)]/10",
          )}
        >
          <Icon size={17} strokeWidth={1.75} />
        </span>
      )}

      <span
        className={cn(
          "font-heading text-[2.75rem] font-bold leading-none tracking-[-0.04em] tabular-nums",
          "bg-linear-to-b from-white to-[var(--color-accent)] bg-clip-text text-transparent",
        )}
      >
        {displayValue}
      </span>

      <span className="mt-3 text-sm font-medium text-white">{label}</span>
      <span className="mt-1 font-mono text-[11px] tracking-tight text-white/45">
        {context}
      </span>
    </div>
  );
}

// ─── Stats panel ──────────────────────────────────────────────────────────────
export default function StatsSection() {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-3xl overflow-hidden rounded-3xl isolate",
        "border border-white/10 bg-navy-deep",
        "shadow-[0_2px_8px_-2px_rgba(27,42,82,0.18),0_28px_60px_-24px_rgba(17,28,58,0.55)]",
      )}
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(234,230,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Lavender glow behind the numbers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234,230,255,0.22) 0%, transparent 70%)",
        }}
      />
      {/* Top edge highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
      />

      {/* Corner crosshairs */}
      {CORNER_POSITIONS.map((position) => (
        <Plus
          key={position}
          aria-hidden="true"
          size={11}
          strokeWidth={1.5}
          className={cn("pointer-events-none absolute text-white/20", position)}
        />
      ))}


      {/* Stats grid */}
      <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {KWT_STATS.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
