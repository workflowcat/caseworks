// Curated paired events for the Mirror concept: courtroom (left) and ground (right).
// Items are sorted ascending by date and rendered along a shared time axis.

export type MirrorEvent = {
  date: string; // ISO
  display: string;
  side: "court" | "ground";
  title: string;
  body: string;
};

export const mirrorEvents: MirrorEvent[] = [
  {
    date: "2014-02-27",
    display: "27 February 2014",
    side: "ground",
    title: "Russian troops without insignia seize the Crimean parliament",
    body: "The annexation begins. Sevastopol and Simferopol fall in days.",
  },
  {
    date: "2014-03-13",
    display: "13 March 2014",
    side: "court",
    title: "Ukraine lodges its first ECHR application",
    body: "Application no. 20958/14. The Court applies Rule 39 interim measures the same day.",
  },
  {
    date: "2014-05-11",
    display: "11 May 2014",
    side: "ground",
    title: '"Referendums" in Donetsk and Luhansk',
    body: "DPR/LPR declared. The ECHR will later treat this as the start date of Russian jurisdiction over separatist territory.",
  },
  {
    date: "2014-06-13",
    display: "13 June 2014",
    side: "court",
    title: "Ukraine lodges the children case",
    body: "Application no. 43800/14. Three groups of 85 children abducted to Russia.",
  },
  {
    date: "2014-07-17",
    display: "17 July 2014",
    side: "ground",
    title: "MH17 shot down near Snizhne",
    body: "298 killed. 196 Dutch nationals. Eight months until the bodies are recovered.",
  },
  {
    date: "2015-06-15",
    display: "15 June 2015",
    side: "court",
    title: "Stabil and others file the first BIT arbitration",
    body: "PCA. Eleven Ukrainian investors. Crimean petrol stations.",
  },
  {
    date: "2016-09-16",
    display: "16 September 2016",
    side: "court",
    title: "Coastal State Rights arbitration filed",
    body: "PCA Case No. 2017-06. UNCLOS. Black Sea, Sea of Azov, Kerch Strait.",
  },
  {
    date: "2017-12-22",
    display: "22 December 2017",
    side: "court",
    title: "Naftogaz wins the SCC gas-sales arbitration",
    body: "Stockholm. The first major commercial-arbitration finding against a Russian state-owned entity.",
  },
  {
    date: "2018-11-26",
    display: "26 November 2018",
    side: "court",
    title: "Oschadbank wins ~$1.3bn",
    body: "UNCITRAL/PCA, seated Paris. Crimean banking infrastructure.",
  },
  {
    date: "2018-11-25",
    display: "25 November 2018",
    side: "ground",
    title: "Kerch Strait incident",
    body: "Russia seizes three Ukrainian naval vessels and 24 servicemen.",
  },
  {
    date: "2019-05-25",
    display: "25 May 2019",
    side: "court",
    title: "ITLOS orders Russia to release the vessels and crew",
    body: "Case No. 26. 19 votes to 1.",
  },
  {
    date: "2020-07-10",
    display: "10 July 2020",
    side: "court",
    title: "The Netherlands files its inter-state ECHR application",
    body: "Six years after MH17. Application no. 28525/20.",
  },
  {
    date: "2022-02-24",
    display: "24 February 2022",
    side: "ground",
    title: "Russia launches the full-scale invasion",
    body: "Land, air, sea. Cities in the north, south, and east hit by airstrikes within hours.",
  },
  {
    date: "2022-02-26",
    display: "26 February 2022",
    side: "court",
    title: "Ukraine files at the ICJ",
    body: "Allegations of Genocide. The provisional-measures hearing is set for 7 March.",
  },
  {
    date: "2022-02-28",
    display: "28 February 2022",
    side: "court",
    title: "Ukraine lodges ECHR application 11055/22",
    body: "On the full-scale invasion.",
  },
  {
    date: "2022-03-09",
    display: "9 March 2022",
    side: "ground",
    title: "Strike on maternity ward no. 3 in Mariupol",
    body: "The Court will later cite this as compelling evidence of indiscriminate attack.",
  },
  {
    date: "2022-03-16",
    display: "16 March 2022",
    side: "ground",
    title: "Strike on the Mariupol Drama Theatre",
    body: "Sheltering civilians. 'Children' written on the pavement outside.",
  },
  {
    date: "2022-03-16",
    display: "16 March 2022",
    side: "court",
    title: "ICJ orders Russia to suspend military operations",
    body: "Provisional measures, 13–2. Russia does not comply.",
  },
  {
    date: "2022-04-08",
    display: "8 April 2022",
    side: "ground",
    title: "Strike on Kramatorsk train station",
    body: "Civilians evacuating. The Court will name this incident in the judgment.",
  },
  {
    date: "2022-09-16",
    display: "16 September 2022",
    side: "court",
    title: "Russia ceases to be a party to the European Convention",
    body: "17,450 applications against Russia were pending at this date. The Court retains jurisdiction over conduct up to today.",
  },
  {
    date: "2022-11-17",
    display: "17 November 2022",
    side: "court",
    title: "Hague verdict in the MH17 criminal trial",
    body: "Three life sentences in absentia. Pulatov acquitted.",
  },
  {
    date: "2023-03-17",
    display: "17 March 2023",
    side: "court",
    title: "ICC arrest warrants for Putin and Lvova-Belova",
    body: "Unlawful deportation and transfer of Ukrainian children. First ICC warrant against the leader of a UN Security Council permanent member.",
  },
  {
    date: "2023-04-12",
    display: "12 April 2023",
    side: "court",
    title: "Naftogaz awarded ~$5bn",
    body: "PCA. The largest Crimea-related award against Russia. Russia refuses to pay.",
  },
  {
    date: "2024-02-02",
    display: "2 February 2024",
    side: "court",
    title: "ICJ preliminary objections",
    body: "Russia's objections largely rejected. Subject-matter jurisdiction over use-of-force claims declined 12–4.",
  },
  {
    date: "2024-06-25",
    display: "25 June 2024",
    side: "court",
    title: "ECHR Crimea judgment",
    body: "Violations of Articles 2, 3, 5, 6, 7, 8, 9, 10, 11, 14, 18.",
  },
  {
    date: "2025-05-12",
    display: "12 May 2025",
    side: "court",
    title: "ICAO Council finds Russia breached Article 3 bis",
    body: "First-ever Council decision on the merits of an Article 84 dispute. 22–3, 10 abstain.",
  },
  {
    date: "2025-07-09",
    display: "9 July 2025",
    side: "court",
    title: "Grand Chamber merits judgment",
    body: "Ukraine and the Netherlands v. Russia. Unanimous. Patterns of violations across eleven Convention articles. Just satisfaction adjourned.",
  },
];
