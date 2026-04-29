// Initial-letter avatar — geometric, monochrome, deterministic by name.
// Used on /people in lieu of photographs.

const SHAPES = ["square", "circle", "diamond"] as const;

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function InitialAvatar({
  name,
  size = 36,
}: {
  name: string;
  size?: number;
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .filter((c) => /[A-ZÀ-ÿ]/i.test(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const h = hash(name);
  const shape = SHAPES[h % SHAPES.length];

  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
      }}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        style={{ position: "absolute", inset: 0 }}
      >
        {shape === "square" ? (
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ) : shape === "circle" ? (
          <circle
            cx="18"
            cy="18"
            r="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ) : (
          <polygon
            points="18,1 35,18 18,35 1,18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        )}
      </svg>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: size * 0.32,
          letterSpacing: "0.08em",
          position: "relative",
        }}
      >
        {initials}
      </span>
    </span>
  );
}
