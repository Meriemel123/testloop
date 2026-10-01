"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { LogoMark } from "@/components/ui/LogoMark";
import { track } from "@vercel/analytics";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream/90 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? "border-b border-lines" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[76px] lg:px-[120px]">
        <a href="#top" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <LogoMark size={28} iconSize={16} />
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink lg:text-[18px]">
            {nav.logo}
          </span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] text-[#4F493F] transition-colors hover:text-sage-mid"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          onClick={() => track("cta_click", { location: "nav" })}
          className="hidden h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-cream sm:inline-flex"
        >
          {nav.cta}
        </a>

        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="#join"
            onClick={() => track("cta_click", { location: "nav" })}
            className="inline-flex h-[38px] items-center rounded-full bg-ink px-3.5 text-[13px] font-medium text-cream"
          >
            {nav.ctaMobile}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M1 1l18 12M19 1 1 13"
                  stroke="#332F28"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M1 1h18M1 7h18M1 13h18"
                  stroke="#332F28"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-lines px-5 py-3 sm:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-[15px] text-[#4F493F]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
