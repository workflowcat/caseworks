"use client";

import { useMemo } from "react";
import type { LandscapeCase } from "@/data/types";

const CATEGORY_INK: Record<string, string> = {
  "state-responsibility": "#8b1e1e",
  "individual-criminal": "#a64a25",
  "property-commerce": "#3e6939",
  "maritime-territory": "#2a4a7a",
  reparations: "#5a3a6e",
};

const PAPER_INK = "#1a1816";

// Simple seeded PRNG for stable hand-drawn jitter
function hashSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

function jitter(rand: () => number, n = 1) {
  return (rand() - 0.5) * 2 * n;
}

type Encoded = {
  durationYears: number;
  awardLog: number; // 0..1
  petals: number; // articles
  leaves: number; // related
  pending: boolean;
  category: string;
  forum: string;
};

function encode(c: LandscapeCase): Encoded {
  const filed = new Date(c.filed).getTime();
  const decided = new Date(c.decided ?? "2026-04-27").getTime();
  const durationYears =
    Math.max(0.5, (decided - filed) / (1000 * 60 * 60 * 24 * 365.25));
  const awardLog = c.awardUsdM
    ? Math.min(1, Math.log10(c.awardUsdM + 1) / Math.log10(6000))
    : 0;
  // Petals: encode by article importance — for ECHR articles count detail items, else fixed
  const petals = Math.max(
    1,
    Math.min(13, Math.round(c.detail.length * 0.9 + (c.awardUsdM ? 1 : 0))),
  );
  const leaves = Math.min(5, c.related?.length ?? 0);
  return {
    durationYears,
    awardLog,
    petals,
    leaves,
    pending: c.status !== "decided",
    category: c.category,
    forum: c.forum,
  };
}

export function Specimen({
  c,
  w,
  h,
  onClick,
}: {
  c: LandscapeCase;
  w: number;
  h: number;
  onClick?: () => void;
}) {
  const e = useMemo(() => encode(c), [c]);
  const rand = useMemo(() => rng(hashSeed(c.id)), [c.id]);
  const ink = CATEGORY_INK[e.category] ?? PAPER_INK;

  // Layout
  const groundY = h - 56;
  const skyY = 30;
  const stemX = w / 2 + jitter(rand, 4);

  // Stem length — capped so very long cases don't break layout
  const stemSpan = Math.min(
    groundY - skyY - 20,
    Math.max(80, e.durationYears * 24 + 60),
  );
  const stemTop = groundY - stemSpan;

  // Hand-drawn stem: cubic bezier with slight curl
  const sway = jitter(rand, 14);
  const stemPath = `M ${stemX} ${groundY} C ${stemX + sway} ${
    groundY - stemSpan / 3
  }, ${stemX - sway} ${groundY - (stemSpan * 2) / 3}, ${stemX + jitter(
    rand,
    3,
  )} ${stemTop}`;

  // Bloom — radius scales with award
  const baseR = 14 + e.awardLog * 28;
  const bloomR = baseR + jitter(rand, 3);

  // Petals — radial markers around bloom
  const petalCount = e.petals;
  const petals = Array.from({ length: petalCount }).map((_, i) => {
    const angle =
      (i / petalCount) * Math.PI * 2 +
      Math.PI * 0.13 +
      jitter(rand, 0.05);
    const dist = bloomR * 0.78;
    const cx = stemX + Math.cos(angle) * dist;
    const cy = stemTop + Math.sin(angle) * dist;
    const rx = 5 + e.awardLog * 4 + jitter(rand, 0.6);
    const ry = 9 + e.awardLog * 6 + jitter(rand, 0.6);
    const rot = (angle * 180) / Math.PI + 90;
    return { cx, cy, rx, ry, rot, key: i };
  });

  // Center of bloom
  const coreR = 3 + e.awardLog * 3;

  // Leaves — alternating sides of stem
  const leaves = Array.from({ length: e.leaves }).map((_, i) => {
    const t = (i + 1) / (e.leaves + 1);
    const y = groundY - stemSpan * t;
    const side = i % 2 === 0 ? 1 : -1;
    const len = 14 + jitter(rand, 4);
    const tip = {
      x: stemX + side * (len + 6),
      y: y - len / 2,
    };
    const ctrl1 = { x: stemX + side * 4, y: y - len };
    const ctrl2 = { x: stemX + side * (len * 0.9), y: y - len * 0.2 };
    const path = `M ${stemX} ${y} Q ${ctrl1.x} ${ctrl1.y}, ${tip.x} ${tip.y} Q ${ctrl2.x} ${ctrl2.y}, ${stemX} ${y}`;
    return { path, key: i };
  });

  // Roots (only for pending) — sparse downward branches
  const rootBranches = e.pending
    ? Array.from({ length: 3 }).map((_, i) => {
        const side = i === 0 ? 0 : i === 1 ? -1 : 1;
        const dx = side * (12 + jitter(rand, 4));
        const dy = 16 + jitter(rand, 4);
        return {
          path: `M ${stemX} ${groundY} Q ${stemX + dx * 0.4} ${
            groundY + dy * 0.4
          }, ${stemX + dx} ${groundY + dy}`,
          key: i,
        };
      })
    : [];

  // Forum tick on the ground line
  const forumTick = stemX + 38 + jitter(rand, 2);
  const forumLabel = e.forum.toUpperCase();

  return (
    <button
      type="button"
      onClick={onClick}
      className="block text-left transition-opacity hover:opacity-100 group"
      style={{ width: w }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{ display: "block" }}
        aria-label={c.title}
      >
        {/* ground line */}
        <line
          x1={12}
          x2={w - 12}
          y1={groundY}
          y2={groundY}
          stroke={PAPER_INK}
          strokeWidth="0.6"
          opacity="0.45"
        />
        {/* roots */}
        {rootBranches.map((r) => (
          <path
            key={`root-${r.key}`}
            d={r.path}
            fill="none"
            stroke={PAPER_INK}
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.55"
          />
        ))}
        {/* stem */}
        <path
          d={stemPath}
          fill="none"
          stroke={PAPER_INK}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* leaves */}
        {leaves.map((l) => (
          <path
            key={`leaf-${l.key}`}
            d={l.path}
            fill="none"
            stroke={PAPER_INK}
            strokeWidth="0.8"
            opacity="0.7"
          />
        ))}
        {/* bloom petals */}
        {petals.map((p) => (
          <ellipse
            key={`petal-${p.key}`}
            cx={p.cx}
            cy={p.cy}
            rx={p.rx}
            ry={p.ry}
            transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
            fill="none"
            stroke={ink}
            strokeWidth="0.9"
            opacity="0.85"
            className="group-hover:opacity-100"
          />
        ))}
        {/* core */}
        <circle
          cx={stemX}
          cy={stemTop}
          r={coreR}
          fill={ink}
          opacity="0.95"
        />
        {/* award glyph (if any) — small circles dotting upward like seeds */}
        {e.awardLog > 0 ? (
          <g>
            {Array.from({
              length: Math.max(1, Math.round(e.awardLog * 4)),
            }).map((_, i) => (
              <circle
                key={`seed-${i}`}
                cx={
                  stemX +
                  Math.cos((i / 4) * Math.PI * 2 + 1) *
                    (bloomR + 12 + i * 2)
                }
                cy={
                  stemTop +
                  Math.sin((i / 4) * Math.PI * 2 + 1) *
                    (bloomR + 12 + i * 2)
                }
                r="1.2"
                fill={ink}
                opacity="0.65"
              />
            ))}
          </g>
        ) : null}
        {/* forum tick */}
        <g>
          <line
            x1={stemX + 4}
            x2={forumTick - 2}
            y1={groundY - 2}
            y2={groundY - 2}
            stroke={PAPER_INK}
            strokeWidth="0.4"
            opacity="0.4"
          />
          <text
            x={forumTick}
            y={groundY + 1}
            fontSize="8"
            fontFamily="var(--font-mono)"
            fill={PAPER_INK}
            opacity="0.55"
            letterSpacing="0.06em"
          >
            {forumLabel}
          </text>
        </g>
      </svg>

      <div className="mt-1 px-1 pb-2 border-t" style={{ borderColor: "#cdc9c0" }}>
        <p
          className="mono text-[10px] mt-2"
          style={{ color: ink, letterSpacing: "0.04em" }}
        >
          {(c.decidedDisplay || c.filedDisplay).split(";")[0].toUpperCase()}
        </p>
        <p
          className="serif text-[14px] leading-tight mt-1.5"
          style={{ color: PAPER_INK }}
        >
          {c.title}
        </p>
        <p
          className="text-[10px] mt-1.5 italic"
          style={{ color: "#65615b", fontFamily: "var(--font-display)" }}
        >
          {c.parties}
        </p>
      </div>
    </button>
  );
}
