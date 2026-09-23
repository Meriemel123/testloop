"use client";

import { pricing } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";
import { track } from "@vercel/analytics";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-10 border-t border-b border-lines bg-[#FBF8F2] px-5 py-16 sm:px-8 lg:gap-14 lg:px-[120px] lg:py-[120px]"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <h2 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04]">
          {pricing.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {pricing.headingItalic}
          </span>
        </h2>
        <p className="text-[16px] text-[#6E675C] lg:text-[18px]">{pricing.lead}</p>
      </div>

      <div className="flex w-full max-w-[900px] flex-col gap-2">
        <div className="flex justify-center pr-0 sm:justify-end lg:pr-[120px]">
          <Annotation size={26} arrow="curl-down">
            {pricing.annotation}
          </Annotation>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-[26px] border border-lines bg-cream p-8 sm:p-[38px]">
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-semibold text-ink">{pricing.free.title}</span>
              <span className="text-[14px] text-[#6E675C]">{pricing.free.subtitle}</span>
            </div>
            <span className="text-[44px] font-semibold tracking-[-0.04em] text-ink sm:text-[54px]">
              {pricing.free.price}
            </span>
            <a
              href="#join"
              onClick={() => track("cta_click", { location: "pricing_free" })}
              className="flex h-[50px] items-center justify-center rounded-full border border-[#D5CABA] bg-[#FBF8F2] text-[15px] font-medium text-ink"
            >
              {pricing.free.cta}
            </a>
            <div className="flex flex-col gap-3 border-t border-lines pt-5 text-[15px] text-[#4F493F]">
              {pricing.free.features.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[26px] bg-sage p-8 text-[#FFFDF8] sm:p-[38px]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[18px] font-semibold">{pricing.designer.title}</span>
                <span className="text-[14px] text-[#E3EDDF]">{pricing.designer.subtitle}</span>
              </div>
              <span className="inline-flex h-7 shrink-0 items-center rounded-full bg-[#F0E3B4] px-3 text-[12px] font-semibold text-[#5E4F1C]">
                {pricing.designer.badge}
              </span>
            </div>
            <span className="flex items-baseline gap-2 text-[44px] font-semibold tracking-[-0.04em] sm:text-[54px]">
              {pricing.designer.price}
              <span className="text-[15px] font-normal text-[#E3EDDF]">
                {pricing.designer.priceSuffix}
              </span>
              <span className="text-[15px] font-normal text-[#C9DBC4] line-through">
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
              className="flex flex-col gap-3 border-t pt-5 text-[15px] text-[#F4F8F1]"
              style={{ borderColor: "#7A9A7B" }}
            >
              {pricing.designer.features.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
