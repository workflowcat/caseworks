"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  cases as allCases,
  forums,
  type LandscapeCase,
} from "@/data/types";
import { CasePanel } from "@/components/case-panel";

const TIME_START = new Date("2014-01-01").getTime();
const TIME_END = new Date("2026-06-01").getTime();
const TIME_RANGE = TIME_END - TIME_START;

const PX_PER_YEAR = 360;
const TOTAL_PX =
  ((TIME_END - TIME_START) / (1000 * 60 * 60 * 24 * 365.25)) * PX_PER_YEAR;

const ANCHORS = [
  { date: "2014-02-27", label: "Crimea seizure" },
  { date: "2014-05-11", label: "DPR / LPR \"referendums\"" },
  { date: "2014-07-17", label: "MH17 shot down" },
  { date: "2018-11-26", label: "Oschadbank award" },
  { date: "2019-05-25", label: "ITLOS provisional measures" },
  { date: "2022-02-24", label: "Russia's full-scale invasion" },
  { date: "2022-09-16", label: "Russia exits ECHR" },
  { date: "2022-11-17", label: "Hague verdict on MH17 trial" },
  { date: "2023-03-17", label: "ICC arrest warrants" },
  { date: "2023-04-12", label: "Naftogaz $5bn award" },
  { date: "2024-06-25", label: "ECHR Crimea judgment" },
  { date: "2025-05-12", label: "ICAO ruling on MH17" },
  { date: "2025-07-09", label: "ECHR merits judgment" },
];

const CATEGORY_COLOR: Record<string, string> = {
  "state-responsibility": "var(--film-accent)",
  "individual-criminal": "#e87a4d",
  "property-commerce": "#7ad6a3",
  "maritime-territory": "#7ec5f0",
  reparations: "#c79bff",
};

const LANE_FOR_CATEGORY: Record<string, number> = {
  "state-responsibility": 0,
  "individual-criminal": 1,
  "property-commerce": 2,
  "maritime-territory": 3,
  reparations: 4,
};

const LANES = [
  "State responsibility",
  "Individual criminal",
  "Property & commerce",
  "Maritime & territory",
  "Reparations",
];

function xFor(date: string) {
  const t = new Date(date).getTime();
  return ((t - TIME_START) / TIME_RANGE) * TOTAL_PX;
}

export default function TimelinePage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sortedCases = useMemo(
    () =>
      [...allCases].sort((a, b) =>
        a.filed.localeCompare(b.filed),
      ),
    [],
  );

  const years = Array.from(
    { length: 13 },
    (_, i) => 2014 + i,
  );

  return (
    <div className="mode-film min-h-screen flex flex-col">
      <header className="px-8 lg:px-12 pt-7 pb-5 flex items-baseline justify-between border-b border-film-rule">
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
          >
            ← caseworks
          </Link>
          <p className="label text-film-soft">Concept 03 · Timeline</p>
        </div>
        <p className="mono text-[11px] text-film-soft hidden md:block">
          Scroll horizontally · {sortedCases.length} cases · {ANCHORS.length}{" "}
          anchors
        </p>
      </header>

      <section className="px-8 lg:px-12 pt-12 pb-6">
        <h1 className="serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tight max-w-4xl">
          Eleven years.
          <br />
          <span className="italic text-film-soft">One axis.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-film-soft">
          The conflict on top, the law beneath. Same time. Scroll right.
        </p>
      </section>

      <main className="relative">
        <div
          className="overflow-x-auto overflow-y-hidden no-scrollbar pb-12"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            className="relative pt-10 pb-6"
            style={{ width: TOTAL_PX + 200 }}
          >
            {/* Year ticks at the top */}
            <div className="relative h-12 ml-12">
              {years.map((y) => (
                <div
                  key={y}
                  className="absolute top-0 bottom-0 flex flex-col"
                  style={{ left: xFor(`${y}-01-01`) }}
                >
                  <span className="serif text-3xl tracking-tight">{y}</span>
                  <span className="mono text-[10px] text-film-soft mt-1">
                    Q1
                  </span>
                </div>
              ))}
            </div>

            {/* Conflict anchors band */}
            <div className="relative h-32 ml-12 mt-4 border-t border-b border-film-rule">
              {ANCHORS.map((a) => (
                <div
                  key={a.date}
                  className="absolute top-0 bottom-0"
                  style={{ left: xFor(a.date) }}
                >
                  <div className="absolute top-0 bottom-0 w-px bg-film-accent/40" />
                  <div className="absolute top-2 left-2 max-w-[220px]">
                    <p className="mono text-[10px] text-film-accent">
                      {a.date}
                    </p>
                    <p className="serif text-sm leading-tight mt-1">
                      {a.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lane labels */}
            <div className="ml-12 mt-10 relative">
              {LANES.map((label, i) => (
                <div
                  key={label}
                  className="absolute -left-12 w-12 mono text-[10px] uppercase tracking-widest text-film-soft pointer-events-none"
                  style={{ top: i * 86 + 6 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}

              {/* Lane stripes */}
              {LANES.map((label, i) => (
                <div
                  key={`lane-${label}`}
                  className="absolute left-0 right-0 border-t border-film-rule"
                  style={{ top: i * 86 }}
                />
              ))}
              <div
                className="absolute left-0 right-0 border-t border-film-rule"
                style={{ top: LANES.length * 86 }}
              />

              {/* Today marker */}
              <div
                className="absolute top-0 bottom-0 w-px bg-film-accent/70 pointer-events-none"
                style={{
                  left: xFor("2026-04-27"),
                  height: LANES.length * 86,
                }}
              >
                <span className="absolute -top-6 -translate-x-1/2 mono text-[10px] text-film-accent uppercase tracking-widest">
                  Today
                </span>
              </div>

              {/* Cases */}
              <div
                className="relative"
                style={{ height: LANES.length * 86 }}
              >
                {sortedCases.map((c) => {
                  const lane = LANE_FOR_CATEGORY[c.category] ?? 0;
                  const x1 = xFor(c.filed);
                  const x2 = xFor(c.decided ?? "2026-04-27");
                  const w = Math.max(x2 - x1, 8);
                  const y = lane * 86 + 18;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveId(c.id)}
                      className="absolute group text-left"
                      style={{ left: x1, top: y, width: w }}
                    >
                      <div
                        className="h-2.5 group-hover:h-4 transition-all"
                        style={{
                          background: CATEGORY_COLOR[c.category],
                          opacity: c.status === "decided" ? 1 : 0.45,
                        }}
                      />
                      <div className="absolute top-5 left-0 right-0 max-w-[260px] pointer-events-none">
                        <p className="serif text-[13px] leading-tight line-clamp-2">
                          {c.title}
                        </p>
                        <p className="mono text-[10px] text-film-soft mt-1 line-clamp-1">
                          {c.parties}
                        </p>
                        {c.awardUsdM ? (
                          <p
                            className="mono text-xs mt-1"
                            style={{ color: CATEGORY_COLOR[c.category] }}
                          >
                            ${formatM(c.awardUsdM)}
                          </p>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Lane labels (right side, full text) */}
              <div className="absolute -right-2 top-0 w-44 pointer-events-none">
                {LANES.map((label, i) => (
                  <p
                    key={`right-${label}`}
                    className="absolute label text-film-soft"
                    style={{ top: i * 86 + 6 }}
                  >
                    {label}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-8 lg:px-12 py-6 border-t border-film-rule mono text-[11px] text-film-soft flex flex-wrap gap-x-6 gap-y-2">
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{ background: CATEGORY_COLOR["state-responsibility"] }}
          />
          State responsibility
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{ background: CATEGORY_COLOR["individual-criminal"] }}
          />
          Individual criminal
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{ background: CATEGORY_COLOR["property-commerce"] }}
          />
          Property & commerce
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{ background: CATEGORY_COLOR["maritime-territory"] }}
          />
          Maritime & territory
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3"
            style={{ background: CATEGORY_COLOR["reparations"] }}
          />
          Reparations
        </span>
        <span className="ml-auto">Click any bar to open</span>
      </footer>

      <CasePanel
        caseId={activeId}
        onClose={() => setActiveId(null)}
        variant="film"
      />
    </div>
  );
}

function formatM(m: number) {
  if (m >= 1000) {
    const v = m / 1000;
    return `${v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, "")} bn`;
  }
  return `${m.toFixed(0)} m`;
}
