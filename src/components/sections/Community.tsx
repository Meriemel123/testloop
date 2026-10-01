import { community } from "@/lib/content";

export function Community() {
  return (
    <section className="border-t border-b border-lines bg-[#FBF8F2] py-[72px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 sm:gap-10 sm:px-8 lg:flex-row lg:items-center lg:gap-24 lg:px-[120px]">
        <div className="flex flex-1 flex-col gap-4 sm:gap-5">
          <h2 className="text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.04] lg:tracking-[-0.04em]">
            {community.heading}
            <br />
            <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
              {community.headingItalic}
            </span>
          </h2>
          <p className="max-w-[480px] text-[16px] leading-[1.55] text-[#6E675C] sm:leading-[1.6] lg:text-[18px]">
            <span className="sm:hidden">{community.leadMobile}</span>
            <span className="hidden sm:inline">{community.lead}</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:w-[520px] lg:shrink-0">
          <div className="flex flex-col gap-3 rounded-[20px] bg-[#F0DCDA] p-5 sm:gap-3.5 sm:rounded-[22px] sm:p-[26px]">
            <span className="text-[13px] font-medium text-[#8F5330]">{community.channelsTitle}</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {community.channels.map((channel) => (
                <span
                  key={channel}
                  className="inline-flex h-[34px] items-center rounded-full bg-[#FBF8F2] px-3.5 text-[13px] text-ink sm:h-[38px] sm:px-4 sm:text-[14px]"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-[20px] bg-[#DCE7D7] p-5 sm:gap-3.5 sm:rounded-[22px] sm:p-[26px]">
            <span className="text-[13px] font-medium text-[#2F5232]">{community.needsTitle}</span>
            <dl className="flex flex-col gap-0">
              {community.needs.map((need, i) => (
                <div
                  key={need.label}
                  className={`flex items-center justify-between text-[14px] sm:text-[15px] ${i > 0 ? "mt-2.5" : ""}`}
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
