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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="#FFFDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 pt-10 pb-7 text-center sm:gap-6 sm:px-8 sm:pt-16 sm:pb-10 lg:gap-7 lg:px-[120px] lg:pt-[104px] lg:pb-16"
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:flex-nowrap lg:gap-x-3.5">
        <span className="hidden h-px w-10 bg-[#CBBFAE] sm:block" />
        <StitchMark />
        <span className="max-w-[280px] text-[11px] font-semibold tracking-[0.14em] text-[#6E675C] uppercase sm:max-w-none sm:tracking-[0.18em] lg:text-[12px]">
          <span className="lg:hidden">{hero.eyebrowMobile}</span>
          <span className="hidden lg:inline">{hero.eyebrow}</span>
        </span>
        <StitchMark />
        <span className="hidden h-px w-10 bg-[#CBBFAE] sm:block" />
      </div>

      {/* Mobile heading: distinct line breaks per the mobile design */}
      <h1 className="text-[46px] leading-[1.0] font-semibold tracking-[-0.045em] text-ink sm:hidden">
        Pattern tests
        <br />
        that{" "}
        <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic tracking-[-0.03em]">
          finish
          <br />
          on time.
        </span>
      </h1>

      {/* Tablet/desktop heading */}
      <h1 className="hidden max-w-[1000px] text-[64px] leading-[1.0] font-semibold tracking-[-0.04em] text-ink sm:block lg:text-[84px] lg:tracking-[-0.045em]">
        {hero.heading}
        <br />
        <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic tracking-[-0.03em]">
          {hero.headingItalic}
        </span>
      </h1>

      <p className="max-w-[620px] text-[17px] leading-[1.55] text-[#6E675C] sm:text-[16px] lg:text-[20px]">
        <span className="sm:hidden">{hero.leadMobile}</span>
        <span className="hidden sm:inline">{hero.lead}</span>
      </p>

      <div className="flex w-full flex-col items-center gap-3.5 pt-2 sm:w-auto">
        <a
          href="#join"
          onClick={() => track("cta_click", { location: "hero" })}
          className="flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-sage px-7 text-[16px] font-medium text-[#FFFDF8] sm:inline-flex sm:w-auto"
        >
          {hero.cta}
          <ArrowIcon />
        </a>
        <span className="-mt-1.5 text-[13px] text-[#6E675C] sm:mt-0 sm:text-[14px]">
          {hero.note}
        </span>
      </div>

      <div className="hidden pt-3 sm:block">
        <Annotation size={28} arrow="curl-down-long">
          {hero.annotation}
        </Annotation>
      </div>
    </section>
  );
}
