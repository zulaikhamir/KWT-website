import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrolledPastFirstSection } from "@/hooks/useScrolledPastFirstSection";
import headerLogo from "@/assets/images/header-logo.png";

const navLinks = [
  { label: "Home",   to: "/" },
  { label: "About",  to: "/about" },
  { label: "Events", to: "/events" },
  { label: "FAQs",   to: "/faq" },
];

const COLLAPSE_TRANSITION =
  "duration-300 ease-out motion-reduce:transition-none";
const GLASS_SURFACE = cn(
  "bg-[var(--color-background)]/65 backdrop-blur-2xl backdrop-saturate-150",
  "border-white/60",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_10px_34px_-14px_rgba(27,42,82,0.35)]"
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isCompact = useScrolledPastFirstSection();

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-[0.9375rem] tracking-[-0.005em] transition-colors duration-200",
      "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[var(--color-primary)]",
      "after:transition-all after:duration-300",
      isActive
        ? "text-[var(--color-primary)] after:w-full"
        : "text-[var(--color-secondary)] after:w-0 hover:text-[var(--color-primary)] hover:after:w-full"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        COLLAPSE_TRANSITION,
        isCompact
          ? "border-transparent bg-transparent"
          : "border-hairline bg-[var(--color-background)]/80 backdrop-blur-xl backdrop-saturate-150"
      )}
    >
      <div
        className={cn(
          "mx-auto px-6 transition-[max-width] lg:px-8",
          COLLAPSE_TRANSITION,
          isCompact ? "max-w-5xl" : "max-w-6xl"
        )}
      >
        <div
          className={cn(
            "flex h-(--nav-height) items-center transition-[padding]",
            COLLAPSE_TRANSITION,
            isCompact && "pt-3 pb-1"
          )}
        >
          <nav
            aria-label="Main"
            className={cn(
              "flex h-full w-full items-center justify-between",
              "border transition-all",
              COLLAPSE_TRANSITION,
              isCompact
                ? cn("rounded-full px-6", GLASS_SURFACE)
                : "rounded-none border-transparent bg-transparent px-0 shadow-none"
            )}
          >
            <Link to="/" className="shrink-0 transition-opacity hover:opacity-70">
              <img
                src={headerLogo}
                alt="KWT — Kashmiri Women in Tech"
                className={cn(
                  "w-auto transition-[height]",
                  COLLAPSE_TRANSITION,
                  isCompact ? "h-7" : "h-9"
                )}
              />
            </Link>

            {/* Desktop nav links */}
            <ul
              className={cn(
                "hidden items-center transition-[gap] md:flex",
                COLLAPSE_TRANSITION,
                isCompact ? "gap-8" : "gap-10"
              )}
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClasses} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/get-involved"
                className={cn(
                  "group inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]",
                  "font-medium tracking-[-0.005em] text-white",
                  "transition-all hover:bg-[var(--color-primary)]/90",
                  COLLAPSE_TRANSITION,
                  "hover:shadow-[0_8px_24px_-8px_rgba(27,42,82,0.5)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
                  isCompact
                    ? "px-4 py-2 text-[0.8125rem]"
                    : "px-5 py-2.5 text-[0.875rem]"
                )}
              >
                Get involved
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={cn(
                "p-2 text-[var(--color-primary)] transition-[margin] md:hidden",
                COLLAPSE_TRANSITION,
                // Optically align with the row edge; the pill supplies its
                // own padding, so the negative pull only applies when flush.
                isCompact ? "-mr-1" : "-mr-2"
              )}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className={cn(
              "px-6 pb-6 pt-2 md:hidden",
              isCompact
                ? cn("mt-2 rounded-3xl border", GLASS_SURFACE)
                : "-mx-6 border-t border-hairline bg-[var(--color-background)] lg:-mx-8"
            )}
          >
            <ul className="flex flex-col">
              {[...navLinks, { label: "Get involved", to: "/get-involved" }].map((link) => (
                <li key={link.to} className="border-b border-hairline last:border-0">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3.5 text-base tracking-[-0.01em] transition-colors",
                        isActive
                          ? "font-medium text-[var(--color-primary)]"
                          : "text-[var(--color-secondary)]"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
