"use client";

import { useMemo, useState } from "react";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { CopyButton } from "@/components/copy-button";
import {
  reading,
  KIND_LABEL,
  DEPTH_LABEL,
  type ReadingItem,
} from "@/data/reading";
import { SITE_VERIFIED_AT } from "@/data/verified-at";

const KIND_ORDER: ReadingItem["kind"][] = [
  "primary-court",
  "primary-press",
  "primary-investigation",
  "academic",
  "journalism",
  "osint",
  "book",
  "video",
  "primary-instrument",
];

const DEPTH_ORDER: ReadingItem["depth"][] = [
  "5-min",
  "30-min",
  "deep",
];

export default function ReadingListPage() {
  const [depthFilter, setDepthFilter] =
    useState<ReadingItem["depth"] | null>(null);
  const [kindFilter, setKindFilter] =
    useState<ReadingItem["kind"] | null>(null);
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    let l = reading;
    if (depthFilter) l = l.filter((r) => r.depth === depthFilter);
    if (kindFilter) l = l.filter((r) => r.kind === kindFilter);
    if (query.trim()) {
      const needle = query.toLowerCase();
      l = l.filter((r) =>
        [r.title, r.authors ?? "", r.publication, r.abstract]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      );
    }
    return l;
  }, [depthFilter, kindFilter, query]);

  const grouped = useMemo(() => {
    const m = new Map<ReadingItem["kind"], ReadingItem[]>();
    for (const r of list) {
      const arr = m.get(r.kind) ?? [];
      arr.push(r);
      m.set(r.kind, arr);
    }
    return KIND_ORDER.filter((k) => m.has(k)).map((k) => ({
      kind: k,
      items: m.get(k)!,
    }));
  }, [list]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="X" title="Reading list" current="/reading-list" />

      <PageTitle
        kicker="X · Reading list"
        title="External material, curated."
        deck="Primary documents and the secondary commentary that earns its place. Filter by depth or kind; copy any citation; follow any link."
      >
        <p className="text-base leading-relaxed">
          Discipline applied: every entry below has a URL I am confident
          exists at the time of writing. Where the specific article URL
          was uncertain, the entry links to the publication&rsquo;s
          topic page and that is noted in the abstract. Citations
          approximate OSCOLA.
        </p>
        <p className="mono text-[11px] text-ink-soft border border-rule px-3 py-2 inline-block mt-4">
          External links last verified on {SITE_VERIFIED_AT}.
        </p>
      </PageTitle>

      <section className="px-8 lg:px-14 pb-6 max-w-5xl">
        <div className="border border-rule grid grid-cols-12 gap-3 px-4 py-3 items-baseline">
          <p className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
            Search
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="title, author, publication…"
            className="col-span-12 md:col-span-10 bg-transparent border-b border-rule outline-none py-1 text-base focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Depth:
          </span>
          <Filter
            label="all"
            active={depthFilter === null}
            onClick={() => setDepthFilter(null)}
          />
          {DEPTH_ORDER.map((d) => (
            <Filter
              key={d}
              label={DEPTH_LABEL[d]}
              active={depthFilter === d}
              onClick={() =>
                setDepthFilter(depthFilter === d ? null : d)
              }
            />
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Kind:
          </span>
          <Filter
            label="all"
            active={kindFilter === null}
            onClick={() => setKindFilter(null)}
          />
          {KIND_ORDER.filter((k) =>
            reading.some((r) => r.kind === k),
          ).map((k) => (
            <Filter
              key={k}
              label={KIND_LABEL[k]}
              active={kindFilter === k}
              onClick={() => setKindFilter(kindFilter === k ? null : k)}
            />
          ))}
        </div>

        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {list.length} of {reading.length}
        </p>
      </section>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        {grouped.map((g) => (
          <section key={g.kind} className="mb-12">
            <h2 className="mono text-[11px] uppercase tracking-widest text-accent mb-4">
              {KIND_LABEL[g.kind]}
            </h2>
            <ol className="border-t border-rule">
              {g.items.map((r) => (
                <li
                  key={r.id}
                  className="grid grid-cols-12 gap-3 py-5 border-b border-rule"
                >
                  <div className="col-span-12 md:col-span-3 lg:col-span-2 space-y-1.5">
                    <p className="mono text-xs">{r.date}</p>
                    <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                      {DEPTH_LABEL[r.depth]}
                    </p>
                    {r.language && r.language !== "en" ? (
                      <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                        in {r.language}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-2">
                    <p className="serif text-base leading-tight">
                      {r.title}
                    </p>
                    <p className="text-xs text-ink-soft">
                      {[r.authors, r.publication]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    <p className="text-sm leading-relaxed max-w-3xl">
                      {r.abstract}
                    </p>
                    <p className="mono text-[11px] leading-snug bg-bg-2 p-3 border border-rule">
                      {r.citation}
                    </p>
                    <div className="flex items-center gap-4 pt-1">
                      <CopyButton text={r.citation} />
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono text-[10px] uppercase tracking-widest underline decoration-1 underline-offset-2 hover:text-accent"
                      >
                        Open ↗
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            What this list is not
          </p>
          <p className="text-base leading-relaxed">
            Not exhaustive. Many additional academic articles, news
            pieces, and commentaries exist; this list is a working set of
            entry points. Where I do not include something, the omission
            is one of two: I could not verify the URL, or the piece sits
            beyond the boundaries of <em>this</em> case (the Netherlands
            inter-state proceeding, application 28525/20). Suggestions
            for additions are welcome via the project repository.
          </p>
        </section>
      </main>

      <PageFooter current="/reading-list" />
    </div>
  );
}

function Filter({
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
