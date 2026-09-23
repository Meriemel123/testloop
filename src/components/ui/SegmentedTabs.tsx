"use client";

import { useRef } from "react";

export type SegmentedTab = {
  id: string;
  label: string;
};

export function SegmentedTabs({
  tabs,
  activeId,
  onChange,
  className = "",
  idPrefix = "tab",
}: {
  tabs: SegmentedTab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  idPrefix?: string;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      onChange(nextTab.id);
      refs.current[nextTab.id]?.focus();
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Product tour"
      className={`no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full bg-[#EFE8DC] p-[5px] ${className}`}
    >
      {tabs.map((tab, index) => {
        const selected = tab.id === activeId;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[tab.id] = el;
            }}
            role="tab"
            id={`${idPrefix}-${tab.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`h-11 shrink-0 rounded-full px-[22px] text-[15px] whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-sage focus-visible:outline-offset-2 ${
              selected
                ? "bg-[#FBF8F2] font-semibold text-ink shadow-[0_1px_2px_rgba(51,47,40,0.12)]"
                : "font-medium text-[#6E675C]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
