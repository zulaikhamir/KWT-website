import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TALLY_URL = "https://tally.so/r/81b72x";

export default function Newsletter() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper divided>
      <div ref={ref} className="mx-auto max-w-2xl text-center kwt-reveal-fade">
        <SectionHeading
          align="center"
          eyebrow="Stay in the loop"
          title="Get KWT updates"
          description="Events, opportunities, and community news — delivered straight to your inbox. No spam, unsubscribe any time."
          className="mb-10"
        />

        <a
          href={TALLY_URL}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "group inline-flex shrink-0 items-center gap-1.5",
            "rounded-full bg-[var(--color-primary)] px-6 py-3",
            "text-sm font-medium tracking-[-0.005em] text-white",
            "hover:bg-[var(--color-primary)]/90",
            "hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.55)]",
            "active:scale-[0.98] transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
          )}
        >
          Subscribe
          <ArrowRight
            size={14}
            strokeWidth={2.2}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </SectionWrapper>
  );
}
