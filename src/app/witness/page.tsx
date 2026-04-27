export const metadata = { title: "The Witness — caseworks" };

import Link from "next/link";

const PALETTE = {
  bg: "#f4efe6",
  ink: "#1a1816",
  soft: "#5c5851",
  accent: "#8b1e1e",
  rule: "#cdc9c0",
};

export default function WitnessPage() {
  return (
    <article
      className="min-h-screen"
      style={{ background: PALETTE.bg, color: PALETTE.ink }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b"
        style={{ borderColor: PALETTE.rule }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 05 · The Witness
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          A reading
        </p>
      </header>

      {/* Title spread */}
      <section className="px-8 lg:px-14 pt-24 pb-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          <p
            className="mono text-[11px] uppercase tracking-widest"
            style={{ color: PALETTE.accent }}
          >
            One among five hundred
          </p>
          <h1 className="serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-tight mt-8">
            One name on
            <br />
            <span className="italic" style={{ color: PALETTE.soft }}>
              the manifest.
            </span>
          </h1>
          <p
            className="mt-12 max-w-2xl text-xl leading-relaxed"
            style={{ color: PALETTE.soft }}
          >
            More than five hundred people lodged individual applications
            against Russia after their families were killed on flight
            MH17. None of them have been named in the public record. This
            is a reading of what eleven years of waiting looks like, told
            in the second person — about you, and about anyone else who
            was on a phone that summer afternoon.
          </p>
        </div>
      </section>

      <Chapter
        no="I"
        title="A flight on a summer afternoon"
        date="17 July 2014"
        body={[
          "The flight is MH17, Amsterdam to Kuala Lumpur. It pushes back from gate G3 at Schiphol at 12:31 local time. Two hundred and ninety-eight people are on board. One hundred and ninety-six of them are Dutch.",
          "By the time the aircraft is over the Donetsk region, the plane is at cruising altitude. There is nothing unusual about the altitude. There is nothing unusual about the route. Civilian aircraft cross this airspace every day. Almost twenty thousand vessels a year transit the Kerch Strait below; almost as many planes overfly Donbas.",
          "At about 13:20 UTC, in a farm field near a village called Pervomaiskyi, the crew of a Buk surface-to-air missile launcher prepares to fire.",
        ]}
      >
        <Marginal>
          MH17 was at 33,000 ft when it was struck. The Buk missile is
          designed to hit aircraft at exactly this altitude.
        </Marginal>
      </Chapter>

      <Chapter
        no="II"
        title="The phone call"
        date="That evening"
        body={[
          "You hear it from somewhere — a colleague, a neighbour, the radio. A flight has come down. You scroll. You see the registration. You feel the floor shift.",
          "By that night the wreckage is still burning. The crash site is in occupied territory. You watch the same footage on every channel: the smoke, the cornfield, the journalists pushed back at gunpoint by men in unmarked uniforms.",
          "It will be eight months before all the bodies are home.",
        ]}
      >
        <Marginal>
          Two of the 298 victims&rsquo; bodies were never recovered.
        </Marginal>
      </Chapter>

      <Chapter
        no="III"
        title="Eight months waiting"
        date="July 2014 – March 2015"
        body={[
          "The Russian Federation, asked for cooperation, denies involvement. Russian state media advances a series of theories: the plane was downed by a Ukrainian fighter jet, by a different missile, by the CIA. The disclosures will later be characterised by the Strasbourg court as &ldquo;at best inaccurate and at worst a complete fabrication.&rdquo;",
          "A Joint Investigation Team is established. Five countries: the Netherlands, Australia, Belgium, Malaysia, and Ukraine. They begin reconstructing what happened from open sources — phone intercepts, social-media posts, weighed metal, witness testimony. The painstaking part is putting numbers on the certainty.",
          "While they work, you bury what you have. Some families bury incomplete bodies. Some receive remains months after the funeral.",
        ]}
      >
        <ProgressBar
          label="Time to recover the bodies"
          fill={1}
          right="8 months"
        />
      </Chapter>

      <Chapter
        no="IV"
        title="The trial in The Hague"
        date="9 March 2020 – 17 November 2022"
        body={[
          "The Dutch criminal trial opens at the Schiphol Judicial Complex on a March morning in 2020. Three of the defendants are tried in absentia. They are Igor Girkin, a former Russian intelligence officer; Sergey Dubinskiy, his deputy; and Leonid Kharchenko, a separatist field commander. The fourth defendant, Oleg Pulatov, is represented in court.",
          "On 17 November 2022 the District Court of The Hague returns its verdict. Girkin, Dubinskiy, and Kharchenko are convicted of causing the crash and the murder of all 298 people on board. They are sentenced to life imprisonment. Pulatov is acquitted: there is no evidence he was in the immediate vicinity of the launch.",
          "None of the convicted men is in custody. Russia has refused all extradition requests.",
        ]}
      >
        <Marginal>
          Three life sentences. Zero arrests.
        </Marginal>
      </Chapter>

      <Chapter
        no="V"
        title="Strasbourg"
        date="10 July 2020 – 9 July 2025"
        body={[
          "Six years after the crash, the Kingdom of the Netherlands files an inter-state application against Russia at the European Court of Human Rights. It is application number 28525/20. It alleges violations of Articles 2 (right to life), 3 (prohibition of inhuman treatment), and 13 (right to an effective remedy).",
          "By the time the Grand Chamber holds its admissibility hearing on 26 January 2022, the case has been joined with two earlier Ukrainian filings. By the time the merits hearing happens in June 2024, a fourth application has been added: Ukraine&rsquo;s case on the full-scale invasion. Russia, by then, is no longer a party to the Convention.",
          "On 9 July 2025 the Grand Chamber delivers its judgment. It is unanimous. It runs to several hundred paragraphs. It finds violations of Articles 2, 3, and 13 in respect of MH17. It finds that the suffering of the next of kin reached the threshold of inhuman treatment.",
          "It does not, yet, award compensation. The just-satisfaction question is adjourned, and the MH17 case is disjoined from the rest, to allow it to proceed at its own pace.",
        ]}
      >
        <Verdict />
      </Chapter>

      <Chapter
        no="VI"
        title="What is left"
        date="Today"
        body={[
          "Eleven summers have passed. Five forums have ruled, in their different registers, on different fragments of the same conduct. The ICAO Council has found Russia in breach of the Chicago Convention. Russia has appealed to the International Court of Justice. The criminal verdicts are final but unenforced. The just-satisfaction track in Strasbourg remains open. Four individual ECHR applications, lodged by more than five hundred relatives, are still pending.",
          "What you have is a record. Not a closure, not a number, not a return. A record. The record exists because people who lost almost everything spent eleven years pulling its evidence into the light, in five different forums, in five different cities.",
          "It is not the same as justice. But it is the kind of thing the law makes when justice fails to arrive.",
        ]}
      />

      <footer
        className="px-8 lg:px-14 py-12 border-t mono text-[11px]"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        <p>
          Read in conjunction with{" "}
          <Link
            href="/pleadings"
            className="underline"
            style={{ color: PALETTE.accent }}
          >
            Pleadings
          </Link>{" "}
          and the rest of the case data on{" "}
          <Link
            href="/grid"
            className="underline"
            style={{ color: PALETTE.accent }}
          >
            Ledger
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}

function Chapter({
  no,
  title,
  date,
  body,
  children,
}: {
  no: string;
  title: string;
  date: string;
  body: string[];
  children?: React.ReactNode;
}) {
  return (
    <section
      className="px-8 lg:px-14 py-16 border-t grid grid-cols-12 gap-x-6 gap-y-8"
      style={{ borderColor: PALETTE.rule }}
    >
      <div className="col-span-12 lg:col-span-2 lg:pr-2">
        <p
          className="serif text-5xl"
          style={{ color: PALETTE.accent }}
        >
          {no}
        </p>
        <p
          className="mono text-[11px] mt-4 uppercase tracking-widest"
          style={{ color: PALETTE.soft }}
        >
          {date}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-7 lg:col-start-3">
        <h2 className="serif text-3xl lg:text-4xl tracking-tight leading-tight mb-6">
          {title}
        </h2>
        <div className="space-y-5 text-[1.1rem] leading-[1.65]">
          {body.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3 lg:pl-4">{children}</div>
    </section>
  );
}

function Marginal({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="border-l-2 pl-4 italic text-sm leading-snug serif"
      style={{ borderColor: PALETTE.accent, color: PALETTE.soft }}
    >
      {children}
    </aside>
  );
}

function ProgressBar({
  label,
  fill,
  right,
}: {
  label: string;
  fill: number;
  right: string;
}) {
  return (
    <div>
      <p
        className="mono text-[11px] mb-2"
        style={{ color: PALETTE.soft }}
      >
        {label.toUpperCase()}
      </p>
      <div
        className="relative h-2 border"
        style={{ borderColor: PALETTE.accent }}
      >
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: `${fill * 100}%`, background: PALETTE.accent }}
        />
      </div>
      <p
        className="mono text-xs mt-2"
        style={{ color: PALETTE.accent }}
      >
        {right}
      </p>
    </div>
  );
}

function Verdict() {
  return (
    <div
      className="border p-5 space-y-2"
      style={{ borderColor: PALETTE.accent }}
    >
      <p
        className="mono text-[10px] uppercase tracking-widest"
        style={{ color: PALETTE.soft }}
      >
        ECHR · 9 July 2025
      </p>
      <p className="serif text-2xl leading-tight">
        Articles 2, 3, 13.
      </p>
      <p className="serif italic text-base" style={{ color: PALETTE.soft }}>
        Violation. Unanimous.
      </p>
    </div>
  );
}
