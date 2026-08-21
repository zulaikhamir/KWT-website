/**
 * KWT community statistics — single source of truth.
 * Update these values here; Impact and OurStory both consume this array.
 */
export interface StatItem {
  value: string;
  label: string;
  /** One short clause giving the number context — shown beneath the label in the Impact section. */
  context: string;
}

export const KWT_STATS: StatItem[] = [
  { value: "160+", label: "Members",     context: "and growing"              },
  { value: "3",    label: "Events held", context: "since founding"           },
  { value: "2026", label: "Founded",     context: "Srinagar, Kashmir"        },
];
