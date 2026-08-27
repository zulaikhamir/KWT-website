import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import footerLogo from "@/assets/images/logo-transparent.png";

const exploreLinks = [
  { label: "Home",           to: "/" },
  { label: "About",          to: "/about" },
  { label: "Events",         to: "/events" },
  { label: "Get involved",   to: "/get-involved" },
  { label: "Privacy Policy", to: "/privacy" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kashmiri-women-in-tech",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kashmiriwomenintech",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z",
  },
  {
    label: "X",
    href: "https://www.x.com/kwtintech",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
];

const TALLY_URL = "https://tally.so/r/81b72x";

function NewsletterForm() {
  return (
    <a
      href={TALLY_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
    >
      Subscribe to our newsletter
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <Link
              to="/"
              aria-label="KWT home"
              className="inline-block rounded-sm transition-opacity duration-200 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy-deep)]"
            >
              <img
                src={footerLogo}
                alt="KWT — Kashmiri Women in Tech"
                loading="lazy"
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-6 text-[0.9375rem] leading-7 text-white/65">
              Connecting Kashmiri women in technology to learn, grow, share opportunities, and build together.
            </p>
            <Link
              to="/get-involved"
              className="group mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-white/60 hover:bg-white/5 hover:text-white"
            >
              Join the community
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h2 className="eyebrow text-white/45">Quick Links</h2>
            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h2 className="eyebrow text-white/45">Socials</h2>
            <ul className="mt-6 space-y-3.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`KWT on ${social.label}`}
                    className="group inline-flex items-center gap-3 text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors duration-200 group-hover:border-white/40 group-hover:bg-white/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-[0.9rem]"
                      >
                        <path d={social.path} />
                      </svg>
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter — full-width row, own visual weight, not squeezed into the 3-col grid */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="eyebrow text-white/45">Newsletter</h2>
            <p className="mt-3 max-w-sm text-[0.9375rem] leading-7 text-white/65">
              Event announcements, opportunities, and community updates. Occasionally.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Kashmiri Women in Tech. All rights reserved.
          </p>
          <p className="text-sm text-white/50">Srinagar, Jammu and Kashmir</p>
        </div>
        
      </div>
    </footer>
  );
}