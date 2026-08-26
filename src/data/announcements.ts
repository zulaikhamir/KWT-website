
/** Kind of update — drives the pill label and its icon in the banner. */
export type AnnouncementTag =
  | "New"
  | "Event"
  | "Recap"
  | "Milestone"
  | "Opportunity";

export interface Announcement {
  /** Stable, URL-safe key. Used as the React key — keep unique. */
  id: string;
  /** Date the announcement was posted (YYYY-MM-DD), used for ordering. */
  dateISO: string;
  tag: AnnouncementTag;
  /** One line. Truncates in the banner — keep it under ~60 characters. */
  title: string;
  /**
   * One short sentence under the title. Clamped to two lines in the banner —
   * anything longer belongs on the page the CTA points to.
   */
  body?: string;
  /** Optional call to action. Internal paths route in-app; http(s) opens a new tab. */
  cta?: {
    label: string;
    href: string;
  };
  /** Set to false to hide without deleting. Defaults to published. */
  published?: boolean;
}

/** How many announcements the banner rotates through. */
export const MAX_VISIBLE_ANNOUNCEMENTS = 4;

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "resume-review-registration-open",
    dateISO: "2026-08-25",
    tag: "Event",
    title: "Resume Review with KWT",
    body: "Registration is open for our resume review session on 20 September at 6:00 PM IST.",
    cta: {
      label: "Register",
      href: "/events/2026-09-20-resume-review-session",
    },
  },

  {
    id: "professional-communication-workshop-recap",
    dateISO: "2026-08-23",
    tag: "Recap",
    title: "Introduce Yourself, Network & Ask Better",
    body: "Session materials from our professional communication workshop are now available for members.",
  },

  {
    id: "community-milestone-160-members",
    dateISO: "2026-08-12",
    tag: "Milestone",
    title: "160+ members across 6 countries and counting  ",
    body: "Our community now brings together students, engineers, researchers, and professionals across 6+ countries.",
    cta: {
      label: "Get involved",
      href: "/get-involved",
    },
  },
];
/**
 * Published announcements, newest first, capped at MAX_VISIBLE_ANNOUNCEMENTS.
 */
export function getLatestAnnouncements(
  limit = MAX_VISIBLE_ANNOUNCEMENTS,
): Announcement[] {
  return ANNOUNCEMENTS
    .filter((item) => item.published !== false)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, limit);
}
