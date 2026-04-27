// The same event rendered through six voices on the public record.

export type Register = {
  id: string;
  voice:
    | "court"
    | "applicant-ua"
    | "applicant-nl"
    | "respondent"
    | "monitor"
    | "academic";
  voiceLabel: string;
  voiceCity: string;
  text: string;
  context: string;
};

export type Bundle = {
  id: string;
  event: string;
  date: string;
  registers: Register[];
};

export const bundles: Bundle[] = [
  {
    id: "mh17-cause",
    event: "The downing of MH17",
    date: "17 July 2014",
    registers: [
      {
        id: "mh17-court",
        voice: "court",
        voiceLabel: "European Court of Human Rights",
        voiceCity: "Strasbourg",
        text:
          "The killing of the civilians on board flight MH17 could not be described as a 'lawful act of war' and had violated the right to life under the Convention.",
        context: "Press release ECHR 173 (2025), 9 July 2025",
      },
      {
        id: "mh17-icao",
        voice: "monitor",
        voiceLabel: "ICAO Council",
        voiceCity: "Montréal",
        text:
          "The Russian Federation breached Article 3 bis of the Chicago Convention by using weapons against civil aircraft in flight which led to the downing of Malaysia Airlines flight MH17.",
        context: "ICAO Council decision, 12 May 2025; vote 22–3",
      },
      {
        id: "mh17-hague",
        voice: "applicant-nl",
        voiceLabel: "District Court of The Hague",
        voiceCity: "The Hague",
        text:
          "Flight MH17 was hit by a Buk missile fired from a farm field near Pervomaiskyi in Ukraine. Kharchenko, Dubinskiy and Girkin worked closely and deliberately as co-perpetrators with the crew of the Buk-TELAR.",
        context: "Verdict of 17 November 2022 (composed)",
      },
      {
        id: "mh17-russia",
        voice: "respondent",
        voiceLabel: "Russian Foreign Ministry",
        voiceCity: "Moscow",
        text:
          "Russia 'refuses to accept' the decision of the Council, which it called 'illegitimate'.",
        context: "On the ICAO Council ruling, May 2025",
      },
      {
        id: "mh17-ohchr",
        voice: "monitor",
        voiceLabel: "OHCHR / UN human-rights monitoring",
        voiceCity: "Geneva",
        text:
          "The downing of flight MH17 in eastern Ukraine on 17 July 2014 resulted in 298 deaths. Russia&rsquo;s lack of cooperation with the international investigation continued to obstruct accountability.",
        context: "OHCHR Ukraine reporting (paraphrased)",
      },
      {
        id: "mh17-academic",
        voice: "academic",
        voiceLabel: "Marko Milanović, EJIL:Talk!",
        voiceCity: "Reading",
        text:
          "The Court correctly applied the de facto organ test to attribute the conduct of the separatist forces to Russia. Whether the trigger was pulled by a Russian soldier or a separatist, the conduct was attributable.",
        context: "EJIL:Talk!, 10 July 2025 (paraphrased)",
      },
    ],
  },
  {
    id: "next-of-kin",
    event: "The suffering of MH17 next of kin",
    date: "Continuing",
    registers: [
      {
        id: "kin-court",
        voice: "court",
        voiceLabel: "European Court of Human Rights",
        voiceCity: "Strasbourg",
        text:
          "Some next of kin had had to bury the incomplete bodies of their relatives; in some cases body parts had been returned to them after the burial had taken place. In two cases, the victims' bodies had never been recovered.",
        context: "Press release ECHR 173 (2025)",
      },
      {
        id: "kin-court-2",
        voice: "court",
        voiceLabel: "European Court of Human Rights",
        voiceCity: "Strasbourg",
        text:
          "The character and dimension of their continuing suffering had been sufficiently severe to amount to inhuman treatment.",
        context: "ECHR PR 173 (2025), Article 3 finding",
      },
      {
        id: "kin-nl",
        voice: "applicant-nl",
        voiceLabel: "Government of the Kingdom of the Netherlands",
        voiceCity: "The Hague",
        text:
          "Russia&rsquo;s conduct following the shooting down had caused intense pain and suffering to the victims&rsquo; next of kin.",
        context: "Inter-state application no. 28525/20, July 2020",
      },
      {
        id: "kin-russia",
        voice: "respondent",
        voiceLabel: "Russian authorities",
        voiceCity: "Moscow",
        text:
          "Inquiries made by Russia have been piecemeal, focusing on certain aspects of the incident ostensibly with a view to showing a lack of any Russian involvement and deflecting responsibility onto Ukraine.",
        context: "As characterised by the ECHR, ECHR PR 173 (2025)",
      },
      {
        id: "kin-foundation",
        voice: "applicant-nl",
        voiceLabel: "MH17 Air Disaster Foundation",
        voiceCity: "The Netherlands",
        text:
          "Eleven years on, what we have is a record. Not a closure, not a number, not a return.",
        context: "Composed from public statements (paraphrased)",
      },
      {
        id: "kin-academic",
        voice: "academic",
        voiceLabel: "Strasbourg Observers",
        voiceCity: "Ghent",
        text:
          "The judgment&rsquo;s recognition of the next-of-kin&rsquo;s suffering as inhuman treatment is a meaningful expansion of Article 3 jurisprudence in mass-casualty contexts.",
        context: "Academic commentary, July 2025 (paraphrased)",
      },
    ],
  },
  {
    id: "children",
    event: "The transfer of Ukrainian children to Russia",
    date: "From summer 2014",
    registers: [
      {
        id: "ch-court",
        voice: "court",
        voiceLabel: "European Court of Human Rights",
        voiceCity: "Strasbourg",
        text:
          "These measures were indicative of a systematic programme of long-term, indeed permanent, removal of these children from their legal guardians in Ukraine.",
        context: "Press release ECHR 173 (2025)",
      },
      {
        id: "ch-icc",
        voice: "monitor",
        voiceLabel: "International Criminal Court",
        voiceCity: "The Hague",
        text:
          "Mr Putin is allegedly responsible for the war crime of unlawful deportation of population (children) and that of unlawful transfer of population (children) from occupied areas of Ukraine to the Russian Federation.",
        context: "Pre-Trial Chamber II, 17 March 2023",
      },
      {
        id: "ch-ua",
        voice: "applicant-ua",
        voiceLabel: "Government of Ukraine",
        voiceCity: "Kyiv",
        text:
          "By the end of September 2022, 7,890 children had been removed from Ukraine. Subsequent estimates indicate substantially higher figures.",
        context: "Cited in ECHR judgment and in ICC arrest-warrant context",
      },
      {
        id: "ch-russia",
        voice: "respondent",
        voiceLabel: "Russian Commissioner for Children's Rights",
        voiceCity: "Moscow",
        text:
          "Russian officials have framed the transfers as 'evacuations' of children from a war zone. Legislative amendments in May 2022 made it easier for Ukrainian children to acquire Russian citizenship and be adopted.",
        context: "As characterised by the ECHR, ECHR PR 173 (2025)",
      },
      {
        id: "ch-monitor",
        voice: "monitor",
        voiceLabel: "UN Independent Commission of Inquiry on Ukraine",
        voiceCity: "Geneva",
        text:
          "Reports laid out, in stark and disturbing detail, the systemic transfer and adoption of Ukrainian children — corroborated by Russian officials' own statements about 'caring for' children from Donbas.",
        context: "Cited by the ECHR (paraphrased)",
      },
      {
        id: "ch-academic",
        voice: "academic",
        voiceLabel: "Verfassungsblog",
        voiceCity: "Berlin",
        text:
          "The treatment of children deportation is among the judgment&rsquo;s clearest doctrinal moves: the Article 8 finding sits alongside the Article 3 and Article 5 findings to capture the full harm.",
        context: "Academic commentary (paraphrased)",
      },
    ],
  },
];
