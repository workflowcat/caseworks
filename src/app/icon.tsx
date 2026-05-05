import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c2bd6",
          color: "#f7f6f2",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          letterSpacing: -1,
        }}
      >
        §
      </div>
    ),
    { ...size },
  );
}
