import { Plus } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

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

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is KWT?",
    answer:
      "Kashmiri Women in Tech is a community for women in and around technology. We learn, share opportunities, meet people, and grow together.",
  },
  {
    question: "Who is KWT for?",
    answer:
      "Students, aspiring tech professionals, working professionals, researchers, founders, and anyone curious about technology.",
  },
  {
    question: "How do I join KWT?",
    answer: (
      <>
        Fill out the{" "}
        <A href="https://tally.so/r/686aVB">membership form</A>. We review your application and send you the next steps.
      </>
    ),
  },
  {
    question: "Is membership free?",
    answer: "Yes. KWT membership is free.",
  },
  {
    question: "Do I need to work in tech already?",
    answer:
      "No. You can be a student, beginner, career switcher, or simply curious about technology. You do not need prior experience.",
  },
  {
    question: "What can I expect from KWT?",
    answer:
      "Sessions, workshops, community discussions, opportunities, resources, and people you can learn from and build with.",
  },
  {
    question: "Can I participate remotely?",
    answer:
      "Yes. Most KWT activities happen online, so you can join from anywhere.",
  },
  {
    question: "How do I get more involved beyond just being a member?",
    answer:
      "From time to time, we open volunteer and contributor roles across areas like community, content, partnerships, and events. Keep an eye on our announcements.",
  },

   {
    question: "How should I contact KWT?",
    answer: (
      <>
        Fill out the{" "}
        <A href="https://tally.so/r/kd8MrM">contact form</A> and tell us what you are reaching out about. We will get back to you as soon as we can.
      </>
    ),
  }
];

export default function FAQ() {
  return (
    <SectionWrapper id="faq" tone="surface" divided>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Left column flows with the section; only the inner block is sticky,
            so the heading rides the page scroll, holds below the navbar while
            the questions scroll past, then leaves with the section. */}
        <div>
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Questions</p>
            <h2 className="heading mt-5">Frequently asked</h2>
          </div>
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
