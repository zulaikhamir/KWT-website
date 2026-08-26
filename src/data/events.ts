import type { EventCardData } from "@/components/shared/EventCard";

import welcomeSessionImage from "@/assets/images/events/welcome-session.png";
import researchPublicationImage from "@/assets/images/events/research-publication.png";
import aiCareerQaImage from "@/assets/images/events/ai-career-community-qa.png";
import professionalNetworkingImage from "@/assets/images/events/professional-communication-networking.png";
import resumeReviewImage from "@/assets/images/events/resume-review.png";


export function isEventPast(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(dateISO + "T00:00:00");

  return eventDate < today;
}

/**
 * Look up a single event by its slug.
 */
export function findEventBySlug(
  slug: string,
): EventCardData | undefined {
  return ALL_EVENTS.find((event) => event.slug === slug);
}

/**
 * Single source of truth for all KWT events.
 *
 * UpcomingEvents and PastEvents derive their lists from this array at runtime
 * using isEventPast(). No manual splitting needed.
 */

export const ALL_EVENTS: EventCardData[] = [
  {
    // Event 01
    slug: "2026-08-02-kwt-inaugural-welcome-session",
    dateShort: "AUG 02",
    dateISO: "2026-08-02",
    category: "Community Session",
    title: "KWT Inaugural & Welcome Session",
    description:
      "KWT's first community session introduced the community, its mission, and what members can expect. The session also featured a guest talk on getting started with research.",
    format: "Virtual",
    image: welcomeSessionImage,
    aboutLabel: "About this session",
    people: [
      {
        name: "Speaker Name",
        role: "Guest Speaker",
        linkedin: "https://www.linkedin.com/in/placeholder-speaker",
      },
    ],
    resourcesUrl:
      "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href: "/events/2026-08-02-kwt-inaugural-welcome-session",
  },

  {
    // Event 02
    slug: "2026-08-02-from-concept-to-research-publication",
    dateShort: "AUG 02",
    dateISO: "2026-08-02",
    category: "Research Session",
    title: "From Concept to Research Publication",
    description:
      "A practical introduction to research, from finding a question and developing an idea to writing, publishing, and getting started with research opportunities.",
    format: "Virtual",
    image: researchPublicationImage,
    aboutLabel: "About this session",
    people: [
      {
        name: "Areeba Nisar",
        role: "Guest Speaker",
        linkedin: "https://www.linkedin.com/in/areeba-nisar",
      },
    ],
    resourcesUrl:
      "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href: "/events/2026-08-02-from-concept-to-research-publication",
  },

  {
    // Event 03
    slug: "2026-08-09-ai-career-community-qa",
    dateShort: "AUG 09",
    dateISO: "2026-08-09",
    category: "Community Q&A",
    title: "AI Career & Community Q&A",
    description:
      "An interactive Q&A on AI careers, getting started in tech, building proof of work, and finding internships and research opportunities.",
    format: "Virtual",
    image: aiCareerQaImage,
    aboutLabel: "About this Q&A",
    people: [
      {
        name: "Uzma Hamid",
        role: "Speaker",
        linkedin: "https://www.linkedin.com/in/uzma-hamid",
      },
    ],
    resourcesUrl:
      "https://drive.google.com/drive/folders/1ekm5LVYb42jkl4q1aE8nPEPNb8gJiRle",
    href: "/events/2026-08-09-ai-career-community-qa",
  },

  {
    // Event 04
    slug: "2026-08-23-professional-communication-networking",
    dateShort: "AUG 23",
    dateISO: "2026-08-23",
    category: "Community Workshop",
    title: "Professional Communication & Networking",
    description:
      "A practical workshop on introducing yourself, networking, asking for advice or mentorship, and approaching professional conversations.",
    format: "Virtual",
    image: professionalNetworkingImage,
    aboutLabel: "About this workshop",
    people: [
      {
        name: "Facilitator Name",
        role: "Workshop Facilitator",
        linkedin: "https://www.linkedin.com/in/placeholder-facilitator",
      },
    ],
    href: "/events/2026-08-23-professional-communication-networking",
  },

  {
    // Upcoming Event
    slug: "2026-09-20-resume-review-session",
    dateShort: "SEP 20",
    dateISO: "2026-09-20",
    category: "Resume Review",
    title: "Resume Review with KWT",
    description:
      "Bring your resume, get practical feedback, and learn how to present your experience more clearly for your next tech opportunity.",
    format: "Virtual",
    image: resumeReviewImage,
    time: "6:00 PM IST",
    aboutLabel: "About this session",
    people: [
      {
        name: "Reviewer Name",
        role: "Resume Reviewer",
        linkedin: "https://www.linkedin.com/in/placeholder-reviewer",
      },
    ],
    href: "https://tally.so/r/ja81gR",
  },
];

/**
 * Community gallery images (photos, screenshots, videos).
 *
 * Separate from event promotional artwork. Add real KWT community media here.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  aspect?: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [];