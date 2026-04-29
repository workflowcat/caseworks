"use client";

// Compact horizontal-bar distribution. Generic; takes a sorted list of
// {label, count} and renders a tight bar chart.

export function DistBar({
  data,
  active,
  onClickItem,
}: {
  data: Array<{ label: string; count: number }>;
  active?: string | null;
  onClickItem?: (label: string) => void;
}) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div className="border border-rule bg-bg">
      <ol className="divide-y divide-rule">
        {data.map((d) => {
          const pct = (d.count / max) * 100;
          const isActive = active === d.label;
          return (
            <li
              key={d.label}
              className="grid grid-cols-12 gap-3 px-3 py-2 items-center text-[11px]"
              style={{
                background: isActive ? "var(--bg-2)" : "transparent",
                cursor: onClickItem ? "pointer" : undefined,
              }}
              onClick={onClickItem ? () => onClickItem(d.label) : undefined}
            >
              <p
                className="col-span-3 mono uppercase tracking-widest text-ink-soft"
                style={{ color: isActive ? "var(--accent)" : undefined }}
              >
                {d.label}
              </p>
              <div className="col-span-7 relative h-2 bg-rule/40">
                <span
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${pct}%`,
                    background: isActive
                      ? "var(--accent)"
                      : "var(--ink-soft)",
                  }}
                />
              </div>
              <p className="col-span-2 mono text-right text-ink-soft">
                {d.count}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
