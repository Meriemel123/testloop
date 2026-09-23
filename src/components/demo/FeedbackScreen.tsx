import { ratings, errata, makerQuotes } from "@/lib/demo-data";

export function FeedbackScreen() {
  return (
    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:p-8">
      <div className="flex flex-1 flex-col gap-3.5 rounded-[14px] border border-lines p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-ink">How makers rated the pattern</span>
          <span className="text-[12px] text-[#7A7266]">5 of 5 answered</span>
        </div>

        {ratings.map((rating) => (
          <div key={rating.label} className="flex items-center gap-3.5">
            <span className="w-[130px] shrink-0 text-[13px] text-[#4F493F]">{rating.label}</span>
            <div className="h-2 flex-1 rounded-full bg-[#EFE8DC]">
              <div className="h-2 rounded-full bg-sage" style={{ width: `${rating.percent}%` }} />
            </div>
            <span className="w-9 shrink-0 text-right text-[13px] font-semibold text-ink">
              {rating.value.toFixed(1)}
            </span>
          </div>
        ))}

        <div className="flex flex-col pt-1.5">
          <span className="pb-1 text-[13px] font-semibold text-ink">Errata found · {errata.length}</span>
          {errata.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 border-t border-[#EFE8DC] py-3"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-ink">{item.text}</span>
                <span className="text-[12px] text-[#7A7266]">{item.foundBy}</span>
              </div>
              <span
                className={`inline-flex h-[22px] shrink-0 items-center rounded-full px-2 text-[11px] font-semibold ${
                  item.status === "Fixed in v2"
                    ? "bg-[#DCE7D7] text-[#2F5232]"
                    : "bg-[#F0E3B4] text-[#5E4F1C]"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 sm:w-[280px] sm:shrink-0">
        {makerQuotes.map((q) => (
          <div
            key={q.author}
            className="flex flex-col gap-2.5 rounded-[14px] p-[18px]"
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
