import { community } from "@/lib/content";

export function Community() {
  return (
    <section className="border-t border-b border-lines bg-[#FBF8F2] py-16 sm:py-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-24 lg:px-[120px]">
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04]">
            {community.heading}
            <br />
            <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
              {community.headingItalic}
            </span>
          </h2>
          <p className="max-w-[480px] text-[16px] leading-[1.6] text-[#6E675C] lg:text-[18px]">
            {community.lead}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:w-[520px] lg:shrink-0">
          <div className="flex flex-col gap-3.5 rounded-[22px] bg-[#F0DCDA] p-[26px]">
            <span className="text-[13px] font-medium text-[#8F5330]">{community.channelsTitle}</span>
            <div className="flex flex-wrap gap-2">
              {community.channels.map((channel) => (
                <span
                  key={channel}
                  className="inline-flex h-[38px] items-center rounded-full bg-[#FBF8F2] px-4 text-[14px] text-ink"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5 rounded-[22px] bg-[#DCE7D7] p-[26px]">
            <span className="text-[13px] font-medium text-[#2F5232]">{community.needsTitle}</span>
            <dl className="flex flex-col gap-0">
              {community.needs.map((need, i) => (
                <div
                  key={need.label}
                  className={`flex items-center justify-between text-[15px] ${i > 0 ? "mt-2.5" : ""}`}
                >
                  <dt className="text-ink">{need.label}</dt>
                  <dd className={i === community.needs.length - 1 ? "font-medium text-[#2F5232]" : "text-[#6E675C]"}>
                    {need.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
