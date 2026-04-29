"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import {
  judgmentParagraphs,
  operativeOrders,
  chaptersInOrder,
} from "@/data/judgment-paragraphs";

export default function ParagraphsPage() {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState<string | null>(null);

  const chapters = useMemo(() => chaptersInOrder(), []);

  const filtered = useMemo(() => {
    let l = judgmentParagraphs;
    if (chapter) l = l.filter((p) => p.chapter === chapter);
    if (query.trim()) {
      const q = query.toLowerCase();
      l = l.filter(
        (p) =>
          p.text.toLowerCase().includes(q) ||
          (p.chapter && p.chapter.toLowerCase().includes(q)) ||
          String(p.no).includes(q),
      );
    }
    return l;
  }, [query, chapter]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader
        no="III"
        title="Annotated judgment / Paragraphs"
        current="/judgment"
      />

      <PageTitle
        kicker="III · Annotated judgment / Paragraphs"
        title="The judgment, paragraph by paragraph."
        deck="The full text of the merits judgment of 9 July 2025, indexed by paragraph and chapter, drawn from the official HUDOC PDF (item 001-244292). Each paragraph carries its first sentence; the full text lives at HUDOC. Operative orders shown at the foot."
      >
        <p className="text-base leading-relaxed">
          For the press-release reading,{" "}
          <Link
            href="/judgment"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            return to the section view
          </Link>
          . The judgment is also available on{" "}
          <a
            href="https://hudoc.echr.coe.int/eng#%7B%22tabview%22:%5B%22document%22%5D,%22itemid%22:%5B%22001-244292%22%5D%7D"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            HUDOC
          </a>{" "}
          in English and French.
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
            placeholder="paragraph number, word, or chapter…"
            className="col-span-12 md:col-span-10 bg-transparent border-b border-rule outline-none py-1 text-base focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Chapter:
          </span>
          <button
            onClick={() => setChapter(null)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor:
                chapter === null ? "var(--accent)" : "var(--rule)",
              color: chapter === null ? "var(--accent)" : "var(--ink)",
            }}
          >
            all ({judgmentParagraphs.length})
          </button>
          {chapters
            .filter((c) => c)
            .map((c) => {
              const count = judgmentParagraphs.filter(
                (p) => p.chapter === c,
              ).length;
              if (count < 3) return null;
              return (
                <button
                  key={c}
                  onClick={() => setChapter(chapter === c ? null : c)}
                  className="uppercase tracking-widest px-2 py-1 border"
                  style={{
                    borderColor:
                      chapter === c ? "var(--accent)" : "var(--rule)",
                    color: chapter === c ? "var(--accent)" : "var(--ink)",
                  }}
                  title={c}
                >
                  {c.split(/\.\s/)[0]} ({count})
                </button>
              );
            })}
        </div>
        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {filtered.length} of {judgmentParagraphs.length}
          {chapter ? ` in ${chapter}` : ""}
        </p>
      </section>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        <ol className="border-t border-rule">
          {filtered.map((p) => (
            <li
              key={p.no}
              id={`para-${p.no}`}
              className="grid grid-cols-12 gap-3 py-4 border-b border-rule scroll-mt-24"
            >
              <p className="col-span-2 md:col-span-1 mono text-[12px] text-accent pt-1">
                <a
                  href={`#para-${p.no}`}
                  className="hover:underline"
                  title="Permalink"
                >
                  §&nbsp;{p.no}
                </a>
              </p>
              <div className="col-span-10 md:col-span-11 space-y-2">
                <p className="serif text-base leading-snug">
                  {p.text}
                  <a
                    href="https://hudoc.echr.coe.int/eng#%7B%22tabview%22:%5B%22document%22%5D,%22itemid%22:%5B%22001-244292%22%5D%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 mono text-[10px] uppercase tracking-widest text-ink-soft hover:text-accent"
                    title="Open the full judgment on HUDOC"
                  >
                    full text ↗
                  </a>
                </p>
                {p.chapter || p.subhead ? (
                  <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {[p.chapter, p.subhead].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-16">
          <h2 className="mono text-[11px] uppercase tracking-widest text-accent mb-4">
            Operative orders
          </h2>
          <p className="text-sm text-ink-soft mb-5 max-w-3xl">
            The dispositive section of the judgment — what the Court
            decided, in numbered orders, all reached unanimously.
          </p>
          <ol className="border-t border-rule">
            {operativeOrders.map((o) => (
              <li
                key={o.no}
                id={`op-${o.no}`}
                className="grid grid-cols-12 gap-3 py-4 border-b border-rule scroll-mt-24"
              >
                <p className="col-span-2 md:col-span-1 mono text-[12px] text-accent pt-1">
                  <a href={`#op-${o.no}`} className="hover:underline">
                    {o.no}.
                  </a>
                </p>
                <p className="col-span-10 md:col-span-11 serif text-base leading-snug">
                  {o.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            On the extraction
          </p>
          <p className="text-base leading-relaxed">
            Paragraph synopses are the first 240 characters of each
            numbered paragraph as extracted from the official HUDOC PDF
            (item <span className="mono">001-244292</span>, 501 pages,
            English). Chapter labels are derived from the headings
            detected in the text and are reliable for the doctrinal
            sections; the procedural-history paragraphs may show a
            stale chapter label because the extractor reads
            forward-only. The text the chips link to remains the
            controlling source.
          </p>
        </section>
      </main>

      <PageFooter current="/judgment" />
    </div>
  );
}
