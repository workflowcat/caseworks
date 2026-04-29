import {
  PageFooter,
  PageHeader,
  PageTitle,
  SeeAlso,
} from "@/components/page-chrome";
import { SourceLine } from "@/components/source-link";
import {
  people,
  GROUP_LABEL,
  GROUP_ORDER,
  type Person,
} from "@/data/people";

export const metadata = { title: "VII — People · A Reader" };

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="VII" title="People" current="/people" />

      <PageTitle
        kicker="VII · People"
        title="People named in the record."
        deck="The judges who decided. The defendants named by the Hague District Court. The individuals named on ICC arrest warrants. Each entry attributed."
      >
        <p className="text-base leading-relaxed">
          Counsel and JIT investigators are not included because the
          public press releases do not name them. Where the press
          releases do name an individual, the entry appears here with a
          source.
        </p>
      </PageTitle>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        {GROUP_ORDER.map((g) => {
          const items = people.filter((p) => p.group === g);
          if (items.length === 0) return null;
          return (
            <section key={g} className="mb-14">
              <h2 className="mono text-[11px] uppercase tracking-widest text-accent mb-4">
                {GROUP_LABEL[g]}
              </h2>
              <ul className="border-t border-rule">
                {items.map((p) => (
                  <li
                    key={p.id}
                    className="grid grid-cols-12 gap-3 py-5 border-b border-rule"
                  >
                    <div className="col-span-12 md:col-span-3 lg:col-span-3 space-y-1">
                      <p className="serif text-base leading-tight">
                        {p.name}
                      </p>
                      {p.state ? (
                        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                          {p.state}
                        </p>
                      ) : null}
                    </div>
                    <div className="col-span-12 md:col-span-9 lg:col-span-9 space-y-2">
                      <p className="text-base leading-snug">{p.role}</p>
                      {p.notes ? (
                        <p className="text-sm text-ink-soft leading-snug">
                          {p.notes}
                        </p>
                      ) : null}
                      <p className="mono text-[11px] text-ink-soft">
                        Source: <SourceLine source={p.source} />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            What this list does not include
          </p>
          <p className="text-base leading-relaxed">
            Counsel for the applicant States, the Russian respondent
            team, and the JIT investigators (other than those publicly
            identified in JIT press conferences) are not listed. The
            public press releases of the registries do not name them.
            Likewise, victims&rsquo; relatives — including the more than
            five hundred individual ECHR applicants — are not named on
            this site, in keeping with the public record.
          </p>
        </section>
      </main>

      <SeeAlso
        items={[
          {
            href: "/case",
            label: "The case",
            note: "Identifier, parties, findings, and the disjoined just-satisfaction track.",
          },
          {
            href: "/judgment",
            label: "Annotated judgment",
            note: "The reasoning these benches produced.",
          },
          {
            href: "/glossary#icc",
            label: "ICC — glossary entry",
            note: "On Russia's non-State-Party status under the Rome Statute.",
          },
        ]}
      />

      <PageFooter current="/people" />
    </div>
  );
}
