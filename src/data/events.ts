import type { EventCardData } from "@/components/shared/EventCard";

// ─── Upcoming events ──────────────────────────────────────────────────────────
// Replace with real event data when confirmed.
// Set to [] to show the empty-state "check back soon" message instead.

export const UPCOMING_EVENTS: EventCardData[] = [
  {
    dateShort:   "AUG 23",
    dateISO:     "2026-08-23",
    category:    "Community Session",
    title:       "Professional Communication & Networking: Practice & Feedback",
    description:
      "A practical KWT session focused on professional communication and networking. Participants will practise introducing themselves, talking about their work and projects, approaching people on LinkedIn, asking for mentorship or advice, starting professional conversations, and asking for referrals.",
    format:      "Virtual", // [PLACEHOLDER — ONLINE / IN-PERSON / HYBRID]
    // resourcesUrl: "[PLACEHOLDER — SESSION 03 RESOURCES]",
    // image: "[PLACEHOLDER — SESSION 03 PHOTO]",
    href:        "#register",
  },
];

// ─── Past events ──────────────────────────────────────────────────────────────
// Real KWT sessions. Dates and images to be confirmed.

export const PAST_EVENTS: EventCardData[] = [
  {
    // Event 01 — KWT Inaugural & Welcome Session
    dateShort:   "???",        // [PLACEHOLDER — ACTUAL DATE]
    dateISO:     "2026-01-01", // [PLACEHOLDER — ACTUAL DATE ISO]
    category:    "Community Session",
    title:       "KWT Inaugural & Welcome Session",
    description:
      "The inaugural KWT session officially introduced the community and its mission to help Kashmiri women in technology learn, connect, support one another, and grow together. The session also featured a guest talk on getting started with research: from curiosity to publication.",
    format:      "Virtual", // [PLACEHOLDER — ONLINE / IN-PERSON / HYBRID]
    // image: "[PLACEHOLDER — SESSION 01 PHOTO]",
    resourcesUrl: "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href:        "#details",
  },
  {
    // Event 02 — AI Career & Community Q&A
    dateShort:   "???",        // [PLACEHOLDER — ACTUAL DATE]
    dateISO:     "2026-02-01", // [PLACEHOLDER — ACTUAL DATE ISO]
    category:    "Community Q&A",
    title:       "AI Career & Community Q&A",
    description:
      "An interactive Q&A session on AI career paths, breaking into tech as a non-CS student or beginner, building visible proof of work, and finding internships and research opportunities. Speaker: Uzma Hamid — Founder at DECRU & AI Engineer; Stanford University MS CS alumna.",
    format:      "Virtual", // [PLACEHOLDER — ONLINE / IN-PERSON / HYBRID]
    // image: "[PLACEHOLDER — SESSION 02 PHOTO]",
    resourcesUrl: "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href:        "#details",
  },
  {
    // Event 03 — Professional Communication & Networking (if already held)
    // Currently listed as upcoming (Aug 23 2026). Move here once the event has passed.
    dateShort:   "AUG 23",
    dateISO:     "2026-08-23",
    category:    "Community Session",
    title:       "Professional Communication & Networking: Practice & Feedback",
    description:
      "A practical KWT session focused on professional communication and networking. Participants practised introducing themselves, talking about their work and projects, approaching people on LinkedIn, asking for mentorship, and starting professional conversations.",
    format:      "Virtual", // [PLACEHOLDER — ONLINE / IN-PERSON / HYBRID]
    // resourcesUrl: "[PLACEHOLDER — SESSION 03 RESOURCES]",
    // image: "[PLACEHOLDER — SESSION 03 PHOTO]",
    href:        "#details",
  },
];

// ─── Gallery images ───────────────────────────────────────────────────────────
// Replace with real event photography when available.
// Do NOT use team photos here — this section is for event moments only.

export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/hero-image.png", alt: "KWT community session" },
  { src: "/images/hero-image.png", alt: "KWT community session" },
  { src: "/images/hero-image.png", alt: "KWT community session" },
  { src: "/images/hero-image.png", alt: "KWT community session" },
  { src: "/images/hero-image.png", alt: "KWT community session" },
  { src: "/images/hero-image.png", alt: "KWT community session" },
];
