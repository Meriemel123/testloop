"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { Annotation } from "@/components/ui/Annotation";
import { SegmentedTabs } from "@/components/ui/SegmentedTabs";
import { DemoFrame } from "@/components/demo/DemoFrame";
import { demoIntro, demoTabs } from "@/lib/content";
import { floatingElements } from "@/lib/demo-data";

export function ProductTour() {
  const [activeTab, setActiveTab] = useState<string>(demoTabs[0].id);
  const activeCaption = demoTabs.find((t) => t.id === activeTab)?.caption;

  useEffect(() => {
    track("demo_tab_view", { tab: activeTab });
  }, [activeTab]);

  return (
    <section className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col items-center gap-9 px-5 pt-4 pb-16 sm:px-8 lg:px-[120px] lg:pt-4 lg:pb-[140px]">
      <div className="flex w-full min-w-0 flex-col items-center gap-4">
        <div className="flex items-end justify-center">
          <span className="sm:hidden">
            <Annotation size={24} arrow="underline-right">
              {demoIntro.annotationMobile}
            </Annotation>
          </span>
          <span className="hidden sm:inline">
            <Annotation size={26} arrow="underline-right">
              {demoIntro.annotation}
            </Annotation>
          </span>
        </div>

        <SegmentedTabs
          tabs={demoTabs.map((t) => ({ id: t.id, label: t.label }))}
          activeId={activeTab}
          onChange={setActiveTab}
          idPrefix="demo"
        />

        <p className="mx-auto min-h-[28px] max-w-lg text-center text-[16px] text-[#4F493F] lg:text-[18px]">
          {activeCaption}
        </p>
      </div>

      <div className="relative mx-3 w-[calc(100%-24px)] sm:mx-0 sm:w-full lg:max-w-[1200px]">
        <div className="pointer-events-none absolute -top-3 right-2 z-20 flex max-w-[190px] items-center gap-2.5 rounded-2xl bg-ink px-3.5 py-2.5 text-[#F7F3EC] shadow-[0_16px_32px_-14px_rgba(51,47,40,0.6)] sm:hidden">
          <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-sage">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold">{floatingElements.notification.title}</span>
            <span className="text-[11px] text-[#B3A797]">{floatingElements.notification.subtitle}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute top-16 left-2 z-20 hidden max-w-[220px] items-center gap-3 rounded-2xl bg-ink px-3.5 py-3.5 text-[#F7F3EC] shadow-[0_24px_48px_-20px_rgba(51,47,40,0.6)] lg:-left-16 lg:flex">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold">{floatingElements.notification.title}</span>
            <span className="text-[12px] text-[#B3A797]">{floatingElements.notification.subtitle}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-4 right-8 z-20 hidden h-9 items-center gap-2 rounded-full bg-[#F0E3B4] px-3.5 text-[13px] font-medium text-[#5E4F1C] shadow-[0_12px_24px_-12px_rgba(51,47,40,0.4)] lg:flex">
          <span className="h-[7px] w-[7px] rounded-full bg-ochre" />
          {floatingElements.pill}
        </div>

        <div className="pointer-events-none absolute -bottom-6 right-2 z-20 hidden max-w-[200px] items-center gap-3 rounded-2xl border border-lines bg-paper px-2.5 py-2.5 shadow-[0_24px_48px_-20px_rgba(51,47,40,0.45)] sm:flex lg:-right-14">
          <svg width="44" height="44" viewBox="0 0 52 52" className="shrink-0 rounded-[10px]" aria-hidden="true">
            <defs>
              <pattern id="pt-sage" width="20" height="22" patternUnits="userSpaceOnUse">
                <rect width="20" height="22" fill="#567C58" />
                <ellipse cx="6" cy="11" rx="3.6" ry="8.2" transform="rotate(-28 6 11)" fill="#6B9168" />
                <ellipse cx="14" cy="11" rx="3.6" ry="8.2" transform="rotate(28 14 11)" fill="#6B9168" />
              </pattern>
            </defs>
            <rect width="52" height="52" fill="url(#pt-sage)" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-ink">{floatingElements.photoCard.title}</span>
            <span className="text-[12px] text-[#6E675C]">{floatingElements.photoCard.subtitle}</span>
          </div>
        </div>

        <DemoFrame activeTab={activeTab} />
      </div>
    </section>
  );
}
