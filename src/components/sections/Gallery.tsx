import { gallery } from "@/lib/content";
import { KnitTexture } from "@/components/ui/KnitTexture";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="mx-auto flex max-w-[1440px] flex-col gap-6 py-[72px] sm:gap-10 sm:px-8 lg:gap-12 lg:px-[120px] lg:py-[120px]"
    >
      <div className="flex flex-col gap-4 px-5 sm:flex-row sm:items-end sm:justify-between sm:gap-16 sm:px-0">
        <h2 className="max-w-[640px] text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04] lg:tracking-[-0.04em]">
          {gallery.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {gallery.headingItalic}
          </span>
        </h2>
        <p className="max-w-[400px] text-[16px] leading-[1.55] text-[#6E675C] lg:text-[18px]">
          <span className="sm:hidden">{gallery.leadMobile}</span>
          <span className="hidden sm:inline">{gallery.lead}</span>
        </p>
      </div>

      <div
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-8 lg:grid-cols-4 lg:px-0"
        style={{ scrollPaddingLeft: 20 }}
      >
        {gallery.tiles.map((tile, i) => (
          <figure key={i} className="w-[240px] shrink-0 snap-start sm:w-auto">
            <span className="relative block aspect-[240/300] overflow-hidden rounded-[20px] sm:aspect-[280/340] sm:rounded-[22px]">
              <KnitTexture color={tile.color} photo={tile.photo} alt={`${tile.title} — ${tile.caption}`} />
            </span>
            <figcaption className="mt-2.5 flex flex-col gap-0.5 sm:mt-3">
              <span className="text-[15px] font-medium text-ink lg:text-[16px]">{tile.title}</span>
              <span className="text-[13px] text-[#6E675C] lg:text-[14px]">{tile.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <span className="font-hand px-5 text-[22px] font-medium text-[#8F5330] sm:hidden">
        {gallery.mobileHint}
      </span>
    </section>
  );
}
