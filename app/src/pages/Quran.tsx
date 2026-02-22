import { useState, useEffect, useRef } from 'react';
import { Search, Play, Pause, ExternalLink, ChevronRight } from 'lucide-react';
import SurahDetail from './SurahDetail';

interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<string, string>;
}

export default function Quran() {
  const [searchQuery, setSearchQuery] = useState('');
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingSurah, setPlayingSurah] = useState<number | null>(null);
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('https://equran.id/api/v2/surat');
        const data = await response.json();
        if (data.code === 200) {
          setSurahs(data.data);
        }
      } catch (error) {
        console.error('Error fetching surahs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  const filteredSurah = surahs.filter(surah =>
    surah.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.arti.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.nomor.toString() === searchQuery
  );

  const handlePlay = (e: React.MouseEvent, surah: Surah) => {
    e.stopPropagation();
    if (playingSurah === surah.nomor) {
      audioRef.current?.pause();
      setPlayingSurah(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Audio url from equran.id uses slightly different structure
      const audioUrl = surah.audioFull['05']; // Use one of the reciters
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.play();
        setPlayingSurah(surah.nomor);

        audioRef.current.onended = () => {
          setPlayingSurah(null);
        };
      }
    }
  };

  const handleSurahClick = (surah: Surah) => {
    setSelectedSurah(surah.nomor);
  };

  const handleBack = () => {
    setSelectedSurah(null);
    // Stop audio when going back
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingSurah(null);
    }
  };

  // If a surah is selected, show its detail
  if (selectedSurah) {
    return <SurahDetail surahNumber={selectedSurah} onBack={handleBack} />;
  }

  if (isLoading) {
    return (
      <div className="pb-24 px-4 pt-10 max-w-md mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 animate-bounce">
            <span className="text-3xl">📖</span>
          </div>
          <p className="text-green-600 font-bold">Memuat Al-Quran...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Header - Centered */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-3 shadow-lg">
          <span className="text-2xl">📖</span>
        </div>
        <h1 className="text-2xl font-bold text-green-700">Al-Quran Digital</h1>
        <p className="text-gray-500 text-sm mt-1">Baca dan dengarkan murottal 114 Surah</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari Surah..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-green-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all shadow-sm"
        />
      </div>

      {/* List Surah */}
      <div className="space-y-3">
        {filteredSurah.map((surah) => (
          <div
            key={surah.nomor}
            onClick={() => handleSurahClick(surah)}
            className="card-soft p-4 cursor-pointer group hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${playingSurah === surah.nomor
                  ? 'bg-gradient-to-br from-green-500 to-green-600'
                  : 'bg-gradient-to-br from-green-100 to-green-50'
                  }`}>
                  <span className={`font-bold ${playingSurah === surah.nomor ? 'text-white' : 'text-green-600'}`}>
                    {surah.nomor}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{surah.namaLatin}</h3>
                  <p className="text-gray-500 text-xs">{surah.arti} • {surah.jumlahAyat} Ayat</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-amiri text-lg" dir="rtl">{surah.nama}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-green-50">
              <button
                onClick={(e) => handlePlay(e, surah)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium transition-all ${playingSurah === surah.nomor
                  ? 'bg-green-500 text-white animate-pulse'
                  : 'bg-green-50 text-green-600 hover:bg-green-100'
                  }`}
              >
                {playingSurah === surah.nomor ? <Pause size={16} /> : <Play size={16} />}
                {playingSurah === surah.nomor ? 'Pause' : 'Play'}
              </button>

              <a
                href={`https://quran.com/${surah.nomor}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all"
              >
                <ExternalLink size={14} />
                Quran.com
              </a>

              <div className="flex items-center justify-center px-3 py-2 rounded-xl bg-green-50 text-green-600">
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
