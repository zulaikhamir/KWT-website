import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** "white" = #FCFCFE (default), "surface" = very light off-white for visual rhythm */
  bg?: "white" | "surface";
  id?: string;
}

/**
 * Consistent section shell used across all homepage sections.
 * Handles horizontal padding, max-width centering, and alternating backgrounds.
 */
export default function SectionWrapper({
  children,
  className,
  bg = "white",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20",
        bg === "surface" ? "bg-[#F8FAFC]" : "bg-[var(--color-background)]",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {children}
      </div>
    </section>
  );
}
