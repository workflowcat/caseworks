import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { CopyButton } from "@/components/copy-button";
import { sources, groupLabels, type Source } from "@/data/sources";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";

// Heuristic citation counter: count how often a source's title fragment or
// publication name appears across the site's text fields.
function citationCount(s: Source) {
  const needles = [
    s.title.toLowerCase().slice(0, 28),
    s.publication?.toLowerCase() ?? "",
    s.authors?.toLowerCase() ?? "",
  ].filter(Boolean);

  // Identifying name for each known source — improves accuracy for the most
  // commonly cited ones.
  const idHints: Record<string, string[]> = {
    "echr-pr-173": ["echr pr 173", "press release ech", "press release no. 173"],
    "echr-pr-026": ["echr pr 026", "press release ech", "press release no. 026"],
    "echr-pr-286": ["echr pr 286", "press release ech"],
    "hudoc-merits": ["echr pr 173", "9 july 2025", "hudoc"],
    "hague-mh17": ["hague district court", "courtmh17"],
    "icao-decision": ["icao", "12 may 2025"],
    "icj-pm": ["icj", "16 march 2022"],
    "icj-prelim": ["icj", "preliminary objections"],
    "milanovic-2025": ["milanović", "ejil"],
    "khachatryan-2025": ["khachatryan", "strasbourg observers"],
    "milanovic-shah-amicus": ["milanović and shah", "ssrn"],
    "bellingcat-mh17": ["bellingcat"],
  };
  const hints = idHints[s.id] ?? [];
  const allNeedles = [...needles, ...hints];

  let count = 0;
  for (const q of quotes) {
    const blob = `${q.text} ${q.attribution} ${q.context ?? ""}`.toLowerCase();
    if (allNeedles.some((n) => n && blob.includes(n))) count++;
  }
  for (const f of facts) {
    const blob = `${f.text} ${f.source}`.toLowerCase();
    if (allNeedles.some((n) => n && blob.includes(n))) count++;
  }
  return count;
}

export const metadata = { title: "IX — Sources · A Reader" };

const ORDER: Source["group"][] = [
  "primary-press",
  "primary-court",
  "primary-instrument",
  "academic",
  "journalism",
];

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="IX" title="Sources" />

      <PageTitle
        kicker="IX · Sources"
        title="Bibliography."
        deck="Primary documents first; secondary commentary after. Each entry has a copyable formatted citation."
      />

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        {ORDER.map((g) => {
          const items = sources.filter((s) => s.group === g);
          if (items.length === 0) return null;
          return (
            <section key={g} className="mb-14">
              <h2 className="mono text-[11px] uppercase tracking-widest text-accent mb-4">
                {groupLabels[g]}
              </h2>
              <ol className="border-t border-rule">
                {items.map((s) => (
                  <li
                    key={s.id}
                    className="grid grid-cols-12 gap-3 py-5 border-b border-rule"
                  >
                    <div className="col-span-12 md:col-span-3 lg:col-span-2 mono text-xs text-ink-soft pt-1">
                      {s.date}
                    </div>
                    <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-2">
                      <p className="serif text-base leading-tight">
                        {s.title}
                      </p>
                      <p className="text-sm text-ink-soft">
                        {[s.authors, s.publication]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                      <p className="mono text-[11px] leading-snug bg-bg-2 p-3 border border-rule">
                        {s.citation}
                      </p>
                      <div className="flex items-center gap-4 pt-1 flex-wrap">
                        <CopyButton text={s.citation} />
                        {s.url ? (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mono text-[10px] uppercase tracking-widest underline decoration-1 underline-offset-2 hover:text-accent"
                          >
                            Open ↗
                          </a>
                        ) : null}
                        {(() => {
                          const c = citationCount(s);
                          if (c === 0) return null;
                          return (
                            <span className="mono text-[10px] uppercase tracking-widest text-accent">
                              cited on this site ×{c}
                            </span>
                          );
                        })()}
                      </div>
                      {s.notes ? (
                        <p className="text-xs italic text-ink-soft">
                          {s.notes}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            Note
          </p>
          <p className="text-base leading-relaxed">
            Citation format approximates OSCOLA. The press releases of
            the Registrar are the principal working source pending
            structured extraction of the HUDOC judgment text. Where the
            press release&rsquo;s text is reproduced verbatim, that is
            indicated; where it is summarised or paraphrased, that is
            noted in the surrounding prose.
          </p>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
