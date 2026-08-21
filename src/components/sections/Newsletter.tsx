import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Newsletter() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Placeholder — wire up a real provider (Mailchimp, ConvertKit, etc.) here.
    setSubmitted(true);
  }

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

        {/* Form / Success */}
        <div>
          {submitted ? (
            <p
              role="status"
              className={cn(
                "inline-flex items-center gap-2 rounded-full",
                "border border-[var(--color-accent)] bg-[var(--color-accent)]/60",
                "px-5 py-2.5 text-sm font-medium text-[var(--color-primary)]",
              )}
            >
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-60" />
              You're on the list — thanks for joining!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <div className="relative w-full sm:max-w-sm">
                {/* Visually-hidden label for screen readers */}
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                  aria-describedby={error ? "newsletter-email-error" : undefined}
                  aria-invalid={error ? "true" : undefined}
                  className={cn(
                    "w-full rounded-full border px-5 py-3",
                    "text-sm text-[var(--color-primary)] placeholder:text-[var(--color-secondary)]/50",
                    "bg-white outline-none transition-colors duration-150",
                    error
                      ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-hairline focus:border-[var(--color-primary)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/10",
                  )}
                />
              </div>

              <button
                type="submit"
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
              </button>
            </form>
          )}

          {/* Inline error */}
          {error && (
            <p
              id="newsletter-email-error"
              role="alert"
              className="mt-3 text-sm text-red-500"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
