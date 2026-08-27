import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "start" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "start",
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Title className={cn(as === "h1" ? "display" : "heading", eyebrow && "mt-5")}>
        {title}
      </Title>

      {description && <p className="lede mt-5">{description}</p>}
    </div>
  );
}
