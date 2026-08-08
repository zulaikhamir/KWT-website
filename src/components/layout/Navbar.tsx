import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/header-logo.png";

// ─── Get Involved dropdown items ────────────────────────────────────────────
const GET_INVOLVED_ITEMS = [
  { label: "Volunteer", href: "/volunteer" },
  { label: "Become a Mentor", href: "/mentorship" },
  { label: "Partner With Us", href: "/partners" },
  { label: "Sponsor KWT", href: "/sponsor" },
  { label: "Donate", href: "/donate" },
] as const;

// ─── Primary nav links ───────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
] as const;

// ─── Get Involved dropdown ───────────────────────────────────────────────────
function GetInvolvedDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = GET_INVOLVED_ITEMS.some(
    (item) => item.href === location.pathname
  );

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors duration-150 outline-none",
          isActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
        )}
      >
        Get Involved
        <ChevronDown
          size={15}
          strokeWidth={2}
          className={cn(
            "mt-px transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="menu"
        aria-label="Get Involved options"
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-[#E5E7EB] bg-white shadow-lg shadow-black/5 ring-1 ring-black/[0.04] py-1.5 z-50",
          "transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {GET_INVOLVED_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/40 transition-colors duration-100 font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile menu ─────────────────────────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const location = useLocation();
  const [involvedOpen, setInvolvedOpen] = useState(false);

  // Close everything on navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      setInvolvedOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 flex flex-col bg-[var(--color-background)]",
        "transition-all duration-300 ease-in-out",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Mobile header row */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-[#E5E7EB]">
        <Link to="/" onClick={onClose}>
          <img src={logo} alt="KWT — Kashmiri Women in Tech" className="h-8" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/40 transition-colors"
        >
          <X size={22} strokeWidth={1.8} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col px-5 pt-6 pb-8 gap-1 flex-1 overflow-y-auto">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              "py-3 px-3 rounded-lg text-base font-medium transition-colors duration-150",
              location.pathname === link.href
                ? "text-[var(--color-primary)] bg-[var(--color-accent)]/50"
                : "text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/30"
            )}
          >
            {link.label}
          </Link>
        ))}

        {/* Get Involved accordion */}
        <div>
          <button
            onClick={() => setInvolvedOpen((p) => !p)}
            aria-expanded={involvedOpen}
            className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/30 transition-colors duration-150"
          >
            Get Involved
            <ChevronDown
              size={17}
              strokeWidth={2}
              className={cn(
                "transition-transform duration-200",
                involvedOpen && "rotate-180"
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              involvedOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="pl-4 mt-1 flex flex-col gap-0.5 border-l-2 border-[var(--color-accent)] ml-3">
              {GET_INVOLVED_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="py-2.5 px-3 text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] rounded-md hover:bg-[var(--color-accent)]/30 transition-colors duration-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
          <Link
            to="/join"
            className="flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--color-primary)]/90 active:scale-[0.98] transition-all duration-150"
          >
            Join KWT
          </Link>
        </div>
      </nav>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full",
          "bg-[var(--color-background)]",
          "transition-all duration-300 ease-in-out",
          scrolled
            ? "border-b border-[#E5E7EB] shadow-sm shadow-black/[0.04]"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between gap-8">

            {/* ── Logo ──────────────────────────────────────────────────── */}
            <Link
              to="/"
              aria-label="KWT — Kashmiri Women in Tech, go to homepage"
              className="shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 rounded-md"
            >
              <img
                src={logo}
                alt="KWT"
                className="h-8 w-auto"
              />
            </Link>

            {/* ── Desktop nav ───────────────────────────────────────────── */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-7 lg:gap-9"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-150 outline-none focus-visible:underline",
                    location.pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <GetInvolvedDropdown />
            </nav>

            {/* ── Desktop CTA ───────────────────────────────────────────── */}
            <div className="hidden md:flex items-center">
              <Link
                to="/join"
                className="inline-flex items-center px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--color-primary)]/90 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2"
              >
                Join KWT
              </Link>
            </div>

            {/* ── Mobile hamburger ──────────────────────────────────────── */}
            <button
              className="md:hidden p-2 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
