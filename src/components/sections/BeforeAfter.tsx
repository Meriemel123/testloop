import { beforeAfter } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";

function XCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 sm:h-[22px] sm:w-[22px]">
      <circle cx="11" cy="11" r="10" fill="#F0DCDA" />
      <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="#8F5330" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 sm:h-[22px] sm:w-[22px]">
      <circle cx="11" cy="11" r="10" fill="#DCE7D7" />
      <path d="M6.8 11.3l2.8 2.8 5.6-5.8" stroke="#2F5232" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RowArrow() {
  return (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
      <path d="M1 7h24M20 2l5 5-5 5" stroke="#B3A797" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BeforeAfter() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-7 px-5 py-14 sm:gap-9 sm:px-8 sm:py-16 lg:px-[120px] lg:pt-[72px] lg:pb-[120px]">
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <h2 className="max-w-[860px] text-[34px] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-[52px] sm:tracking-[-0.04em]">
          {beforeAfter.heading}
          <br />
          <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
            {beforeAfter.headingItalic}
          </span>
        </h2>
        <p className="max-w-[560px] text-[16px] leading-[1.55] text-[#6E675C] sm:text-[18px]">
          <span className="sm:hidden">{beforeAfter.leadMobile}</span>
          <span className="hidden sm:inline">{beforeAfter.lead}</span>
        </p>
      </div>

      <div className="w-full max-w-[1080px] overflow-hidden rounded-[22px] border border-lines bg-[#FBF8F2] sm:rounded-[28px]">
        <div className="flex items-center justify-between bg-[#F4EEE4] px-4.5 py-3.5 text-[13px] sm:grid sm:h-[72px] sm:grid-cols-[1fr_72px_1fr] sm:gap-0 sm:px-10 sm:py-0 sm:text-base">
          <span className="font-semibold text-[#6E675C] sm:hidden">{beforeAfter.todayMobile}</span>
          <span className="font-semibold text-[#2F5232] sm:hidden">{beforeAfter.withMobile}</span>
          <div className="hidden items-baseline gap-2.5 sm:flex">
            <span className="text-[15px] font-semibold text-[#6E675C]">{beforeAfter.todayLabel}</span>
            <span className="text-[14px] text-[#7A7266]">{beforeAfter.todaySub}</span>
          </div>
          <span className="hidden sm:block" />
          <div className="hidden items-baseline gap-2.5 sm:flex">
            <span className="text-[15px] font-semibold text-[#2F5232]">{beforeAfter.withLabel}</span>
            <span className="text-[14px] text-[#6E675C]">{beforeAfter.withSub}</span>
          </div>
        </div>

        {beforeAfter.rows.map((row) => (
          <div
            key={row.before}
            className="flex flex-col gap-2.5 border-t border-lines px-4.5 py-4 sm:grid sm:grid-cols-[1fr_72px_1fr] sm:items-center sm:gap-0 sm:px-10 sm:py-0 sm:min-h-[88px]"
          >
            <div className="flex items-center gap-2.5 sm:gap-4">
              <XCircle />
              <span
                className="text-[15px] text-[#7A7266] line-through sm:hidden"
                style={{ textDecorationColor: "#CE9272" }}
              >
                {row.before}
              </span>
              <div className="hidden flex-col gap-0.5 sm:flex">
                <span
                  className="text-[17px] font-medium text-[#7A7266] line-through"
                  style={{ textDecorationColor: "#CE9272" }}
                >
                  {row.before}
                </span>
                <span className="text-[14px] text-[#7A7266]">{row.beforeSub}</span>
              </div>
            </div>
            <div className="hidden justify-center py-1 sm:flex">
              <RowArrow />
            </div>
            <div className="flex items-start gap-2.5 sm:items-center sm:gap-4">
              <CheckCircle />
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-ink sm:text-[17px]">{row.after}</span>
                <span className="text-[13px] leading-[1.45] text-[#6E675C] sm:text-[14px]">
                  {row.afterSub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className="font-hand text-[24px] font-medium text-[#8F5330] sm:hidden">
        {beforeAfter.annotation}
      </span>
      <span className="hidden sm:inline-flex">
        <Annotation size={28} arrow="curl-up-right" arrowPosition="before">
          {beforeAfter.annotation}
        </Annotation>
      </span>
    </section>
  );
}
