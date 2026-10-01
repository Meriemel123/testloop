"use client";

import { useState } from "react";
import { milestones, makerProgress, type MilestoneStatus } from "@/lib/demo-data";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

function MilestoneDot({ status, size = "lg" }: { status: MilestoneStatus; size?: "sm" | "lg" }) {
  const done = size === "lg" ? 22 : 20;
  const other = size === "lg" ? 18 : 16;
  if (status === "done") {
    return (
      <span
        className="flex items-center justify-center rounded-full bg-sage"
        style={{ width: done, height: done }}
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "current") {
    return (
      <span
        className="rounded-full border-2 border-sage bg-[#DCE7D7]"
        style={{ width: other, height: other }}
      />
    );
  }
  return (
    <span className="rounded-full border-2 border-[#DDD3C3]" style={{ width: other, height: other }} />
  );
}

function StatusIndicator({
  status,
  nudged,
  onNudge,
  compact = false,
}: {
  status: "on-track" | "finished" | "late";
  nudged: boolean;
  onNudge: () => void;
  compact?: boolean;
}) {
  if (status === "on-track") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[12px] text-ink sm:text-[13px]">
        <span className="h-[7px] w-[7px] rounded-full bg-sage" />
        On track
      </span>
    );
  }
  if (status === "finished") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[12px] text-ink sm:text-[13px]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#CE9272]" />
        Finished
      </span>
    );
  }
  if (nudged) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[12px] text-[#2F5232] sm:text-[13px]">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#2F5232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {compact ? "Sent" : "Nudge sent"}
      </span>
    );
  }
  return (
    <button
      type="button"
      onClick={onNudge}
      className="h-8 rounded-full border border-[#C9AE58] bg-[#F0E3B4] px-3 text-[12px] font-medium text-[#5E4F1C]"
    >
      {compact ? "Nudge" : "Send a gentle nudge"}
    </button>
  );
}

export function ProgressScreen() {
  const [nudged, setNudged] = useState<Set<string>>(new Set());

  return (
    <div className="p-4 sm:p-8">
      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-2.5 lg:hidden">
        <div className="flex justify-between px-0.5 text-[10px] text-[#7A7266]">
          {milestones.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        {makerProgress.map((maker) => (
          <div
            key={maker.id}
            className="flex flex-col gap-2.5 rounded-[14px] border border-lines bg-[#FBF8F2] p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EFE8DC] text-[10px] font-semibold text-[#4F493F]">
                  {initialsOf(maker.name)}
                </span>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-ink">{maker.name}</span>
                  <span className="text-[11px] text-[#7A7266]">
                    Size {maker.size} · {maker.lastActive}
                  </span>
                </div>
              </div>
              <StatusIndicator
                status={maker.status}
                nudged={nudged.has(maker.id)}
                onNudge={() => setNudged((prev) => new Set(prev).add(maker.id))}
                compact
              />
            </div>
            <div className="flex items-center justify-between px-2">
              {maker.milestones.map((status, i) => (
                <MilestoneDot key={i} status={status} size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden flex-col overflow-hidden rounded-[14px] border border-lines lg:flex">
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
              <StatusIndicator
                status={maker.status}
                nudged={nudged.has(maker.id)}
                onNudge={() => setNudged((prev) => new Set(prev).add(maker.id))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
