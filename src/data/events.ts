import type { EventCardData } from "@/components/shared/EventCard";

/**
 * Returns true when an event's date is strictly before today (end-of-day).
 * An event on today's date is still considered upcoming so the Register CTA
 * remains live for the full day of the event.
 */
export function isEventPast(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateISO + "T00:00:00");
  return eventDate < today;
}

/**
 * Look up a single event by its slug. Returns undefined for unknown slugs.
 */
export function findEventBySlug(slug: string): EventCardData | undefined {
  return ALL_EVENTS.find((e) => e.slug === slug);
}

/**
 * Single source of truth for all KWT events.
 * UpcomingEvents and PastEvents derive their lists from this array at runtime
 * using isEventPast() — no manual splitting needed.
 */
export const ALL_EVENTS: EventCardData[] = [
  {
    // Session 01 — KWT Inaugural & Welcome Session
    slug:         "2026-08-02-kwt-inaugural-welcome-session",
    dateShort:    "AUG 02",
    dateISO:      "2026-08-02",
    category:     "Community Session",
    title:        "KWT Inaugural & Welcome Session",
    description:
      "The inaugural KWT session officially introduced the community and its mission to help Kashmiri women in technology learn, connect, support one another, and grow together. The session also featured a guest talk on getting started with research: from curiosity to publication.",
    format:       "Virtual",
    resourcesUrl: "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href:         "/events/2026-08-02-kwt-inaugural-welcome-session",
  },
  {
    // Session 02 — From Concept to Research Publication
    slug:         "2026-08-02-from-concept-to-research-publication",
    dateShort:    "AUG 02",
    dateISO:      "2026-08-02",
    category:     "Community Session",
    title:        "From Concept to Research Publication",
    description:
      "The inaugural KWT session officially introduced the community and its mission to help Kashmiri women in technology learn, connect, support one another, and grow together. The session also featured a guest talk on getting started with research: from curiosity to publication.",
    format:       "Virtual",
    resourcesUrl: "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href:         "/events/2026-08-02-from-concept-to-research-publication",
  },
  {
    // Session 03 — AI Career & Community Q&A
    slug:         "2026-08-09-ai-career-community-qa",
    dateShort:    "AUG 09",
    dateISO:      "2026-08-09",
    category:     "Community Q&A",
    title:        "AI Career & Community Q&A",
    description:
      "An interactive Q&A session on AI career paths, breaking into tech as a non-CS student or beginner, building visible proof of work, and finding internships and research opportunities. Speaker: Uzma Hamid — Founder at DECRU & AI Engineer; Stanford University MS CS alumna.",
    format:       "Virtual",
    resourcesUrl: "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href:         "/events/2026-08-09-ai-career-community-qa",
  },
  {
    // Session 04 — Professional Communication & Networking
    slug:         "2026-08-23-professional-communication-networking",
    dateShort:    "AUG 23",
    dateISO:      "2026-08-23",
    category:     "Community Session",
    title:        "Professional Communication & Networking: Practice & Feedback",
    description:
      "A practical KWT session focused on professional communication and networking. Participants practised introducing themselves, talking about their work and projects, approaching people on LinkedIn, asking for mentorship or advice, starting professional conversations, and asking for referrals.",
    format:       "Virtual",
    // resourcesUrl: "", // add once available
    href:         "/events/2026-08-23-professional-communication-networking",
  },
  {
    // ─── TEST EVENT ───────────────────────────────────────────────────────
    // This is a FAKE upcoming event for testing registration flow only.
    // Remove or update once real upcoming events are scheduled.
    // ──────────────────────────────────────────────────────────────────────
    slug:         "2026-09-15-test-upcoming-workshop",
    dateShort:    "SEP 15",
    dateISO:      "2026-09-15",
    category:     "Test Workshop",
    title:        "[TEST] Upcoming Workshop — Testing Registration Flow",
    description:
      "This is a test event for development and testing purposes only. It allows testing the complete registration flow, upcoming event cards, and detail pages without affecting real event data. The Register CTA connects to the actual event registration form.",
    format:       "Virtual",
    time:         "6:00 PM IST",
    href:         "https://tally.so/r/ja81gR",
  },
];


export interface GalleryImage {
  src: string;
  alt: string;
  aspect?: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 4 / 5 },
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 1     },
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 4 / 3 },
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 3 / 4 },
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 4 / 3 },
  { src: "/images/hero-image.png", alt: "KWT community session", aspect: 1     },
];
