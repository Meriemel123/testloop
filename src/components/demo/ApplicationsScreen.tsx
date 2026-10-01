"use client";

import { useState } from "react";
import { KnitTexture } from "@/components/ui/KnitTexture";
import {
  applicants as initialApplicants,
  applicationFilters,
  spotsBaseline,
  spotsTotal,
} from "@/lib/demo-data";

function AcceptedPill({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#DCE7D7] px-3.5 text-[13px] font-medium text-[#2F5232]"
    >
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#2F5232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Accepted
    </button>
  );
}

export function ApplicationsScreen() {
  const [applicants, setApplicants] = useState(initialApplicants);

  const acceptedCount = Math.min(
    applicants.filter((a) => a.accepted).length + spotsBaseline,
    spotsTotal
  );

  function toggleAccept(id: string) {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, accepted: !a.accepted } : a))
    );
  }

  return (
    <div className="flex flex-col gap-2.5 p-4 sm:gap-3.5 sm:p-8">
      {/* Mobile summary row */}
      <div className="flex items-center justify-between lg:hidden">
        <span className="text-[13px] font-semibold text-ink">23 applications</span>
        <span className="text-[12px] text-[#6E675C]">
          <strong className="font-semibold text-ink">{acceptedCount} of {spotsTotal}</strong>{" "}
          spots filled
        </span>
      </div>

      {/* Desktop filter row */}
      <div className="hidden flex-wrap items-center justify-between gap-3 lg:flex">
        <div className="flex flex-wrap gap-2">
          {applicationFilters.map((f, i) => (
            <span
              key={f}
              className={
                i === 0
                  ? "inline-flex h-[30px] items-center rounded-full bg-ink px-3 text-[12px] font-medium text-cream"
                  : "inline-flex h-[30px] items-center rounded-full border border-[#DDD3C3] px-3 text-[12px] text-[#4F493F]"
              }
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-[13px] text-[#6E675C]">
          <strong className="font-semibold text-ink">{acceptedCount} of {spotsTotal}</strong>{" "}
          spots filled
        </p>
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-2.5 lg:hidden">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex flex-col gap-2.5 rounded-[14px] border border-lines bg-[#FBF8F2] p-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#EFE8DC] text-[11px] font-semibold text-[#4F493F]">
                {applicant.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-ink">
                  {applicant.name}{" "}
                  <span className="font-normal text-[#7A7266]">· {applicant.country}</span>
                </p>
                <p className="text-[11px] text-[#6E675C]">
                  {applicant.level} · size {applicant.wantsSize}
                </p>
              </div>
              <div className="flex gap-1">
                {applicant.swatches.map((color, i) => (
                  <span key={i} className="relative h-6 w-6 overflow-hidden rounded-[6px]">
                    <KnitTexture color={color} />
                  </span>
                ))}
              </div>
            </div>

            {applicant.accepted ? (
              <AcceptedPill onClick={() => toggleAccept(applicant.id)} />
            ) : (
              <div className="flex gap-1.5">
                <span className="flex flex-1 items-center justify-center rounded-full border border-[#DDD3C3] text-[13px] text-[#6E675C]" style={{ height: 36 }}>
                  Decline
                </span>
                <button
                  type="button"
                  onClick={() => toggleAccept(applicant.id)}
                  className="flex-1 rounded-full bg-sage text-[13px] font-medium text-[#FFFDF8]"
                  style={{ height: 36 }}
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: bordered list */}
      <div className="hidden flex-col overflow-hidden rounded-[14px] border border-lines lg:flex">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex items-center gap-4 border-b border-[#EFE8DC] px-4 py-3.5 last:border-b-0"
          >
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#EFE8DC] text-[12px] font-semibold text-[#4F493F]">
              {applicant.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-ink">
                {applicant.name} <span className="font-normal text-[#7A7266]">· {applicant.country}</span>
              </p>
              <p className="text-[12px] text-[#6E675C]">
                {applicant.level} · wants size {applicant.wantsSize} · {applicant.garmentsMade} garments made
              </p>
            </div>

            <div className="flex items-center gap-1">
              {applicant.swatches.map((color, i) => (
                <span key={i} className="relative h-10 w-10 overflow-hidden rounded-lg">
                  <KnitTexture color={color} />
                </span>
              ))}
            </div>

            <div className="flex w-[176px] justify-end gap-1.5">
              {applicant.accepted ? (
                <AcceptedPill onClick={() => toggleAccept(applicant.id)} />
              ) : (
                <>
                  <span className="inline-flex h-[34px] items-center rounded-full border border-[#DDD3C3] px-3 text-[13px] text-[#6E675C]">
                    Decline
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleAccept(applicant.id)}
                    className="h-[34px] rounded-full bg-sage px-3.5 text-[13px] font-medium text-[#FFFDF8]"
                  >
                    Accept
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <span className="text-[11px] text-[#7A7266] sm:text-[12px]">
        Accepted and declined makers are emailed automatically.
      </span>
    </div>
  );
}
