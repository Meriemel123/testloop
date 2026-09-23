import { gallery } from "@/lib/content";
import { KnitTexture } from "@/components/ui/KnitTexture";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 sm:px-8 lg:gap-12 lg:px-[120px] lg:py-[120px]"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-16">
        <h2 className="max-w-[640px] text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04]">
          {gallery.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {gallery.headingItalic}
          </span>
        </h2>
        <p className="max-w-[400px] text-[16px] leading-[1.55] text-[#6E675C] lg:text-[18px]">
          {gallery.lead}
        </p>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:gap-5">
        {gallery.tiles.map((tile, i) => (
          <figure key={i} className="w-[70%] shrink-0 snap-center sm:w-auto">
            <span className="relative block aspect-[280/340] overflow-hidden rounded-[22px]">
              <KnitTexture color={tile.color} />
            </span>
            <figcaption className="mt-3 flex flex-col gap-0.5">
              <span className="text-[15px] font-medium text-ink lg:text-[16px]">{tile.title}</span>
              <span className="text-[13px] text-[#6E675C] lg:text-[14px]">{tile.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
