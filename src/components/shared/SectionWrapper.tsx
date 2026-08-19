import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "default" | "surface";
  divided?: boolean;
};

export default function SectionWrapper({
  children,
  id,
  className,
  tone = "default",
  divided = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        tone === "surface" && "bg-surface",
        divided && "border-t border-hairline"
      )}
    >
      <div className={cn("mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8", className)}>
        {children}
      </div>
    </section>
  );
}
