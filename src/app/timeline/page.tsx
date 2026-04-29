import {
  PageFooter,
  PageHeader,
  PageTitle,
  SeeAlso,
} from "@/components/page-chrome";
import { SourceLine } from "@/components/source-link";
import { GlossaryProse } from "@/components/glossary-link";
import {
  conflict,
  KIND_LABEL,
  KIND_TINT,
} from "@/data/conflict-timeline";

export const metadata = { title: "VIII — Conflict timeline · A Reader" };

export default function TimelinePage() {
  const sorted = [...conflict].sort((a, b) =>
    a.date.localeCompare(b.date),
  );

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="VIII" title="Conflict timeline" current="/timeline" />

      <PageTitle
        kicker="VIII · Conflict timeline"
        title="Events the Court relied on."
        deck="A timeline of the conflict events cited in the merits judgment as evidence — Mariupol, Kramatorsk, the children transfers, the siege cities — alongside the procedural-political moments that frame the period under jurisdiction."
      >
        <p className="text-base leading-relaxed">
          For the procedural life of the case itself — filings, joinder,
          hearings, judgment — see <a className="underline decoration-accent decoration-1 underline-offset-2" href="/history">II · Procedural history</a>.
        </p>
      </PageTitle>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        <ol className="border-t border-rule">
          {sorted.map((e) => (
            <li
              key={e.id}
              className="grid grid-cols-12 gap-3 py-6 border-b border-rule"
            >
              <div className="col-span-12 md:col-span-3 lg:col-span-2 space-y-1.5">
                <p className="mono text-xs">{e.display}</p>
                <p
                  className="mono text-[10px] uppercase tracking-widest"
                  style={{ color: KIND_TINT[e.kind] }}
                >
                  {KIND_LABEL[e.kind]}
                </p>
                {e.place ? (
                  <p className="mono text-[10px] text-ink-soft">
                    {e.place}
                  </p>
                ) : null}
              </div>
              <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-2">
                <h3 className="serif text-xl tracking-tight leading-tight">
                  {e.title}
                </h3>
                <p className="text-base leading-relaxed">
                  <GlossaryProse text={e.body} />
                </p>
                <p className="mono text-[11px] text-ink-soft">
                  Source: <SourceLine source={e.source} />
                </p>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            On scope
          </p>
          <p className="text-base leading-relaxed">
            This is a working selection, not exhaustive. The merits
            judgment cites a much larger evidentiary record drawn from
            OHCHR, OSCE, the UN Independent International Commission of
            Inquiry on Ukraine, and other sources. Listed here are the
            events the press release names directly, plus the dates the
            Court treats as procedural-political turning points.
          </p>
        </section>
      </main>

      <SeeAlso
        items={[
          {
            href: "/history",
            label: "Procedural history",
            note: "The case's own life — filings, joinder, hearings, judgment.",
          },
          {
            href: "/judgment#patterns",
            label: "Patterns of violations",
            note: "The Court's reasoning on the events listed here.",
          },
          {
            href: "/sources",
            label: "Primary sources",
            note: "OHCHR, UN Commission of Inquiry, OSCE.",
          },
        ]}
      />

      <PageFooter current="/timeline" />
    </div>
  );
}
