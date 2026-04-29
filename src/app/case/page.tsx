import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
  Cite,
  SeeAlso,
} from "@/components/page-chrome";
import { ForumStatusStrip } from "@/components/forum-status";
import { LaunchGeometry } from "@/components/launch-geometry";
import { SourceLine } from "@/components/source-link";
import { GlossaryProse } from "@/components/glossary-link";
import { Sidenote } from "@/components/sidenote";

export const metadata = {
  title: "I — The case · A Reader",
};

export default function CasePage() {
  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="I" title="The case" current="/case" />

      <PageTitle
        kicker="I · The case"
        title="The Netherlands v. Russia."
        deck="Inter-state proceeding under the European Convention on Human Rights, application no. 28525/20 — concerning the downing of MH17."
      >
        <p className="mono text-[11px] text-ink-soft border border-rule px-3 py-2 inline-block">
          How to read this — citations in italic small caps after a
          claim link to the verified primary source for that claim.
        </p>
      </PageTitle>

      <section className="px-8 lg:px-14 pb-10 max-w-5xl">
        <ForumStatusStrip />
      </section>

      {/* Identifier block */}
      <section className="px-8 lg:px-14 pb-10 max-w-5xl">
        <div className="border border-rule">
          <Row label="Forum">
            European Court of Human Rights, Grand Chamber
          </Row>
          <Row label="Application">
            <span className="mono">28525/20</span>
          </Row>
          <Row label="Applicant">The Kingdom of the Netherlands</Row>
          <Row label="Respondent">The Russian Federation</Row>
          <Row label="Subject">
            Downing of Malaysia Airlines flight MH17, 17 July 2014, over
            occupied territory in eastern Ukraine. 298 dead, including
            196 Dutch nationals.
          </Row>
          <Row label="Lodged">
            <span className="mono">10 July 2020</span>
          </Row>
          <Row label="Joined to">
            Ukraine v. Russia (re Eastern Ukraine) (no. 8019/16) and
            Ukraine v. Russia (II) (no. 43800/14), on 27 November 2020
<span className="mono text-[10px] text-ink-soft uppercase tracking-wider">
              {" "}— <SourceLine source="ECHR PR 026 (2023)" />
            </span>
          </Row>
          <Row label="Admissibility">
            <span className="mono">25 January 2023</span> — partly
            admissible
<span className="mono text-[10px] text-ink-soft uppercase tracking-wider">
              {" "}— <SourceLine source="ECHR PR 026 (2023)" />
            </span>
          </Row>
          <Row label="Merits judgment">
            <span className="mono">9 July 2025</span> — Grand Chamber,
            unanimous
<span className="mono text-[10px] text-ink-soft uppercase tracking-wider">
              {" "}— <SourceLine source="ECHR PR 173 (2025)" />
            </span>
          </Row>
          <Row label="Just satisfaction" last>
            <span className="text-accent">Adjourned and disjoined</span>{" "}
            from the rest of the case to permit separate examination
<span className="mono text-[10px] text-ink-soft uppercase tracking-wider">
              {" "}— <SourceLine source="ECHR PR 173 (2025), Article 41" />
            </span>
          </Row>
        </div>
      </section>

      <Section
        no="01"
        title="The downing"
        deck="As accepted by the Grand Chamber, the District Court of The Hague, and the ICAO Council."
      >
        <LaunchGeometry />
        <p>
          <GlossaryProse text="On 17 July 2014 Malaysia Airlines flight MH17 was shot down near Snizhne, in an occupied part of the Donetsk region. The District Court of The Hague found, on 17 November 2022, that the missile had been fired from a farm field near Pervomaiskyi, in territory the separatists controlled." />
          <Sidenote n="1">
            All 298 people on board were killed; 196 were Dutch
            nationals. See{" "}
            <a href="/facts#f-mh17-killed" className="underline">
              facts §
            </a>
            .
          </Sidenote>
        </p>
        <p>
          <GlossaryProse text="The European Court of Human Rights, in its admissibility decision of 25 January 2023, held that the downing had occurred wholly within territory in the hands of the separatists and therefore within Russia's spatial jurisdiction. In its merits judgment of 9 July 2025, the Court agreed that the missile had been fired by either a member of the Russian military crew of the Buk-TELAR or a member of the 'DPR', and that it was unnecessary to decide which — Russia was responsible for both." />
          <Sidenote n="2">
            HUDOC §&nbsp;461 — the IHL principles of distinction and
            precautions paragraph delivering the Article 2 substantive
            finding.{" "}
            <a
              href="/judgment/paragraphs#para-461"
              className="underline"
            >
              Read on site
            </a>
            .
          </Sidenote>
        </p>
        <p>
          <GlossaryProse text="The ICAO Council, on 12 May 2025, found Russia in breach of Article 3 bis of the Chicago Convention by use of weapons against civil aircraft in flight." />
          <Sidenote n="3">
            Vote 22 to 3, with 10 abstentions; first decision on the
            merits of an Article 84 dispute in the Council&rsquo;s
            history. Russia has appealed to the ICJ.
          </Sidenote>
        </p>
      </Section>

      <Section
        no="02"
        title="Findings under application 28525/20"
        deck="As pronounced by the Grand Chamber on 9 July 2025. Operative paragraphs only."
      >
        <FindingRow
          art="Art. 2"
          label="Right to life — substantive"
          text="The deployment of the Buk-TELAR in an area where civilian flights were still operating, and the failure to take measures to identify the target accurately or close the airspace, breached the right to life."
          op={5}
        />
        <FindingRow
          art="Art. 2"
          label="Right to life — procedural"
          text="Russia failed to investigate effectively and to cooperate with the Joint Investigation Team. Its inquiries were piecemeal, often inaccurate or fabricated, and obstructive."
          op={6}
        />
        <FindingRow
          art="Art. 3"
          label="Inhuman treatment — next of kin"
          text="The continuing profound suffering of the next of kin reached a character and dimension that amounted to inhuman treatment under the Convention."
          op={8}
        />
        <FindingRow
          art="Art. 13"
          label="No effective remedy"
          text="Any suggestion that the relatives could obtain the truth and bring those responsible to justice in the Russian courts was, on the record, fanciful."
          op={7}
        />
        <FindingRow
          art="Art. 38"
          label="Cooperation with the Court"
          text="Russia's lack of constructive engagement and failure to participate at all in the proceedings on the merits breached its obligations under Article 38."
          op={25}
        />
      </Section>

      <Section
        no="03"
        title="Just satisfaction (Article 41) — adjourned and disjoined"
      >
        <p>
          <GlossaryProse text="The Court held that the question of compensation under Article 41 was not yet ready for decision. It noted that any future award would have to take account of the four pending individual applications lodged before the Court by relatives of those who lost their lives on flight MH17 — by more than five hundred individuals in total — and of developments before the Council of the International Civil Aviation Organisation, which had in May 2025 found Russia to have failed in its international-law obligations in respect of the downing." />
        </p>
        <p>
          <GlossaryProse text="For these reasons the Court decided to separate the further proceedings concerning the downing of flight MH17 from the remainder of the case." />
        </p>
        <div className="flex items-baseline gap-3 mono text-[10px] uppercase tracking-widest pt-1">
          <a
            href="/judgment/paragraphs#op-28"
            className="text-ink-soft hover:text-accent"
            title="Operative order 28 — Article 41 not ready for decision"
          >
            ↳ Operative order 28
          </a>
          <a
            href="/judgment/paragraphs#op-29"
            className="text-ink-soft hover:text-accent"
            title="Operative order 29 — Disjoinder of 28525/20"
          >
            ↳ Operative order 29
          </a>
        </div>
        <p className="mono text-[11px] text-ink-soft">
          Source: <SourceLine source="ECHR PR 173 (2025), section &ldquo;Just satisfaction (Article 41)&rdquo;" />
        </p>
      </Section>

      <Section
        no="04"
        title="Article 46 measures (whole case)"
        deck="The 9 July 2025 judgment contained two operative orders binding on Russia under Article 46 § 1. Both apply to all four joined applications and continue to apply notwithstanding Russia's cessation as a Contracting Party."
      >
        <ol className="space-y-3 list-decimal pl-5">
          <li>
            <GlossaryProse text="Without delay, release or safely return all persons deprived of their liberty on Ukrainian territory under occupation before 16 September 2022 and still in Russian custody." />
          </li>
          <li>
            <GlossaryProse text="Without delay, cooperate in the establishment of an international and independent mechanism to identify all children transferred from Ukraine to Russia or Russian-controlled territory before 16 September 2022, restore contact with their families or legal guardians, and reunite them." />
          </li>
        </ol>
        <div className="flex items-baseline gap-3 mono text-[10px] uppercase tracking-widest pt-1">
          <a
            href="/judgment/paragraphs#op-26"
            className="text-ink-soft hover:text-accent"
            title="Operative order 26 — Release of detainees"
          >
            ↳ Operative order 26
          </a>
          <a
            href="/judgment/paragraphs#op-27"
            className="text-ink-soft hover:text-accent"
            title="Operative order 27 — Children-identification mechanism"
          >
            ↳ Operative order 27
          </a>
        </div>
      </Section>

      <Section
        no="05"
        title="The same conduct, four further forums"
      >
        <p>
          <GlossaryProse text="The downing of MH17 has been the subject of proceedings in five forums to date. The list below is non-exhaustive — the individual ECHR applications by relatives are not set out separately." />
        </p>
        <ul className="mt-5 divide-y divide-rule border-y border-rule">
          {[
            {
              forum: "Hague District Court",
              date: "17 November 2022",
              text: "Convicted Igor Girkin, Sergey Dubinskiy, and Leonid Kharchenko in absentia of causing the crash and the murder of all 298 on board. Sentenced to life imprisonment. Pulatov acquitted.",
              url: "https://www.courtmh17.com/en/judgement-and-livestream/verdict-17-november-2022.htm",
              src: "courtmh17.com",
            },
            {
              forum: "ICAO Council",
              date: "12 May 2025",
              text: "Russia found in breach of Article 3 bis of the Chicago Convention. Vote 22–3 with 10 abstentions. The first decision on the merits of an Article 84 dispute in the Council's history.",
              url: "https://www.icao.int/news/icao-council-vote-flight-mh17-case",
              src: "icao.int",
            },
            {
              forum: "European Court of Human Rights",
              date: "9 July 2025",
              text: "Substantive and procedural violations of Articles 2, 3, 13. Application 28525/20 disjoined for separate just-satisfaction examination.",
              url: "https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965",
              src: "ECHR PR 173 (2025)",
            },
            {
              forum: "International Court of Justice",
              date: "Filed September 2025",
              text: "Russia's appeal of the ICAO Council decision under Article 84 of the Chicago Convention. Pending.",
              url: "https://www.icj-cij.org/",
              src: "icj-cij.org",
            },
            {
              forum: "European Court of Human Rights — individual applications",
              date: "Pending",
              text: "Four individual applications by more than five hundred relatives of MH17 victims.",
              url: "https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965",
              src: "ECHR PR 173 (2025)",
            },
          ].map((row) => (
            <li
              key={row.forum}
              className="grid grid-cols-12 gap-3 py-4"
            >
              <p className="col-span-12 md:col-span-3 serif text-base leading-tight">
                {row.forum}
              </p>
              <p className="col-span-12 md:col-span-2 mono text-xs text-ink-soft">
                {row.date}
              </p>
              <p className="col-span-12 md:col-span-6 text-sm leading-snug">
                {row.text}
              </p>
              <p className="col-span-12 md:col-span-1 text-right">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[10px] uppercase tracking-widest underline decoration-1 underline-offset-2 hover:text-accent"
                  title={row.src}
                >
                  ↗
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="px-8 lg:px-14 py-10 max-w-5xl border-t border-rule">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
          Embed this case
        </p>
        <p className="text-sm leading-relaxed mb-3 max-w-2xl">
          A 600×400 card you can drop into your own page. Updates if
          this site does.
        </p>
        <pre className="mono text-[11px] bg-bg-2 border border-rule p-3 leading-snug overflow-x-auto">
{`<iframe
  src="https://caseworks-blue.vercel.app/embed/case"
  width="600" height="400"
  loading="lazy"
  style="border:0"
></iframe>`}
        </pre>
        <p className="mt-3 mono text-[11px] text-ink-soft">
          Preview at{" "}
          <Link
            href="/embed/case"
            className="underline decoration-accent decoration-1 underline-offset-2"
          >
            /embed/case
          </Link>
          .
        </p>
      </section>

<SeeAlso
        items={[
          {
            href: "/glossary#art-41",
            label: "Just satisfaction (Article 41)",
            note: "Why the Court adjourned compensation and disjoined this application.",
          },
          {
            href: "/glossary#art-46",
            label: "Article 46 — binding force",
            note: "What the operative orders against Russia mean post-cessation.",
          },
          {
            href: "/judgment#mh17-art-3",
            label: "Article 3 — the next of kin",
            note: "The reasoning behind the inhuman-treatment finding.",
          },
          {
            href: "/quotations",
            label: "Quotations",
            note: "Direct quotations from the merits judgment and the press release.",
          },
        ]}
      />

      <PageFooter current="/case" />
    </div>
  );
}

function Row({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-12 gap-3 px-5 py-3 ${
        last ? "" : "border-b border-rule"
      }`}
    >
      <p className="col-span-12 md:col-span-3 mono text-[11px] uppercase tracking-widest text-ink-soft self-start pt-1">
        {label}
      </p>
      <div className="col-span-12 md:col-span-9 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Section({
  no,
  title,
  deck,
  children,
}: {
  no: string;
  title: string;
  deck?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-8 lg:px-14 py-12 border-t border-rule grid grid-cols-12 gap-x-6 max-w-7xl">
      <div className="col-span-12 lg:col-span-3 lg:pr-6">
        <p className="mono text-[10px] uppercase tracking-widest text-accent">
          {no}
        </p>
        <h2 className="serif text-2xl leading-tight tracking-tight mt-2">
          {title}
        </h2>
        {deck ? (
          <p className="text-sm leading-relaxed text-ink-soft mt-3 italic">
            {deck}
          </p>
        ) : null}
      </div>
      <div className="col-span-12 lg:col-span-9 space-y-4 text-[1.05rem] leading-[1.65] mt-4 lg:mt-0">
        {children}
      </div>
    </section>
  );
}

function FindingRow({
  art,
  label,
  text,
  op,
}: {
  art: string;
  label: string;
  text: string;
  op?: number;
}) {
  return (
    <div className="grid grid-cols-12 gap-3 py-3 border-b border-rule">
      <p className="col-span-3 md:col-span-2 mono text-xs text-accent pt-1">
        {art}
      </p>
      <p className="col-span-9 md:col-span-3 serif text-base leading-tight pt-0.5">
        {label}
      </p>
      <div className="col-span-12 md:col-span-7 space-y-2">
        <p className="text-sm leading-snug">
          <GlossaryProse text={text} />
        </p>
        {op ? (
          <a
            href={`/judgment/paragraphs#op-${op}`}
            className="mono text-[10px] uppercase tracking-widest text-ink-soft hover:text-accent inline-block"
            title={`Operative order ${op}`}
          >
            ↳ Operative order {op}
          </a>
        ) : null}
      </div>
    </div>
  );
}
