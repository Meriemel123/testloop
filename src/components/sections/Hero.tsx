"use client";

import { hero } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";
import { track } from "@vercel/analytics";

function StitchMark() {
  return (
    <svg width="14" height="16" viewBox="0 0 20 22" aria-hidden="true" className="shrink-0">
      <ellipse cx="6" cy="11" rx="3.6" ry="8.2" transform="rotate(-28 6 11)" fill="#CE9272" />
      <ellipse cx="14" cy="11" rx="3.6" ry="8.2" transform="rotate(28 14 11)" fill="#CE9272" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 pt-16 pb-10 text-center sm:px-8 lg:gap-7 lg:px-[120px] lg:pt-[104px] lg:pb-16"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:flex-nowrap lg:gap-x-3.5">
        <span className="hidden h-px w-10 bg-[#CBBFAE] sm:block" />
        <StitchMark />
        <span className="max-w-[280px] text-[11px] font-semibold tracking-[0.12em] text-[#6E675C] uppercase sm:max-w-none sm:text-[12px] sm:tracking-[0.18em]">
          {hero.eyebrow}
        </span>
        <StitchMark />
        <span className="hidden h-px w-10 bg-[#CBBFAE] sm:block" />
      </div>

      <h1 className="max-w-[1000px] text-[44px] leading-[1.0] font-semibold tracking-[-0.04em] text-ink sm:text-[64px] lg:text-[84px] lg:tracking-[-0.045em]">
        {hero.heading}
        <br />
        <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic tracking-[-0.03em]">
          {hero.headingItalic}
        </span>
      </h1>

      <p className="max-w-[620px] text-[16px] leading-[1.55] text-[#6E675C] lg:text-[20px]">
        {hero.lead}
      </p>

      <div className="flex flex-col items-center gap-3.5 pt-2">
        <a
          href="#join"
          onClick={() => track("cta_click", { location: "hero" })}
          className="inline-flex h-[54px] items-center gap-2.5 rounded-full bg-sage px-7 text-[16px] font-medium text-[#FFFDF8]"
        >
          {hero.cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#FFFDF8"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <span className="text-[14px] text-[#6E675C]">{hero.note}</span>
      </div>

      <div className="pt-3">
        <Annotation size={28} arrow="curl-down-long">
          {hero.annotation}
        </Annotation>
      </div>
    </section>
  );
}
