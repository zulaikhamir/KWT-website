import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import headerLogo from "@/assets/images/header-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-hairline bg-[var(--color-background)]/80 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-(--nav-height) max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-70">
          <img
            src={headerLogo}
            alt="KWT — Kashmiri Women in Tech"
            className="h-9 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/get-involved"
            className={cn(
              "group inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]",
              "px-5 py-2.5 text-[0.875rem] font-medium tracking-[-0.005em] text-white",
              "transition-all duration-200 hover:bg-[var(--color-primary)]/90",
              "hover:shadow-[0_8px_24px_-8px_rgba(27,42,82,0.5)]"
            )}
          >
            Get involved
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-[var(--color-primary)] md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-[var(--color-background)] px-6 pb-6 pt-2 md:hidden"
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
    </header>
  );
}
