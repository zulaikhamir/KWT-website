import { ChatsCircle, Plant, DoorOpen, Lightning } from "@phosphor-icons/react";

/** Content for the About page sections. */

// ─── Mission & vision ─────────────────────────────────────────────────────────
export const statements = [
  {
    index: "01",
    title: "Our mission",
    body: "Our mission is to connect and support Kashmiri women in technology by creating opportunities to learn, share knowledge, discover careers and research opportunities, build professional networks, and contribute to the community.",
  },
  {
    index: "02",
    title: "Our vision",
    body: "Our vision is to build a strong and connected community of Kashmiri women who are visible, confident, and active in technology, research, and STEM. We want KWT to become a space where women can find opportunities, mentorship, collaboration, and a network that supports them throughout their journey.",
  },
];

// ─── Values ───────────────────────────────────────────────────────────────────
export const values = [
  {
    icon: ChatsCircle,
    title: "Community",
    body: "We believe meaningful communities are built through people supporting one another. KWT creates space for Kashmiri women to connect, share experiences, ask questions, and learn from each other.",
  },
  {
    icon: Plant,
    title: "Growth",
    body: "Everyone is at a different stage of their journey. KWT encourages continuous learning and helps members discover resources, opportunities, and experiences that support their personal and professional growth.",
  },
  {
    icon: DoorOpen,
    title: "Inclusion",
    body: "KWT welcomes Kashmiri women across different stages, backgrounds, fields, and levels of experience in technology and STEM. You do not need to already be an experienced professional to have a place here.",
  },
  {
    icon: Lightning,
    title: "Empowerment",
    body: "We want members to feel equipped to pursue their goals, speak about their work, seek opportunities, and contribute their knowledge to others. KWT is designed to help women build the confidence and connections to take ownership of their journeys.",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  name:         string;
  role:         string;
  bio?:         string[];  // 2-3 concise bullets showing the person beyond KWT
  image:        string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    name:        "Zulaikha Ashiq",
    role:        "Founder",
    bio:         [
      "Founded KWT to connect Kashmiri women across technology, research, and STEM",
      // "Focused on creating opportunities for learning, mentorship, and professional growth",
      // Add: Your background, current role, or area of expertise
    ],
    image:       "/team/zulaikha-founder.png",
    linkedinUrl: "", // [PLACEHOLDER — ZULAIKHA LINKEDIN URL]
  },
  {
    name:        "Uzma Hamid",
    role:        "Strategy & Technical Lead",
    bio:         [
      "Leads strategy and technical direction at KWT",
      // "Hosted community Q&A on AI, DSA, MLOps, and security fundamentals",
      // Add: Your current professional role, company, or technical specialization
    ],
    image:       "/team/uzma-techlead.jpg",
    linkedinUrl: "", // [PLACEHOLDER — UZMA LINKEDIN URL]
  },
];

// ─── Community guidelines ─────────────────────────────────────────────────────
export const guidelines = [
  {
    title: "Respect everyone",
    body: "Members span every level of experience and background. Challenge ideas, not people, harassment, discrimination, and personal attacks aren't welcome here.",
  },
  {
    title: "No question is too basic",
    body: "Whether you're writing your first line of code or leading a team, you belong. Help where you can, and it's always fine to say you don't know.",
  },
  {
    title: "Keep it relevant",
    body: "KWT is a space for tech, careers, and learning. Spam, unrelated promotion, and personal advertising crowd out what members actually come here for.",
  },
  {
    title: "Protect each other's privacy",
    body: "Don't share another member's contact details, messages, or personal information without their permission inside the community or beyond it.",
  },
  {
    title: "Honor your commitments",
    body: "If you register for a session or take on a role, follow through. Plans change just let organizers know as early as you can.",
  },
  {
    title: "Speak up, privately",
    body: "If something feels wrong, report it to KWT leadership directly rather than in the group. No one has to confront it alone.",
  },
];
