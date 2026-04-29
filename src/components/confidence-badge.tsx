import {
  CONFIDENCE_BADGE,
  CONFIDENCE_LABEL,
  CONFIDENCE_SHORT,
  type Confidence,
} from "@/data/confidence";

const TINT: Record<Confidence, string> = {
  verbatim: "var(--ink-soft)",
  paraphrased: "var(--accent)",
  translated: "var(--accent)",
  secondary: "var(--accent)",
  unverified: "#c54b1a",
};

export function ConfidenceBadge({
  c,
  showLabel = false,
}: {
  c: Confidence;
  showLabel?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest"
      style={{ color: TINT[c] }}
      title={CONFIDENCE_LABEL[c]}
    >
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 16,
          height: 16,
          border: `1px solid ${TINT[c]}`,
          background: c === "verbatim" ? "transparent" : TINT[c],
          color: c === "verbatim" ? TINT[c] : "var(--bg)",
          fontWeight: 600,
          fontSize: 10,
        }}
      >
        {CONFIDENCE_BADGE[c]}
      </span>
      {showLabel ? CONFIDENCE_SHORT[c] : null}
    </span>
  );
}
