import Link from "next/link";

export const metadata = {
  title: "Case card · embed",
  description:
    "Embeddable card on Ukraine and the Netherlands v. Russia (28525/20).",
};

// Designed for iframe embedding at ~600x400. Self-contained styles so the
// embed survives any host page's CSS. Use:
//   <iframe src="https://caseworks-blue.vercel.app/embed/case"
//           width="600" height="400" loading="lazy"></iframe>
export default function CaseEmbed() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        minHeight: 400,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7f6f2",
        color: "#0c0c0d",
        fontFamily: "Georgia, serif",
        border: "1px solid #c9c8c1",
        boxSizing: "border-box",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 10,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#76767a",
            margin: 0,
          }}
        >
          European Court of Human Rights · Grand Chamber
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: -0.4,
            margin: "10px 0 6px",
            color: "#0c0c0d",
          }}
        >
          Ukraine and the Netherlands{" "}
          <span style={{ fontStyle: "italic", color: "#76767a" }}>
            v.
          </span>{" "}
          Russia
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 14,
            lineHeight: 1.35,
            color: "#76767a",
            margin: "0 0 14px",
          }}
        >
          Inter-state proceeding, application no. 28525/20 — the
          downing of Malaysia Airlines flight MH17.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 0,
          borderTop: "1px solid #c9c8c1",
          marginTop: 6,
        }}
      >
        {[
          ["298", "killed"],
          ["196", "Dutch"],
          ["5", "violations"],
          ["29", "ops"],
        ].map(([v, l], i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: "12px 0",
              borderRight: i < 3 ? "1px solid #c9c8c1" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 24,
                lineHeight: 1,
                color: "#0c0c0d",
              }}
            >
              {v}
            </div>
            <div
              style={{
                fontFamily:
                  "ui-monospace, SFMono-Regular, monospace",
                fontSize: 9,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#76767a",
                marginTop: 4,
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: 10,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          color: "#76767a",
          borderTop: "1px solid #c9c8c1",
          paddingTop: 10,
          marginTop: 14,
        }}
      >
        <span>Merits judgment · 9 July 2025</span>
        <Link
          href="/case"
          target="_top"
          style={{ color: "#1c2bd6", textDecoration: "underline" }}
        >
          Read · A Reader
        </Link>
      </div>
    </div>
  );
}
