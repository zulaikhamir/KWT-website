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
  { value: "160+", label: "Members",   context: "and growing" },
  { value: "3",    label: "Sessions",  context: "2 events · 1 workshop" },
  { value: "6+",   label: "Countries", context: "across the world" },
];