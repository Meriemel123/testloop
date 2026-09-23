import { finalCta } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";
import { SignupForm } from "./SignupForm";

export function FinalCTA() {
  return (
    <section id="join" className="px-5 pb-16 sm:px-8 lg:px-[120px] lg:pb-[120px]">
      <div className="relative flex flex-col gap-10 overflow-hidden rounded-[32px] bg-ink p-8 text-cream sm:p-12 lg:flex-row lg:gap-[72px] lg:p-[72px]">
        <svg
          className="pointer-events-none absolute right-0 bottom-0 h-[140px] w-[260px] opacity-[0.18] sm:h-[200px] sm:w-[360px]"
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

        <div className="relative flex flex-1 flex-col gap-5">
          <h2 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.04em] sm:text-[44px] lg:text-[58px] lg:leading-[1.02] lg:tracking-[-0.045em]">
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

        <SignupForm />
      </div>
    </section>
  );
}
