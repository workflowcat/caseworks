import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { judgmentParagraphs, operativeOrders } from "@/data/judgment-paragraphs";

// A row per Convention article touched in this proceeding, with the operative
// orders, paragraph anchor cluster, and a one-line characterisation. Drawn
// from the press release and the operative section of the merits judgment.

type ArticleEntry = {
  art: string;
  label: string;
  ops: number[];
  paras: Array<number | string>;
  finding: string;
};

const ENTRIES: ArticleEntry[] = [
  {
    art: "Art. 2",
    label: "Right to life — substantive",
    ops: [5, 11, 12],
    paras: [461, 462],
    finding:
      "Killing of MH17 civilians and indiscriminate military attacks; extrajudicial killings of civilians and soldiers hors de combat. Repeated and systematic across territories and time.",
  },
  {
    art: "Art. 2",
    label: "Right to life — procedural",
    ops: [6],
    paras: [488],
    finding:
      "Failure to investigate the downing effectively; piecemeal inquiries, false trails, refusal to cooperate with the JIT.",
  },
  {
    art: "Art. 3",
    label: "Prohibition of inhuman or degrading treatment",
    ops: [8, 13, 22],
    paras: ["488–510"],
    finding:
      "Suffering of MH17 next of kin; torture and ill-treatment of civilians and POWs in occupied territory; rape used as a weapon of war; transfer and adoption of Ukrainian children.",
  },
  {
    art: "Art. 4 § 2",
    label: "Forced labour",
    ops: [14],
    paras: [],
    finding:
      "Forced labour by separatist forces and Russian armed forces, including conscription of Ukrainians to fight at the front lines.",
  },
  {
    art: "Art. 5",
    label: "Liberty and security",
    ops: [15, 22],
    paras: [],
    finding:
      "Unlawful and arbitrary detention of civilians across occupied territories; deprivation of liberty of transferred children.",
  },
  {
    art: "Art. 8",
    label: "Private and family life",
    ops: [16, 22],
    paras: [],
    finding:
      "Unjustified displacement and 'filtration' measures; forced transfer and adoption of Ukrainian children.",
  },
  {
    art: "Art. 9",
    label: "Religion",
    ops: [17],
    paras: [],
    finding:
      "Persecution of religious groups other than the Ukrainian Orthodox Church of the Moscow Patriarchate.",
  },
  {
    art: "Art. 10",
    label: "Expression",
    ops: [18],
    paras: [],
    finding:
      "Targeting of journalists; blocking of broadcasters; criminalising pro-Ukraine speech.",
  },
  {
    art: "Art. 11",
    label: "Assembly",
    ops: [19],
    paras: [],
    finding:
      "Forcible dispersal of peaceful protests in occupied towns and cities, March–April 2022.",
  },
  {
    art: "Art. 13",
    label: "Effective remedy",
    ops: [7, 24],
    paras: [509],
    finding:
      "No effective remedy in Russia for any of the violations identified, including for the next of kin of MH17 victims.",
  },
  {
    art: "Art. 14",
    label: "Non-discrimination",
    ops: [23],
    paras: [],
    finding:
      "Discrimination on grounds of political opinion and national origin, in conjunction with the substantive articles.",
  },
  {
    art: "Art. 38",
    label: "Cooperation with the Court",
    ops: [25],
    paras: [177],
    finding:
      "Russia's failure to participate in the proceedings on the merits.",
  },
  {
    art: "Art. 1 P1",
    label: "Property",
    ops: [11, 20],
    paras: [],
    finding:
      "Destruction, looting, and expropriation of civilian and private-enterprise property without compensation.",
  },
  {
    art: "Art. 2 P1",
    label: "Education",
    ops: [21],
    paras: [],
    finding:
      "Suppression of the Ukrainian language in schools; indoctrination.",
  },
];

export const metadata = {
  title: "III — Annotated judgment / Articles · A Reader",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader
        no="III"
        title="Annotated judgment / Articles"
        current="/judgment"
      />

      <PageTitle
        kicker="III · Annotated judgment / Articles"
        title="Article by article."
        deck="Every Convention article touched in this proceeding, with operative-order numbers, paragraph anchors into the judgment, and a one-line characterisation. The matrix view of the findings."
      >
        <p className="text-base leading-relaxed">
          For the press-release reading,{" "}
          <Link
            href="/judgment"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            return to the section view
          </Link>
          . For the full paragraph index,{" "}
          <Link
            href="/judgment/paragraphs"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            open paragraphs
          </Link>
          .
        </p>
      </PageTitle>

      <main className="px-8 lg:px-14 pb-16 max-w-7xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr className="border-y border-rule">
                <th className="text-left py-3 px-3 mono text-[10px] uppercase tracking-widest text-ink-soft w-[110px]">
                  Article
                </th>
                <th className="text-left py-3 px-3 mono text-[10px] uppercase tracking-widest text-ink-soft w-[200px]">
                  Label
                </th>
                <th className="text-left py-3 px-3 mono text-[10px] uppercase tracking-widest text-ink-soft">
                  Finding
                </th>
                <th className="text-left py-3 px-3 mono text-[10px] uppercase tracking-widest text-ink-soft w-[140px]">
                  Operative
                </th>
                <th className="text-left py-3 px-3 mono text-[10px] uppercase tracking-widest text-ink-soft w-[120px]">
                  Paragraphs
                </th>
              </tr>
            </thead>
            <tbody>
              {ENTRIES.map((e, i) => (
                <tr
                  key={`${e.art}-${i}`}
                  className="border-b border-rule align-top hover:bg-bg-2"
                >
                  <td className="py-3 px-3">
                    <span className="mono text-xs text-accent">
                      {e.art}
                    </span>
                  </td>
                  <td className="py-3 px-3 serif leading-tight">
                    {e.label}
                  </td>
                  <td className="py-3 px-3 leading-snug">{e.finding}</td>
                  <td className="py-3 px-3">
                    <ul className="flex flex-wrap gap-1">
                      {e.ops.map((op) => {
                        const found = operativeOrders.find(
                          (o) => o.no === op,
                        );
                        return (
                          <li key={op}>
                            <a
                              href={`/judgment/paragraphs#op-${op}`}
                              className="mono text-[10px] uppercase tracking-widest border border-rule px-1.5 py-0.5 hover:text-accent hover:border-accent"
                              title={found?.text.slice(0, 200)}
                            >
                              op {op}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                  <td className="py-3 px-3">
                    {e.paras.length === 0 ? (
                      <span className="mono text-[11px] text-ink-soft">
                        —
                      </span>
                    ) : (
                      <ul className="flex flex-wrap gap-1">
                        {e.paras.map((p, j) => {
                          const isInt =
                            typeof p === "number" || /^\d+$/.test(String(p));
                          const href = isInt
                            ? `/judgment/paragraphs#para-${p}`
                            : "/judgment/paragraphs";
                          const matched =
                            typeof p === "number"
                              ? judgmentParagraphs.find(
                                  (jp) => jp.no === p,
                                )
                              : undefined;
                          return (
                            <li key={j}>
                              <a
                                href={href}
                                className="mono text-[10px] uppercase tracking-widest border border-rule px-1.5 py-0.5 hover:text-accent hover:border-accent"
                                title={matched?.text.slice(0, 200)}
                              >
                                §&nbsp;{p}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 max-w-3xl">
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            On scope
          </p>
          <p className="text-base leading-relaxed">
            This matrix is the operative section of the merits judgment
            organised by Convention article. Findings against Russia
            were reached unanimously in every cell. Paragraph anchors
            shown are those that the editor has verified against the
            HUDOC text; many articles have additional supporting
            paragraphs that are not yet listed here. The Article 41
            disjoinder (operative orders 28 and 29) is shown on{" "}
            <Link
              href="/case"
              className="underline decoration-accent decoration-1 underline-offset-2"
            >
              the case page
            </Link>
            .
          </p>
        </section>
      </main>

      <PageFooter current="/judgment" />
    </div>
  );
}
