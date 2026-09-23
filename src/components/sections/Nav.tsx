"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { LogoMark } from "@/components/ui/LogoMark";
import { track } from "@vercel/analytics";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[120px]">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
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
          className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-cream"
        >
          {nav.cta}
        </a>
      </nav>
    </header>
  );
}
