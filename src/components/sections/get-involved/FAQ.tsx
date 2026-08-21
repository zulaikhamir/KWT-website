import { Plus } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const faqs = [
  {
    question: "How do I join KWT?",
    answer:
      "You can join KWT by filling out our membership form, linked on the Get Involved page. Once your request is processed, you'll receive information about joining the community.",
  },
  {
    question: "Is membership free?",
    answer:
      "Yes. KWT membership is currently free. Our goal is to make the community accessible to Kashmiri women at different stages of their technology and STEM journeys.",
  },
  {
    question: "Do I need to work in tech already?",
    answer:
      "No. KWT is intended for Kashmiri women at different stages of their journey, including students, beginners, researchers, and professionals. You don't need to already be working in technology to participate.",
  },
  {
    question: "Can I take part remotely?",
    answer:
      "Yes. KWT includes online community activities, discussions, and sessions, while some activities may also take place in person. The format will depend on the specific event or initiative.",
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
