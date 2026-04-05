// KJV Bible text for key chapters + generated placeholders for all others.
// Real text: Genesis 1, Psalm 23, John 3:1-21, Romans 8:1-17

export interface VerseText {
  verse: number;
  text: string;
}

export interface ChapterText {
  book: string;
  chapter: number;
  verses: VerseText[];
}

// ─── GENESIS 1 (KJV) ────────────────────────────────────────────────────────
const GENESIS_1: ChapterText = {
  book: "Genesis",
  chapter: 1,
  verses: [
    {
      verse: 1,
      text: "In the beginning God created the heaven and the earth.",
    },
    {
      verse: 2,
      text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
    },
    {
      verse: 3,
      text: "And God said, Let there be light: and there was light.",
    },
    {
      verse: 4,
      text: "And God saw the light, that it was good: and God divided the light from the darkness.",
    },
    {
      verse: 5,
      text: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
    },
    {
      verse: 6,
      text: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
    },
    {
      verse: 7,
      text: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
    },
    {
      verse: 8,
      text: "And God called the firmament Heaven. And the evening and the morning were the second day.",
    },
    {
      verse: 9,
      text: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
    },
    {
      verse: 10,
      text: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
    },
    {
      verse: 11,
      text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
    },
    {
      verse: 12,
      text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
    },
    { verse: 13, text: "And the evening and the morning were the third day." },
    {
      verse: 14,
      text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
    },
    {
      verse: 15,
      text: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
    },
    {
      verse: 16,
      text: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
    },
    {
      verse: 17,
      text: "And God set them in the firmament of the heaven to give light upon the earth,",
    },
    {
      verse: 18,
      text: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
    },
    { verse: 19, text: "And the evening and the morning were the fourth day." },
    {
      verse: 20,
      text: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
    },
    {
      verse: 21,
      text: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
    },
    {
      verse: 22,
      text: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
    },
    { verse: 23, text: "And the evening and the morning were the fifth day." },
    {
      verse: 24,
      text: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
    },
    {
      verse: 25,
      text: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
    },
    {
      verse: 26,
      text: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
    },
    {
      verse: 27,
      text: "So God created man in his own image, in the image of God created he him; male and female created he them.",
    },
    {
      verse: 28,
      text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
    },
    {
      verse: 29,
      text: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
    },
    {
      verse: 30,
      text: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
    },
    {
      verse: 31,
      text: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.",
    },
  ],
};

// ─── PSALM 23 (KJV) ─────────────────────────────────────────────────────────
const PSALM_23: ChapterText = {
  book: "Psalms",
  chapter: 23,
  verses: [
    { verse: 1, text: "The LORD is my shepherd; I shall not want." },
    {
      verse: 2,
      text: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
    },
    {
      verse: 3,
      text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
    },
    {
      verse: 4,
      text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
    },
    {
      verse: 5,
      text: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
    },
    {
      verse: 6,
      text: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.",
    },
  ],
};

// ─── JOHN 3 (KJV, vv1-21) ───────────────────────────────────────────────────
const JOHN_3: ChapterText = {
  book: "John",
  chapter: 3,
  verses: [
    {
      verse: 1,
      text: "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:",
    },
    {
      verse: 2,
      text: "The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him.",
    },
    {
      verse: 3,
      text: "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.",
    },
    {
      verse: 4,
      text: "Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother's womb, and be born?",
    },
    {
      verse: 5,
      text: "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
    },
    {
      verse: 6,
      text: "That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.",
    },
    {
      verse: 7,
      text: "Marvel not that I said unto thee, Ye must be born again.",
    },
    {
      verse: 8,
      text: "The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.",
    },
    {
      verse: 9,
      text: "Nicodemus answered and said unto him, How can these things be?",
    },
    {
      verse: 10,
      text: "Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?",
    },
    {
      verse: 11,
      text: "Verily, verily, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness.",
    },
    {
      verse: 12,
      text: "If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things?",
    },
    {
      verse: 13,
      text: "And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven.",
    },
    {
      verse: 14,
      text: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:",
    },
    {
      verse: 15,
      text: "That whosoever believeth in him should not perish, but have eternal life.",
    },
    {
      verse: 16,
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    },
    {
      verse: 17,
      text: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
    },
    {
      verse: 18,
      text: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.",
    },
    {
      verse: 19,
      text: "And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.",
    },
    {
      verse: 20,
      text: "For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.",
    },
    {
      verse: 21,
      text: "But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God.",
    },
    {
      verse: 22,
      text: "After these things came Jesus and his disciples into the land of Judaea; and there he tarried with them, and baptized.",
    },
    {
      verse: 23,
      text: "And John also was baptizing in Aenon near to Salim, because there was much water there: and they came, and were baptized.",
    },
    { verse: 24, text: "For John was not yet cast into prison." },
    {
      verse: 25,
      text: "Then there arose a question between some of John's disciples and the Jews about purifying.",
    },
    {
      verse: 26,
      text: "And they came unto John, and said unto him, Rabbi, he that was with thee beyond Jordan, to whom thou barest witness, behold, the same baptizeth, and all men come to him.",
    },
    {
      verse: 27,
      text: "John answered and said, A man can receive nothing, except it be given him from heaven.",
    },
    {
      verse: 28,
      text: "Ye yourselves bear me witness, that I said, I am not the Christ, but that I am sent before him.",
    },
    {
      verse: 29,
      text: "He that hath the bride is the bridegroom: but the friend of the bridegroom, which standeth and heareth him, rejoiceth greatly because of the bridegroom's voice: this my joy therefore is fulfilled.",
    },
    { verse: 30, text: "He must increase, but I must decrease." },
    {
      verse: 31,
      text: "He that cometh from above is above all: he that is of the earth is earthly, and speaketh of the earth: he that cometh from heaven is above all.",
    },
    {
      verse: 32,
      text: "And what he hath seen and heard, that he testifieth; and no man receiveth his testimony.",
    },
    {
      verse: 33,
      text: "He that hath received his testimony hath set to his seal that God is true.",
    },
    {
      verse: 34,
      text: "For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him.",
    },
    {
      verse: 35,
      text: "The Father loveth the Son, and hath given all things into his hand.",
    },
    {
      verse: 36,
      text: "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.",
    },
  ],
};

// ─── PSALM 119 (first 8 verses, Aleph) ──────────────────────────────────────
const PSALM_119_partial: VerseText[] = [
  {
    verse: 1,
    text: "Blessed are the undefiled in the way, who walk in the law of the LORD.",
  },
  {
    verse: 2,
    text: "Blessed are they that keep his testimonies, and that seek him with the whole heart.",
  },
  { verse: 3, text: "They also do no iniquity: they walk in his ways." },
  { verse: 4, text: "Thou hast commanded us to keep thy precepts diligently." },
  { verse: 5, text: "O that my ways were directed to keep thy statutes!" },
  {
    verse: 6,
    text: "Then shall I not be ashamed, when I have respect unto all thy commandments.",
  },
  {
    verse: 7,
    text: "I will praise thee with uprightness of heart, when I shall have learned thy righteous judgments.",
  },
  { verse: 8, text: "I will keep thy statutes: O forsake me not utterly." },
];

// ─── JOHN 1 (KJV) ───────────────────────────────────────────────────────────
const JOHN_1: ChapterText = {
  book: "John",
  chapter: 1,
  verses: [
    {
      verse: 1,
      text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    },
    { verse: 2, text: "The same was in the beginning with God." },
    {
      verse: 3,
      text: "All things were made by him; and without him was not any thing made that was made.",
    },
    { verse: 4, text: "In him was life; and the life was the light of men." },
    {
      verse: 5,
      text: "And the light shineth in darkness; and the darkness comprehended it not.",
    },
    { verse: 6, text: "There was a man sent from God, whose name was John." },
    {
      verse: 7,
      text: "The same came for a witness, to bear witness of the Light, that all men through him might believe.",
    },
    {
      verse: 8,
      text: "He was not that Light, but was sent to bear witness of that Light.",
    },
    {
      verse: 9,
      text: "That was the true Light, which lighteth every man that cometh into the world.",
    },
    {
      verse: 10,
      text: "He was in the world, and the world was made by him, and the world knew him not.",
    },
    { verse: 11, text: "He came unto his own, and his own received him not." },
    {
      verse: 12,
      text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:",
    },
    {
      verse: 13,
      text: "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.",
    },
    {
      verse: 14,
      text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    },
  ],
};

// ─── ROMANS 8 (KJV) ─────────────────────────────────────────────────────────
const ROMANS_8: ChapterText = {
  book: "Romans",
  chapter: 8,
  verses: [
    {
      verse: 1,
      text: "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
    },
    {
      verse: 2,
      text: "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.",
    },
    {
      verse: 3,
      text: "For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh:",
    },
    {
      verse: 4,
      text: "That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.",
    },
    {
      verse: 5,
      text: "For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit the things of the Spirit.",
    },
    {
      verse: 6,
      text: "For to be carnally minded is death; but to be spiritually minded is life and peace.",
    },
    {
      verse: 7,
      text: "Because the carnal mind is enmity against God: for it is not subject to the law of God, neither indeed can be.",
    },
    { verse: 8, text: "So then they that are in the flesh cannot please God." },
    {
      verse: 9,
      text: "But ye are not in the flesh, but in the Spirit, if so be that the Spirit of God dwell in you. Now if any man have not the Spirit of Christ, he is none of his.",
    },
    {
      verse: 10,
      text: "And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness.",
    },
    {
      verse: 11,
      text: "But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you.",
    },
    {
      verse: 12,
      text: "Therefore, brethren, we are debtors, not to the flesh, to live after the flesh.",
    },
    {
      verse: 13,
      text: "For if ye live after the flesh, ye shall die: but if ye through the Spirit do mortify the deeds of the body, ye shall live.",
    },
    {
      verse: 14,
      text: "For as many as are led by the Spirit of God, they are the sons of God.",
    },
    {
      verse: 15,
      text: "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.",
    },
    {
      verse: 16,
      text: "The Spirit itself beareth witness with our spirit, that we are the children of God:",
    },
    {
      verse: 17,
      text: "And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.",
    },
    {
      verse: 18,
      text: "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.",
    },
    {
      verse: 19,
      text: "For the earnest expectation of the creature waiteth for the manifestation of the sons of God.",
    },
    {
      verse: 20,
      text: "For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected the same in hope,",
    },
    {
      verse: 21,
      text: "Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.",
    },
    {
      verse: 22,
      text: "For we know that the whole creation groaneth and travaileth in pain together until now.",
    },
    {
      verse: 23,
      text: "And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves groan within ourselves, waiting for the adoption, to wit, the redemption of our body.",
    },
    {
      verse: 24,
      text: "For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for?",
    },
    {
      verse: 25,
      text: "But if we hope for that we see not, then do we with patience wait for it.",
    },
    {
      verse: 26,
      text: "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.",
    },
    {
      verse: 27,
      text: "And he that searcheth the hearts knoweth what is the mind of the Spirit, because he maketh intercession for the saints according to the will of God.",
    },
    {
      verse: 28,
      text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    },
    {
      verse: 29,
      text: "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren.",
    },
    {
      verse: 30,
      text: "Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.",
    },
    {
      verse: 31,
      text: "What shall we then say to these things? If God be for us, who can be against us?",
    },
    {
      verse: 32,
      text: "He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?",
    },
    {
      verse: 33,
      text: "Who shall lay any thing to the charge of God's elect? It is God that justifieth.",
    },
    {
      verse: 34,
      text: "Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.",
    },
    {
      verse: 35,
      text: "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?",
    },
    {
      verse: 36,
      text: "As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.",
    },
    {
      verse: 37,
      text: "Nay, in all these things we are more than conquerors through him that loved us.",
    },
    {
      verse: 38,
      text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,",
    },
    {
      verse: 39,
      text: "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
    },
  ],
};

// Map of real chapter texts
const REAL_CHAPTERS: Map<string, ChapterText> = new Map([
  ["Genesis:1", GENESIS_1],
  ["John:1", JOHN_1],
  ["John:3", JOHN_3],
  ["Psalms:23", PSALM_23],
  ["Romans:8", ROMANS_8],
]);

// Generate placeholder text for any chapter/verse combination
function generatePlaceholderVerses(
  _book: string,
  _chapter: number,
  verseCount: number,
): VerseText[] {
  const templates = [
    "The word of the Lord came to pass in those days, saying: trust in the Lord with all your heart.",
    "And it came to pass that the people heard these words and were greatly moved in their spirits.",
    "Thus saith the Lord of hosts: I am with you, and my presence shall go before you always.",
    "Blessed is the one who seeks the Lord and meditates on his word day and night.",
    "The Lord is gracious and full of compassion, slow to anger and great in mercy.",
    "Hear, O people, the words of the covenant which the Lord God has spoken unto you.",
    "And the glory of the Lord filled the whole earth, and all creation gave him praise.",
    "For the Lord is righteous in all his ways and holy in all his works among the children of men.",
    "Seek the Lord while he may be found; call upon him while he is near.",
    "The heavens declare the glory of God; and the firmament sheweth his handiwork.",
  ];
  return Array.from({ length: verseCount }, (_, i) => ({
    verse: i + 1,
    text: templates[i % templates.length],
  }));
}

export function getChapter(
  book: string,
  chapter: number,
  verseCount: number,
): ChapterText {
  const key = `${book}:${chapter}`;
  const real = REAL_CHAPTERS.get(key);
  if (real) return real;

  // Special handling for Psalms with partial data
  if (book === "Psalms" && chapter === 119) {
    const fullVerses = [
      ...PSALM_119_partial,
      ...generatePlaceholderVerses(
        book,
        chapter,
        verseCount - PSALM_119_partial.length,
      ).map((v) => ({
        verse: v.verse + PSALM_119_partial.length,
        text: v.text,
      })),
    ];
    return { book, chapter, verses: fullVerses };
  }

  return {
    book,
    chapter,
    verses: generatePlaceholderVerses(book, chapter, verseCount),
  };
}
