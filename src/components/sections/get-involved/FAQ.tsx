import { Plus } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { faqs, type FaqItem } from "@/data/get-involved";

// ─── link helper ─────────────────────────────────────────────────────────────
function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-[var(--color-primary)] underline underline-offset-2 hover:opacity-70 transition-opacity"
    >
      {children}
    </a>
  );
}

/**
 * Answers are plain strings so the copy can live in the data layer. The one
 * answer that needs a link marks its position with a `{link}` placeholder,
 * which is swapped for an anchor here — keeping the markup in the component
 * where it belongs, and the sentence intact in the data.
 */
function renderAnswer({ answer, link }: FaqItem) {
  if (!link) return answer;
  const [before, after = ""] = answer.split("{link}");
  return (
    <>
      {before}
      <A href={link.href}>{link.label}</A>
      {after}
    </>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" tone="surface" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Questions</p>
          <h2 className="heading mt-5">Frequently asked</h2>
        </div>

        <dl className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <dt className="subheading transition-colors group-hover:text-[var(--color-primary)]/70">
                  {faq.question}
                </dt>
                <Plus
                  className="mt-0.5 size-5 shrink-0 text-[var(--color-secondary)] transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <dd className="mt-4 max-w-2xl text-[1.0625rem] leading-7 text-[var(--color-secondary)]">
                {renderAnswer(faq)}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
