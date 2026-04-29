export type Term = {
  id: string;
  term: string;
  short: string;
  body: string;
  source?: string;
  cluster:
    | "instrument"
    | "doctrine"
    | "weapon"
    | "actor"
    | "procedure"
    | "place";
};

export const terms: Term[] = [
  // Instruments
  {
    id: "echr",
    term: "European Convention on Human Rights",
    short: "ECHR",
    body: "Treaty of the Council of Europe, opened for signature in Rome, 4 November 1950. Establishes the European Court of Human Rights and binds Contracting Parties to its provisions. Ukraine and the Netherlands are parties; Russia ceased to be a party on 16 September 2022.",
    source: "Council of Europe; ECHR PR 286 (2022)",
    cluster: "instrument",
  },
  {
    id: "art-2",
    term: "Article 2 ECHR",
    short: "Right to life",
    body: "Imposes both substantive and procedural obligations: the State must not unlawfully take life, and must investigate effectively where life has been taken in circumstances engaging its responsibility.",
    source: "Council of Europe ECHR text",
    cluster: "instrument",
  },
  {
    id: "art-3",
    term: "Article 3 ECHR",
    short: "Prohibition of torture",
    body: "Absolute prohibition on torture, inhuman or degrading treatment or punishment. Engaged in this case both for the treatment of persons in occupied territory and for the suffering of MH17 next of kin.",
    cluster: "instrument",
  },
  {
    id: "art-13",
    term: "Article 13 ECHR",
    short: "Right to an effective remedy",
    body: "Requires that everyone whose Convention rights are violated has an effective remedy before a national authority.",
    cluster: "instrument",
  },
  {
    id: "art-38",
    term: "Article 38 ECHR",
    short: "Cooperation with the Court",
    body: "Obliges States Parties to furnish all necessary facilities for the Court's examination of a case. The Grand Chamber found Russia in breach of Article 38 for its non-participation in the merits proceedings.",
    source: "ECHR PR 173 (2025)",
    cluster: "instrument",
  },
  {
    id: "art-41",
    term: "Article 41 ECHR",
    short: "Just satisfaction",
    body: "Empowers the Court, where it finds a violation, to afford 'just satisfaction' to the injured party. In the present case the Court adjourned the Article 41 question and disjoined application 28525/20 to permit it to proceed separately.",
    source: "ECHR PR 173 (2025)",
    cluster: "instrument",
  },
  {
    id: "art-46",
    term: "Article 46 ECHR",
    short: "Binding force and implementation",
    body: "Renders judgments of the Court binding on the parties; supervision is by the Committee of Ministers. Applies to Russia notwithstanding the cessation, in respect of acts up to 16 September 2022.",
    source: "Council of Europe; ECHR PR 173 (2025)",
    cluster: "instrument",
  },
  {
    id: "art-58",
    term: "Article 58 ECHR",
    short: "Denunciation",
    body: "A State that ceases to be a Party once it has ceased to be a member of the Council of Europe is not released from its Convention obligations in respect of acts performed before that date. Foundation for the Court's continuing jurisdiction over conduct prior to 16 September 2022.",
    source: "Council of Europe; ECHR PR 026 (2023)",
    cluster: "instrument",
  },
  {
    id: "chicago-3-bis",
    term: "Chicago Convention, Article 3 bis",
    short: "Civil aviation",
    body: "Provision of the Convention on International Civil Aviation prohibiting the use of weapons against civil aircraft in flight. The ICAO Council found Russia in breach of this provision on 12 May 2025.",
    source: "ICAO press release, 12 May 2025",
    cluster: "instrument",
  },

  // Doctrines
  {
    id: "spatial-jurisdiction",
    term: "Spatial jurisdiction",
    short: "ECHR Art. 1",
    body: "Where a State exercises 'effective control' over an area outside its national borders — typically through military presence and political/economic patronage — the area falls within its Convention jurisdiction. Found in this case for separatist-held eastern Ukraine from 11 May 2014.",
    source: "ECHR PR 026 (2023)",
    cluster: "doctrine",
  },
  {
    id: "personal-jurisdiction",
    term: "Personal jurisdiction",
    short: "Authority and control",
    body: "Where a State's agents exercise authority and control over individuals abroad, those individuals fall within its Convention jurisdiction. Extended in this case to individuals affected by Russia's military attacks across Ukrainian territory after February 2022.",
    source: "ECHR PR 173 (2025)",
    cluster: "doctrine",
  },
  {
    id: "de-facto-organ",
    term: "De facto organ",
    short: "Attribution",
    body: "An entity may be treated as an organ of a State for the purposes of attribution where it is so dependent on the State that it is, in reality, merely an instrument of that State. The Court treated the 'DPR' and 'LPR' as de facto organs of Russia from 11 May 2014.",
    source: "ICJ Bosnian Genocide jurisprudence; ECHR PR 173 (2025)",
    cluster: "doctrine",
  },
  {
    id: "administrative-practice",
    term: "Administrative practice",
    short: "Pattern + tolerance",
    body: "A 'repetition of acts' incompatible with the Convention combined with 'official tolerance' by the State authorities. Where established, the rule on exhaustion of domestic remedies does not apply. The Court found administrative practices in respect of Russian conduct from 2014.",
    source: "ECHR PR 173 (2025); Strasbourg case-law",
    cluster: "doctrine",
  },
  {
    id: "ihl",
    term: "International humanitarian law",
    short: "IHL",
    body: "The body of treaty and customary law governing armed conflict — the Geneva Conventions and their Protocols, the Hague Regulations, and customary IHL. The Court interpreted the Convention in harmony with IHL but not as displaced by it.",
    cluster: "doctrine",
  },
  {
    id: "hors-de-combat",
    term: "Hors de combat",
    short: "Protected status",
    body: "A combatant who is rendered unable to fight by surrender, injury, or capture, and is therefore protected from attack under IHL. Killings of detained Ukrainian soldiers were found to violate this protection.",
    cluster: "doctrine",
  },

  // Weapons / objects
  {
    id: "buk-telar",
    term: "Buk-TELAR",
    short: "Surface-to-air missile",
    body: "Self-propelled launcher of the Buk family of medium-range surface-to-air missile systems, designed to engage aircraft including high-altitude civil airliners. The Court accepted that a Buk-TELAR fired the missile that downed MH17, and that such a launcher operating in isolation cannot reliably distinguish civilian from military aircraft.",
    source: "JIT public reports; Hague District Court verdict; ECHR PR 173 (2025)",
    cluster: "weapon",
  },
  {
    id: "9m38",
    term: "9M38-series missile",
    short: "Buk warhead",
    body: "Family of missiles fired by the Buk launcher. JIT investigators identified the specific missile that struck MH17 by reconstructing fragments recovered from the wreckage and bodies.",
    source: "JIT public reports",
    cluster: "weapon",
  },

  // Actors
  {
    id: "jit",
    term: "Joint Investigation Team",
    short: "JIT",
    body: "Five-state criminal investigation team established under the Netherlands Public Prosecution Service, comprising the Netherlands, Australia, Belgium, Malaysia, and Ukraine. Conducted the criminal investigation into the downing of MH17. Its findings were relied upon by the Hague District Court and the Strasbourg court.",
    source: "JIT public materials",
    cluster: "actor",
  },
  {
    id: "icao",
    term: "International Civil Aviation Organization",
    short: "ICAO",
    body: "United Nations specialised agency for civil aviation, headquartered in Montréal. Its Council adjudicates disputes under Article 84 of the Chicago Convention. On 12 May 2025 it issued its first decision on the merits of an Article 84 dispute, finding Russia in breach in respect of MH17.",
    source: "ICAO",
    cluster: "actor",
  },
  {
    id: "icj",
    term: "International Court of Justice",
    short: "ICJ",
    body: "The principal judicial organ of the United Nations, sitting in The Hague at the Peace Palace. Hearing Russia's appeal of the ICAO Council decision under Article 84 of the Chicago Convention.",
    source: "ICJ",
    cluster: "actor",
  },
  {
    id: "icc",
    term: "International Criminal Court",
    short: "ICC",
    body: "Permanent international tribunal sitting in The Hague that prosecutes individuals for international crimes. Russia is not a State Party to the Rome Statute. ICC arrest warrants have issued for several Russian officials in connection with the broader conflict.",
    source: "ICC",
    cluster: "actor",
  },
  {
    id: "ohchr",
    term: "OHCHR",
    short: "UN human-rights monitoring",
    body: "Office of the United Nations High Commissioner for Human Rights. Its monitoring missions to Ukraine produced primary evidence relied upon by the Strasbourg court for casualty figures and patterns of treatment.",
    source: "OHCHR Ukraine reporting",
    cluster: "actor",
  },
  {
    id: "mh17-foundation",
    term: "MH17 Air Disaster Foundation",
    short: "Stichting Vliegramp MH17",
    body: "Dutch foundation representing relatives of victims of the MH17 disaster. Granted leave to make written submissions and oral interventions in the Strasbourg proceedings.",
    source: "ECHR PRs 026 (2023), 173 (2025)",
    cluster: "actor",
  },

  // Procedure
  {
    id: "rule-39",
    term: "Rule 39 — interim measures",
    short: "ECHR Rules of Court",
    body: "Provision of the Rules of Court permitting the Court to indicate interim measures to the parties. Applied in this case on 13 March 2014 to call upon Russia and Ukraine to refrain from action that might violate the civilian population's rights under Articles 2 and 3.",
    source: "ECHR Rules of Court; PR 026 (2023)",
    cluster: "procedure",
  },
  {
    id: "joinder",
    term: "Joinder",
    short: "Rule 42 § 1; Rule 71 § 1",
    body: "The procedural device by which two or more applications are heard together. The three inter-state applications were joined on 27 November 2020; the fourth was joined on 17 February 2023.",
    source: "ECHR Rules of Court; PR 173 (2025)",
    cluster: "procedure",
  },
  {
    id: "disjoinder",
    term: "Disjoinder",
    short: "Article 41 / 28525/20",
    body: "The Court separated application 28525/20 from the rest of the case in the operative part of the 9 July 2025 judgment, in order to permit the just-satisfaction question on MH17 to proceed separately, with regard to the parallel ICAO and individual-application tracks.",
    source: "ECHR PR 173 (2025)",
    cluster: "procedure",
  },
  {
    id: "third-party-intervention",
    term: "Third-party intervention",
    short: "Article 36 § 2",
    body: "Permits Contracting States, individuals, or organisations to make written or oral submissions in a case to which they are not parties. 26 State Parties intervened jointly; Poland and the United Kingdom additionally made separate oral submissions.",
    source: "ECHR PR 173 (2025)",
    cluster: "procedure",
  },

  // Places
  {
    id: "snizhne",
    term: "Snizhne",
    short: "Donetsk Oblast",
    body: "Town in eastern Ukraine in the vicinity of which MH17 was downed. Within separatist-held territory at the time.",
    cluster: "place",
  },
  {
    id: "pervomaiskyi",
    term: "Pervomaiskyi",
    short: "Donetsk Oblast",
    body: "Village in eastern Ukraine near which the Buk-TELAR was positioned to fire the missile. Located in territory the separatists controlled.",
    source: "Hague District Court verdict, 17 Nov 2022",
    cluster: "place",
  },
  {
    id: "schiphol-jcs",
    term: "Schiphol Judicial Complex",
    short: "JCS, Badhoevedorp",
    body: "High-security court complex on the grounds of Amsterdam Schiphol Airport, used by the District Court of The Hague for the criminal trial of MH17 defendants.",
    cluster: "place",
  },
];

export const clusterLabels: Record<Term["cluster"], string> = {
  instrument: "Instruments",
  doctrine: "Doctrines",
  weapon: "Weapons & objects",
  actor: "Actors",
  procedure: "Procedure",
  place: "Places",
};
