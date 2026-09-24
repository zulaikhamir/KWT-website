// for person card data
import imgSaatiya from "@/assets/team/Saathiya-commex.webp";
import imgZulaikha from "@/assets/team/zulaikha-founder.webp";
import imgUzma from "@/assets/team/uzma-techlead.webp";
import imgHadiya from "@/assets/team/Hadiya-website.webp";
import imgTahoor from "@/assets/team/Tahoor-social.webp";

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
    logo: "data:image/webp;base64,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",
  },
  {
    id: "sponsor-2",
    name: "LinkedIn",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaTZ5IwPxrBBzYVE8l_azxvaWhuuxY-d_ydgCHbdFJw&s=10 ",
    website: "https://www.linkedin.com/",
  },
  {
    id: "sponsor-3",
    name: "TMRW",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJojM8li-zCDYW1Lmb1N2BnQs1VoxlkJglZWQQOK4pQ&s=10",
    website: "https://www.amazon.com",
  },
  {
    id: "sponsor-5",
    name: "Oracle",
    logo: "data:image/webp;base64,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",
  },
  { id: "sponsor-6", name: "Tech for Good", logo: "" },
  { id: "sponsor-7", name: "Future Builders", logo: "" },
];
