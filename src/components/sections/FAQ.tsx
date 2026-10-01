"use client";

import { useId, useState } from "react";
import { faq } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-[72px] sm:gap-10 sm:px-8 lg:flex-row lg:gap-24 lg:px-[120px] lg:py-[120px]"
    >
      <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0">
        <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04] lg:tracking-[-0.04em]">
          {faq.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {faq.headingItalic}
          </span>
        </h2>
        <p className="hidden text-[15px] leading-[1.6] text-[#6E675C] sm:block sm:text-[16px]">
          {faq.lead}
        </p>
      </div>

      <div className="flex flex-1 flex-col border-t border-[#DDD3C3]">
        {faq.items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          return (
            <div key={item.question} className="border-b border-[#DDD3C3]">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex min-h-[64px] w-full items-center justify-between gap-4 py-3 text-left text-[16px] leading-[1.35] font-medium tracking-[-0.01em] text-ink focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-2 sm:min-h-[70px] sm:gap-6 sm:py-4 sm:text-[18px]"
                >
                  {item.question}
                  {open ? (
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
                      <path d="M4 9h10" stroke="#567C58" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
                      <path d="M4 9h10M9 4v10" stroke="#332F28" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="pr-0 pb-5 text-[15px] leading-[1.6] text-[#6E675C] sm:pr-12 sm:pb-6 sm:text-[16px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <p className="pt-4 text-[14px] leading-[1.6] text-[#6E675C] sm:hidden">
          {faq.leadMobile}
        </p>
      </div>
    </section>
  );
}
