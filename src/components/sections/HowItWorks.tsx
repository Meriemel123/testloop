import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-[72px] sm:gap-10 sm:px-8 lg:gap-12 lg:px-[120px] lg:py-[120px]">
      <h2 className="text-[34px] font-semibold tracking-[-0.035em] text-ink sm:text-[36px] lg:text-[44px]">
        {howItWorks.heading}
        <span className="font-[family-name:var(--font-fraunces)] text-[#8F5330] italic">
          {howItWorks.headingItalic}
        </span>
      </h2>

      {/* Mobile: horizontal rows */}
      <div className="flex flex-col gap-0 sm:hidden">
        {howItWorks.steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-4 border-t-2 pt-4 pb-2 first:pt-4"
            style={{ borderColor: step.borderColor }}
          >
            <span
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-none italic"
              style={{ color: step.numeralColor }}
            >
              {step.number}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="text-[17px] font-semibold text-ink">{step.title}</span>
              <span className="text-[14px] leading-[1.55] text-[#6E675C]">{step.body}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet/desktop: grid */}
      <div className="hidden gap-8 sm:grid sm:grid-cols-3 lg:gap-12">
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
