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
    // <section
    //   id={id}
    //   className={cn(
    //     "w-full",
    //     tone === "surface" && "bg-[var(--color-bg-surface)]",
    //     divided && "border-t border-hairline"
    //   )}
    // >
    <section
  id={id}
  className={cn(
    "w-full overflow-x-hidden",   // ← add overflow-x-hidden here
    tone === "surface" && "bg-[var(--color-bg-surface)]",
    divided && "border-t border-hairline"
  )}
>
      <div className={cn("mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:px-8", className)}>
        {children}
      </div>
    </section>
  );
}
