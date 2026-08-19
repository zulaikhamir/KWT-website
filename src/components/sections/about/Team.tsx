import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";

const team = [
  {
    name: "Zulaikha Ashiq",
    role: "Founder",
    image: "/team/zulaikha-founder.png",
  },
  {
    name: "Uzma Hamid",
    role: "Technical Lead",
    image: "/team/uzma-techlead.jpg",
  },
];

export default function Team() {
  return (
    <SectionWrapper id="team" tone="surface" divided>
      <SectionHeading
        align="center"
        eyebrow="The people"
        title="Meet the team"
        description="Community build by women for women."
      />

      <ul className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <li key={member.name} className="group">
            <figure className="relative overflow-hidden rounded-2xl bg-[var(--color-primary)] ring-1 ring-hairline transition-shadow duration-300 group-hover:shadow-[0_24px_60px_-24px_rgba(27,42,82,0.45)]">
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at KWT`}
                loading="lazy"
                width={800}
                height={1000}
                className="aspect-4/5 w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-deep via-navy-deep/70 to-transparent"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow text-[var(--color-accent)]">{member.role}</p>
                <p className="mt-2 font-heading text-xl font-bold tracking-[-0.02em] text-white">
                  {member.name}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
