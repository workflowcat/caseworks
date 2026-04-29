import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { terms, clusterLabels, type Term } from "@/data/glossary";

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
      <PageHeader no="VIII" title="Glossary" />

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
                            Source: {t.source}
                          </p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
              </dl>
            </section>
          ),
        )}
      </main>

      <PageFooter next={{ href: "/sources", title: "Sources" }} />
    </div>
  );
}
