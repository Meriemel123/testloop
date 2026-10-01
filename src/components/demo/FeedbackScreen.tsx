import { ratings, errata, makerQuotes } from "@/lib/demo-data";

export function FeedbackScreen() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:gap-5 sm:p-8 lg:flex-row">
      <div className="flex flex-1 flex-col gap-3 rounded-[14px] border border-lines p-3.5 sm:gap-3.5 sm:p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-ink">
            <span className="lg:hidden">How makers rated it</span>
            <span className="hidden lg:inline">How makers rated the pattern</span>
          </span>
          <span className="text-[12px] text-[#7A7266]">5 of 5 answered</span>
        </div>

        {ratings.map((rating) => (
          <div key={rating.label} className="flex items-center gap-2.5 sm:gap-3.5">
            <span className="w-[104px] shrink-0 text-[12px] text-[#4F493F] sm:w-[130px] sm:text-[13px]">
              {rating.label}
            </span>
            <div className="h-[7px] flex-1 rounded-full bg-[#EFE8DC] sm:h-2">
              <div className="h-[7px] rounded-full bg-sage sm:h-2" style={{ width: `${rating.percent}%` }} />
            </div>
            <span className="w-9 shrink-0 text-right text-[12px] font-semibold text-ink sm:text-[13px]">
              {rating.value.toFixed(1)}
            </span>
          </div>
        ))}

        <div className="flex flex-col pt-1.5">
          <span className="pb-1 text-[13px] font-semibold text-ink">Errata found · {errata.length}</span>
          {errata.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 border-t border-[#EFE8DC] py-2.5 sm:py-3"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] font-medium text-ink sm:text-[13px]">{item.text}</span>
                <span className="text-[11px] text-[#7A7266] sm:text-[12px]">{item.foundBy}</span>
              </div>
              <span
                className={`inline-flex h-5 shrink-0 items-center rounded-full px-[7px] text-[10px] font-semibold sm:h-[22px] sm:px-2 sm:text-[11px] ${
                  item.status === "Fixed in v2"
                    ? "bg-[#DCE7D7] text-[#2F5232]"
                    : "bg-[#F0E3B4] text-[#5E4F1C]"
                }`}
              >
                <span className="lg:hidden">{item.status === "Fixed in v2" ? "Fixed" : "To fix"}</span>
                <span className="hidden lg:inline">{item.status}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 lg:w-[280px] lg:shrink-0">
        {makerQuotes.slice(0, 1).map((q) => (
          <div
            key={q.author}
            className="flex flex-col gap-2 rounded-[14px] p-3.5 sm:gap-2.5 sm:p-[18px] lg:hidden"
            style={{ background: q.bg }}
          >
            <span className="font-[family-name:var(--font-fraunces)] text-[15px] leading-[1.45] text-ink italic">
              “{q.quoteMobile}”
            </span>
            <span className="text-[11px] text-[#6E675C]">{q.author}</span>
          </div>
        ))}
        {makerQuotes.map((q) => (
          <div
            key={q.author}
            className="hidden flex-col gap-2.5 rounded-[14px] p-[18px] lg:flex"
            style={{ background: q.bg }}
          >
            <span className="font-[family-name:var(--font-fraunces)] text-[16px] leading-[1.45] text-ink italic">
              “{q.quote}”
            </span>
            <span className="text-[12px] text-[#6E675C]">{q.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
