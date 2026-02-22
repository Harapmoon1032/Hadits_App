export interface Hadits {
  waktu: string;
  judul: string;
  arab: string;
  arti: string;
  sumber: string;
  hikmah: string;
}

export interface HariHadits {
  hari: number;
  tanggal: string;
  tema: string;
  hadits: Hadits[];
}

// Hadits dimulai dari 19 Februari 2026 (Hari ke-1 Ramadhan)
export const dataHaditsRamadhan: HariHadits[] = [
  {
    hari: 1,
    tanggal: "19 Februari 2026",
    tema: "Niat dan Keutamaan Ramadhan",
    hadits: [
      {
        waktu: "Subuh",
        judul: "Pentingnya Niat",
        arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        arti: "Sesungguhnya setiap amalan tergantung pada niatnya. Dan sesungguhnya setiap orang akan mendapatkan apa yang ia niatkan.",
        sumber: "HR. Bukhari (No. 1) & Muslim (No. 1907)",
        hikmah: "Mengingatkan jamaah untuk meluruskan niat puasa semata-mata karena Allah, bukan karena budaya atau ikut-ikutan."
      },
      {
        waktu: "Dzuhur",
        judul: "Pintu Surga Ar-Rayyan",
        arab: "فِي الْجَنَّةِ ثَمَانِيَةُ أَبْوَابٍ، فِيهَا بَابٌ يُسَمَّى الرَّيَّانُ، لاَ يَدْخُلُهُ إِلاَّ الصَّائِمُونَ",
        arti: "Di surga ada delapan pintu, di antaranya ada pintu yang dinamakan Ar-Rayyan. Tidak ada yang memasukinya kecuali orang-orang yang berpuasa.",
        sumber: "HR. Bukhari (No. 3257)",
        hikmah: "Memotivasi jamaah yang merasa lapar/haus bahwa balasannya adalah fasilitas VIP (pintu khusus) di surga."
      },
      {
        waktu: "Asar",
        judul: "Bau Mulut Orang Berpuasa",
        arab: "وَالَّذِي نَفْسِي بِيَدِهِ، لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ",
        arti: "Demi Dzat yang jiwa Muhammad berada di tangan-Nya, sungguh bau mulut orang yang berpuasa lebih harum di sisi Allah daripada bau minyak kasturi.",
        sumber: "HR. Bukhari (No. 1904) & Muslim (No. 1151)",
        hikmah: "Menghibur jamaah agar tidak minder dengan kondisi fisik saat puasa, karena itu bernilai tinggi di mata Allah."
      },
      {
        waktu: "Maghrib",
        judul: "Dua Kebahagiaan",
        arab: "لِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ حِينَ يُفْطِرُ، وَفَرْحَةٌ حِينَ يَلْقَى رَبَّهُ",
        arti: "Bagi orang yang berpuasa ada dua kebahagiaan: kebahagiaan ketika berbuka, dan kebahagiaan ketika bertemu dengan Rabb-nya.",
        sumber: "HR. Bukhari (No. 1904) & Muslim (No. 1151)",
        hikmah: "Mengajarkan rasa syukur saat menyantap hidangan berbuka sebagai nikmat duniawi yang diizinkan Allah."
      },
      {
        waktu: "Isya",
        judul: "Pengampunan Dosa (Tarawih)",
        arab: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا، غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
        arti: "Barangsiapa melakukan qiyam Ramadhan (sholat tarawih) karena iman dan mencari pahala, maka dosa-dosanya yang telah lalu akan diampuni.",
        sumber: "HR. Bukhari (No. 37) & Muslim (No. 759)",
        hikmah: "Membakar semangat untuk melaksanakan sholat Isya berjamaah dilanjutkan dengan Tarawih."
      }
    ]
  },
  {
    hari: 2,
    tanggal: "20 Februari 2026",
    tema: "Menjaga Kualitas Puasa",
    hadits: [
      {
        waktu: "Subuh",
        judul: "Setan Dibelenggu",
        arab: "إِذَا جَاءَ رَمَضَانُ، فُتِحَتْ أَبْوَابُ الْجَنَّةِ، وَغُلِّقَتْ أَبْوَابُ النَّارِ، وَصُفِّدَتِ الشَّيَاطِينُ",
        arti: "Apabila Ramadhan tiba, pintu-pintu surga dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu.",
        sumber: "HR. Bukhari (No. 1899) & Muslim (No. 1079)",
        hikmah: "Tidak ada alasan bermalas-malasan. Jika masih berbuat dosa, itu murni hawa nafsu diri sendiri."
      },
      {
        waktu: "Dzuhur",
        judul: "Puasa adalah Perisai",
        arab: "الصِّيَامُ جُنَّةٌ، فَلاَ يَرْفَثْ وَلاَ يَجْهَلْ",
        arti: "Puasa adalah perisai (junnah), maka janganlah berkata kotor (rafats) dan jangan berbuat bodoh (gaduh)...",
        sumber: "HR. Bukhari (No. 1904) & Muslim (No. 1151)",
        hikmah: "Puasa bukan sekadar menahan lapar, tapi menahan lisan dan emosi di tempat kerja/rumah."
      },
      {
        waktu: "Asar",
        judul: "Menahan Amarah",
        arab: "إِنَّ صَائِمًا يَقُلْ: إِنِّي صَائِمٌ مَرَّتَيْنِ، وَإِنْ قَاتَلَهُ أَوْ شَاتَمَهُ",
        arti: "Jika ada seseorang yang mengajak berkelahi atau mencela, maka katakanlah: 'Sesungguhnya aku sedang berpuasa' (dua kali).",
        sumber: "HR. Bukhari (No. 1904)",
        hikmah: "Latihan self-control saat kondisi fisik lemah di sore hari. Identitas puasa adalah rem otomatis."
      },
      {
        waktu: "Maghrib",
        judul: "Menyegerakan Berbuka",
        arab: "لاَ يَزَالُ النَّاسُ بِخَيْرٍ مَا عَجَّلُوا الْفِطْرَ",
        arti: "Manusia senantiasa berada dalam kebaikan selama mereka menyegerakan berbuka.",
        sumber: "HR. Bukhari (No. 1957) & Muslim (No. 1098)",
        hikmah: "Sunnah Nabi adalah menyegerakan berbuka saat adzan Maghrib, jangan menunda-nunda hingga gelap gulita."
      },
      {
        waktu: "Isya",
        judul: "Keutamaan Sedekah",
        arab: "كَانَ رَسُولُ اللَّهِ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ",
        arti: "Rasulullah SAW adalah orang yang paling dermawan, dan beliau lebih dermawan lagi di bulan Ramadhan.",
        sumber: "HR. Bukhari (No. 6)",
        hikmah: "Mengajak jamaah mengisi kotak amal tarawih atau menyiapkan makanan berbuka esok hari."
      }
    ]
  },
  {
    hari: 3,
    tanggal: "21 Februari 2026",
    tema: "Amalan Pendukung Puasa",
    hadits: [
      {
        waktu: "Subuh",
        judul: "Berkah Sahur",
        arab: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
        arti: "Makan sahurlah kalian, karena sesungguhnya dalam sahur itu terdapat keberkahan.",
        sumber: "HR. Bukhari (No. 1923) & Muslim (No. 1095)",
        hikmah: "Jangan tinggalkan sahur meski hanya seteguk air, karena itu pembeda puasa kita dengan umat terdahulu."
      },
      {
        waktu: "Dzuhur",
        judul: "Meninggalkan Dusta",
        arab: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ، فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
        arti: "Barangsiapa yang tidak meninggalkan perkataan dusta dan mengamalkannya, maka Allah tidak butuh dari rasa lapar dan hausnya.",
        sumber: "HR. Bukhari (No. 1903)",
        hikmah: "Peringatan keras agar jujur dalam berdagang dan bekerja. Bohong bisa menggugurkan pahala puasa."
      },
      {
        waktu: "Asar",
        judul: "Membaca Al-Qur'an",
        arab: "اقْرَءُوا الْقُرْآنَ، فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
        arti: "Bacalah Al-Qur'an, karena sesungguhnya ia akan datang pada hari kiamat sebagai pemberi syafaat bagi pembacanya.",
        sumber: "HR. Muslim (No. 804)",
        hikmah: "Membakar semangat untuk bertadarus di sore hari sebagai pengisi waktu kosong menjelang buka."
      },
      {
        waktu: "Maghrib",
        judul: "Doa Mustajab Saat Berbuka",
        arab: "ثَلَاثَةٌ لَا تُرَدُّ دَعْوَتُهُمْ... وَالصَّائِمُ حِينَ يُفْطِرُ",
        arti: "Ada tiga golongan yang doanya tidak akan ditolak: ... dan orang yang berpuasa ketika berbuka.",
        sumber: "HR. Tirmidzi (No. 2526)",
        hikmah: "Mengingatkan jamaah agar tidak hanya sibuk makan, tapi juga memanjatkan doa terbaik saat berbuka."
      },
      {
        waktu: "Isya",
        judul: "Tarawih Berjamaah",
        arab: "مَنْ قَامَ مَعَ الإِمَامِ حَتَّى يَنْصَرِفَ كُتِبَ لَهُ قِيَامُ لَيْلَةٍ",
        arti: "Barangsiapa yang shalat (Tarawih) bersama imam sampai selesai, maka dituliskan baginya pahala shalat semalam suntuk.",
        sumber: "HR. An-Nasa'i (No. 1364) & Tirmidzi (No. 806)",
        hikmah: "Memotivasi jamaah untuk menyelesaikan rangkaian Tarawih hingga Witir bersama imam di masjid."
      }
    ]
  },
  {
    hari: 4,
    tanggal: "22 Februari 2026",
    tema: "Akhlak dan Kepedulian Sosial",
    hadits: [
      {
        waktu: "Subuh",
        judul: "Keutamaan Sedekah",
        arab: "مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلاَّ مَلَكَانِ يَنْزِلاَنِ فَيَقُولُ أَحَدُهُمَا اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا",
        arti: "Tidak ada satu hari pun saat hamba-hamba Allah bangun di pagi hari, kecuali ada dua malaikat turun. Salah satunya berdoa: 'Ya Allah, berilah ganti bagi orang yang berinfak'.",
        sumber: "HR. Bukhari (No. 1442) & Muslim (No. 1010)",
        hikmah: "Mengawali hari dengan energi positif untuk berbagi kepada sesama di bulan mulia."
      },
      {
        waktu: "Dzuhur",
        judul: "Mencintai Saudara",
        arab: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        arti: "Tidak sempurna iman salah seorang dari kalian sampai ia mencintai bagi saudaranya apa yang ia cintai bagi dirinya sendiri.",
        sumber: "HR. Bukhari (No. 13) & Muslim (No. 45)",
        hikmah: "Ramadhan adalah momentum memperkuat ukhuwah dan empati terhadap kesulitan orang lain."
      },
      {
        waktu: "Asar",
        judul: "Menjaga Lisan",
        arab: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        arti: "Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam.",
        sumber: "HR. Bukhari (No. 6018) & Muslim (No. 47)",
        hikmah: "Menjaga kualitas puasa sore hari dengan menghindari ghibah atau perdebatan yang sia-sia."
      },
      {
        waktu: "Maghrib",
        judul: "Berbagi Takjil",
        arab: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ",
        arti: "Barangsiapa memberi makan berbuka bagi orang yang berpuasa, maka ia mendapatkan pahala seperti orang tersebut.",
        sumber: "HR. Tirmidzi (No. 807)",
        hikmah: "Kesempatan besar melipatgandakan pahala puasa dengan memberi bantuan hidangan berbuka."
      },
      {
        waktu: "Isya",
        judul: "Senyum adalah Sedekah",
        arab: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
        arti: "Senyummu di hadapan saudaramu adalah sedekah bagimu.",
        sumber: "HR. Tirmidzi (No. 1956)",
        hikmah: "Menyebarkan kebahagiaan di masjid saat berkumpul untuk ibadah tarawih."
      }
    ]
  },
  {
    hari: 5,
    tanggal: "23 Februari 2026",
    tema: "Ketaatan dan Istiqamah",
    hadits: [
      {
        waktu: "Subuh",
        judul: "Shalat di Waktunya",
        arab: "أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ؟ قَالَ: الصَّلاَةُ عَلَى وَقْتِهَا",
        arti: "Amalan apa yang paling dicintai Allah? Beliau bersabda: Shalat tepat pada waktunya.",
        sumber: "HR. Bukhari (No. 527) & Muslim (No. 85)",
        hikmah: "Ramadhan melatih kita disiplin bangun awal (sahur) agar tidak telat shalat Subuh."
      }
    ]
  }
];

export const getHaditsByHari = (hari: number): HariHadits | undefined => {
  return dataHaditsRamadhan.find(h => h.hari === hari);
};

// Get hadits based on actual date - Ramadhan starts 19 Feb 2026
export const getCurrentHadits = (): HariHadits => {
  const startDate = new Date(2026, 1, 19); // 19 Feb 2026 (Month is 0-indexed)
  const today = new Date();

  // Create copies with 00:00 time to calculate day difference correctly
  const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffTime = currentDay.getTime() - startDay.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Ramadhan day starts at 1
  const hariRamadhan = Math.max(1, Math.min(diffDays + 1, 30));

  return getHaditsByHari(hariRamadhan) || dataHaditsRamadhan[0];
};

// Get hadits by specific date
export const getHaditsByDate = (date: Date): HariHadits => {
  const startDate = new Date(2026, 1, 19);
  const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const targetDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffTime = targetDay.getTime() - startDay.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hariRamadhan = Math.max(1, Math.min(diffDays + 1, 30));

  return getHaditsByHari(hariRamadhan) || dataHaditsRamadhan[0];
};
