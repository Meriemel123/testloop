import { features } from "@/lib/content";

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-b border-lines bg-[#FBF8F2] py-16 sm:py-20 lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 sm:px-8 lg:gap-14 lg:px-[120px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-16">
          <h2 className="max-w-[660px] text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04]">
            {features.heading}
            <br />
            <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
              {features.headingItalic}
            </span>
          </h2>
          <p className="max-w-[400px] text-[16px] leading-[1.55] text-[#6E675C] lg:text-[18px]">
            {features.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[248px] flex-col gap-3 rounded-[22px] p-8"
              style={{ background: item.bg }}
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF8F2] text-[13px] font-semibold"
                style={{ color: item.ink }}
              >
                {item.number}
              </span>
              <h3
                className="pt-2.5 text-[21px] font-semibold tracking-[-0.02em]"
                style={{ color: item.ink }}
              >
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#4F493F]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
