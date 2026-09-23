import { footer, nav } from "@/lib/content";
import { LogoMark } from "@/components/ui/LogoMark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-lines">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:justify-between lg:gap-16 lg:px-[120px] lg:py-14">
        <div className="flex max-w-[320px] flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <LogoMark size={26} iconSize={15} />
            <span className="text-[16px] font-semibold text-ink">{nav.logo}</span>
          </div>
          <span className="text-[14px] leading-[1.6] text-[#6E675C]">{footer.tagline}</span>
          <span className="text-[13px] text-[#7A7266]">{footer.copyright}</span>
        </div>

        <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-24">
          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3 text-[14px]">
              <span className="font-medium text-ink">{column.title}</span>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="text-[#6E675C]">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
