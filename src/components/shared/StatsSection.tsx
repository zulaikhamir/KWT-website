import { cn } from "@/lib/utils";
import { KWT_STATS } from "@/data/stats";
import { useCountUp, useInView } from "@/hooks/useCountUp";

function Stat({ value, label, context }: { value: string; label: string; context: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const displayValue = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-8">
      <span className="font-heading text-[2.75rem] font-bold leading-none tracking-[-0.04em] tabular-nums text-[var(--color-primary)]">
        {displayValue}
      </span>
      <span className="mt-2 text-sm font-medium text-[var(--color-primary)]">
        {label}
      </span>
      <span className="mt-1 text-xs text-[var(--color-secondary)] opacity-60">
        {context}
      </span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl overflow-hidden rounded-2xl",
        "bg-white border border-hairline",
        "shadow-[0_2px_8px_-2px_rgba(27,42,82,0.08),0_12px_32px_-12px_rgba(27,42,82,0.12)]",
        "grid grid-cols-1 sm:grid-cols-3",
      )}
    >
      {KWT_STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "relative",
            // vertical divider between columns on sm+
            i > 0 && "sm:border-l sm:border-hairline",
          )}
        >
          <Stat value={stat.value} label={stat.label} context={stat.context} />
        </div>
      ))}
    </div>
  );
}
