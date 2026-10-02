import { useId } from "react";
import Image from "next/image";

const PALETTE: Record<string, { base: string; stitch: string }> = {
  sage: { base: "#567C58", stitch: "#6B9168" },
  clay: { base: "#CE9272", stitch: "#D9A688" },
  ochre: { base: "#C9AE58", stitch: "#D9C27A" },
  rose: { base: "#E3C3BF", stitch: "#EDD4D0" },
  rust: { base: "#8F5330", stitch: "#A26640" },
};

export function KnitTexture({
  color = "sage",
  className,
  radius = 0,
  photo,
  alt = "",
}: {
  color?: keyof typeof PALETTE;
  className?: string;
  radius?: number;
  /** Optional real photo (e.g. a finished piece) to replace the abstract stitch texture. */
  photo?: string;
  alt?: string;
}) {
  const id = useId();
  const patternId = `knit-${color}-${id}`;
  const { base, stitch } = PALETTE[color] ?? PALETTE.sage;

  if (photo) {
    return (
      <Image
        src={photo}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className={`object-cover ${className ?? ""}`}
      />
    );
  }

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={20}
          height={22}
          patternUnits="userSpaceOnUse"
        >
          <rect width={20} height={22} fill={base} />
          <ellipse
            cx={6}
            cy={11}
            rx={3.6}
            ry={8.2}
            fill={stitch}
            transform="rotate(-28 6 11)"
          />
          <ellipse
            cx={14}
            cy={11}
            rx={3.6}
            ry={8.2}
            fill={stitch}
            transform="rotate(28 14 11)"
          />
        </pattern>
      </defs>
      {radius > 0 ? (
        <rect width="100%" height="100%" rx={radius} fill={`url(#${patternId})`} />
      ) : (
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      )}
    </svg>
  );
}
