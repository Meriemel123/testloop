export function LogoMark({ size = 30, iconSize = 17 }: { size?: number; iconSize?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[9px] bg-sage"
      style={{ width: size, height: size }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="12" cy="13" r="7.5" stroke="#FFFDF8" strokeWidth="2.6" />
        <path
          d="M17.5 18.5 C 20 21, 23 22, 26 21"
          stroke="#FFFDF8"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
