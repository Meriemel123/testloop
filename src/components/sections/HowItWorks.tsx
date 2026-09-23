import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 sm:px-8 lg:gap-12 lg:px-[120px] lg:py-[120px]">
      <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[44px] lg:tracking-[-0.035em]">
        {howItWorks.heading}
        <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
          {howItWorks.headingItalic}
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
        {howItWorks.steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-2.5 border-t-2 pt-5"
            style={{ borderColor: step.borderColor }}
          >
            <span
              className="font-[family-name:var(--font-fraunces)] text-[32px] italic"
              style={{ color: step.numeralColor }}
            >
              {step.number}
            </span>
            <span className="text-[20px] font-semibold tracking-[-0.02em] text-ink">
              {step.title}
            </span>
            <span className="text-[15px] leading-[1.6] text-[#6E675C]">{step.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
