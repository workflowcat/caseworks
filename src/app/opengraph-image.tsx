import { ImageResponse } from "next/og";

export const alt =
  "Ukraine and the Netherlands v. Russia — A Reader (App. no. 28525/20)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f7f6f2",
          color: "#0c0c0d",
          padding: "60px 70px",
          fontFamily: "Georgia, serif",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#76767a",
            }}
          >
            European Court of Human Rights · inter-state proceeding
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#76767a",
            }}
          >
            App. no. 28525/20
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: -1,
              lineHeight: 1.02,
              color: "#0c0c0d",
            }}
          >
            Ukraine and the Netherlands v. Russia
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontStyle: "italic",
              color: "#76767a",
              maxWidth: 980,
              lineHeight: 1.25,
            }}
          >
            A research reader on the inter-state proceeding concerning the
            downing of MH17, 17 July 2014.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 14,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#76767a",
          }}
        >
          <div>caseworks-blue.vercel.app</div>
          <div style={{ color: "#1c2bd6" }}>
            Merits judgment · 9 July 2025
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
