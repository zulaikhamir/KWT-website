// for person card data
import imgSaatiya from "@/assets/team/Saathiya-commex.webp";
import imgZulaikha from "@/assets/team/zulaikha-founder.webp";
import imgUzma from "@/assets/team/uzma-techlead.webp";
import imgHadiya from "@/assets/team/Hadiya-website.webp";
import imgTahoor from "@/assets/team/Tahoor-social.webp";

import oracleIcon from "@/assets/icons/Oracle_transparent.png";
import linkedinIcon from "@/assets/icons/LinkedIn_transparent.png";
import tmrwIcon from "@/assets/icons/TMRW_transparent.png";

export type GratitudePerson = {
  id: string;
  name: string;
  role?: string;
  description?: string;
  photo?: string;
  linkedinUrl?: string;
};

// for sponsor card data
export type Sponsor = {
  id: string;
  name: string;
  logo: string;
  website?: string;
};

export const memberSpotlights: GratitudePerson[] = [
  {
    id: "member-spotlight-zulaikha",
    name: "Zulaikha Ashiq",
    role: "Founder, KWT",
    photo: imgZulaikha,
    description:
      "Building a welcoming community where Kashmiri women can learn, connect, and grow in technology.",
  },
  {
    id: "member-spotlight-uzma",
    name: "Uzma Hamid",
    role: "Technical Lead",
    photo: imgUzma,
    description:
      "Helping shape KWT through thoughtful collaboration, technical leadership, and community support.",
  },
  {
    id: "member-spotlight-hadiya",
    name: "Hadiya Mustaq",
    role: "Website",
    photo: imgHadiya,
    description:
      "Contributing to KWT's digital presence and making the community easier to discover and engage with.",
  },
  {
    id: "member-spotlight-saatiya",
    name: "Saatiya Shabeer",
    role: "Community Experience",
    photo: imgSaatiya,
    description:
      "Creating meaningful member experiences and helping KWT feel connected, thoughtful, and welcoming.",
  },
  {
    id: "member-spotlight-tahoor",
    name: "Tahoor ",
    role: "Community Manager",
    photo: imgTahoor,
    description:
      "Managing KWT's community and ensuring a positive, inclusive environment for all members.",
  },
];

// replace with the actual data for mentors, member spotlight, speakers, sponsors, and contributors
export const mentors: GratitudePerson[] = [
  {
    id: "mentor-1",
    name: "Zulaikha Ashiq",
    role: "Founder KWT",
    photo: imgZulaikha,
    description:
      "Connecting Kashmiri women across technology, research, and STEM.",
  },
  {
    id: "mentor-2",
    name: "Uzma Hamid",
    role: "Technical Lead",
    photo:
      "data:image/jpeg;base64,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",
    description: "Helped in building the KWT community and connecting women",
  },
  {
    id: "mentor-3",
    name: "Name",
    role: "Mentor",
    photo:
      "data:image/jpeg;base64,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",
    description: "Helping Kwt with the website and other technical stuff.",
  },
  {
    id: "mentor-4",
    name: "Name",
    role: "Mentor",
    photo:
      "data:image/jpeg;base64,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",
    description: "Helping Kwt with the website and other technical stuff.",
  },

  {
    id: "mentor-5",
    name: "Zulaikha Ashiq",
    role: "Founder KWT",
    photo: imgZulaikha,
    description:
      "Connecting Kashmiri women across technology, research, and STEM.",
  },
  {
    id: "mentor-6",
    name: "Zulaikha Ashiq",
    role: "Founder KWT",
    photo: imgZulaikha,
    description:
      "Connecting Kashmiri women across technology, research, and STEM.",
  },
];

export const speakers: GratitudePerson[] = [
  {
    id: "speaker-1",
    name: "Hadiya",
    photo: imgTahoor,
    role: "Btech CSE",
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
  {
    id: "speaker-2",
    name: "Saatiya",
    photo: imgSaatiya,
    role: "Btech ECE",
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
  {
    id: "speaker-3",
    name: "Name",
    photo: imgUzma,
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
  {
    id: "speaker-4",
    name: "Name",
    photo: imgHadiya,
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
  {
    id: "speaker-5",
    name: "Name",
    photo: imgZulaikha,
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
  {
    id: "speaker-6",
    name: "Name",
    photo: imgTahoor,
    description:
      "Conducted a one on one interview with the speaker and wrote the article.",
  },
];

export const contributors: GratitudePerson[] = [
  {
    id: "contributor-1",
    name: "Name",
    photo: imgSaatiya,
    description: "Help in user testing and feedback for the website.",
  },
  {
    id: "contributor-2",
    name: "Name",
    description: "Help in user testing and feedback for the website.",
  },
  {
    id: "contributor-3",
    name: "Name",
    description: "Help in user testing and feedback for the website.",
  },
  {
    id: "contributor-4",
    name: "Name",
    description: "Help in user testing and feedback for the website.",
  },
  {
    id: "contributor-5",
    name: "Name",
    description: "Help in user testing and feedback for the website.",
  },
];

export const sponsors: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Oracle",
    logo: oracleIcon,
    website: "https://www.oracle.com/",
  },
  {
    id: "sponsor-2",
    name: "LinkedIn",
    logo: linkedinIcon,
    website: "https://www.linkedin.com/",
  },
  {
    id: "sponsor-3",
    name: "TMRW",
    logo: tmrwIcon,
    website: "https://www.amazon.com",
  },
  {
    id: "sponsor-5",
    name: "Oracle",
    logo: oracleIcon,
  },
  { id: "sponsor-6", name: "Tech for Good", logo: "" },
  { id: "sponsor-7", name: "Future Builders", logo: "" },
];
