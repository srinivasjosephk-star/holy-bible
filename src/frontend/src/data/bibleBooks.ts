export type Testament = "OT" | "NT";

export interface BibleBook {
  id: number;
  name: string;
  abbreviation: string;
  testament: Testament;
  chapters: number;
  verses: number[];
  description: string;
  category: string;
}

export const BIBLE_BOOKS: BibleBook[] = [
  // ── OLD TESTAMENT ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Genesis",
    abbreviation: "Gen",
    testament: "OT",
    chapters: 50,
    verses: [
      31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33,
      38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43,
      36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
    ],
    description:
      "The book of beginnings — creation, the fall, the flood, and the patriarchs Abraham, Isaac, Jacob, and Joseph.",
    category: "Law",
  },
  {
    id: 2,
    name: "Exodus",
    abbreviation: "Exo",
    testament: "OT",
    chapters: 40,
    verses: [
      22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27,
      25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38,
      29, 31, 43, 38,
    ],
    description:
      "Israel's deliverance from Egypt through Moses, the giving of the Law at Sinai, and the building of the Tabernacle.",
    category: "Law",
  },
  {
    id: 3,
    name: "Leviticus",
    abbreviation: "Lev",
    testament: "OT",
    chapters: 27,
    verses: [
      17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 24,
      16, 15, 18, 21, 48, 25, 52, 34,
    ],
    description:
      "The manual of worship and holiness for the priests of Israel, covering sacrifices, festivals, and the call to holy living.",
    category: "Law",
  },
  {
    id: 4,
    name: "Numbers",
    abbreviation: "Num",
    testament: "OT",
    chapters: 36,
    verses: [
      54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32,
      22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
    ],
    description:
      "Israel's 40-year wilderness journey — census, rebellion, and preparation for entering the Promised Land.",
    category: "Law",
  },
  {
    id: 5,
    name: "Deuteronomy",
    abbreviation: "Deu",
    testament: "OT",
    chapters: 34,
    verses: [
      46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22,
      21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
    ],
    description:
      "Moses' farewell sermons to Israel, restating the Law and calling the people to covenant faithfulness.",
    category: "Law",
  },
  {
    id: 6,
    name: "Joshua",
    abbreviation: "Jos",
    testament: "OT",
    chapters: 24,
    verses: [
      18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28,
      51, 9, 45, 34, 16, 33,
    ],
    description:
      "The conquest and division of Canaan under Joshua's leadership after Israel crosses the Jordan River.",
    category: "History",
  },
  {
    id: 7,
    name: "Judges",
    abbreviation: "Jdg",
    testament: "OT",
    chapters: 21,
    verses: [
      36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31,
      30, 48, 25,
    ],
    description:
      "The dark cycle of Israel's disobedience and deliverance through judges like Deborah, Gideon, and Samson.",
    category: "History",
  },
  {
    id: 8,
    name: "Ruth",
    abbreviation: "Rut",
    testament: "OT",
    chapters: 4,
    verses: [22, 23, 18, 22],
    description:
      "A beautiful story of loyalty, love, and redemption through Ruth's faithfulness to her mother-in-law Naomi.",
    category: "History",
  },
  {
    id: 9,
    name: "1 Samuel",
    abbreviation: "1Sa",
    testament: "OT",
    chapters: 31,
    verses: [
      28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30,
      24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13,
    ],
    description:
      "Israel's transition from judges to monarchy: the life of Samuel, King Saul's rise and fall, and David's emergence.",
    category: "History",
  },
  {
    id: 10,
    name: "2 Samuel",
    abbreviation: "2Sa",
    testament: "OT",
    chapters: 24,
    verses: [
      27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33,
      43, 26, 22, 51, 39, 25,
    ],
    description:
      "King David's reign over all Israel: his triumphs, his sin with Bathsheba, and his family's tragic conflicts.",
    category: "History",
  },
  {
    id: 11,
    name: "1 Kings",
    abbreviation: "1Ki",
    testament: "OT",
    chapters: 22,
    verses: [
      53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46,
      21, 43, 29, 53,
    ],
    description:
      "Solomon's glorious reign, the building of the Temple, the kingdom's division, and prophets like Elijah.",
    category: "History",
  },
  {
    id: 12,
    name: "2 Kings",
    abbreviation: "2Ki",
    testament: "OT",
    chapters: 25,
    verses: [
      18, 37, 29, 19, 19, 57, 35, 14, 46, 47, 8, 48, 21, 21, 22, 20, 27, 37, 47,
      7, 26, 35, 40, 43, 47,
    ],
    description:
      "The decline and fall of both kingdoms — Israel taken by Assyria and Judah exiled to Babylon.",
    category: "History",
  },
  {
    id: 13,
    name: "1 Chronicles",
    abbreviation: "1Ch",
    testament: "OT",
    chapters: 29,
    verses: [
      54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17,
      19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30,
    ],
    description:
      "A retelling of Israel's history from Adam to David, emphasizing the Temple and proper worship.",
    category: "History",
  },
  {
    id: 14,
    name: "2 Chronicles",
    abbreviation: "2Ch",
    testament: "OT",
    chapters: 36,
    verses: [
      17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34,
      11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
    ],
    description:
      "Solomon's Temple to its destruction, highlighting the kings of Judah and calls to repentance.",
    category: "History",
  },
  {
    id: 15,
    name: "Ezra",
    abbreviation: "Ezr",
    testament: "OT",
    chapters: 10,
    verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
    description:
      "The return of exiles from Babylon under Zerubbabel and Ezra, the rebuilding of the Temple, and covenant renewal.",
    category: "History",
  },
  {
    id: 16,
    name: "Nehemiah",
    abbreviation: "Neh",
    testament: "OT",
    chapters: 13,
    verses: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
    description:
      "Nehemiah leads the rebuilding of Jerusalem's walls and national restoration after the Babylonian exile.",
    category: "History",
  },
  {
    id: 17,
    name: "Esther",
    abbreviation: "Est",
    testament: "OT",
    chapters: 10,
    verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
    description:
      "A Jewish woman becomes queen and courageously saves her people from a plot to destroy them in Persia.",
    category: "History",
  },
  {
    id: 18,
    name: "Job",
    abbreviation: "Job",
    testament: "OT",
    chapters: 42,
    verses: [
      22, 17, 16, 21, 22, 18, 22, 20, 22, 24, 19, 24, 22, 21, 19, 27, 31, 33,
      26, 22, 22, 30, 21, 22, 17, 22, 27, 22, 19, 20, 23, 23, 32, 21, 23, 35,
      26, 22, 22, 18, 35, 22,
    ],
    description:
      "The profound story of Job's suffering and his wrestling with God, questioning the nature of pain and divine justice.",
    category: "Poetry",
  },
  {
    id: 19,
    name: "Psalms",
    abbreviation: "Psa",
    testament: "OT",
    chapters: 150,
    verses: [
      6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13,
      31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17,
      13, 11, 5, 20, 28, 22, 35, 22, 20, 43, 35, 50, 27, 25, 49, 33, 16, 13, 13,
      5, 11, 44, 7, 24, 33, 34, 40, 26, 7, 5, 5, 3, 11, 32, 13, 12, 6, 5, 8, 8,
      11, 11, 7, 3, 32, 10, 14, 21, 28, 16, 14, 9, 11, 29, 17, 12, 7, 8, 15, 19,
      11, 20, 6, 14, 13, 17, 10, 10, 23, 20, 4, 4, 13, 17, 12, 20, 3, 17, 12,
      24, 11, 22, 24, 17, 36, 9, 17, 22, 13, 17, 4, 39, 31, 9, 17, 4,
    ],
    description:
      "150 songs and poems of praise, lament, thanksgiving, and wisdom — the prayer book of ancient Israel.",
    category: "Poetry",
  },
  {
    id: 20,
    name: "Proverbs",
    abbreviation: "Pro",
    testament: "OT",
    chapters: 31,
    verses: [
      33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24,
      29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 62, 44, 58,
    ],
    description:
      "Collected wisdom for living well — practical guidance on work, relationships, speech, and reverence for God.",
    category: "Poetry",
  },
  {
    id: 21,
    name: "Ecclesiastes",
    abbreviation: "Ecc",
    testament: "OT",
    chapters: 12,
    verses: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],
    description:
      "The Preacher's philosophical search for meaning under the sun, concluding that fearing God is life's whole purpose.",
    category: "Poetry",
  },
  {
    id: 22,
    name: "Song of Solomon",
    abbreviation: "SoS",
    testament: "OT",
    chapters: 8,
    verses: [17, 17, 11, 16, 16, 13, 13, 14],
    description:
      "A lyrical celebration of love between a bride and groom, often read as an allegory of God's love for his people.",
    category: "Poetry",
  },
  {
    id: 23,
    name: "Isaiah",
    abbreviation: "Isa",
    testament: "OT",
    chapters: 66,
    verses: [
      31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
      17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8,
      31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21,
      14, 21, 22, 11, 12, 19, 12, 25, 24,
    ],
    description:
      "The 'Prince of Prophets' proclaims both judgment and salvation, with breathtaking visions of the Messiah and God's glory.",
    category: "Prophecy",
  },
  {
    id: 24,
    name: "Jeremiah",
    abbreviation: "Jer",
    testament: "OT",
    chapters: 52,
    verses: [
      19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23,
      15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32,
      21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34,
    ],
    description:
      "The 'Weeping Prophet' announces Judah's coming exile to Babylon while promising a new covenant for the future.",
    category: "Prophecy",
  },
  {
    id: 25,
    name: "Lamentations",
    abbreviation: "Lam",
    testament: "OT",
    chapters: 5,
    verses: [22, 22, 66, 22, 22],
    description:
      "Funeral songs mourning the destruction of Jerusalem and the Temple, expressing grief and hope in God's faithfulness.",
    category: "Prophecy",
  },
  {
    id: 26,
    name: "Ezekiel",
    abbreviation: "Eze",
    testament: "OT",
    chapters: 48,
    verses: [
      28, 10, 27, 21, 17, 17, 14, 20, 28, 22, 35, 46, 33, 20, 25, 20, 25, 21,
      22, 20, 28, 22, 35, 22, 22, 33, 22, 28, 25, 45, 28, 25, 35, 43, 14, 22,
      34, 40, 46, 17, 19, 34, 26, 46, 37, 11, 5, 3,
    ],
    description:
      "Visions of God's glory, Israel's sins and exile, and the promise of restoration and a future Temple.",
    category: "Prophecy",
  },
  {
    id: 27,
    name: "Daniel",
    abbreviation: "Dan",
    testament: "OT",
    chapters: 12,
    verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],
    description:
      "Daniel's faithfulness in Babylon and his visions of world empires and God's ultimate kingdom.",
    category: "Prophecy",
  },
  {
    id: 28,
    name: "Hosea",
    abbreviation: "Hos",
    testament: "OT",
    chapters: 14,
    verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
    description:
      "Hosea's broken marriage mirrors Israel's unfaithfulness to God, yet God's relentless love pursues his people.",
    category: "Prophecy",
  },
  {
    id: 29,
    name: "Joel",
    abbreviation: "Joe",
    testament: "OT",
    chapters: 3,
    verses: [20, 32, 21],
    description:
      "A devastating locust plague becomes a call to repentance and a vision of the outpouring of God's Spirit.",
    category: "Prophecy",
  },
  {
    id: 30,
    name: "Amos",
    abbreviation: "Amo",
    testament: "OT",
    chapters: 9,
    verses: [15, 16, 15, 13, 27, 14, 17, 14, 15],
    description:
      "A shepherd-prophet thunders against social injustice and religious hypocrisy in Israel.",
    category: "Prophecy",
  },
  {
    id: 31,
    name: "Obadiah",
    abbreviation: "Oba",
    testament: "OT",
    chapters: 1,
    verses: [21],
    description:
      "The shortest Old Testament book — judgment on Edom for its pride and violence against Judah.",
    category: "Prophecy",
  },
  {
    id: 32,
    name: "Jonah",
    abbreviation: "Jon",
    testament: "OT",
    chapters: 4,
    verses: [17, 10, 10, 11],
    description:
      "The reluctant prophet who fled from God's call, was swallowed by a great fish, and preached to Nineveh.",
    category: "Prophecy",
  },
  {
    id: 33,
    name: "Micah",
    abbreviation: "Mic",
    testament: "OT",
    chapters: 7,
    verses: [16, 13, 12, 13, 15, 16, 20],
    description:
      "Condemnation of corruption and injustice alongside the promise of a ruler born in Bethlehem.",
    category: "Prophecy",
  },
  {
    id: 34,
    name: "Nahum",
    abbreviation: "Nah",
    testament: "OT",
    chapters: 3,
    verses: [15, 13, 19],
    description:
      "God's judgment on mighty Nineveh, the brutal capital of Assyria, proclaiming its coming destruction.",
    category: "Prophecy",
  },
  {
    id: 35,
    name: "Habakkuk",
    abbreviation: "Hab",
    testament: "OT",
    chapters: 3,
    verses: [17, 20, 19],
    description:
      "A prophet's dialogue with God about evil and suffering, ending in a triumphant song of trust.",
    category: "Prophecy",
  },
  {
    id: 36,
    name: "Zephaniah",
    abbreviation: "Zep",
    testament: "OT",
    chapters: 3,
    verses: [18, 15, 20],
    description:
      "Warnings of the Day of the Lord against Judah and the nations, alongside promises of joyful restoration.",
    category: "Prophecy",
  },
  {
    id: 37,
    name: "Haggai",
    abbreviation: "Hag",
    testament: "OT",
    chapters: 2,
    verses: [15, 23],
    description:
      "A post-exilic prophet urging the returned exiles to prioritize rebuilding God's Temple in Jerusalem.",
    category: "Prophecy",
  },
  {
    id: 38,
    name: "Zechariah",
    abbreviation: "Zec",
    testament: "OT",
    chapters: 14,
    verses: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
    description:
      "Night visions and prophecies pointing to the Messiah's coming, his rejection, and his ultimate triumph.",
    category: "Prophecy",
  },
  {
    id: 39,
    name: "Malachi",
    abbreviation: "Mal",
    testament: "OT",
    chapters: 4,
    verses: [14, 17, 18, 6],
    description:
      "The last prophetic voice before 400 years of silence — calling Israel back to covenant faithfulness.",
    category: "Prophecy",
  },

  // ── NEW TESTAMENT ──────────────────────────────────────────────────────────
  {
    id: 40,
    name: "Matthew",
    abbreviation: "Mat",
    testament: "NT",
    chapters: 28,
    verses: [
      25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 45, 27, 31, 32, 29, 23, 31, 25,
      21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27,
    ],
    description:
      "Jesus the Messiah — the fulfillment of Old Testament prophecy, the Sermon on the Mount, and the Great Commission.",
    category: "Gospel",
  },
  {
    id: 41,
    name: "Mark",
    abbreviation: "Mar",
    testament: "NT",
    chapters: 16,
    verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
    description:
      "The fast-paced Gospel of action — Jesus as the suffering servant performing miracles and healing.",
    category: "Gospel",
  },
  {
    id: 42,
    name: "Luke",
    abbreviation: "Luk",
    testament: "NT",
    chapters: 24,
    verses: [
      80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43,
      48, 47, 38, 71, 56, 53,
    ],
    description:
      "The most detailed Gospel — Jesus as Savior of all humanity, with emphasis on outcasts, women, and the poor.",
    category: "Gospel",
  },
  {
    id: 43,
    name: "John",
    abbreviation: "Joh",
    testament: "NT",
    chapters: 21,
    verses: [
      51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40,
      42, 31, 25,
    ],
    description:
      "The spiritual Gospel — Jesus as the Word of God, the I AM, performing signs to reveal his divine glory.",
    category: "Gospel",
  },
  {
    id: 44,
    name: "Acts",
    abbreviation: "Act",
    testament: "NT",
    chapters: 28,
    verses: [
      26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28,
      41, 38, 40, 30, 35, 27, 27, 32, 44, 31,
    ],
    description:
      "The birth and spread of the early church through the Holy Spirit — from Jerusalem to Rome.",
    category: "History",
  },
  {
    id: 45,
    name: "Romans",
    abbreviation: "Rom",
    testament: "NT",
    chapters: 16,
    verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
    description:
      "Paul's masterpiece — the full explanation of sin, salvation by grace through faith, and God's plan for Israel.",
    category: "Epistle",
  },
  {
    id: 46,
    name: "1 Corinthians",
    abbreviation: "1Co",
    testament: "NT",
    chapters: 16,
    verses: [31, 16, 23, 21, 13, 20, 40, 34, 28, 38, 40, 20, 28, 26, 4, 22],
    description:
      "Paul addresses divisions, immorality, spiritual gifts, and the resurrection in the church at Corinth.",
    category: "Epistle",
  },
  {
    id: 47,
    name: "2 Corinthians",
    abbreviation: "2Co",
    testament: "NT",
    chapters: 13,
    verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],
    description:
      "Paul defends his apostolic ministry and speaks of strength in weakness and the grace of giving.",
    category: "Epistle",
  },
  {
    id: 48,
    name: "Galatians",
    abbreviation: "Gal",
    testament: "NT",
    chapters: 6,
    verses: [24, 21, 29, 31, 26, 18],
    description:
      "The Magna Carta of Christian freedom — justification by faith alone, not by works of the Law.",
    category: "Epistle",
  },
  {
    id: 49,
    name: "Ephesians",
    abbreviation: "Eph",
    testament: "NT",
    chapters: 6,
    verses: [23, 22, 21, 32, 33, 24],
    description:
      "The mystery of the church revealed — believers are seated with Christ and called to walk in unity and love.",
    category: "Epistle",
  },
  {
    id: 50,
    name: "Philippians",
    abbreviation: "Php",
    testament: "NT",
    chapters: 4,
    verses: [30, 30, 21, 23],
    description:
      "The epistle of joy — Paul's joyful letter from prison, urging believers to rejoice and pursue Christ-likeness.",
    category: "Epistle",
  },
  {
    id: 51,
    name: "Colossians",
    abbreviation: "Col",
    testament: "NT",
    chapters: 4,
    verses: [29, 23, 25, 18],
    description:
      "Christ's preeminence over all creation and the sufficiency of the Gospel against false teaching.",
    category: "Epistle",
  },
  {
    id: 52,
    name: "1 Thessalonians",
    abbreviation: "1Th",
    testament: "NT",
    chapters: 5,
    verses: [10, 20, 13, 18, 28],
    description:
      "Encouragement for a young church facing persecution, with teaching on Christ's second coming.",
    category: "Epistle",
  },
  {
    id: 53,
    name: "2 Thessalonians",
    abbreviation: "2Th",
    testament: "NT",
    chapters: 3,
    verses: [12, 17, 18],
    description:
      "Clarifying misunderstandings about the Day of the Lord and calling believers to stand firm and work diligently.",
    category: "Epistle",
  },
  {
    id: 54,
    name: "1 Timothy",
    abbreviation: "1Ti",
    testament: "NT",
    chapters: 6,
    verses: [20, 15, 16, 16, 25, 21],
    description:
      "Paul's instructions to his young protégé Timothy on church leadership, sound doctrine, and pastoral care.",
    category: "Epistle",
  },
  {
    id: 55,
    name: "2 Timothy",
    abbreviation: "2Ti",
    testament: "NT",
    chapters: 4,
    verses: [18, 26, 17, 22],
    description:
      "Paul's final letter before martyrdom — a charge to Timothy to guard the Gospel and endure hardship.",
    category: "Epistle",
  },
  {
    id: 56,
    name: "Titus",
    abbreviation: "Tit",
    testament: "NT",
    chapters: 3,
    verses: [16, 15, 15],
    description:
      "Instructions for Titus on appointing elders, teaching sound doctrine, and doing good works in Crete.",
    category: "Epistle",
  },
  {
    id: 57,
    name: "Philemon",
    abbreviation: "Phm",
    testament: "NT",
    chapters: 1,
    verses: [25],
    description:
      "Paul's personal appeal to Philemon to receive back his runaway slave Onesimus as a Christian brother.",
    category: "Epistle",
  },
  {
    id: 58,
    name: "Hebrews",
    abbreviation: "Heb",
    testament: "NT",
    chapters: 13,
    verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
    description:
      "Christ is superior to angels, Moses, and the Levitical priesthood — the new covenant fulfills the old.",
    category: "Epistle",
  },
  {
    id: 59,
    name: "James",
    abbreviation: "Jas",
    testament: "NT",
    chapters: 5,
    verses: [27, 26, 18, 17, 20],
    description:
      "Practical wisdom for Christian living — faith without works is dead; tame the tongue and care for the poor.",
    category: "Epistle",
  },
  {
    id: 60,
    name: "1 Peter",
    abbreviation: "1Pe",
    testament: "NT",
    chapters: 5,
    verses: [25, 25, 22, 19, 14],
    description:
      "Encouragement for suffering believers — a living hope through Christ's resurrection and a call to holy living.",
    category: "Epistle",
  },
  {
    id: 61,
    name: "2 Peter",
    abbreviation: "2Pe",
    testament: "NT",
    chapters: 3,
    verses: [21, 22, 18],
    description:
      "Warning against false teachers and a reminder of the certainty of Christ's return and final judgment.",
    category: "Epistle",
  },
  {
    id: 62,
    name: "1 John",
    abbreviation: "1Jo",
    testament: "NT",
    chapters: 5,
    verses: [10, 29, 24, 21, 21],
    description:
      "Tests of genuine faith — walking in light, loving one another, and knowing the truth about Jesus Christ.",
    category: "Epistle",
  },
  {
    id: 63,
    name: "2 John",
    abbreviation: "2Jo",
    testament: "NT",
    chapters: 1,
    verses: [13],
    description:
      "A brief letter warning a local church against receiving traveling teachers who deny that Jesus came in the flesh.",
    category: "Epistle",
  },
  {
    id: 64,
    name: "3 John",
    abbreviation: "3Jo",
    testament: "NT",
    chapters: 1,
    verses: [14],
    description:
      "Commending Gaius for his hospitality to missionaries while rebuking Diotrephes for his pride.",
    category: "Epistle",
  },
  {
    id: 65,
    name: "Jude",
    abbreviation: "Jud",
    testament: "NT",
    chapters: 1,
    verses: [25],
    description:
      "A passionate call to defend the faith against false teachers who crept in and distorted God's grace.",
    category: "Epistle",
  },
  {
    id: 66,
    name: "Revelation",
    abbreviation: "Rev",
    testament: "NT",
    chapters: 22,
    verses: [
      20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21,
      15, 27, 21,
    ],
    description:
      "The Apocalypse of John — visions of the risen Christ, the tribulation, the millennium, and the New Jerusalem.",
    category: "Prophecy",
  },
];

export const OT_BOOKS = BIBLE_BOOKS.filter((b) => b.testament === "OT");
export const NT_BOOKS = BIBLE_BOOKS.filter((b) => b.testament === "NT");

export function getBook(name: string): BibleBook | undefined {
  return BIBLE_BOOKS.find((b) => b.name.toLowerCase() === name.toLowerCase());
}

export function getBookById(id: number): BibleBook | undefined {
  return BIBLE_BOOKS.find((b) => b.id === id);
}

export const TESTAMENT_CATEGORIES: Record<string, string[]> = {
  Law: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
  History: [
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Acts",
  ],
  Poetry: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon"],
  Prophecy: [
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Revelation",
  ],
  Gospel: ["Matthew", "Mark", "Luke", "John"],
  Epistle: [
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
  ],
};
