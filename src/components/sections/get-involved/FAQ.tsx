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
      "Kashmiri Women in Tech (KWT) is a community connecting Kashmiri women in technology to learn, network, share opportunities, and grow together.",
  },
  {
    question: "Who is KWT for?",
    answer:
      "Students, aspiring tech professionals, working professionals, researchers, founders, and any woman interested in technology.",
  },
  {
    question: "How do I join KWT?",
    answer: (
      <>
        Fill out the{" "}
        <A href="https://tally.so/r/686aVB">membership form</A> — we review it
        and you get added to the community and given access to sessions,
        resources, and updates.
      </>
    ),
  },
  {
    question: "Is membership free?",
    answer: "Yes, KWT membership is completely free.",
  },
  {
    question: "Do I need to work in tech already?",
    answer:
      "No. You can be a student, complete beginner, career-switcher, or simply curious about technology — no prior experience required.",
  },
  {
    question: "What can I expect from KWT?",
    answer:
      "Community discussions, learning sessions and workshops (like our recent one on networking and professional outreach), opportunities shared by members and partners, resources, and a space to connect with other women in tech.",
  },
  {
    question: "Can I participate remotely?",
    answer:
      "Yes — most sessions and community activities happen online, so you can join from anywhere.",
  },
  {
    question: "How do I get more involved beyond just being a member?",
    answer:
      "We regularly open volunteer and contributor roles (community ops, content, partnerships, etc.) — keep an eye on group announcements, or message us directly if you don't see a role that fits but still want to contribute.",
  },
  {
    question: "How should I reach out to KWT admins?",
    answer:
      "Always mention what you're reaching out about first, along with a quick intro of who you are — it helps us understand the context and respond faster.",
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
