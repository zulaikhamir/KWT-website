import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MembershipModal from "@/components/shared/MembershipModal";
import { cn } from "@/lib/utils";
const benefits = [
  "Learn through discussions, sessions, and conversations with women across tech.",
  "Discover jobs, internships, events, research opportunities, and useful resources.",
  "Build your network with Kashmiri women studying, researching, and working in different fields.",
  "Give back by sharing what you know, supporting others, and contributing to the community.",
];

export default function BecomeMember() {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper id="become-member" tone="surface" divided>
      <MembershipModal open={open} onOpenChange={setOpen} />

      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
       <p className="eyebrow">For individuals</p>

<h2 className="heading mt-5">Choose your path</h2>

<p className="lede mt-5">
  Whether you want to join KWT to learn and connect, or contribute your
  time and skills, there is a place for you here.
</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "group mt-9 inline-flex items-center gap-1.5 rounded-full px-6 py-3",
              "text-[0.9375rem] font-medium tracking-[-0.005em] transition-all duration-200",
              "bg-[var(--color-primary)] text-white",
              "hover:bg-[var(--color-primary)]/90",
              "hover:shadow-[0_10px_28px_-10px_rgba(27,42,82,0.55)]",
              "active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
            )}
          >
            Join the Community
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-4 py-6">
              <Check
                className="mt-1 size-[1.15rem] shrink-0 text-[var(--color-primary)]"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="text-[1.0625rem] leading-7 text-[var(--color-secondary)]">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
