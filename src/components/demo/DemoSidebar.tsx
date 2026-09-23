import { KnitTexture } from "@/components/ui/KnitTexture";
import { LogoMark } from "@/components/ui/LogoMark";
import { studio, tests } from "@/lib/demo-data";

export function DemoSidebar() {
  return (
    <aside className="hidden w-[224px] shrink-0 flex-col box-border border-r border-lines p-4 lg:flex lg:pt-5 lg:pr-4 lg:pb-5 lg:pl-4">
      <div className="flex items-center gap-2.5 px-2 pb-5">
        <LogoMark size={24} iconSize={14} />
        <span className="text-[14px] font-semibold text-ink">{studio.name}</span>
      </div>

      <span className="px-2 pb-2 text-[12px] text-[#7A7266]">Tests</span>
      <nav className="flex flex-col">
        {tests.map((test) => (
          <div
            key={test.id}
            className={`flex h-11 items-center gap-2.5 px-2 text-[13px] ${
              test.active
                ? "rounded-[10px] bg-[#EFE8DC] font-medium text-ink"
                : "text-[#4F493F]"
            }`}
          >
            <span className="relative h-[26px] w-[26px] shrink-0 overflow-hidden rounded-[6px]">
              <KnitTexture color={test.color} />
            </span>
            <span className="truncate">{test.name}</span>
          </div>
        ))}
        <button
          type="button"
          className="flex h-10 items-center px-2 text-left text-[13px] text-[#6E675C]"
        >
          + New test
        </button>
      </nav>

      <span className="px-2 pt-5 pb-2 text-[12px] text-[#7A7266]">Studio</span>
      <div className="flex h-9 items-center justify-between px-2 text-[13px] text-[#4F493F]">
        <span>My makers</span>
        <span className="text-[12px] text-[#7A7266]">{studio.makersCount}</span>
      </div>
      <div className="flex h-9 items-center justify-between px-2 text-[13px] text-[#4F493F]">
        <span>All photos</span>
        <span className="text-[12px] text-[#7A7266]">{studio.photosCount}</span>
      </div>

      <div className="mt-auto flex flex-col gap-1.5 rounded-xl bg-[#F4EEE4] p-3.5">
        <span className="text-[12px] font-semibold text-ink">Your link</span>
        <span className="truncate text-[12px] text-[#6E675C]">{studio.link}</span>
        <button type="button" className="self-start text-[12px] font-semibold text-[#2F5232]">
          Copy link
        </button>
      </div>
    </aside>
  );
}
