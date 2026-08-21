const heroImage = "/images/hero-image.png";

const paths = [
  { label: "Become a member", href: "#become-member" },
  { label: "Volunteer",       href: "#volunteer"      },
  { label: "Partner with us", href: "#partner-with-us" },
  { label: "Sponsor KWT",     href: "#sponsor-kwt"    },
];

export default function Header() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/60 via-navy-deep/40 to-navy-deep/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep via-transparent to-navy-deep/30"
      />

      <div className="mx-auto flex min-h-[calc(100svh-var(--nav-height))] max-w-6xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-white/60">Get involved</p>
          <h1 className="display mt-6 text-white">There is a place for you in KWT</h1>
          <p className="lede mt-7 max-w-xl text-white/75">
            Whether you want to join the community, volunteer your time, collaborate with us,
            or support our work, there are different ways to contribute to KWT and help build
            a stronger technology community for Kashmiri women.
          </p>

          <nav aria-label="Ways to get involved" className="mt-10 flex flex-wrap gap-3">
            {paths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-[0.9375rem] text-white/85 backdrop-blur-sm transition-colors duration-200 hover:border-white/60 hover:bg-white/10 hover:text-white"
              >
                {path.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
