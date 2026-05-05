import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f6f2",
          color: "#1c2bd6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          §
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: 2,
            marginTop: 6,
            color: "#76767a",
            textTransform: "uppercase",
          }}
        >
          A Reader
        </div>
      </div>
    ),
    { ...size },
  );
}
