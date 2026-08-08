import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Standard horizontal-padding + max-width wrapper.
 * Used inside sections that manage their own vertical padding.
 */
export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
