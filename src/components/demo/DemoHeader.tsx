import { KnitTexture } from "@/components/ui/KnitTexture";
import { activeTest } from "@/lib/demo-data";

export function DemoHeader() {
  const weekShort = activeTest.weekLabel.split(" · ")[0];

  return (
    <>
      {/* Mobile */}
      <div className="flex items-center gap-3 border-b border-lines bg-[#FBF8F2] p-4 lg:hidden">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[10px]">
          <KnitTexture color={activeTest.color} />
        </span>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-baseline justify-between">
            <span className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
              {activeTest.name}
            </span>
            <span className="text-[11px] text-[#6E675C]">{weekShort}</span>
          </div>
          <div className="h-1 rounded-full bg-lines">
            <div
              className="h-1 rounded-full bg-sage"
              style={{ width: `${activeTest.progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden border-b border-lines px-8 pt-6 pb-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-xl">
            <KnitTexture color={activeTest.color} />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
              {activeTest.name}
            </span>
            <span className="text-[13px] text-[#6E675C]">{activeTest.meta}</span>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-end gap-2">
          <span className="text-[12px] text-[#6E675C]">{activeTest.weekLabel}</span>
          <div className="h-1 w-full rounded-full bg-lines">
            <div
              className="h-1 rounded-full bg-sage"
              style={{ width: `${activeTest.progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
