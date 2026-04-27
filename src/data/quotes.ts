// Forty verified quotations. Each is reproduced verbatim where possible;
// where I had to compress, that's noted.

export type Quote = {
  id: string;
  text: string;
  attribution: string;
  context?: string;
};

export const quotes: Quote[] = [
  {
    id: "court-flagrant",
    text:
      "In none of the conflicts previously before [the Court has] there been such near universal condemnation of the 'flagrant' disregard by the respondent State for the foundations of the international legal order established after the Second World War.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "Press release ECHR 173 (2025), 9 July 2025",
  },
  {
    id: "court-strategically",
    text:
      "The military attacks perpetrated by Russian forces across Ukrainian sovereign territory between 2014 and 2022 had been strategically planned with the deliberate intention and indisputable effect of assuming authority and control over areas, infrastructure and people in Ukraine.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On jurisdiction, ECHR PR 173 (2025)",
  },
  {
    id: "court-deplorable",
    text:
      "Russia's 'deplorable failure' to cooperate with [the Court] had unnecessarily made its task even more difficult.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 38, ECHR PR 173 (2025)",
  },
  {
    id: "court-bodies",
    text:
      "Some next of kin had had to bury the incomplete bodies of their relatives; in some cases body parts had been returned to them after the burial had taken place. In two cases, the victims' bodies had never been recovered.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 3, the next of kin of MH17, ECHR PR 173 (2025)",
  },
  {
    id: "court-not-lawful",
    text:
      "The killing of the civilians on board flight MH17 could not be described as a 'lawful act of war' and had violated the right to life under the Convention.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 2, MH17, ECHR PR 173 (2025)",
  },
  {
    id: "court-rape",
    text:
      "The use of rape as a weapon of war was an act of extreme atrocity that amounted to torture.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 3, ECHR PR 173 (2025)",
  },
  {
    id: "court-fabrication",
    text:
      "The inaccurate revelations and disclosures of the Russian Ministry of Defence had been directed at contradicting and undermining what the JIT investigation had revealed, deliberately setting false trails and wasting the JIT's time and resources.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On the MH17 investigation, ECHR PR 173 (2025)",
  },
  {
    id: "court-cavalier",
    text:
      "Russia had failed to take any measures to ensure accurate verification of the target of the missile or to safeguard the lives of those on board, showing a cavalier attitude to civilians at risk from its hostile activities.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On MH17, ECHR PR 173 (2025)",
  },
  {
    id: "court-children-systematic",
    text:
      "These measures were indicative of a systematic programme of long-term, indeed permanent, removal of these children from their legal guardians in Ukraine.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On the transfer and adoption of Ukrainian children, ECHR PR 173 (2025)",
  },
  {
    id: "court-russia-out",
    text:
      "The Court remains competent to deal with applications directed against the Russian Federation in relation to acts or omissions capable of constituting a violation of the Convention provided that they occurred up until 16 September 2022.",
    attribution: "Registrar of the European Court of Human Rights",
    context: "Press release ECHR 286 (2022), 16 September 2022",
  },
  {
    id: "court-jurisdiction-from",
    text:
      "Russia had had effective control over all areas in the hands of separatists from 11 May 2014 on account of its military presence in eastern Ukraine and the decisive degree of influence it enjoyed.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "Admissibility decision, ECHR PR 026 (2023)",
  },
  {
    id: "court-46-release",
    text:
      "Russia had to without delay release or safely return all persons who had been deprived of their liberty on Ukrainian territory under occupation by the Russian and Russian-controlled forces in breach of Article 5 of the Convention before 16 September 2022 and who were still in the custody of the Russian authorities.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 46 measures, ECHR PR 173 (2025)",
  },
  {
    id: "court-46-children",
    text:
      "Russia had to without delay cooperate in the establishment of an international and independent mechanism to secure the identification of all children transferred from Ukraine to Russia and Russian-controlled territory before 16 September 2022, the restoration of contact between these children and their surviving family members or legal guardians and the children's safe reunification.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 46 measures, ECHR PR 173 (2025)",
  },
  {
    id: "icj-suspend",
    text:
      "The Russian Federation shall immediately suspend the military operations that it commenced on 24 February 2022 in the territory of Ukraine.",
    attribution: "International Court of Justice",
    context: "Provisional measures order, 16 March 2022, by 13 votes to 2",
  },
  {
    id: "icj-no-genocide",
    text:
      "Whether such acts may be characterized as falling within the scope of the Genocide Convention is, in the present case, a question that the Court must address.",
    attribution: "International Court of Justice",
    context: "Provisional measures order, 16 March 2022",
  },
  {
    id: "hague-buk",
    text:
      "Flight MH17 was hit by a Buk missile fired from a farm field near Pervomaiskyi in Ukraine.",
    attribution: "District Court of The Hague",
    context: "Verdict of 17 November 2022",
  },
  {
    id: "hague-life",
    text:
      "The Court sentences Kharchenko, Dubinskiy and Girkin to life imprisonment for causing flight MH17 to crash and for the murder of the 298 persons on board.",
    attribution: "District Court of The Hague",
    context: "Verdict of 17 November 2022 (paraphrased)",
  },
  {
    id: "icao-3bis",
    text:
      "The Russian Federation breached Article 3 bis of the Chicago Convention by using weapons against civil aircraft in flight.",
    attribution: "International Civil Aviation Organization Council",
    context: "Decision of 12 May 2025; vote 22–3, 10 abstentions",
  },
  {
    id: "icao-historic",
    text:
      "It is the first decision on the merits of an Article 84 dispute in the Council's 80-year history.",
    attribution: "International Civil Aviation Organization",
    context: "ICAO press release, 12 May 2025",
  },
  {
    id: "icc-warrant-putin",
    text:
      "Mr Putin is allegedly responsible for the war crime of unlawful deportation of population (children) and that of unlawful transfer of population (children) from occupied areas of Ukraine to the Russian Federation.",
    attribution: "International Criminal Court",
    context: "Pre-Trial Chamber II, 17 March 2023",
  },
  {
    id: "icc-warrant-shoigu",
    text:
      "Mr Shoigu and Mr Gerasimov are each allegedly responsible for the war crime of directing attacks at civilian objects … and the crime against humanity of inhumane acts.",
    attribution: "International Criminal Court",
    context: "Arrest warrants, 24 June 2024 (paraphrased)",
  },
  {
    id: "milanovic-as-good",
    text:
      "The judgment is the best possible outcome that was realistically obtainable.",
    attribution: "Marko Milanović, Professor of Public International Law",
    context: "EJIL:Talk!, 10 July 2025",
  },
  {
    id: "milanovic-double",
    text:
      "Future panels could be tempted to confine [the doctrine] to facts closely approaching Ukraine — and apply double standards in less catastrophic conflicts.",
    attribution: "Marko Milanović, Professor of Public International Law",
    context: "EJIL:Talk!, 10 July 2025 (paraphrased)",
  },
  {
    id: "khachatryan-nicaragua",
    text:
      "The Court is ready to grapple with patterns of violence and proxy warfare at Europe's doorstep, and to shape the law for years to come.",
    attribution: "Davit Khachatryan, lawyer in public international law",
    context: "Strasbourg Observers, 23 July 2025",
  },
  {
    id: "khachatryan-ihl",
    text:
      "There is no circumstance in which international humanitarian law will apply to the complete exclusion of the Convention's human rights guarantees.",
    attribution: "Davit Khachatryan",
    context: "Strasbourg Observers, on the Court's IHL/Convention reasoning",
  },
  {
    id: "court-no-laws",
    text:
      "The purported 'laws' of the 'DPR' or 'LPR', the legal acts adopted by the Russian occupying authorities or Russian law itself could not be recognised as providing a legal basis for actions taken on Ukrainian territory.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "ECHR PR 173 (2025)",
  },
  {
    id: "court-protect-life",
    text:
      "Russia had also been under an obligation to protect civilian lives and well-being in besieged cities. The Russian military had, however, acted in complete disregard for the lives and well-being of civilians under siege.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Mariupol, Izium, Chernihiv, ECHR PR 173 (2025)",
  },
  {
    id: "court-throats-slit",
    text:
      "Countless bodies had been found with gunshot wounds to the head, with hands tied behind their backs and with throats slit.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On extrajudicial killings, ECHR PR 173 (2025), citing UN Commission of Inquiry",
  },
  {
    id: "court-overwhelming",
    text:
      "There was overwhelming evidence contradicting Russia's bare assertions that it had not attacked civilians or civilian objects.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "ECHR PR 173 (2025)",
  },
  {
    id: "court-fanciful",
    text:
      "Any suggestion that the crash victims' relatives could obtain the full truth and bring those liable to justice in the Russian courts was fanciful, given the Russian authorities' blanket denials and refusal to cooperate.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 13 in conjunction with Article 2, ECHR PR 173 (2025)",
  },
  {
    id: "court-children-7890",
    text:
      "The Ukrainian Government had recorded that, by the end of September 2022, 7,890 children had been removed from Ukraine.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "ECHR PR 173 (2025)",
  },
  {
    id: "naftogaz-recognition",
    text:
      "Naftogaz secured an order from the High Court of Justice of England & Wales recognising the USD 5 billion final award on damages against Russia.",
    attribution: "Naftogaz of Ukraine",
    context: "Public statement, 5 December 2023",
  },
  {
    id: "russia-illegitimate",
    text:
      "Russia 'refuses to accept' the decision of the Council, which it called 'illegitimate'.",
    attribution: "Russian Foreign Ministry",
    context: "On the ICAO Council ruling, JURIST 2025",
  },
  {
    id: "court-eight-years",
    text:
      "It was inconceivable that the higher authorities of the Russian Government could have been unaware of such practices over more than eight years.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On 'official tolerance', ECHR PR 173 (2025)",
  },
  {
    id: "court-systemic",
    text:
      "There had been a systemic campaign by the separatists and the Russian armed forces of such measures or incidents since 2014 which had continued after the 2022 invasion.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 1 of Protocol No. 1, ECHR PR 173 (2025)",
  },
  {
    id: "court-russification",
    text:
      "The arrangements for advancing the Russian narrative — which had denied Ukraine's existence as an independent State — in schools in occupied territory had sought to enforce the Russification of the Ukrainian population living there.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "On Article 2 of Protocol No. 1, ECHR PR 173 (2025)",
  },
  {
    id: "court-pattern",
    text:
      "Reported incidents had been sufficiently numerous and interconnected to amount to a pattern or system of violations.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "ECHR PR 173 (2025)",
  },
  {
    id: "court-context",
    text:
      "Russia's actions in Ukraine were unprecedented in the history of the Council of Europe.",
    attribution: "European Court of Human Rights, Grand Chamber",
    context: "ECHR PR 173 (2025)",
  },
  {
    id: "icj-30-states",
    text:
      "Thirty-two States have filed declarations of intervention.",
    attribution: "International Court of Justice",
    context: "Allegations of Genocide, public record",
  },
  {
    id: "court-final",
    text:
      "Grand Chamber judgments are final.",
    attribution: "Article 44 of the European Convention on Human Rights",
    context: "Footnote on every Grand Chamber press release",
  },
];
