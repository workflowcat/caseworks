import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { terms, clusterLabels, type Term } from "@/data/glossary";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";
import { sections } from "@/data/judgment-sections";
import { SourceLine } from "@/components/source-link";

function countMentions(t: Term) {
  // Build a list of strings to search against (term, short, common variants)
  const needles = new Set<string>(
    [t.term, t.short]
      .filter(Boolean)
      .map((s) => s.toLowerCase()),
  );
  // common variants
  if (t.id === "buk-telar") {
    needles.add("buk-telar");
    needles.add("buk missile");
    needles.add("buk surface-to-air");
  }
  if (t.id === "jit") {
    needles.add("joint investigation team");
    needles.add(" jit");
  }

  function hasNeedle(s: string) {
    const low = s.toLowerCase();
    for (const n of needles) {
      if (low.includes(n.toLowerCase())) return true;
    }
    return false;
  }

  const inQuotes = quotes.filter(
    (q) => hasNeedle(q.text) || hasNeedle(q.attribution) || (q.context ? hasNeedle(q.context) : false),
  ).length;
  const inFacts = facts.filter(
    (f) => hasNeedle(f.text) || hasNeedle(f.source),
  ).length;
  const inJudgment = sections.filter(
    (s) =>
      hasNeedle(s.heading) ||
      hasNeedle(s.body) ||
      (s.pulls?.some((p) => hasNeedle(p.text) || hasNeedle(p.cite)) ??
        false),
  ).length;
  return { inQuotes, inFacts, inJudgment };
}

export const metadata = { title: "VIII — Glossary · A Reader" };

const ORDER: Term["cluster"][] = [
  "instrument",
  "doctrine",
  "actor",
  "procedure",
  "weapon",
  "place",
];

export default function GlossaryPage() {
  const grouped = ORDER.map((c) => ({
    cluster: c,
    items: terms.filter((t) => t.cluster === c),
  }));

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="VIII" title="Glossary" current="/glossary" />

      <PageTitle
        kicker="VIII · Glossary"
        title="Defined terms."
        deck="Used on this site. Defined briefly, with sources where applicable. Cluster-grouped."
      />

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
          Index
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 border-t border-rule pt-3 mb-12">
          {terms
            .slice()
            .sort((a, b) => a.term.localeCompare(b.term))
            .map((t) => (
              <li key={t.id} className="border-b border-rule">
                <a
                  href={`#${t.id}`}
                  className="flex items-baseline gap-3 py-2 hover:text-accent transition-colors"
                >
                  <span className="serif text-base">{t.term}</span>
                  <span className="ml-auto mono text-[10px] text-ink-soft">
                    {clusterLabels[t.cluster].split(" ")[0]}
                  </span>
                </a>
              </li>
            ))}
        </ol>

        {grouped.map((g) =>
          g.items.length === 0 ? null : (
            <section key={g.cluster} className="mb-14">
              <h2 className="mono text-[11px] uppercase tracking-widest text-accent mb-5">
                {clusterLabels[g.cluster]}
              </h2>
              <dl className="border-t border-rule">
                {g.items
                  .slice()
                  .sort((a, b) => a.term.localeCompare(b.term))
                  .map((t) => (
                    <div
                      key={t.id}
                      id={t.id}
                      className="grid grid-cols-12 gap-4 py-5 border-b border-rule scroll-mt-24"
                    >
                      <dt className="col-span-12 md:col-span-3 lg:col-span-3">
                        <p className="serif text-lg leading-tight">
                          {t.term}
                        </p>
                        <p className="mono text-[11px] text-ink-soft mt-1">
                          {t.short}
                        </p>
                      </dt>
                      <dd className="col-span-12 md:col-span-9 lg:col-span-9 space-y-2">
                        <p className="text-base leading-relaxed">
                          {t.body}
                        </p>
                        {t.source ? (
                          <p className="mono text-[11px] text-ink-soft">
                            Source: <SourceLine source={t.source} />
                          </p>
                        ) : null}
                        {(() => {
                          const m = countMentions(t);
                          const total = m.inQuotes + m.inFacts + m.inJudgment;
                          if (total === 0) return null;
                          return (
                            <p className="mono text-[10px] uppercase tracking-widest text-accent flex flex-wrap gap-x-3 pt-1">
                              {m.inJudgment > 0 ? (
                                <a
                                  href="/judgment"
                                  className="underline decoration-1 underline-offset-2"
                                >
                                  judgment ×{m.inJudgment}
                                </a>
                              ) : null}
                              {m.inQuotes > 0 ? (
                                <a
                                  href="/quotations"
                                  className="underline decoration-1 underline-offset-2"
                                >
                                  quotations ×{m.inQuotes}
                                </a>
                              ) : null}
                              {m.inFacts > 0 ? (
                                <a
                                  href="/facts"
                                  className="underline decoration-1 underline-offset-2"
                                >
                                  facts ×{m.inFacts}
                                </a>
                              ) : null}
                            </p>
                          );
                        })()}
                      </dd>
                    </div>
                  ))}
              </dl>
            </section>
          ),
        )}
      </main>

      <PageFooter current="/glossary" />
    </div>
  );
}
