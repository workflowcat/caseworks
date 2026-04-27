"use client";

import { useState } from "react";
import Link from "next/link";
import { cases as allCases } from "@/data/types";
import {
  instruments,
  caseToInstruments,
  groupLabels,
  type Instrument,
} from "@/data/instruments";
import { CasePanel } from "@/components/case-panel";

const PALETTE = {
  bg: "#fafaf6",
  ink: "#0c0c0d",
  soft: "#76767a",
  rule: "#d6d6cf",
  accent: "#1c2bd6",
  warm: "#c54b1a",
};

const VB_W = 1240;
const ROW_H = 26;
const LEFT_X = 360;
const RIGHT_X = 920;
const TOP_PAD = 80;

const ORDER: Instrument["group"][] = [
  "human-rights",
  "humanitarian",
  "criminal",
  "investment",
  "aviation",
  "maritime",
  "reparations",
];

const sortedInstruments = [...instruments].sort((a, b) => {
  const ga = ORDER.indexOf(a.group);
  const gb = ORDER.indexOf(b.group);
  if (ga !== gb) return ga - gb;
  return a.id.localeCompare(b.id);
});

const sortedCases = [...allCases].sort((a, b) => {
  if (a.category !== b.category) return a.category.localeCompare(b.category);
  return (a.decided ?? a.filed).localeCompare(b.decided ?? b.filed);
});

const VB_H =
  TOP_PAD +
  Math.max(sortedInstruments.length, sortedCases.length) * ROW_H +
  60;

function instrumentY(id: string) {
  const i = sortedInstruments.findIndex((x) => x.id === id);
  return TOP_PAD + i * ROW_H + ROW_H / 2;
}

function caseY(id: string) {
  const i = sortedCases.findIndex((x) => x.id === id);
  return TOP_PAD + i * ROW_H + ROW_H / 2;
}

export default function TreatyPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverInstrument, setHoverInstrument] = useState<string | null>(null);
  const [hoverCase, setHoverCase] = useState<string | null>(null);

  // Compute spoke counts for thickness encoding
  const instrumentSpokes: Record<string, number> = {};
  for (const c of allCases) {
    for (const iid of caseToInstruments[c.id] ?? []) {
      instrumentSpokes[iid] = (instrumentSpokes[iid] ?? 0) + 1;
    }
  }

  const isHighlighted = (caseId: string, instrumentId: string) => {
    if (hoverInstrument) return hoverInstrument === instrumentId;
    if (hoverCase) return hoverCase === caseId;
    return false;
  };
  const dim = (caseId: string, instrumentId: string) => {
    if (!hoverInstrument && !hoverCase) return 1;
    return isHighlighted(caseId, instrumentId) ? 1 : 0.12;
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: PALETTE.bg, color: PALETTE.ink }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
            style={{ color: PALETTE.ink }}
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 08 · Treaty Atlas
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          {sortedInstruments.length} instruments · {sortedCases.length} cases
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-16 pb-10">
        <h1 className="serif text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight max-w-5xl">
          The conduct fires off
          <br />
          <span className="italic" style={{ color: PALETTE.soft }}>
            many laws at once.
          </span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-base leading-relaxed"
          style={{ color: PALETTE.soft }}
        >
          The same act — a missile against a passenger plane, the
          forced removal of children, the seizure of a refinery —
          triggers different legal instruments depending on who is
          asking. Hover an instrument or a case to see its connections.
        </p>
      </section>

      <main className="px-4 lg:px-10 pb-16">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full h-auto block"
          role="img"
          aria-label="Bipartite graph mapping legal instruments to cases"
        >
          {/* column headers */}
          <text
            x={LEFT_X - 8}
            y={50}
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.06em"
            fill={PALETTE.soft}
            textAnchor="end"
          >
            INSTRUMENT
          </text>
          <text
            x={RIGHT_X + 8}
            y={50}
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.06em"
            fill={PALETTE.soft}
          >
            CASE
          </text>

          {/* connections */}
          <g>
            {sortedCases.map((c) => {
              const cy = caseY(c.id);
              const iids = caseToInstruments[c.id] ?? [];
              return iids.map((iid) => {
                const iy = instrumentY(iid);
                const op = dim(c.id, iid);
                const w =
                  hoverInstrument === iid || hoverCase === c.id ? 1.4 : 0.6;
                const path = `M ${LEFT_X} ${iy} C ${
                  LEFT_X + 200
                } ${iy}, ${RIGHT_X - 200} ${cy}, ${RIGHT_X} ${cy}`;
                return (
                  <path
                    key={`${c.id}-${iid}`}
                    d={path}
                    fill="none"
                    stroke={PALETTE.accent}
                    strokeWidth={w}
                    opacity={op * 0.55}
                  />
                );
              });
            })}
          </g>

          {/* instruments (left) */}
          <g>
            {sortedInstruments.map((ins) => {
              const y = instrumentY(ins.id);
              const isFirstInGroup =
                sortedInstruments.findIndex((x) => x.group === ins.group) ===
                sortedInstruments.indexOf(ins);
              return (
                <g
                  key={ins.id}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoverInstrument(ins.id)}
                  onMouseLeave={() => setHoverInstrument(null)}
                >
                  {isFirstInGroup ? (
                    <text
                      x={20}
                      y={y - ROW_H / 2 + 12}
                      fontFamily="var(--font-mono)"
                      fontSize="10"
                      fill={PALETTE.warm}
                      letterSpacing="0.06em"
                    >
                      {groupLabels[ins.group].toUpperCase()}
                    </text>
                  ) : null}
                  <rect
                    x={20}
                    y={y - ROW_H / 2}
                    width={LEFT_X - 28}
                    height={ROW_H}
                    fill="transparent"
                  />
                  <text
                    x={LEFT_X - 16}
                    y={y + 4}
                    fontFamily="var(--font-display)"
                    fontSize="13"
                    fill={
                      hoverInstrument === ins.id
                        ? PALETTE.accent
                        : PALETTE.ink
                    }
                    textAnchor="end"
                  >
                    {ins.full}
                  </text>
                  <circle
                    cx={LEFT_X - 4}
                    cy={y}
                    r={
                      Math.min(5, 2 + (instrumentSpokes[ins.id] ?? 0) / 3)
                    }
                    fill={PALETTE.accent}
                    opacity={
                      hoverInstrument && hoverInstrument !== ins.id
                        ? 0.2
                        : 0.95
                    }
                  />
                </g>
              );
            })}
          </g>

          {/* cases (right) */}
          <g>
            {sortedCases.map((c) => {
              const y = caseY(c.id);
              return (
                <g
                  key={c.id}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoverCase(c.id)}
                  onMouseLeave={() => setHoverCase(null)}
                  onClick={() => setActiveId(c.id)}
                >
                  <rect
                    x={RIGHT_X + 4}
                    y={y - ROW_H / 2}
                    width={VB_W - RIGHT_X - 24}
                    height={ROW_H}
                    fill="transparent"
                  />
                  <circle
                    cx={RIGHT_X + 4}
                    cy={y}
                    r={3.5}
                    fill={PALETTE.accent}
                    opacity={hoverCase && hoverCase !== c.id ? 0.2 : 0.95}
                  />
                  <text
                    x={RIGHT_X + 16}
                    y={y + 4}
                    fontFamily="var(--font-display)"
                    fontSize="13"
                    fill={hoverCase === c.id ? PALETTE.accent : PALETTE.ink}
                  >
                    {c.title.length > 48 ? c.title.slice(0, 47) + "…" : c.title}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </main>

      <footer
        className="px-8 lg:px-14 py-8 border-t mono text-[11px] flex flex-wrap gap-x-6 gap-y-2"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        <span>
          Hover an instrument to see every case that invokes it. Hover a
          case to see every instrument it invokes.
        </span>
        <span className="ml-auto">Click a case to read it</span>
      </footer>

      <CasePanel
        caseId={activeId}
        onClose={() => setActiveId(null)}
        variant="light"
      />
    </div>
  );
}
