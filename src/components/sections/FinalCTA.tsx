import { finalCta } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";
import { SignupForm } from "./SignupForm";

export function FinalCTA() {
  return (
    <section id="join" className="px-3 pb-14 sm:px-5 sm:pb-16 lg:px-[120px] lg:pb-[120px]">
      <div className="relative overflow-hidden rounded-[28px] bg-ink text-cream sm:rounded-[32px]">
        <svg
          className="pointer-events-none absolute right-0 bottom-0 hidden h-[140px] w-[260px] opacity-[0.18] sm:block sm:h-[200px] sm:w-[360px]"
          viewBox="0 0 360 200"
          aria-hidden="true"
        >
          <defs>
            <pattern id="v3cta-pattern" width="20" height="22" patternUnits="userSpaceOnUse">
              <rect width="20" height="22" fill="#332F28" />
              <ellipse cx="6" cy="11" rx="3.6" ry="8.2" transform="rotate(-28 6 11)" fill="#D9A688" />
              <ellipse cx="14" cy="11" rx="3.6" ry="8.2" transform="rotate(28 14 11)" fill="#D9A688" />
            </pattern>
          </defs>
          <rect width="360" height="200" fill="url(#v3cta-pattern)" />
        </svg>

        {/* Mobile: stacked, signature at the very bottom */}
        <div className="relative flex flex-col gap-6 pt-9 pr-4 pb-4 pl-4 sm:hidden">
          <div className="flex flex-col gap-3.5 px-2">
            <h2 className="text-[36px] leading-[1.04] font-semibold tracking-[-0.04em]">
              {finalCta.heading}
              <br />
              <span className="font-[family-name:var(--font-fraunces)] text-[#CE9272] italic">
                {finalCta.headingItalic}
              </span>
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#D3C8BA]">{finalCta.leadMobile}</p>
            <span className="font-hand text-[24px] font-medium text-[#CE9272]">
              {finalCta.annotationMobile}
            </span>
          </div>

          <div className="rounded-[20px] bg-[#FBF8F2] px-4.5 py-5.5 text-ink">
            <SignupForm />
          </div>

          <p className="px-2 pt-1 font-[family-name:var(--font-fraunces)] text-[14px] text-[#B3A797] italic">
            {finalCta.signature}
          </p>
        </div>

        {/* Tablet/desktop: side by side */}
        <div className="relative hidden flex-col gap-10 p-12 sm:flex lg:flex-row lg:items-center lg:gap-[72px] lg:p-[72px]">
          <div className="relative flex flex-1 flex-col gap-5">
            <h2 className="text-[44px] leading-[1.1] font-semibold tracking-[-0.04em] lg:text-[58px] lg:leading-[1.02] lg:tracking-[-0.045em]">
              {finalCta.heading}
              <br />
              <span className="font-[family-name:var(--font-fraunces)] text-[#CE9272] italic">
                {finalCta.headingItalic}
              </span>
            </h2>
            <p className="max-w-[420px] text-[16px] leading-[1.6] text-[#D3C8BA] lg:text-[18px]">
              {finalCta.lead}
            </p>
            <p className="pt-1 font-[family-name:var(--font-fraunces)] text-[15px] text-[#B3A797] italic">
              {finalCta.signature}
            </p>
            <div className="pt-4 lg:pt-7">
              <Annotation size={28} arrow="wave-right" tone="#CE9272">
                {finalCta.annotation}
              </Annotation>
            </div>
          </div>

          <div className="relative flex flex-col rounded-[22px] bg-[#FBF8F2] p-9 text-ink lg:w-[420px] lg:shrink-0 xl:w-[540px]">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
