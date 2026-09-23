import { ImageResponse } from "next/og";

export const alt = "Testloop — Pattern testing for knit & crochet designers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLS = 14;
const ROWS = 26;
const STITCH = 26;

export default async function Image() {
  const rows = Array.from({ length: ROWS }, (_, row) => (
    <div
      key={row}
      style={{
        display: "flex",
        marginLeft: row % 2 === 0 ? 0 : -STITCH / 2,
      }}
    >
      {Array.from({ length: COLS }, (_, col) => (
        <div
          key={col}
          style={{
            width: STITCH,
            height: STITCH,
            borderRadius: 7,
            margin: 2,
            background: (row + col) % 2 === 0 ? "#CE9272" : "#D9A688",
          }}
        />
      ))}
    </div>
  ));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F3EC",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ display: "flex", width: 36, height: 36, borderRadius: 10, background: "#46694A" }} />
            <span style={{ fontSize: 28, fontWeight: 600, color: "#332F28" }}>Testloop</span>
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 600, color: "#332F28", lineHeight: 1.05 }}>
            Pattern tests that
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 600, color: "#8F5330", lineHeight: 1.05 }}>
            finish on time.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#6E675C" }}>
            Pattern testing for knit &amp; crochet designers
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            height: "100%",
            overflow: "hidden",
            padding: 16,
            background: "#CE9272",
          }}
        >
          {rows}
        </div>
      </div>
    ),
    { ...size }
  );
}
