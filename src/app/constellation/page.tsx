"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  cases as allCases,
  forums,
  importance,
  categoryLabels,
  type LandscapeCase,
} from "@/data/types";
import { CasePanel } from "@/components/case-panel";

type AxisKey = "date" | "amount" | "forum" | "category" | "filed";

const AXES: Record<AxisKey, { label: string; ticks?: string[] }> = {
  date: { label: "Decision / current date" },
  filed: { label: "Filing date" },
  amount: { label: "Award (log scale)" },
  forum: {
    label: "Forum",
    ticks: ["echr", "icj", "icc", "icao", "itlos", "pca", "scc", "dutch", "coe"],
  },
  category: {
    label: "Category",
    ticks: [
      "state-responsibility",
      "individual-criminal",
      "property-commerce",
      "maritime-territory",
      "reparations",
    ],
  },
};

const TIME_MIN = new Date("2014-01-01").getTime();
const TIME_MAX = new Date("2026-04-27").getTime();
const TIME_RANGE = TIME_MAX - TIME_MIN;

function value(c: LandscapeCase, axis: AxisKey): number {
  switch (axis) {
    case "date": {
      const t = new Date(c.decided ?? c.filed).getTime();
      return (t - TIME_MIN) / TIME_RANGE;
    }
    case "filed": {
      const t = new Date(c.filed).getTime();
      return (t - TIME_MIN) / TIME_RANGE;
    }
    case "amount": {
      if (!c.awardUsdM) return 0.05;
      return Math.min(1, Math.log10(c.awardUsdM + 1) / Math.log10(6000));
    }
    case "forum": {
      const ticks = AXES.forum.ticks!;
      return ticks.indexOf(c.forum) / (ticks.length - 1);
    }
    case "category": {
      const ticks = AXES.category.ticks!;
      return ticks.indexOf(c.category) / (ticks.length - 1);
    }
  }
}

function tickLabel(axis: AxisKey, i: number, total: number): string {
  if (axis === "date" || axis === "filed") {
    const years = [2014, 2016, 2018, 2020, 2022, 2024, 2026];
    return String(years[Math.round((i / (total - 1)) * (years.length - 1))]);
  }
  if (axis === "amount") {
    return ["$0", "$1m", "$10m", "$100m", "$1bn", "$5bn"][i] ?? "";
  }
  if (axis === "forum") return AXES.forum.ticks![i].toUpperCase();
  if (axis === "category") {
    const labels = AXES.category.ticks!.map((t) =>
      categoryLabels[t as keyof typeof categoryLabels].split(" ")[0],
    );
    return labels[i];
  }
  return "";
}

export default function ConstellationPage() {
  const [xAxis, setXAxis] = useState<AxisKey>("date");
  const [yAxis, setYAxis] = useState<AxisKey>("amount");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const points = useMemo(
    () =>
      allCases.map((c) => ({
        c,
        x: value(c, xAxis),
        y: 1 - value(c, yAxis),
        r: importance(c) / 8 + 4,
      })),
    [xAxis, yAxis],
  );

  return (
    <div className="mode-sky min-h-screen flex flex-col">
      <header className="px-8 lg:px-14 pt-8 pb-6 flex items-baseline justify-between border-b border-sky-rule">
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
            style={{ color: "var(--sky-ink)" }}
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: "var(--sky-soft)" }}>
            Concept 02 · Constellation
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: "var(--sky-soft)" }}
        >
          {allCases.length} cases plotted
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-14 pb-8">
        <h1 className="serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tight max-w-4xl">
          Pick two dimensions.
          <br />
          <span
            className="italic"
            style={{ color: "var(--sky-soft)" }}
          >
            Read the shape.
          </span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <AxisPicker
            label="X axis"
            value={xAxis}
            onChange={setXAxis}
            other={yAxis}
          />
          <AxisPicker
            label="Y axis"
            value={yAxis}
            onChange={setYAxis}
            other={xAxis}
          />
        </div>
      </section>

      <main className="flex-1 px-8 lg:px-14 pb-16">
        <Plot
          points={points}
          xAxis={xAxis}
          yAxis={yAxis}
          hoverId={hoverId}
          onHover={setHoverId}
          onPick={setActiveId}
        />
      </main>

      <CasePanel
        caseId={activeId}
        onClose={() => setActiveId(null)}
        variant="light"
      />
    </div>
  );
}

function AxisPicker({
  label,
  value: v,
  onChange,
  other,
}: {
  label: string;
  value: AxisKey;
  onChange: (k: AxisKey) => void;
  other: AxisKey;
}) {
  return (
    <div>
      <p
        className="label mb-2"
        style={{ color: "var(--sky-soft)" }}
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-1">
        {(Object.keys(AXES) as AxisKey[]).map((k) => (
          <button
            key={k}
            disabled={k === other}
            onClick={() => onChange(k)}
            className="mono text-[11px] uppercase tracking-wider px-3 py-2 border transition-colors"
            style={{
              borderColor:
                v === k ? "var(--sky-accent)" : "var(--sky-rule)",
              color:
                k === other
                  ? "var(--sky-rule)"
                  : v === k
                    ? "var(--sky-accent)"
                    : "var(--sky-ink)",
              cursor: k === other ? "not-allowed" : "pointer",
            }}
          >
            {AXES[k].label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Plot({
  points,
  xAxis,
  yAxis,
  hoverId,
  onHover,
  onPick,
}: {
  points: Array<{ c: LandscapeCase; x: number; y: number; r: number }>;
  xAxis: AxisKey;
  yAxis: AxisKey;
  hoverId: string | null;
  onHover: (id: string | null) => void;
  onPick: (id: string) => void;
}) {
  const W = 1200;
  const H = 720;
  const PAD = { top: 40, right: 40, bottom: 60, left: 90 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const ticksOnAxis = (axis: AxisKey): number => {
    if (axis === "date" || axis === "filed") return 7;
    if (axis === "amount") return 6;
    if (axis === "forum") return AXES.forum.ticks!.length;
    if (axis === "category") return AXES.category.ticks!.length;
    return 5;
  };

  const xTicks = ticksOnAxis(xAxis);
  const yTicks = ticksOnAxis(yAxis);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto block"
      role="img"
      aria-label="Constellation plot of cases"
    >
      {/* gridlines */}
      <g>
        {Array.from({ length: xTicks }).map((_, i) => {
          const x = PAD.left + (i / (xTicks - 1)) * innerW;
          return (
            <g key={`xg-${i}`}>
              <line
                x1={x}
                x2={x}
                y1={PAD.top}
                y2={PAD.top + innerH}
                stroke="var(--sky-rule)"
                strokeDasharray="1,5"
                strokeWidth="0.5"
              />
              <text
                x={x}
                y={PAD.top + innerH + 22}
                fontSize="10"
                fill="var(--sky-soft)"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
              >
                {tickLabel(xAxis, i, xTicks)}
              </text>
            </g>
          );
        })}
        {Array.from({ length: yTicks }).map((_, i) => {
          const y = PAD.top + (i / (yTicks - 1)) * innerH;
          return (
            <g key={`yg-${i}`}>
              <line
                x1={PAD.left}
                x2={PAD.left + innerW}
                y1={y}
                y2={y}
                stroke="var(--sky-rule)"
                strokeDasharray="1,5"
                strokeWidth="0.5"
              />
              <text
                x={PAD.left - 10}
                y={y + 4}
                fontSize="10"
                fill="var(--sky-soft)"
                fontFamily="var(--font-mono)"
                textAnchor="end"
              >
                {tickLabel(yAxis, yTicks - 1 - i, yTicks)}
              </text>
            </g>
          );
        })}
      </g>

      {/* axis frame */}
      <rect
        x={PAD.left}
        y={PAD.top}
        width={innerW}
        height={innerH}
        fill="none"
        stroke="var(--sky-rule)"
        strokeWidth="1"
      />

      {/* points */}
      <g>
        {points.map((p) => {
          const cx = PAD.left + p.x * innerW;
          const cy = PAD.top + p.y * innerH;
          const isHover = hoverId === p.c.id;
          return (
            <g
              key={p.c.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => onHover(p.c.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onPick(p.c.id)}
            >
              <circle
                cx={cx}
                cy={cy}
                r={p.r + (isHover ? 4 : 0)}
                fill={isHover ? "var(--sky-accent)" : "var(--sky-ink)"}
                opacity={isHover ? 1 : 0.85}
              />
              <circle
                cx={cx}
                cy={cy}
                r={p.r + 14}
                fill="transparent"
              />
              {isHover ? (
                <g>
                  <rect
                    x={cx + 12}
                    y={cy - 38}
                    width={280}
                    height={64}
                    fill="var(--sky-bg)"
                    stroke="var(--sky-accent)"
                    strokeWidth="1"
                  />
                  <text
                    x={cx + 22}
                    y={cy - 18}
                    fontSize="13"
                    fontFamily="var(--font-display)"
                    fill="var(--sky-ink)"
                  >
                    {truncate(p.c.title, 36)}
                  </text>
                  <text
                    x={cx + 22}
                    y={cy - 2}
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fill="var(--sky-soft)"
                  >
                    {p.c.parties.length > 42
                      ? p.c.parties.slice(0, 41) + "…"
                      : p.c.parties}
                  </text>
                  <text
                    x={cx + 22}
                    y={cy + 16}
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fill="var(--sky-accent)"
                  >
                    {(p.c.decidedDisplay || p.c.filedDisplay).toUpperCase()}
                  </text>
                </g>
              ) : null}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function truncate(s: string, max: number) {
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}
