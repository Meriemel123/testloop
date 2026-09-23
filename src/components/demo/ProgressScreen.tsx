"use client";

import { useState } from "react";
import { milestones, makerProgress, type MilestoneStatus } from "@/lib/demo-data";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

function MilestoneDot({ status }: { status: MilestoneStatus }) {
  if (status === "done") {
    return (
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-sage">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "current") {
    return <span className="h-[18px] w-[18px] rounded-full border-2 border-sage bg-[#DCE7D7]" />;
  }
  return <span className="h-[18px] w-[18px] rounded-full border-2 border-[#DDD3C3]" />;
}

export function ProgressScreen() {
  const [nudged, setNudged] = useState<Set<string>>(new Set());

  return (
    <div className="overflow-x-auto p-5 sm:p-8">
      <div className="flex min-w-[560px] flex-col overflow-hidden rounded-[14px] border border-lines">
        <div className="flex h-11 items-center gap-2 bg-[#F4EEE4] px-4 text-[12px] text-[#6E675C]">
          <span className="flex-1">Maker</span>
          {milestones.map((m) => (
            <span key={m} className="w-[66px] text-center">
              {m}
            </span>
          ))}
          <span className="w-[150px] text-right">Status</span>
        </div>

        {makerProgress.map((maker) => (
          <div
            key={maker.id}
            className="flex h-[62px] items-center gap-2 border-t border-[#EFE8DC] px-4"
          >
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#EFE8DC] text-[11px] font-semibold text-[#4F493F]">
                {initialsOf(maker.name)}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[13px] font-semibold text-ink">{maker.name}</span>
                <span className="truncate text-[12px] text-[#7A7266]">
                  Size {maker.size} · {maker.lastActive}
                </span>
              </div>
            </div>

            {maker.milestones.map((status, i) => (
              <div key={i} className="flex w-[66px] justify-center">
                <MilestoneDot status={status} />
              </div>
            ))}

            <div className="flex w-[150px] justify-end">
              {maker.status === "on-track" && (
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink">
                  <span className="h-[7px] w-[7px] rounded-full bg-sage" />
                  On track
                </span>
              )}
              {maker.status === "finished" && (
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#CE9272]" />
                  Finished
                </span>
              )}
              {maker.status === "late" &&
                (nudged.has(maker.id) ? (
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-[#2F5232]">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#2F5232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Nudge sent
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setNudged((prev) => new Set(prev).add(maker.id))}
                    className="h-8 rounded-full border border-[#C9AE58] bg-[#F0E3B4] px-3 text-[12px] font-medium text-[#5E4F1C]"
                  >
                    Send a gentle nudge
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
