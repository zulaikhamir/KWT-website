/**
 * MembershipModal
 *
 * Two-card dialog that splits the membership CTA into:
 *   • Join to Learn    → KWT membership application (existing form)
 *   • Join to Contribute → volunteer / contributor form (new link)
 *
 * Usage — controlled externally via open / onOpenChange props,
 * OR as a self-contained trigger by passing a `trigger` element.
 *
 * Both variants are supported so every call-site can wire it
 * the way that fits best without duplicating state logic.
 */

import { Dialog } from "@base-ui/react";
import { ArrowUpRight, BookOpen, HandHelping, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── URLs ─────────────────────────────────────────────────────────────────────
export const MEMBERSHIP_LEARN_URL       = "https://tally.so/r/686aVB";
export const MEMBERSHIP_CONTRIBUTE_URL  = "https://tally.so/r/9qjB64";

// ─── Card data ────────────────────────────────────────────────────────────────
const PATHS = [
  {
    icon:        BookOpen,
    eyebrow:     "Join to Learn",
    heading:     "I want to learn & connect",
    description:
      "Join KWT to learn from the community, attend sessions, discover jobs and internships, and connect with Kashmiri women across technology.",
    cta:         "Join to Learn",
    href:        MEMBERSHIP_LEARN_URL,
  },
  {
    icon:        HandHelping,
    eyebrow:     "Join to Contribute",
    heading:     "I want to give back",
    description:
      "Contribute to KWT by volunteering, mentoring, speaking, organising, sharing opportunities, or lending your skills to help the community grow.",
    cta:         "Join to Contribute",
    href:        MEMBERSHIP_CONTRIBUTE_URL,
  },
] as const;

// ─── Props ────────────────────────────────────────────────────────────────────
interface MembershipModalProps {
  /** When provided the modal manages its own open state via Dialog.Trigger. */
  trigger?: React.ReactNode;
  /** Controlled open state — use when the trigger lives outside this component. */
  open?: boolean;
  /** Controlled state setter. */
  onOpenChange?: (open: boolean) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function MembershipModal({
  trigger,
  open,
  onOpenChange,
}: MembershipModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>

      {/* Self-contained trigger (optional) */}
      {trigger && <Dialog.Trigger render={<span />}>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        {/* ── Backdrop ──────────────────────────────────────────────────── */}
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-40",
            "bg-[var(--color-primary)]/40 backdrop-blur-sm",
            "transition-opacity duration-200",
            "data-[open]:opacity-100 data-[closed]:opacity-0",
          )}
        />

        {/* ── Popup ─────────────────────────────────────────────────────── */}
        <Dialog.Popup
          className={cn(
            // Position
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            // Size
            "w-full max-w-2xl px-4",
            // Entry / exit animation
            "transition-[opacity,transform] duration-200",
            "data-[open]:opacity-100 data-[open]:scale-100",
            "data-[closed]:opacity-0 data-[closed]:scale-[0.97]",
          )}
        >
          <div className="relative rounded-3xl border border-hairline bg-[var(--color-bg-base)] shadow-[0_24px_64px_-16px_rgba(27,42,82,0.22)] overflow-hidden">

            {/* ── Header ──────────────────────────────────────────────── */}
            <div className="px-8 pt-8 pb-6 border-b border-hairline">
              <Dialog.Title className="subheading text-[var(--color-primary)]">
                How would you like to join?
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm text-[var(--color-secondary)]">
                Choose the path that fits you best — you can always do both.
              </Dialog.Description>
            </div>

            {/* ── Cards ───────────────────────────────────────────────── */}
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              {PATHS.map(({ icon: Icon, eyebrow, heading, description, cta, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    "group flex flex-col gap-5 rounded-2xl border border-hairline bg-white p-6",
                    "transition-all duration-200",
                    "hover:border-[var(--color-primary)]/25",
                    "hover:shadow-[0_8px_28px_-8px_rgba(27,42,82,0.14)]",
                    "hover:-translate-y-0.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
                  )}
                >
                  {/* Icon */}
                  <span
                    className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    <Icon
                      className="size-[1.1rem] text-[var(--color-primary)]"
                      strokeWidth={1.75}
                    />
                  </span>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <p className="eyebrow">{eyebrow}</p>
                    <h3 className="subheading">{heading}</h3>
                    <p className="mt-1 text-[0.9rem] leading-6 text-[var(--color-secondary)]">
                      {description}
                    </p>
                  </div>

                  {/* CTA row */}
                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] border-b border-[var(--color-primary)]/25 pb-px self-start group-hover:border-[var(--color-primary)] transition-colors duration-150">
                    {cta}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* ── Close button ────────────────────────────────────────── */}
            <Dialog.Close
              className={cn(
                "absolute right-5 top-5",
                "inline-flex size-8 items-center justify-center rounded-full",
                "text-[var(--color-secondary)] hover:bg-[var(--color-primary)]/[0.06] hover:text-[var(--color-primary)]",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
              )}
              aria-label="Close"
            >
              <X size={16} strokeWidth={2} />
            </Dialog.Close>

          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
