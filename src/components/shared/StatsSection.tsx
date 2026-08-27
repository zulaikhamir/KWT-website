import { CalendarCheck2, Globe, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { KWT_STATS, type StatItem } from "@/data/stats";
import { useCountUp, useInView } from "@/hooks/useCountUp";

// ─── Icon map ─────────────────────────────────────────────────────────────────
const STAT_ICON = {
  members: Users,
  sessions: CalendarCheck2,
  countries: Globe,
} as const satisfies Record<NonNullable<StatItem["icon"]>, typeof Users>;

// ─── Single stat ──────────────────────────────────────────────────────────────
function Stat({ value, label, context, icon }: StatItem) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const displayValue = useCountUp(value, inView);
  const Icon = icon ? STAT_ICON[icon] : null;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-center justify-center px-6 py-10 text-center flex-1",
        "transition-colors duration-300 hover:bg-white/[0.03]",
      )}
    >
      {Icon && (
        <span
          aria-hidden="true"
          className="mb-4 flex size-9 items-center justify-center rounded-lg bg-white/8 text-white/50 ring-1 ring-white/10"
        >
          <Icon size={16} strokeWidth={1.75} />
        </span>
      )}

      <span
        className={cn(
          "font-heading text-[3rem] font-bold leading-none tracking-[-0.045em] tabular-nums text-white",
          "sm:text-[3.5rem]",
        )}
      >
        {displayValue}
      </span>

      <span className="mt-3 text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-white/55">
        {label}
      </span>
      {context && (
        <span className="mt-1.5 text-[11px] font-mono text-white/30 tracking-tight max-w-[14rem]">
          {context}
        </span>
      )}
    </div>
  );
}

// ─── Stats panel ──────────────────────────────────────────────────────────────
export default function StatsSection() {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl",
        "bg-navy-deep",
        "ring-1 ring-white/10",
        "shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2),0_20px_48px_-16px_rgba(17,28,58,0.6)]",
      )}
    >
      {/* Top-edge hairline highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Stats row with vertical dividers */}
      <div className="flex flex-col sm:flex-row">
        {KWT_STATS.map((stat, index) => (
          <div key={stat.label} className="flex flex-1">
            <Stat {...stat} />
            {/* Vertical divider - show between items but not after last */}
            {index < KWT_STATS.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden sm:block w-px bg-white/8"
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom-edge hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}
