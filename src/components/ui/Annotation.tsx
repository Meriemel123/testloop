const DIMENSIONS = {
  "curl-down": { width: 32, height: 36, viewBox: "0 0 32 36" },
  "curl-down-long": { width: 44, height: 48, viewBox: "0 0 44 48" },
  "underline-right": { width: 30, height: 34, viewBox: "0 0 30 34" },
  "curl-up-right": { width: 40, height: 28, viewBox: "0 0 40 28" },
  "wave-right": { width: 48, height: 20, viewBox: "0 0 48 20" },
} as const;

type ArrowKind = keyof typeof DIMENSIONS;

export function Annotation({
  children,
  className = "",
  arrowPosition = "after",
  arrow = "curl-down",
  size = 28,
  tone = "#8F5330",
}: {
  children: React.ReactNode;
  className?: string;
  arrowPosition?: "before" | "after";
  arrow?: ArrowKind;
  size?: number;
  tone?: string;
}) {
  const dims = DIMENSIONS[arrow];

  const arrowEl = (
    <svg
      width={dims.width}
      height={dims.height}
      viewBox={dims.viewBox}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{ color: tone }}
    >
      {arrow === "curl-down" && (
        <>
          <path d="M4 4 C 20 4, 26 14, 24 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 25 L 24 32 L 29 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {arrow === "curl-down-long" && (
        <>
          <path d="M4 6 C 24 4, 36 16, 30 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 34 L 30 42 L 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {arrow === "underline-right" && (
        <>
          <path d="M4 4 C 18 4, 24 12, 22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 23 L 22 30 L 27 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {arrow === "curl-up-right" && (
        <>
          <path d="M36 22 C 26 24, 12 20, 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 12 L 6 5 L 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {arrow === "wave-right" && (
        <>
          <path d="M2 12 C 14 4, 30 4, 42 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 4 L 43 10 L 36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );

  return (
    <span
      className={`font-hand inline-flex items-center gap-1.5 font-medium ${className}`}
      style={{ fontSize: size, color: tone }}
    >
      {arrowPosition === "before" && arrowEl}
      <span>{children}</span>
      {arrowPosition === "after" && arrowEl}
    </span>
  );
}
