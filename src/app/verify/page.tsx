"use client";

import { useMemo, useState } from "react";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { ConfidenceBadge } from "@/components/confidence-badge";
import { SourceLine } from "@/components/source-link";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";
import { procedural } from "@/data/procedural";
import { sections } from "@/data/judgment-sections";
import {
  QUOTE_CONFIDENCE,
  FACT_CONFIDENCE,
  type Confidence,
} from "@/data/confidence";
import { resolveSourceUrl } from "@/data/source-urls";
import { SITE_VERIFIED_AT } from "@/data/verified-at";

type Row = {
  id: string;
  source: string;
  href: string;
  surface: "quotation" | "fact" | "procedural" | "judgment";
  text: string;
  date: string;
  confidence: Confidence;
  sourceUrl?: string;
};

function buildRows(): Row[] {
  const rows: Row[] = [];
  for (const q of quotes) {
    const conf = QUOTE_CONFIDENCE[q.id] ?? "verbatim";
    const src = q.context ?? q.attribution;
    rows.push({
      id: `q-${q.id}`,
      source: src,
      href: `/quotations#q-${q.id}`,
      surface: "quotation",
      text: q.text,
      date: q.context?.match(/\d{1,2}\s+\w+\s+\d{4}|\d{4}/)?.[0] ?? "",
      confidence: conf,
      sourceUrl: resolveSourceUrl(src),
    });
  }
  for (const f of facts) {
    const conf = FACT_CONFIDENCE[f.id] ?? "verbatim";
    rows.push({
      id: `f-${f.id}`,
      source: f.source,
      href: `/facts#f-${f.id}`,
      surface: "fact",
      text: f.text,
      date: f.date,
      confidence: conf,
      sourceUrl: resolveSourceUrl(f.source),
    });
  }
  for (const p of procedural) {
    rows.push({
      id: `p-${p.date}-${p.title.slice(0, 8).replace(/\s/g, "-")}`,
      source: p.source,
      href: "/history",
      surface: "procedural",
      text: p.title,
      date: p.display,
      confidence: "verbatim",
      sourceUrl: resolveSourceUrl(p.source),
    });
  }
  for (const s of sections) {
    if (!s.pulls) continue;
    for (const pl of s.pulls) {
      rows.push({
        id: `j-${s.id}-${pl.cite.slice(0, 16).replace(/\W/g, "-")}`,
        source: pl.cite,
        href: `/judgment#${s.id}`,
        surface: "judgment",
        text: pl.text,
        date: "9 July 2025",
        confidence: "verbatim",
        sourceUrl: resolveSourceUrl(pl.cite),
      });
    }
  }
  return rows;
}

const SURFACE_LABEL: Record<Row["surface"], string> = {
  quotation: "Quote",
  fact: "Fact",
  procedural: "History",
  judgment: "Judgment",
};

export default function VerifyPage() {
  const all = useMemo(() => buildRows(), []);
  const [query, setQuery] = useState("");
  const [conf, setConf] = useState<Confidence | null>(null);
  const [surface, setSurface] = useState<Row["surface"] | null>(null);

  const list = useMemo(() => {
    let l = all;
    if (conf) l = l.filter((r) => r.confidence === conf);
    if (surface) l = l.filter((r) => r.surface === surface);
    if (query.trim()) {
      const needle = query.toLowerCase();
      l = l.filter(
        (r) =>
          r.text.toLowerCase().includes(needle) ||
          r.source.toLowerCase().includes(needle),
      );
    }
    return l;
  }, [all, conf, surface, query]);

  const counts = useMemo(() => {
    const m = new Map<Confidence, number>();
    for (const r of all) m.set(r.confidence, (m.get(r.confidence) ?? 0) + 1);
    return m;
  }, [all]);

  const surfaceCounts = useMemo(() => {
    const m = new Map<Row["surface"], number>();
    for (const r of all) m.set(r.surface, (m.get(r.surface) ?? 0) + 1);
    return m;
  }, [all]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="XI" title="Verify" />

      <PageTitle
        kicker="XI · Verify"
        title="Every claim, in one table."
        deck="A working surface for fact-checkers and copy editors. Each row is a single claim from elsewhere on the site, with its confidence level, source, and a link to the source and the on-site permalink."
      >
        <p className="mono text-[11px] text-ink-soft border border-rule px-3 py-2 inline-block">
          External links last verified on {SITE_VERIFIED_AT}. Total
          claims indexed: {all.length}.
        </p>
      </PageTitle>

      <section className="px-8 lg:px-14 pb-4 max-w-7xl">
        <div className="border border-rule grid grid-cols-12 gap-3 px-4 py-3 items-baseline">
          <p className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
            Search
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="word, phrase, source…"
            className="col-span-12 md:col-span-10 bg-transparent border-b border-rule outline-none py-1 text-base focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Confidence:
          </span>
          <FilterPill
            label={`all (${all.length})`}
            active={conf === null}
            onClick={() => setConf(null)}
          />
          {(
            [
              "verbatim",
              "paraphrased",
              "translated",
              "secondary",
              "unverified",
            ] as Confidence[]
          ).map((c) =>
            (counts.get(c) ?? 0) === 0 ? null : (
              <FilterPill
                key={c}
                label={`${c} (${counts.get(c)})`}
                active={conf === c}
                onClick={() => setConf(conf === c ? null : c)}
              />
            ),
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Surface:
          </span>
          <FilterPill
            label={`all (${all.length})`}
            active={surface === null}
            onClick={() => setSurface(null)}
          />
          {(
            ["quotation", "fact", "procedural", "judgment"] as Row["surface"][]
          ).map((s) => (
            <FilterPill
              key={s}
              label={`${SURFACE_LABEL[s]} (${surfaceCounts.get(s) ?? 0})`}
              active={surface === s}
              onClick={() => setSurface(surface === s ? null : s)}
            />
          ))}
        </div>

        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {list.length} of {all.length}
        </p>
      </section>

      <main className="px-4 lg:px-10 pb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] border-collapse">
            <thead>
              <tr className="border-y border-rule">
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft w-[60px]">
                  Conf.
                </th>
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft w-[80px]">
                  Surface
                </th>
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
                  Claim
                </th>
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft w-[110px]">
                  Date
                </th>
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft w-[280px]">
                  Source
                </th>
                <th className="text-left py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft w-[60px]">
                  Open
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-rule align-top hover:bg-bg-2"
                >
                  <td className="py-2 px-2">
                    <ConfidenceBadge c={r.confidence} />
                  </td>
                  <td className="py-2 px-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {SURFACE_LABEL[r.surface]}
                  </td>
                  <td className="py-2 px-2 serif leading-snug">
                    {r.text.length > 220
                      ? `${r.text.slice(0, 219)}…`
                      : r.text}
                  </td>
                  <td className="py-2 px-2 mono text-[10px] text-ink-soft whitespace-nowrap">
                    {r.date}
                  </td>
                  <td className="py-2 px-2 text-[11px]">
                    <SourceLine source={r.source} />
                  </td>
                  <td className="py-2 px-2 mono text-[10px]">
                    <a
                      href={r.href}
                      className="underline decoration-1 underline-offset-2 hover:text-accent"
                    >
                      on site ↗
                    </a>
                    {r.sourceUrl ? (
                      <>
                        <br />
                        <a
                          href={r.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-1 underline-offset-2 hover:text-accent"
                        >
                          source ↗
                        </a>
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <section className="px-8 lg:px-14 pb-12 max-w-3xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
          What this is for
        </p>
        <p className="text-base leading-relaxed">
          Every claim that appears anywhere on the Reader collected
          here, on one page, with its confidence band visible. A
          fact-checker can scrub the table top-to-bottom; a researcher
          can land on any specific claim from the on-site link or, where
          the resolver knows it, from the external source itself. Found
          something miscoded? The repo is at{" "}
          <a
            href="https://github.com/workflowcat/caseworks"
            className="underline decoration-1 underline-offset-2 hover:text-accent"
          >
            github.com/workflowcat/caseworks
          </a>
          .
        </p>
      </section>

      <PageFooter />
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="uppercase tracking-widest px-2 py-1 border"
      style={{
        borderColor: active ? "var(--accent)" : "var(--rule)",
        color: active ? "var(--accent)" : "var(--ink)",
      }}
    >
      {label}
    </button>
  );
}
