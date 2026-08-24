import type { ElementType } from "react";
import {
  GraduationCap,
  UsersThree,
  Ladder,
  HandHeart,
  IdentificationBadge,
  Toolbox,
  Handshake,
  Gift,
} from "@phosphor-icons/react";

/**
 * Content for the Home page sections.
 *
 * Note these arrays import icon components, so this module depends on the icon
 * library at runtime — unlike the purely textual data files here. That is a
 * deliberate trade: the icon is part of how each item is defined, and the
 * alternative (a string key plus a lookup map in the component) buys purity at
 * the cost of indirection nobody reading the page benefits from.
 *
 * Every icon across the site is distinct — see the note in AboutKWT — so when
 * adding an entry, check it is not already used elsewhere.
 */

// ─── AboutKWT pillars ─────────────────────────────────────────────────────────
export const PILLARS = [
  {
    icon:  GraduationCap,
    label: "Learn",
    desc:  "Workshops, talks, and curated resources spanning technology, engineering, research, and more.",
  },
  {
    icon:  UsersThree,
    label: "Connect",
    desc:  "A community of Kashmiri women across disciplines, career stages, and geographies.",
  },
  {
    icon:  Ladder,
    label: "Grow",
    desc:  "Mentorship, career opportunities, and a network that opens real doors across STEM fields.",
  },
  {
    icon:  HandHeart,
    label: "Give Back",
    desc:  "Contribute your expertise and experience to strengthen the next generation of Kashmiri women in TECH.",
  },
] as const;

// ─── Get Involved cards ───────────────────────────────────────────────────────
/**
 * `action` drives which element the CTA renders as: a button that opens the
 * membership modal, an external anchor, or an internal router Link.
 */
export type CardDef =
  | { icon: ElementType; title: string; body: string; cta: string; action: "modal" }
  | { icon: ElementType; title: string; body: string; cta: string; action: "external"; href: string }
  | { icon: ElementType; title: string; body: string; cta: string; action: "internal"; href: string };

export const CARDS: CardDef[] = [
  {
    icon:   IdentificationBadge,
    title:  "Become a Member",
    body:   "KWT is open to all Kashmiri women in technology, engineering, science, and research — at any stage of their journey.",
    cta:    "Join the Community",
    action: "modal",
  },
  {
    icon:   Toolbox,
    title:  "Volunteer",
    body:   "Help with events, content, community operations, and more. Every contribution strengthens KWT.",
    cta:    "Start Volunteering",
    action: "external",
    href:   "https://tally.so/r/44leEO",
  },
  {
    icon:   Handshake,
    title:  "Partner With Us",
    body:   "Collaborate with KWT as a university, company, nonprofit, or community organisation.",
    cta:    "Partner with us",
    action: "internal",
    href:   "/get-involved#partner",
  },
  {
    icon:   Gift,
    title:  "Sponsor KWT",
    body:   "Support KWT events and community initiatives. Help us build what matters.",
    cta:    "Sponsor KWT",
    action: "internal",
    href:   "/get-involved#sponsor",
  },
];
