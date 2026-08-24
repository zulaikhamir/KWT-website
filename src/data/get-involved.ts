import { BookOpen, HandHelping } from "lucide-react";
import { CalendarCheck, Megaphone, Lifebuoy, Books } from "@phosphor-icons/react";

/**
 * Content for the Get Involved page, plus the membership paths shared with the
 * membership modal and the FAQ.
 */

// ─── Membership form URLs ─────────────────────────────────────────────────────
// Single source for these links: the modal, the FAQ answer, and anything else
// pointing at the forms all read them from here so they cannot drift apart.
export const MEMBERSHIP_LEARN_URL      = "https://tally.so/r/686aVB";
export const MEMBERSHIP_CONTRIBUTE_URL = "https://tally.so/r/9qjB64";

// ─── Membership paths (modal) ─────────────────────────────────────────────────
export const MEMBERSHIP_PATHS = [
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

// ─── Member benefits ──────────────────────────────────────────────────────────
export const benefits = [
  "Learn from the community — access discussions, sessions, resources, and experiences shared by women working and learning across different areas of technology.",
  "Discover opportunities — find relevant jobs, internships, events, research opportunities, and other resources shared within the community.",
  "Build your network — connect with Kashmiri women studying, researching, and working across technology and related fields.",
  "Contribute and grow — share your knowledge, participate in discussions, support others, and contribute to building the community.",
];

// ─── Volunteer areas ──────────────────────────────────────────────────────────
export const areas = [
  {
    icon: CalendarCheck,
    title: "Event Support",
    body: "Help coordinate community sessions, communicate with speakers and participants, and support events before and during the session.",
  },
  {
    icon: Megaphone,
    title: "Content & Communications",
    body: "Help create community announcements, opportunity posts, social media content, and other communications.",
  },
  {
    icon: Lifebuoy,
    title: "Community Support",
    body: "Help welcome members, share useful resources, support discussions, and identify ways to make the community more useful.",
  },
  {
    icon: Books,
    title: "Research & Resources",
    body: "Help identify, organise, and share research, learning resources, opportunities, and useful information for members.",
  },
];

// ─── Partnership types ────────────────────────────────────────────────────────
export const partnerships = [
  {
    index: "01",
    title: "Co-hosted events",
    body: "Work with KWT to organise workshops, panels, talks, networking sessions, and other community events around topics relevant to our members.",
  },
  {
    index: "02",
    title: "Mentorship programs",
    body: "Collaborate with KWT to connect members with experienced professionals who can share knowledge, guidance, and practical career insights.",
  },
  {
    index: "03",
    title: "Hiring & opportunities",
    body: "Partner with KWT to share relevant jobs, internships, projects, and other professional opportunities with women in our community.",
  },
];

// ─── What happens next ────────────────────────────────────────────────────────
export const steps = [
  {
    title: "Reach out",
    body: "Tell us who you are, what you're interested in, and how you'd like to get involved.",
  },
  {
    title: "Connect with KWT",
    body: "Our team will review your request and get back to you with the relevant next steps.",
  },
  {
    title: "Get involved",
    body: "Once connected, you can take part in community activities, contribute your skills, attend events, or explore opportunities to collaborate with KWT.",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  /**
   * Plain text. May contain one `{link}` placeholder, which the FAQ component
   * swaps for an anchor built from `link`. Keeping this a string rather than
   * JSX is what allows the copy to live in the data layer at all — an answer
   * containing markup would have to stay in the component.
   */
  answer: string;
  link?: { href: string; label: string };
}

export const faqs: FaqItem[] = [
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
    answer:
      "Fill out the {link} — we review it and you get added to the community and given access to sessions, resources, and updates.",
    link: { href: MEMBERSHIP_LEARN_URL, label: "membership form" },
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
