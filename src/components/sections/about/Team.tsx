import { useEffect, useRef, useState } from "react";

import {
  CaretLeftIcon,
  CaretRightIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

import imgZulaikha  from "@/assets/team/zulaikha-founder.png";
import imgUzma      from "@/assets/team/uzma-techlead.jpg";
import imgSaatiya   from "@/assets/team/Saathiya-commex.png";
import imgHazika    from "@/assets/team/Hazika-comm-op.png";
import imgTuhoor    from "@/assets/team/Tahoor-social.png";
import imgHadiya    from "@/assets/team/Hadiya-website.png";

// ─── Team data ────────────────────────────────────────────────────────────────
interface TeamMember {
  name:         string;
  role:         string;
  note?:        string;
  bio?:         string[];  
  image:        string;
  linkedinUrl?: string;
}


const team: TeamMember[] = [
  {
    name: "Zulaikha Ashiq",
    role: "Founder",
    bio: [
      "Founded KWT to connect Kashmiri women across technology, research, and STEM.",
    ],
    image: imgZulaikha,
    linkedinUrl: "https://linkedin.com/in/zulaikhaashiq",
  },
  {
    name: "Uzma Hamid",
    role: "Technical Lead",
    bio: [
      "Helps shape KWT’s direction through ideas, collaboration, and key technical and community decisions.",
    ],
    image: imgUzma,
    linkedinUrl: "https://linkedin.com/in/uzmah",
  },
  {
    name: "Saatiya Shabeer",
    role: "Community Experience",
    bio: [
      "Focuses on member experience, community engagement, and creating meaningful experiences for KWT members.",
    ],
    image: imgSaatiya,
    linkedinUrl: "https://www.linkedin.com/in/saatiya-shabeer-3b8111295",
  },
  {
    name: "Hazika Shafi",
    role: "Community Operations",
    bio: [
      "Supports KWT’s community operations, coordination, documentation, and day-to-day organization.",
    ],
    image: imgHazika,
    linkedinUrl: "https://linkedin.com/in/hazika-shafi-170892321/",
  },
  {
    name: "Tuhoor Fatima",
    role: "Social Media",
    bio: [
      "Leads KWT’s social media presence, content planning, and communication across platforms.",
    ],
    image: imgTuhoor,
    linkedinUrl: "https://www.linkedin.com/in/tahoorfaatima",
  },
  {
    name: "Hadiya Mustaq",
    role: "Website",
    bio: [
      "Contributes to KWT’s website development, content organization, and digital presence.",
    ],
    image: imgHadiya,
    linkedinUrl: "https://linkedin.com/in/hadiya-mushtaq-9379282a2",
  },
];

// ─── TeamCard ─────────────────────────────────────────────────────────────────
function TeamCard({ member }: { member: TeamMember }) {
  const description = member.note ?? member.bio?.filter(Boolean).join(" ");
  const [imgFailed, setImgFailed] = useState(false);

  // Applied to everything that changes on hover, so one state drives them all.
  const onReveal = "transition-opacity duration-300 ease-out motion-reduce:transition-none";

  // Initials from the member's name for the fallback avatar
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li
      className={cn(
        "shrink-0 snap-start",
        "w-[74%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]",
      )}
    >
      <figure
        className={cn(
          "group relative aspect-[5/7] overflow-hidden rounded-3xl",
          "bg-[var(--color-primary)] ring-1 ring-black/5",
          "shadow-[0_14px_36px_-14px_rgba(27,42,82,0.28)]",
          "transition-shadow duration-300",
          "hover:shadow-[0_20px_48px_-16px_rgba(27,42,82,0.4)]",
        )}
      >
        {imgFailed ? (
          /* Placeholder avatar — shown when the image file is missing */
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]"
          >
            <span className="select-none font-heading text-5xl font-bold tracking-tight text-white/20">
              {initials}
            </span>
          </div>
        ) : (
          <img
            src={member.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={416}
            height={582}
            onError={() => setImgFailed(true)}
            className={cn(
              "absolute inset-0 size-full object-cover object-top",
              "transition duration-500 ease-out motion-reduce:transition-none",
              "group-hover:scale-110 group-hover:blur-[6px] group-hover:brightness-[0.55]",
              "group-focus-within:scale-110 group-focus-within:blur-[6px] group-focus-within:brightness-[0.55]",
            )}
          />
        )}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 via-black/25 to-transparent",
            onReveal,
            "group-hover:opacity-0 group-focus-within:opacity-0",
          )}
        />

        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${member.name} on LinkedIn`}
            className={cn(
              "absolute right-2.5 top-2.5 z-20 flex size-8 items-center justify-center rounded-full",
              "border border-white/30 bg-black/30 text-white backdrop-blur-md",
              "transition-colors duration-200 hover:border-white/60 hover:bg-black/55",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            )}
          >
            <LinkedinLogoIcon className="size-4" weight="fill" aria-hidden="true" />
          </a>
        )}

        {/* Description. Scrolls rather than clips if a note runs long. */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center px-4 py-12",
            "opacity-0",
            onReveal,
            "group-hover:opacity-100 group-focus-within:opacity-100",
          )}
        >
          <p className="max-h-full overflow-y-auto text-center text-[0.8125rem] leading-6 text-white">
            {description}
          </p>
        </div>

        {/* Name plate. Steps aside on reveal so the description gets the
            whole card. */}
        <figcaption
          className={cn(
            "absolute inset-x-2.5 bottom-2.5 z-10 rounded-2xl px-3 py-2.5",
            "border border-white/25 bg-white/10 backdrop-blur-md",
            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28)]",
            onReveal,
            "group-hover:opacity-0 group-focus-within:opacity-0",
          )}
        >
          <p className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-white">
            {member.name}
          </p>
          <p className="mt-0.5 text-[0.8125rem] leading-snug text-white/75">
            {member.role}
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

// ─── Team section ─────────────────────────────────────────────────────────────
export default function Team() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  // Which arrows are usable. Both false when everything already fits.
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const sync = () => {
      const max = el.scrollWidth - el.clientWidth;
      setEdges({ atStart: el.scrollLeft <= 1, atEnd: el.scrollLeft >= max - 1 });
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });

    // Card widths are percentage-based, so the overflow changes with the
    // viewport, not just with the roster.
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    observer?.observe(el);

    return () => {
      el.removeEventListener("scroll", sync);
      observer?.disconnect();
    };
  }, []);

  /** Scrolls by one card plus the gap, so cards land on snap positions. */
  const page = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrow = cn(
    "flex size-10 items-center justify-center rounded-full border border-hairline bg-white",
    "text-[var(--color-primary)] shadow-[0_2px_10px_-4px_rgba(27,42,82,0.15)]",
    "transition-all duration-200",
    "hover:border-[var(--color-primary)]/30 hover:shadow-[0_6px_18px_-6px_rgba(27,42,82,0.25)]",
    "disabled:pointer-events-none disabled:opacity-35",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
  );

  return (
    <SectionWrapper id="team" tone="surface" divided>
      <SectionHeading
        align="center"
        eyebrow="The people"
        title="Meet the team"
        description="The women building KWT."
      />

      <ul
        ref={scrollerRef}
        className={cn(
          "mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto py-2",
          "overscroll-x-contain",
          // Arrows carry the affordance, so the scrollbar itself is hidden.
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={edges.atStart}
          aria-label="Show previous team members"
          className={arrow}
        >
          <CaretLeftIcon className="size-4" weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={edges.atEnd}
          aria-label="Show next team members"
          className={arrow}
        >
          <CaretRightIcon className="size-4" weight="bold" />
        </button>
      </div>
    </SectionWrapper>
  );
}
