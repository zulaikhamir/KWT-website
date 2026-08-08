import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  /** "left" (default) or "center" */
  align?: "left" | "center";
  /** Max width class for the body text */
  bodyMaxWidth?: string;
  className?: string;
}

/**
 * Reusable section heading block:
 *   optional eyebrow pill → h2 heading → optional supporting paragraph
 *
 * Maintains consistent typographic hierarchy across all homepage sections.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  bodyMaxWidth = "max-w-2xl",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            "rounded-full border border-[var(--color-accent)]",
            "bg-[var(--color-accent)]/60 px-3.5 py-1",
            "text-xs font-semibold tracking-[0.18em] uppercase",
            "text-[var(--color-primary)]",
            align === "left" ? "self-start" : "self-center",
          )}
        >
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-50"
          />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight",
          "text-[var(--color-primary)]",
        )}
      >
        {heading}
      </h2>

      {body && (
        <p
          className={cn(
            "mt-4 text-base sm:text-[1.05rem] leading-7 text-[var(--color-secondary)]",
            bodyMaxWidth,
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
