"use client";

import { useState } from "react";
import { versionV2, versionV1, correctionDraft } from "@/lib/demo-data";

export function CorrectionsScreen() {
  const [corrSent, setCorrSent] = useState(false);

  return (
    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:p-8">
      <div className="flex flex-1 flex-col gap-2.5">
        <span className="text-[13px] font-semibold text-ink">Pattern versions</span>

        {corrSent && (
          <div className="flex flex-col gap-2 rounded-[14px] border border-sage bg-[#FBF8F2] px-4.5 py-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
                v3{" "}
                <span className="inline-flex h-[22px] items-center rounded-full bg-[#DCE7D7] px-2 text-[11px] font-semibold text-[#2F5232]">
                  Current
                </span>
              </span>
              <span className="text-[12px] text-[#7A7266]">Just now</span>
            </div>
            <span className="text-[13px] leading-[1.5] text-[#4F493F]">
              {correctionDraft.note}
            </span>
            <span className="text-[12px] text-[#2F5232]">Sent to all 5 makers</span>
          </div>
        )}

        <div className="flex flex-col gap-2 rounded-[14px] border border-lines px-4.5 py-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
              {versionV2.label}
              {!corrSent && (
                <span className="inline-flex h-[22px] items-center rounded-full bg-[#DCE7D7] px-2 text-[11px] font-semibold text-[#2F5232]">
                  Current
                </span>
              )}
            </span>
            <span className="text-[12px] text-[#7A7266]">{versionV2.timestamp}</span>
          </div>
          <span className="text-[13px] leading-[1.5] text-[#4F493F]">{versionV2.note}</span>
          <div className="flex items-center justify-between">
            <div className="flex pl-1.5">
              {versionV2.avatars?.map((initials, i) => (
                <span
                  key={i}
                  className="-ml-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[#FBF8F2] bg-[#EFE8DC] text-[9px] font-semibold text-[#4F493F]"
                >
                  {initials}
                </span>
              ))}
            </div>
            <span className="text-[12px] text-[#6E675C]">
              Opened by {versionV2.openedBy} of {versionV2.openedOf} makers
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[14px] border border-dashed border-[#DDD3C3] px-4.5 py-3.5">
          <span className="text-[13px] text-[#7A7266]">{versionV1.label}</span>
          <span className="text-[12px] text-[#7A7266]">Archived</span>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 rounded-2xl bg-[#F4EEE4] p-5 sm:w-[300px] sm:shrink-0">
        {!corrSent ? (
          <div className="flex flex-col gap-3.5">
            <span className="text-[14px] font-semibold text-ink">Share a correction</span>

            <div className="flex items-center gap-2.5 rounded-[10px] border border-lines bg-[#FBF8F2] px-3 py-2.5">
              <span className="flex h-[34px] w-[30px] shrink-0 items-center justify-center rounded-[5px] bg-[#F0DCDA] text-[9px] font-bold text-[#8F5330]">
                PDF
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[13px] font-medium text-ink">
                  {correctionDraft.filename}
                </span>
                <span className="text-[11px] text-[#7A7266]">{correctionDraft.filesize}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] text-[#6E675C]">What changed?</span>
              <div className="min-h-[58px] rounded-[10px] border border-lines bg-[#FBF8F2] px-3 py-2.5 text-[13px] leading-[1.5] text-ink">
                {correctionDraft.note}
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] text-ink">
              <span>Notify all 5 makers</span>
              <span className="flex h-5 w-9 items-center justify-end rounded-full bg-sage p-0.5">
                <span className="h-4 w-4 rounded-full bg-[#FFFDF8]" />
              </span>
            </div>

            <button
              type="button"
              onClick={() => setCorrSent(true)}
              className="h-[42px] rounded-full bg-sage text-[14px] font-medium text-[#FFFDF8]"
            >
              Send to makers
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3 pt-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE7D7]">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#2F5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[16px] font-semibold text-ink">v3 is on its way</span>
            <span className="text-[13px] leading-[1.5] text-[#6E675C]">
              All 5 makers were notified. Nobody works from the old PDF.
            </span>
            <button
              type="button"
              onClick={() => setCorrSent(false)}
              className="h-[34px] rounded-full border border-[#DDD3C3] px-3 text-[12px] font-medium text-[#4F493F]"
            >
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
