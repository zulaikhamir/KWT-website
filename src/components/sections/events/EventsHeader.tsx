const heroImage = "/images/hero-image.png";

export default function EventsHeader() {
  return (
    <section
      aria-labelledby="events-heading"
      className="relative isolate overflow-hidden bg-[var(--color-bg-dark)]"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />

      {/* Horizontal gradient — darkens left side for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[var(--color-bg-dark)]/75 via-[var(--color-bg-dark)]/50 to-[var(--color-bg-dark)]/30"
      />
      {/* Vertical gradient — darkens top and bottom edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-[var(--color-bg-dark)] via-transparent to-[var(--color-bg-dark)]/40"
      />

      <div className="mx-auto flex min-h-[calc(100svh-var(--nav-height))] max-w-6xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="eyebrow text-white/60 kwt-animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            Events
          </p>

          {/* Heading */}
       
<h1
  id="events-heading"
  className="display mt-6 text-white kwt-animate-fade-up"
  style={{ animationDelay: "80ms" }}
>
  Where the KWT community connects and learns
</h1>

{/* Lede */}
<p
  className="lede mt-7 max-w-xl text-white/75 kwt-animate-fade-up"
  style={{ animationDelay: "180ms" }}
>
  From workshops and talks to mentorship, resume reviews, networking, and
  career sessions, KWT creates opportunities for Kashmiri women to learn,
  connect, and grow together.
</p>
        </div>
      </div>
    </section>
  );
}
