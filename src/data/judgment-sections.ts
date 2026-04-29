// Sections of ECHR PR 173 (2025) reproduced with citation, focused on those
// most relevant to application no. 28525/20.

export type Section = {
  id: string;
  number: string;
  heading: string;
  body: string;
  pulls?: Array<{ text: string; cite: string }>;
};

export const sections: Section[] = [
  {
    id: "scope",
    number: "§ I",
    heading: "Scope of the merits judgment",
    body:
      "The Court's judgment concerns events which occurred during the period up to 16 September 2022, when Russia ceased to be a Party to the European Convention. Findings of patterns of violations relate to the period 11 May 2014 to 16 September 2022. The MH17 findings (application 28525/20) cover the events of 17 July 2014 and Russia's continuing conduct in the aftermath.",
    pulls: [
      {
        text: "All findings, in respect of all four applications, were reached unanimously.",
        cite: "ECHR PR 173 (2025), introductory passages",
      },
    ],
  },
  {
    id: "russia-non-participation",
    number: "§ II",
    heading: "Russia's non-participation",
    body:
      "Russia submitted memorials and took part in the oral hearing at the admissibility stage in applications nos. 8019/16, 43800/14 and 28525/20. It did not participate in the proceedings on the merits in those three applications, nor on the admissibility and merits of application no. 11055/22. The Court found that there was insufficient cause for Russia's failure to submit a memorial or to participate in the 12 June 2024 hearing, and decided to continue with its examination of the case. Russia's lack of constructive engagement breached its obligations under Article 38.",
  },
  {
    id: "jurisdiction",
    number: "§ III",
    heading: "Jurisdiction",
    body:
      "The Court reiterated its admissibility-stage finding that Russia had exercised jurisdiction over areas under separatist control in eastern Ukraine from 11 May 2014 until at least 26 January 2022. It examined whether there was evidence that the level of Russian control had decreased, and found that it had not. As regards the post-24-February-2022 period, areas of Ukraine taken by Russian armed forces fell within Russia's spatial jurisdiction. Crucially, the Court held that individuals affected by Russia's military attacks across Ukrainian territory were within Russia's jurisdiction even where they were in areas still under Ukrainian control.",
    pulls: [
      {
        text: "The military attacks perpetrated by Russian forces across Ukrainian sovereign territory between 2014 and 2022 had been strategically planned with the deliberate intention and indisputable effect of assuming authority and control over areas, infrastructure and people in Ukraine.",
        cite: "ECHR PR 173 (2025), Jurisdiction",
      },
    ],
  },
  {
    id: "ihl",
    number: "§ IV",
    heading: "International humanitarian law",
    body:
      "The Court confirmed that its duty was to interpret the Convention in harmony with international humanitarian law. In the context of an international armed conflict IHL did not displace the safeguards under the Convention but was to be taken into account in determining the scope of the Convention's human-rights guarantees. In examining the alleged violations the Court therefore had regard to the relevant provisions of IHL.",
  },
  {
    id: "mh17-art-2-substantive",
    number: "§ V",
    heading: "MH17 — Article 2, substantive (28525/20)",
    body:
      "The Court already concluded in its prior admissibility decision that flight MH17 had been shot down over occupied territory by a Buk missile fired from a Buk-TELAR. The launch site was also in occupied territory. The Court agreed that the evidence suggested that the missile had been intentionally fired at flight MH17 most likely in the mistaken belief that it had been a military aircraft. On the basis of the evidence gathered by the JIT, and in the absence of any information from Russia, the only reasonable conclusion was that the missile had been fired by a member of the Russian military crew of the Buk-TELAR or by a member of the 'DPR'. It was not necessary for the Court to decide exactly who had fired the missile since Russia was responsible for the acts of the Russian armed forces and of the armed separatists. The Court accepted the evidence of the Dutch Government that a Buk-TELAR acting alone could not distinguish between military and civilian aircraft. Deploying a Buk-TELAR in isolation would therefore amount to a breach of IHL unless other measures were taken to accurately identify the potential target. No such measures were taken.",
    pulls: [
      {
        text: "The killing of the civilians on board flight MH17 could not be described as a 'lawful act of war' and had violated the right to life under the Convention.",
        cite: "ECHR PR 173 (2025), Articles 2 and 13 / MH17",
      },
      {
        text: "The deployment of the Buk-TELAR in an area where civilian flights were still operating clearly gave rise to an immediate risk to life which Russia had been, or ought to have been, aware of.",
        cite: "ECHR PR 173 (2025)",
      },
    ],
  },
  {
    id: "mh17-art-2-procedural",
    number: "§ VI",
    heading: "MH17 — Article 2, procedural (28525/20)",
    body:
      "There had been a violation of Article 2 as concerned the obligation under the Convention to investigate and cooperate in the international investigation into the cause of the crash. Any inquiries made by Russia had been piecemeal, focusing on certain aspects of the incident ostensibly with a view to showing a lack of any Russian involvement and deflecting responsibility onto Ukraine. These inquiries had regularly resulted in the disclosure of information which had later shown to be at best inaccurate and at worst a complete fabrication. The next of kin of those killed had not been involved in any inquiries undertaken by the Russian authorities and had not been directly informed of the outcome. The Russian authorities had also failed to cooperate effectively with the JIT investigators.",
    pulls: [
      {
        text: "The inaccurate revelations and disclosures of the Russian Ministry of Defence had been directed at contradicting and undermining what the JIT investigation had revealed, deliberately setting false trails and wasting the JIT's time and resources.",
        cite: "ECHR PR 173 (2025)",
      },
    ],
  },
  {
    id: "mh17-art-3",
    number: "§ VII",
    heading: "MH17 — Article 3 (28525/20)",
    body:
      "The Court acknowledged that the crash victims' next of kin had experienced and continued to experience profound grief and distress on account of the killing of their loved ones and the aftermath of the crash. They had not been able to avoid seeing the footage of the crash site and the bodies of their relatives shown very widely in the media. They had been forced to witness the lack of dignity shown to the bodies of their relatives at the crash site. They had experienced a sense of powerlessness and anxiety as a result of the limited access to the crash site, meaning it had taken eight months to recover the bodies. The Russian authorities' continued denial of involvement and their failure to carry out an effective investigation had prolonged the agonising wait for answers and had aggravated their suffering.",
    pulls: [
      {
        text: "Some next of kin had had to bury the incomplete bodies of their relatives; in some cases body parts had been returned to them after the burial had taken place. In two cases, the victims' bodies had never been recovered.",
        cite: "ECHR PR 173 (2025), Article 3 / MH17",
      },
      {
        text: "The character and dimension of their continuing suffering had been sufficiently severe to amount to inhuman treatment.",
        cite: "ECHR PR 173 (2025)",
      },
    ],
  },
  {
    id: "mh17-art-13",
    number: "§ VIII",
    heading: "MH17 — Article 13 (28525/20)",
    body:
      "There had been a separate violation of Article 13 in conjunction with Article 2. The Court considered that any suggestion that the crash victims' relatives could obtain the full truth and bring those liable to justice in the Russian courts was fanciful, given the Russian authorities' blanket denials and refusal to cooperate.",
  },
  {
    id: "just-satisfaction",
    number: "§ IX",
    heading: "Just satisfaction (Article 41) — adjourned and disjoined",
    body:
      "The Court found that the question of compensation under Article 41 of the Convention was not yet ready for decision. Any future award would have to take regard to the processing of the individual applications lodged before the European Court by relatives of those who lost their lives on flight MH17 — by more than five hundred individuals — and to developments in proceedings before the Council of the International Civil Aviation Organisation, which had in May 2025 found Russia to have failed in its international-law obligations in respect of the downing. For these reasons, the Court decided to separate the further proceedings concerning the downing of flight MH17 from the remainder of the case.",
  },
  {
    id: "article-46",
    number: "§ X",
    heading: "Binding force and implementation (Article 46)",
    body:
      "Russia had to without delay release or safely return all persons who had been deprived of their liberty on Ukrainian territory under occupation by the Russian and Russian-controlled forces in breach of Article 5 of the Convention before 16 September 2022 and who were still in the custody of the Russian authorities; and Russia had to without delay cooperate in the establishment of an international and independent mechanism to secure the identification of all children transferred from Ukraine to Russia and Russian-controlled territory before 16 September 2022, the restoration of contact between these children and their surviving family members or legal guardians, and the children's safe reunification.",
  },
];
