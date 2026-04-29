// Procedural Gantt: shows the four joined applications as horizontal bars
// over time, with joinder, hearings, judgment, and disjoinder marked.

const VB_W = 1200;
const VB_H = 400;
const PAD = { top: 36, right: 28, bottom: 96, left: 152 };
const TIME_START = new Date("2014-01-01").getTime();
const TIME_END = new Date("2026-09-01").getTime();
const TIME_RANGE = TIME_END - TIME_START;

const innerW = VB_W - PAD.left - PAD.right;
const ROW_H = 36;

function x(date: string) {
  const t = new Date(date).getTime();
  return PAD.left + ((t - TIME_START) / TIME_RANGE) * innerW;
}

const APPS: Array<{
  id: string;
  number: string;
  label: string;
  filed: string;
  end: string; // bar end
  pending?: boolean;
  disjoined?: boolean;
}> = [
  {
    id: "8019",
    number: "8019/16",
    label: "Ukraine v. Russia (re Eastern Ukraine)",
    filed: "2014-03-13",
    end: "2025-07-09",
  },
  {
    id: "43800",
    number: "43800/14",
    label: "Ukraine v. Russia (II) — children",
    filed: "2014-06-13",
    end: "2025-07-09",
  },
  {
    id: "28525",
    number: "28525/20",
    label: "The Netherlands v. Russia — MH17",
    filed: "2020-07-10",
    end: "2025-07-09",
    disjoined: true,
  },
  {
    id: "11055",
    number: "11055/22",
    label: "Ukraine v. Russia — full-scale invasion",
    filed: "2022-02-28",
    end: "2025-07-09",
  },
];

const KEY_DATES: Array<{ date: string; label: string; kind: "joinder" | "hearing" | "judgment" | "disjoinder" | "external" }> = [
  { date: "2020-11-27", label: "Joinder of three apps", kind: "joinder" },
  { date: "2022-01-26", label: "Admissibility hearing", kind: "hearing" },
  { date: "2022-09-16", label: "Russia ceases to be a Party", kind: "external" },
  { date: "2023-01-25", label: "Admissibility decision", kind: "judgment" },
  { date: "2023-02-17", label: "Joinder of 11055/22", kind: "joinder" },
  { date: "2024-06-12", label: "Merits hearing", kind: "hearing" },
  { date: "2025-07-09", label: "Merits judgment", kind: "judgment" },
];

const POST_DISJOIN_END = "2026-09-01";

// Vertical anti-collision for date labels
function placeLabels() {
  const sorted = [...KEY_DATES].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  const minPx = 110;
  const placed = sorted.map((k) => ({ ...k, px: x(k.date), labelY: 0 }));
  for (let i = 0; i < placed.length; i++) {
    let row = 0;
    for (let j = 0; j < i; j++) {
      if (Math.abs(placed[j].px - placed[i].px) < minPx) {
        row = Math.max(row, placed[j].labelY + 1);
      }
    }
    placed[i].labelY = row;
  }
  return placed;
}

export function ProceduralGantt() {
  const labels = placeLabels();

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-auto block"
        role="img"
        aria-label="Gantt chart of the four joined inter-state applications"
      >
        {/* Year ticks */}
        {[2014, 2016, 2018, 2020, 2022, 2024, 2026].map((y) => {
          const xx = x(`${y}-01-01`);
          return (
            <g key={y}>
              <line
                x1={xx}
                x2={xx}
                y1={PAD.top - 12}
                y2={VB_H - PAD.bottom + 4}
                stroke="var(--rule)"
                strokeDasharray="1,4"
                strokeWidth="0.6"
              />
              <text
                x={xx}
                y={VB_H - PAD.bottom + 22}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--ink-soft)"
                textAnchor="middle"
              >
                {y}
              </text>
            </g>
          );
        })}

        {/* Application rows */}
        {APPS.map((a, i) => {
          const yy = PAD.top + i * ROW_H + ROW_H / 2;
          const x1 = x(a.filed);
          const x2 = x(a.disjoined ? POST_DISJOIN_END : a.end);
          return (
            <g key={a.id}>
              {/* row label */}
              <text
                x={PAD.left - 10}
                y={yy + 4}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--ink)"
                textAnchor="end"
              >
                {a.number}
              </text>
              {/* bar */}
              <rect
                x={x1}
                y={yy - 7}
                width={Math.max(2, x(a.end) - x1)}
                height={14}
                fill="var(--accent)"
                opacity="0.18"
              />
              <rect
                x={x1}
                y={yy - 7}
                width={Math.max(2, x(a.end) - x1)}
                height={14}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              {/* Continuation past disjoinder for 28525/20 */}
              {a.disjoined ? (
                <>
                  <rect
                    x={x(a.end)}
                    y={yy - 7}
                    width={x2 - x(a.end)}
                    height={14}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                </>
              ) : null}
              {/* filed marker */}
              <circle cx={x1} cy={yy} r="4" fill="var(--accent)" />
              <title>{`Filed ${a.filed} · ${a.label}`}</title>
            </g>
          );
        })}

        {/* Key dates as vertical lines + labels */}
        {labels.map((k) => {
          const fill =
            k.kind === "judgment"
              ? "var(--accent)"
              : k.kind === "external"
                ? "var(--ink)"
                : "var(--ink-soft)";
          const stroke =
            k.kind === "judgment" ? "var(--accent)" : "var(--ink-soft)";
          const labelY =
            VB_H - PAD.bottom + 40 + k.labelY * 28;
          return (
            <g key={k.label + k.date}>
              <line
                x1={k.px}
                x2={k.px}
                y1={PAD.top - 8}
                y2={VB_H - PAD.bottom + 4}
                stroke={stroke}
                strokeWidth={k.kind === "judgment" ? "0.9" : "0.5"}
                opacity={k.kind === "judgment" ? 0.6 : 0.45}
              />
              <circle
                cx={k.px}
                cy={PAD.top - 8}
                r={k.kind === "judgment" ? 4 : 3}
                fill={fill}
              />
              <text
                x={k.px}
                y={labelY}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill={fill}
                textAnchor="middle"
              >
                {k.date.split("-").reverse().slice(0, 2).join(".")}
              </text>
              <text
                x={k.px}
                y={labelY + 13}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--ink-soft)"
                textAnchor="middle"
              >
                {k.label}
              </text>
            </g>
          );
        })}

        {/* Application-specific disjoinder annotation */}
        <g>
          {(() => {
            const row28525 = APPS.findIndex((a) => a.id === "28525");
            const yy = PAD.top + row28525 * ROW_H + ROW_H / 2;
            const xx = x("2025-07-09");
            return (
              <>
                <line
                  x1={xx}
                  x2={xx}
                  y1={yy - 14}
                  y2={yy + 14}
                  stroke="var(--accent)"
                  strokeWidth="1.4"
                />
                <text
                  x={xx + 6}
                  y={yy - 12}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--accent)"
                >
                  disjoined → just-sat. pending
                </text>
              </>
            );
          })()}
        </g>
      </svg>

      <figcaption className="mt-3 mono text-[11px] text-ink-soft flex flex-wrap gap-x-6 gap-y-2">
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{
              background: "var(--accent)",
              opacity: 0.18,
              border: "1px solid var(--accent)",
            }}
          />
          Application active
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{
              border: "1px dashed var(--accent)",
            }}
          />
          Just-satisfaction track (28525/20, post-disjoinder)
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          Filing
        </span>
      </figcaption>
    </figure>
  );
}
