import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { SourceLine } from "@/components/source-link";

export const metadata = { title: "IV — A reading · A Reader" };

const PALETTE = {
  accent: "var(--accent)",
};

export default function WitnessPage() {
  return (
    <article className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="IV" title="A reading" />

      <PageTitle
        kicker="IV · A reading"
        title="One name on the manifest."
        deck="Six chapters. What eleven years of waiting looks like, told for one of the more than five hundred people who lodged individual applications against Russia after MH17."
      >
        <p className="text-base leading-relaxed">
          The text below is a working narrative reconstruction. Each
          chapter ends with a sources line that lists the primary
          materials it draws on. Where the reading compresses or
          paraphrases, that is marked.
        </p>
      </PageTitle>

      <Chapter
        no="I"
        title="A flight on a summer afternoon"
        date="17 July 2014"
        sources="JIT public statements; Hague District Court verdict, 17 Nov 2022; ECHR PR 173 (2025)."
        body={[
          "The flight is MH17, Amsterdam to Kuala Lumpur. It pushes back from gate G3 at Schiphol at 12:31 local time. Two hundred and ninety-eight people are on board. One hundred and ninety-six of them are Dutch.",
          "By the time the aircraft is over the Donetsk region, it is at cruising altitude. There is nothing unusual about the altitude. There is nothing unusual about the route. Civilian aircraft cross this airspace every day.",
          "At about 13:20 UTC, in a farm field near a village called Pervomaiskyi, the crew of a Buk surface-to-air missile launcher prepares to fire.",
        ]}
      />

      <Chapter
        no="II"
        title="The phone call"
        date="That evening"
        sources="ECHR PR 173 (2025); JIT timeline."
        body={[
          "You hear it from somewhere — a colleague, a neighbour, the radio. A flight has come down. You scroll. You see the registration. You feel the floor shift.",
          "By that night the wreckage is still burning. The crash site is in occupied territory. You watch the same footage on every channel: the smoke, the cornfield, the journalists pushed back at gunpoint by men in unmarked uniforms.",
          "It will be eight months before all the bodies are home. In two cases, they will never be.",
        ]}
      />

      <Chapter
        no="III"
        title="Eight months waiting"
        date="July 2014 – March 2015"
        sources="JIT public materials; ECHR PR 173 (2025), Article 3 / MH17."
        body={[
          'The Russian Federation, asked for cooperation, denies involvement. Russian state media advances a series of theories: the plane was downed by a Ukrainian fighter jet, by a different missile, by the CIA. The Strasbourg court will later characterise the disclosures as "at best inaccurate and at worst a complete fabrication."',
          "A Joint Investigation Team is established. Five countries: the Netherlands, Australia, Belgium, Malaysia, and Ukraine. They begin reconstructing what happened from open sources — phone intercepts, social-media posts, weighed metal, witness testimony. The painstaking part is putting numbers on the certainty.",
          "While they work, you bury what you have. Some families bury incomplete bodies. Some receive remains months after the funeral.",
        ]}
      />

      <Chapter
        no="IV"
        title="The trial in The Hague"
        date="9 March 2020 – 17 November 2022"
        sources="District Court of The Hague verdict of 17 November 2022."
        body={[
          "The Dutch criminal trial opens at the Schiphol Judicial Complex on a March morning in 2020. Three of the defendants are tried in absentia: Igor Girkin, a former Russian intelligence officer; Sergey Dubinskiy, his deputy; and Leonid Kharchenko, a separatist field commander. The fourth defendant, Oleg Pulatov, is represented in court.",
          "On 17 November 2022 the District Court of The Hague returns its verdict. Girkin, Dubinskiy, and Kharchenko are convicted of causing the crash and the murder of all 298 people on board. They are sentenced to life imprisonment. Pulatov is acquitted: there is no evidence he was in the immediate vicinity of the launch.",
          "None of the convicted men is in custody. Russia has refused all extradition requests.",
        ]}
      />

      <Chapter
        no="V"
        title="Strasbourg"
        date="10 July 2020 – 9 July 2025"
        sources="ECHR PRs 026 (2023) and 173 (2025); HUDOC merits judgment."
        body={[
          "Six years after the crash, the Kingdom of the Netherlands files an inter-state application against Russia at the European Court of Human Rights. It is application number 28525/20. It alleges violations of Articles 2, 3, and 13.",
          "By the time the Grand Chamber holds its admissibility hearing on 26 January 2022, the case has been joined with two earlier Ukrainian filings. By the time the merits hearing happens in June 2024, a fourth application has been added. Russia, by then, is no longer a party to the Convention.",
          "On 9 July 2025 the Grand Chamber delivers its judgment. It is unanimous. It finds violations of Articles 2, 3, and 13 in respect of MH17 — substantive, procedural, and a separate finding on the suffering of the next of kin. It finds that the suffering reached the threshold of inhuman treatment.",
          "It does not, yet, award compensation. The just-satisfaction question is adjourned, and the MH17 application is disjoined from the rest, to allow it to proceed at its own pace.",
        ]}
      />

      <Chapter
        no="VI"
        title="What is left"
        date="Today"
        sources="ECHR PR 173 (2025); ICAO Council decision 12 May 2025; ICJ filings; Council of Europe Register of Damage."
        body={[
          "Eleven summers have passed. Five forums have ruled, in their different registers, on different fragments of the same conduct. The ICAO Council has found Russia in breach of the Chicago Convention. Russia has appealed to the International Court of Justice. The criminal verdicts are final but unenforced. The just-satisfaction track in Strasbourg remains open. Four individual ECHR applications, lodged by more than five hundred relatives, are still pending.",
          "What you have is a record. Not a closure, not a number, not a return. A record. The record exists because people who lost almost everything spent eleven years pulling its evidence into the light, in five different forums, in five different cities.",
          "It is not the same as justice. But it is the kind of thing the law makes when justice fails to arrive.",
        ]}
      />

      <PageFooter
        next={{ href: "/quotations", title: "Quotations" }}
      />
    </article>
  );
}

function Chapter({
  no,
  title,
  date,
  body,
  sources,
}: {
  no: string;
  title: string;
  date: string;
  body: string[];
  sources: string;
}) {
  return (
    <section className="px-8 lg:px-14 py-14 border-t border-rule grid grid-cols-12 gap-x-6 max-w-7xl">
      <div className="col-span-12 lg:col-span-2 lg:pr-2 mb-3 lg:mb-0">
        <p
          className="serif text-4xl"
          style={{ color: PALETTE.accent }}
        >
          {no}
        </p>
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mt-3">
          {date}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-9 lg:col-start-3">
        <h2 className="serif text-2xl lg:text-3xl tracking-tight leading-tight mb-5">
          {title}
        </h2>
        <div className="space-y-4 text-[1.08rem] leading-[1.65] max-w-3xl">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mono text-[11px] text-ink-soft mt-7 max-w-3xl">
          Sources: <SourceLine source={sources} />
        </p>
      </div>
    </section>
  );
}
