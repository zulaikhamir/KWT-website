import { useState } from "react";
import { Link } from "react-router-dom";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import footerLogo from "@/assets/images/footer-logo.png";

// ─── LinkedIn SVG ─────────────────────────────────────────────────────────────
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 20.452h3.554V9H3.56v11.452z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: "About",    href: "/about"  },
  { label: "Events",   href: "/events" },
  { label: "Blog",     href: "/blog"   },
  { label: "Join KWT", href: "/join"   },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/company/kashmiri-women-in-tech/",
    icon:  LinkedInIcon,
  },
  {
    label: "Instagram",
    href:  "https://www.instagram.com/kashmiriwomenintech/",
    icon:  SiInstagram,
  },
  {
    label: "WhatsApp",
    href:  "https://wa.me/",
    icon:  SiWhatsapp,
  },
];

// ─── Newsletter strip ─────────────────────────────────────────────────────────
// Sits above the main footer grid. State-only for now — wire up a real endpoint
// (e.g. Mailchimp, ConvertKit) by replacing handleSubmit when ready.
function NewsletterStrip() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    // TODO: replace with real API call
    setSubmitted(true);
  }

  return (
    <div className="border-b border-[var(--color-footer-border)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copy */}
          <div className="flex flex-col gap-1 max-w-sm">
            <p className="text-sm font-semibold text-white">
              Stay in the loop
            </p>
            <p className="text-sm text-[var(--color-footer-text)]">
              Get KWT updates, opportunities, and events — no spam.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <p
              role="status"
              className="text-sm font-medium text-[var(--color-accent)]"
            >
              You're on the list — thanks for joining!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm flex-col gap-2 sm:flex-row sm:gap-3"
              noValidate
            >
              <div className="flex flex-col gap-1 flex-1">
                {/* Visually hidden label — input identified by label, not placeholder alone */}
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                  aria-describedby={error ? "footer-email-error" : undefined}
                  aria-invalid={error ? "true" : undefined}
                  className={cn(
                    "w-full rounded-lg px-3.5 py-2.5 text-sm",
                    "bg-white/10 text-white placeholder:text-white/40",
                    "border transition-colors duration-150 outline-none",
                    error
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/15 focus:border-white/40",
                    "focus:ring-2 focus:ring-white/10",
                  )}
                />
                {error && (
                  <p
                    id="footer-email-error"
                    role="alert"
                    className="text-xs text-red-400"
                  >
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={cn(
                  "inline-flex shrink-0 items-center justify-center gap-1.5",
                  "rounded-lg px-5 py-2.5",
                  "bg-[var(--color-accent)] text-[var(--color-primary)]",
                  "text-sm font-semibold tracking-wide",
                  "hover:bg-[var(--color-accent)]/80 active:scale-[0.98]",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50",
                )}
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  const linkClass = cn(
    "text-sm text-[var(--color-footer-text)] transition-colors duration-150",
    "hover:text-white",
    "focus-visible:outline-none focus-visible:underline underline-offset-4",
  );

  return (
    <footer className="bg-[var(--color-footer-bg)]">

      {/* ── Newsletter strip ────────────────────────────────────────────── */}
      <NewsletterStrip />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/*
          flex justify-between:
          Left  → Brand block (logo + description + socials)
          Right → Nav group (Quick Links + Contact side by side)

          On mobile: single column stack.
          On tablet: row with justify-between.
        */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

          {/* Left — Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <img
              src={footerLogo}
              alt="Kashmiri Women in Tech"
              className="h-auto w-28"
            />
            <p className="text-sm leading-relaxed text-[var(--color-footer-text)]">
              A community for Kashmiri women building careers in tech — to
              learn, connect, and grow together.
            </p>

            {/* Social icons */}
            <ul
              className="flex items-center gap-2.5"
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`KWT on ${label}`}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg",
                      "bg-[var(--color-footer-icon-bg)] text-white/60",
                      "hover:bg-[var(--color-footer-icon-hover)] hover:text-white",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                    )}
                  >
                    <Icon size={16} color="currentColor" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Quick Links + Contact grouped together */}
          <div className="flex flex-row gap-12 sm:gap-16">

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-footer-text-muted)]">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2.5">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-footer-text-muted)]">
                Contact
              </h3>
              <a
                href="mailto:hello@kashmiriwomenintech.org"
                className={cn(linkClass, "flex items-center gap-2")}
              >
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>hello@kashmiriwomenintech.org</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--color-footer-border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="text-xs text-[var(--color-footer-text-muted)]">
            © {year} Kashmiri Women in Tech. All rights reserved.
          </p>
          <Link
            to="/privacy"
            className="text-xs text-[var(--color-footer-text-muted)] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:underline underline-offset-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

    </footer>
  );
}
