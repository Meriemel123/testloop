"use client";

import { AnimatePresence, motion } from "framer-motion";
import { DemoSidebar } from "./DemoSidebar";
import { DemoHeader } from "./DemoHeader";
import { ApplicationsScreen } from "./ApplicationsScreen";
import { ProgressScreen } from "./ProgressScreen";
import { CorrectionsScreen } from "./CorrectionsScreen";
import { FeedbackScreen } from "./FeedbackScreen";
import { GalleryScreen } from "./GalleryScreen";
import { activeTest } from "@/lib/demo-data";

const screens: Record<string, React.ComponentType> = {
  applications: ApplicationsScreen,
  progress: ProgressScreen,
  corrections: CorrectionsScreen,
  feedback: FeedbackScreen,
  gallery: GalleryScreen,
};

export function DemoFrame({ activeTab }: { activeTab: string }) {
  const Screen = screens[activeTab] ?? ApplicationsScreen;

  return (
    <div className="relative rounded-[24px] bg-[#CE9272] p-4 sm:rounded-[32px] sm:p-10">
      <svg className="absolute inset-0 h-full w-full rounded-[24px] sm:rounded-[32px]" aria-hidden="true">
        <defs>
          <pattern id="demo-frame-knit" width="20" height="22" patternUnits="userSpaceOnUse">
            <rect width="20" height="22" fill="#CE9272" />
            <ellipse cx="6" cy="11" rx="3.6" ry="8.2" fill="#D9A688" transform="rotate(-28 6 11)" />
            <ellipse cx="14" cy="11" rx="3.6" ry="8.2" fill="#D9A688" transform="rotate(28 14 11)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#demo-frame-knit)" />
      </svg>

      <div className="relative overflow-hidden rounded-2xl bg-[#FBF8F2] text-left shadow-[0_1px_0_rgba(51,47,40,0.06),0_40px_80px_-32px_rgba(60,34,18,0.5)]">
        <div className="flex h-10 items-center justify-center border-b border-lines bg-[#F4EEE4]">
          <span className="truncate text-[12px] text-[#7A7266]">{activeTest.urlPath}</span>
        </div>

        <div className="flex flex-col lg:h-[640px] lg:flex-row">
          <DemoSidebar />
          <div className="min-w-0 flex-1">
            <DemoHeader />
            <div className="relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Screen />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
