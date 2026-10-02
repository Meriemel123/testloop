"use client";

import { useState } from "react";
import { KnitTexture } from "@/components/ui/KnitTexture";
import { galleryPhotos, galleryInitiallySelected } from "@/lib/demo-data";

export function GalleryScreen() {
  const [picked, setPicked] = useState<Set<string>>(new Set(galleryInitiallySelected));

  function toggle(id: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-3 p-4 sm:gap-3.5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[12px] text-[#6E675C] sm:text-[13px]">
          <strong className="font-semibold text-ink">{galleryPhotos.length} finished pieces</strong>{" "}
          · {picked.size} picked{" "}
          <span className="lg:hidden">for launch</span>
          <span className="hidden lg:inline">for your launch post</span>
        </span>
        <span className="hidden h-[34px] items-center rounded-full bg-sage px-3.5 text-[13px] font-medium text-[#FFFDF8] lg:inline-flex">
          Download for launch
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 sm:grid-cols-5">
        {galleryPhotos.map((photo) => {
          const selected = picked.has(photo.id);
          return (
            <button
              key={photo.id}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(photo.id)}
              className="flex flex-col gap-1.5 text-left sm:gap-2"
            >
              <span className="relative block aspect-[150/118] overflow-hidden rounded-xl sm:aspect-[150/220]">
                <KnitTexture color={photo.color} photo={photo.photo} alt={`${photo.name} — ${photo.meta}`} />
                {selected ? (
                  <span
                    className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-sage"
                    style={{ boxShadow: "0 0 0 2px #FBF8F2" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7.5l2.5 2.5L11 4.5" stroke="#FFFDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : (
                  <span
                    className="absolute top-2 right-2 h-5 w-5 rounded-full border-2 border-[#FBF8F2]"
                    style={{ background: "rgba(51,47,40,0.18)" }}
                  />
                )}
              </span>
              <span className="text-[12px] font-semibold text-ink sm:hidden">
                {photo.name} <span className="font-normal text-[#7A7266]">· {photo.meta}</span>
              </span>
              <span className="hidden text-[13px] font-semibold text-ink sm:inline">{photo.name}</span>
              <span className="hidden -mt-1.5 text-[12px] text-[#7A7266] sm:inline">{photo.meta}</span>
            </button>
          );
        })}
      </div>

      <span className="text-[11px] text-[#7A7266] sm:text-[12px]">
        Tap a piece to pick it for your launch post. Makers agree to photo use when they apply.
      </span>
    </div>
  );
}
