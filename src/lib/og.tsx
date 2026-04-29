// Shared layout for OpenGraph images.
// Each route's opengraph-image.tsx imports this and passes its own
// section number, title, and deck.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function ogElement({
  no,
  title,
  deck,
  rightTag = "Merits judgment · 9 July 2025",
}: {
  no: string;
  title: string;
  deck: string;
  rightTag?: string;
}) {
  return (
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#76767a",
          }}
        >
          {no} · A Reader · App. no. 28525/20
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 14,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#76767a",
          }}
        >
          ECHR · inter-state proceeding
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 64 : 92,
            fontWeight: 500,
            letterSpacing: -1,
            lineHeight: 1.02,
            color: "#0c0c0d",
            maxWidth: 1060,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontStyle: "italic",
            color: "#76767a",
            maxWidth: 1000,
            lineHeight: 1.3,
          }}
        >
          {deck}
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
        <div style={{ display: "flex" }}>caseworks-blue.vercel.app</div>
        <div style={{ display: "flex", color: "#1c2bd6" }}>{rightTag}</div>
      </div>
    </div>
  );
}
