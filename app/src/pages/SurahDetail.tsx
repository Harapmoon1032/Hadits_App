import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause } from 'lucide-react';

interface SurahDetailProps {
  surahNumber: number;
  onBack: () => void;
}

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: Record<string, string>;
}

interface SurahDetailData {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  audioFull: Record<string, string>;
  ayat: Ayat[];
}

export default function SurahDetail({ surahNumber, onBack }: SurahDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [surahDetail, setSurahDetail] = useState<SurahDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [playingAyat, setPlayingAyat] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayatAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSurahDetail = async () => {
      try {
        const response = await fetch(`https://equran.id/api/v2/surat/${surahNumber}`);
        const data = await response.json();
        if (data.code === 200) {
          setSurahDetail(data.data);
        }
      } catch (error) {
        console.error('Error fetching surah detail:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSurahDetail();

    return () => {
      if (audioRef.current) audioRef.current.pause();
      if (ayatAudioRef.current) ayatAudioRef.current.pause();
    };
  }, [surahNumber]);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (ayatAudioRef.current) {
        ayatAudioRef.current.pause();
        setPlayingAyat(null);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audioUrl = surahDetail?.audioFull['05'];
      if (audioUrl) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.play();
        setIsPlaying(true);

        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
    }
  };

  const handlePlayAyat = (ayat: Ayat) => {
    if (playingAyat === ayat.nomorAyat) {
      ayatAudioRef.current?.pause();
      setPlayingAyat(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      if (ayatAudioRef.current) {
        ayatAudioRef.current.pause();
      }
      const audioUrl = ayat.audio['05'];
      if (audioUrl) {
        ayatAudioRef.current = new Audio(audioUrl);
        ayatAudioRef.current.play();
        setPlayingAyat(ayat.nomorAyat);

        ayatAudioRef.current.onended = () => {
          setPlayingAyat(null);
        };
      }
    }
  };

  if (isLoading) {
    return (
      <div className="pb-24 px-4 pt-4 max-w-md mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">📖</div>
          <p className="text-green-600 font-medium">Memuat surah...</p>
        </div>
      </div>
    );
  }

  if (!surahDetail) {
    return (
      <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-green-600 mb-4">
          <ArrowLeft size={20} />
          Kembali
        </button>
        <p className="text-center text-gray-500">Surah tidak ditemukan</p>
      </div>
    );
  }

  const hasAyat = surahDetail.ayat.length > 0;

  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-green-600 mb-4 hover:text-green-700 transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Kembali</span>
      </button>

      {/* Surah Header */}
      <div className="card-soft p-6 mb-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />

        <div className="relative z-10">
          <p className="text-green-600 text-sm font-medium mb-1">
            {surahDetail.tempatTurun} • {surahDetail.jumlahAyat} Ayat
          </p>
          <h1 className="text-3xl font-bold text-green-700 mb-1">{surahDetail.namaLatin}</h1>
          <p className="text-green-600 font-amiri text-2xl mb-2" dir="rtl">{surahDetail.nama}</p>
          <p className="text-gray-500 text-sm">{surahDetail.arti}</p>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className={`mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium mx-auto transition-all ${isPlaying
              ? 'bg-green-500 text-white'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? 'Pause Murottal' : 'Play Murottal'}
          </button>
        </div>
      </div>

      {/* Bismillah */}
      {hasAyat && (
        <div className="text-center mb-6">
          <p className="font-amiri text-2xl text-green-700" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>
      )}

      {/* Ayat List */}
      <div className="space-y-4">
        {surahDetail.ayat.map((ayat: Ayat) => (
          <div key={ayat.nomorAyat} className="card-soft p-5 group hover:bg-green-50/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700 font-bold shadow-sm">
                  {ayat.nomorAyat}
                </div>
                <button
                  onClick={() => handlePlayAyat(ayat)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${playingAyat === ayat.nomorAyat
                    ? 'bg-green-500 text-white shadow-lg animate-pulse'
                    : 'bg-white text-green-600 hover:bg-green-100 shadow-md'
                    }`}
                >
                  {playingAyat === ayat.nomorAyat ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>
              <div className="flex-1">
                <p className="font-amiri text-2xl text-green-900 text-right leading-[2] mb-4" dir="rtl">
                  {ayat.teksArab}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm italic leading-relaxed">{ayat.teksLatin}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{ayat.teksIndonesia}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
