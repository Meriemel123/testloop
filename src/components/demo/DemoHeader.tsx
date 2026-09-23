import { KnitTexture } from "@/components/ui/KnitTexture";
import { activeTest } from "@/lib/demo-data";

export function DemoHeader() {
  return (
    <div className="flex flex-col gap-3 border-b border-lines px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pt-6 sm:pb-5">
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

      <div className="flex flex-col items-end gap-2 sm:w-[200px]">
        <span className="text-[12px] text-[#6E675C]">{activeTest.weekLabel}</span>
        <div className="h-1 w-full rounded-full bg-lines">
          <div
            className="h-1 rounded-full bg-sage"
            style={{ width: `${activeTest.progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
