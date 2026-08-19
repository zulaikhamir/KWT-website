import { Plus } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const faqs = [
  {
    question: "[Placeholder] How do I join KWT?",
    answer: "[Placeholder] Explain the steps to become a member and where to start.",
  },
  {
    question: "[Placeholder] Is membership free?",
    answer: "[Placeholder] State any cost, or confirm that membership is free.",
  },
  {
    question: "[Placeholder] Do I need to work in tech already?",
    answer: "[Placeholder] Clarify whether beginners and career switchers are welcome.",
  },
  {
    question: "[Placeholder] Can I take part remotely?",
    answer: "[Placeholder] Explain which activities are online versus in person.",
  },
];

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
                {faq.answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
