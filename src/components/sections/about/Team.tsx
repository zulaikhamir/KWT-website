import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

// ─── Team data ────────────────────────────────────────────────────────────────
// Add `bio` (array of 2-3 bullets) and `linkedinUrl` for each member as needed.
// `bio` is optional — the card renders gracefully without it.
interface TeamMember {
  name:         string;
  role:         string;
  bio?:         string[];  // 2-3 concise bullets showing the person beyond KWT
  image:        string;
  linkedinUrl?: string;
}

const team: TeamMember[] = [
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

// ─── TeamCard ─────────────────────────────────────────────────────────────────
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="flex">
      <article
        className={cn(
          "surface-card surface-card-interactive",
          "flex w-full flex-col",
          "p-7",
        )}
      >
        {/* ── Circular photo ───────────────────────────────────────────── */}
        <div className="flex justify-center">
          <div
            className={cn(
              "relative size-28 shrink-0 overflow-hidden",
              "rounded-full",
              "ring-2 ring-[var(--color-accent)]",
              "bg-white",
            )}
          >
            <img
              src={member.image}
              alt={`${member.name}, ${member.role} at KWT`}
              loading="lazy"
              width={224}
              height={224}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* ── Name & role ──────────────────────────────────────────────── */}
        <div className="mt-5 text-center">
          <p className="font-heading text-lg font-bold leading-tight tracking-[-0.02em] text-[var(--color-primary)]">
            {member.name}
          </p>
          <p className="eyebrow mt-1.5">{member.role}</p>
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <hr className="mt-5 border-t border-[var(--color-hairline)]" />

        {/* ── Bio (bulleted list) ─────────────────────────────────────── */}
        {member.bio && (
          <ul className="mt-5 space-y-2 text-[0.875rem] leading-[1.6] text-[var(--color-secondary)]">
            {member.bio.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-[var(--color-primary)] opacity-40" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* ── LinkedIn — only when URL is provided ─────────────────────── */}
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "mt-5 inline-flex items-center gap-1.5 self-start",
              "text-sm font-medium text-[var(--color-primary)]",
              "underline underline-offset-4",
              "hover:opacity-70 transition-opacity",
            )}
          >
            LinkedIn ↗
          </a>
        )}
      </article>
    </li>
  );
}

// ─── Team section ─────────────────────────────────────────────────────────────
export default function Team() {
  return (
    <SectionWrapper id="team" tone="surface" divided>
      <SectionHeading
        align="center"
        eyebrow="The people"
        title="Meet the team"
        description="A community built by women, for women."
      />

      <ul
        className={cn(
          "mt-14",
          "grid gap-6",
          "grid-cols-1",
          "sm:grid-cols-2",
          "lg:grid-cols-4",
          // When there are fewer than 4 members, center the row rather than
          // left-aligning orphaned cards.
          team.length < 4 && "lg:justify-center lg:grid-cols-[repeat(auto-fit,minmax(220px,280px))]",
        )}
      >
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </ul>
    </SectionWrapper>
  );
}
