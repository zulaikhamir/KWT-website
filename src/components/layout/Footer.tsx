import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import footerLogo from "@/assets/images/logo-transparent.png";
import { SOCIAL_LINKS } from "@/data/socials";

const exploreLinks = [
  { label: "Home",           to: "/" },
  { label: "About",          to: "/about" },
  { label: "Events",         to: "/events" },
  { label: "Get involved",   to: "/get-involved" },
  { label: "Privacy Policy", to: "/privacy" },
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
            <img
              src={footerLogo}
              alt="KWT — Kashmiri Women in Tech"
              className="h-12 w-auto sm:h-14"
            />
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
              {SOCIAL_LINKS.map((social) => (
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
              Event announcements and community updates, occasionally. No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Kashmiri Women in Tech. All rights reserved.
          </p>
          <p className="text-sm text-white/50">Srinagar, Kashmir</p>
        </div>
        
      </div>
    </footer>
  );
}