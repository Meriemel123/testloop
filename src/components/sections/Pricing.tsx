"use client";

import { pricing } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";
import { track } from "@vercel/analytics";

function FreeCard() {
  return (
    <div className="flex flex-col gap-5 rounded-[24px] border border-lines bg-cream p-6 sm:gap-6 sm:rounded-[26px] sm:p-8 lg:p-[38px]">
      <div className="flex flex-col gap-1">
        <span className="text-[17px] font-semibold text-ink sm:text-[18px]">{pricing.free.title}</span>
        <span className="text-[13px] text-[#6E675C] sm:text-[14px]">{pricing.free.subtitle}</span>
      </div>
      <span className="text-[46px] font-semibold tracking-[-0.04em] text-ink sm:text-[44px] lg:text-[54px]">
        {pricing.free.price}
      </span>
      <a
        href="#join"
        onClick={() => track("cta_click", { location: "pricing_free" })}
        className="flex h-[50px] items-center justify-center rounded-full border border-[#D5CABA] bg-[#FBF8F2] text-[15px] font-medium text-ink"
      >
        {pricing.free.cta}
      </a>
      <div className="flex flex-col gap-2.5 border-t border-lines pt-4 text-[14px] text-[#4F493F] sm:gap-3 sm:pt-5 sm:text-[15px]">
        {pricing.free.features.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
    </div>
  );
}

function DesignerCard() {
  return (
    <div className="flex flex-col gap-5 rounded-[24px] bg-sage p-6 text-[#FFFDF8] sm:gap-6 sm:rounded-[26px] sm:p-8 lg:p-[38px]">
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex flex-col gap-1">
          <span className="text-[17px] font-semibold sm:text-[18px]">{pricing.designer.title}</span>
          <span className="text-[13px] text-[#E3EDDF] sm:text-[14px]">{pricing.designer.subtitle}</span>
        </div>
        <span className="inline-flex h-[26px] shrink-0 items-center rounded-full bg-[#F0E3B4] px-2.5 text-[11px] font-semibold whitespace-nowrap text-[#5E4F1C] sm:h-7 sm:px-3 sm:text-[12px]">
          {pricing.designer.badge}
        </span>
      </div>
      <span className="flex flex-wrap items-baseline gap-2 text-[46px] font-semibold tracking-[-0.04em] sm:text-[44px] lg:text-[54px]">
        {pricing.designer.price}
        <span className="text-[14px] font-normal text-[#E3EDDF] sm:text-[15px]">
          {pricing.designer.priceSuffix}
        </span>
        <span className="text-[14px] font-normal text-[#C9DBC4] line-through sm:text-[15px]">
          {pricing.designer.strikePrice}
        </span>
      </span>
      <a
        href="#join"
        onClick={() => track("cta_click", { location: "pricing_designer" })}
        className="flex h-[50px] items-center justify-center rounded-full bg-[#FFFDF8] text-[15px] font-medium text-[#2F5232]"
      >
        {pricing.designer.cta}
      </a>
      <div
        className="flex flex-col gap-2.5 border-t pt-4 text-[14px] text-[#F4F8F1] sm:gap-3 sm:pt-5 sm:text-[15px]"
        style={{ borderColor: "#7A9A7B" }}
      >
        {pricing.designer.features.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-8 border-t border-b border-lines bg-[#FBF8F2] px-5 py-[72px] sm:gap-10 sm:px-8 lg:gap-14 lg:px-[120px] lg:py-[120px]"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04] lg:tracking-[-0.04em]">
          {pricing.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {pricing.headingItalic}
          </span>
        </h2>
        <p className="text-[16px] text-[#6E675C] lg:text-[18px]">{pricing.lead}</p>
      </div>

      {/* Mobile: Designer card first, annotation between the two cards */}
      <div className="flex w-full flex-col gap-5 sm:hidden">
        <DesignerCard />
        <span className="font-hand pl-2 text-[22px] font-medium text-[#8F5330]">
          {pricing.annotationMobile}
        </span>
        <FreeCard />
      </div>

      {/* Tablet/desktop: annotation above, Free + Designer side by side */}
      <div className="hidden w-full max-w-[900px] flex-col gap-2 sm:flex">
        <div className="flex justify-end pr-0 lg:pr-[120px]">
          <Annotation size={26} arrow="curl-down">
            {pricing.annotation}
          </Annotation>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FreeCard />
          <DesignerCard />
        </div>
      </div>
    </section>
  );
}
