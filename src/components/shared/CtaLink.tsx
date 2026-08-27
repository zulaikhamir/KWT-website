import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CtaLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function CtaLink({
  href,
  children,
  variant = "solid",
  className,
  ...anchorProps
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full px-6 py-3",
        "text-[0.9375rem] font-medium tracking-[-0.005em] transition-all duration-200",
        variant === "solid"
          ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.55)]"
          : "border border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)]/[0.04]",
        className
      )}
      {...anchorProps}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
