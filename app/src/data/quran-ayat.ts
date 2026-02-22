// Sample ayat data for some popular surahs
// In production, this would be fetched from an API

export interface Ayat {
  nomor: number;
  arab: string;
  latin: string;
  arti: string;
}

export interface SurahDetail {
  nomor: number;
  nama: string;
  namaLatin: string;
  arti: string;
  jumlahAyat: number;
  tempatTurun: string;
  audioUrl: string;
  ayat: Ayat[];
}

// Al-Fatihah
export const alFatihah: SurahDetail = {
  nomor: 1,
  nama: "الفاتحة",
  namaLatin: "Al-Fatihah",
  arti: "Pembukaan",
  jumlahAyat: 7,
  tempatTurun: "Mekah",
  audioUrl: "https://server8.mp3quran.net/afs/001.mp3",
  ayat: [
    { nomor: 1, arab: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", latin: "Bismillaahirrahmaanirrahiim", arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." },
    { nomor: 2, arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", latin: "Alhamdu lillaahi rabbil 'aalamiin", arti: "Segala puji bagi Allah, Tuhan semesta alam." },
    { nomor: 3, arab: "الرَّحْمَنِ الرَّحِيمِ", latin: "Arrahmaanirrahiim", arti: "Yang Maha Pengasih, Maha Penyayang." },
    { nomor: 4, arab: "مَالِكِ يَوْمِ الدِّينِ", latin: "Maaliki yaumiddiin", arti: "Pemilik hari pembalasan." },
    { nomor: 5, arab: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", latin: "Iyyaaka na'budu waiyyaaka nasta'iin", arti: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan." },
    { nomor: 6, arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", latin: "Ihdinash shiraathal mustaqiim", arti: "Tunjukilah kami jalan yang lurus." },
    { nomor: 7, arab: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", latin: "Shiraathal ladziina an'amta 'alaihim ghairil maghduubi 'alaihim waladhdhaalliin", arti: "(Yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat." }
  ]
};

// Al-Ikhlas
export const alIkhlas: SurahDetail = {
  nomor: 112,
  nama: "الإخلاص",
  namaLatin: "Al-Ikhlas",
  arti: "Ikhlas",
  jumlahAyat: 4,
  tempatTurun: "Mekah",
  audioUrl: "https://server8.mp3quran.net/afs/112.mp3",
  ayat: [
    { nomor: 1, arab: "قُلْ هُوَ اللَّهُ أَحَدٌ", latin: "Qul huwallaahu ahad", arti: "Katakanlah (Muhammad), \"Allah itu Esa.\"" },
    { nomor: 2, arab: "اللَّهُ الصَّمَدُ", latin: "Allaahush shomad", arti: "Allah itu tempat meminta segala sesuatu." },
    { nomor: 3, arab: "لَمْ يَلِدْ وَلَمْ يُولَدْ", latin: "Lam yalid wa lam yuulad", arti: "(Allah) tidak beranak dan tidak diperanakkan." },
    { nomor: 4, arab: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", latin: "Wa lam yakun lahu kufuwan ahad", arti: "Dan tidak ada sesuatu yang setara dengan Dia." }
  ]
};

// Al-Falaq
export const alFalaq: SurahDetail = {
  nomor: 113,
  nama: "الفلق",
  namaLatin: "Al-Falaq",
  arti: "Waktu Subuh",
  jumlahAyat: 5,
  tempatTurun: "Mekah",
  audioUrl: "https://server8.mp3quran.net/afs/113.mp3",
  ayat: [
    { nomor: 1, arab: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", latin: "Qul a'uuzu birabbil falak", arti: "Katakanlah (Muhammad), \"Aku berlindung kepada Tuhan yang menguasai subuh.\"" },
    { nomor: 2, arab: "مِنْ شَرِّ مَا خَلَقَ", latin: "Min syarri maa khalaq", arti: "Dari kejahatan (makhluk yang) Dia ciptakan." },
    { nomor: 3, arab: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", latin: "Wa min syarri ghaasiqin idzaa waqab", arti: "Dan dari kejahatan malam apabila telah gelap gulita." },
    { nomor: 4, arab: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", latin: "Wa min syarrin naffaatsaati fil 'uqad", arti: "Dan dari kejahatan wanita-wanita tukang sihir yang meniup pada buhul-buhul (tali)." },
    { nomor: 5, arab: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", latin: "Wa min syarri haasidin idzaa hasad", arti: "Dan dari kejahatan orang yang dengki apabila dia dengki." }
  ]
};

// An-Nas
export const anNas: SurahDetail = {
  nomor: 114,
  nama: "الناس",
  namaLatin: "An-Nas",
  arti: "Manusia",
  jumlahAyat: 6,
  tempatTurun: "Mekah",
  audioUrl: "https://server8.mp3quran.net/afs/114.mp3",
  ayat: [
    { nomor: 1, arab: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", latin: "Qul a'uuzu birabbin naas", arti: "Katakanlah (Muhammad), \"Aku berlindung kepada Tuhan manusia.\"" },
    { nomor: 2, arab: "مَلِكِ النَّاسِ", latin: "Malikin naas", arti: "Raja manusia." },
    { nomor: 3, arab: "إِلَهِ النَّاسِ", latin: "Ilaahin naas", arti: "Sembahan manusia." },
    { nomor: 4, arab: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", latin: "Min syarril waswaasil khannaas", arti: "Dari kejahatan (setan) yang membisikkan bisikan (yang menyesatkan) yang bersembunyi." },
    { nomor: 5, arab: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", latin: "Alladzii yuwaswisu fii shuduurin naas", arti: "Yang membisikkan (kejahatan) ke dalam dada manusia." },
    { nomor: 6, arab: "مِنَ الْجِنَّةِ وَالنَّاسِ", latin: "Minal jinnati wannaas", arti: "Dari (golongan) jin dan manusia." }
  ]
};

// Map of available surah details
export const surahDetailsMap: Record<number, SurahDetail> = {
  1: alFatihah,
  112: alIkhlas,
  113: alFalaq,
  114: anNas
};

// Get surah detail by number
export const getSurahDetail = (nomor: number): SurahDetail | null => {
  return surahDetailsMap[nomor] || null;
};

// Check if surah detail is available
export const isSurahDetailAvailable = (nomor: number): boolean => {
  return nomor in surahDetailsMap;
};
