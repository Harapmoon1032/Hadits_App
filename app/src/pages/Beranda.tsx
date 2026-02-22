import { useState, useEffect } from 'react';
import { MapPin, Sun, Moon, ExternalLink, ChevronDown } from 'lucide-react';
import { getJadwalHariIni, getWaktuBerikutnya, daftarWilayah, type JadwalHarian } from '@/data/jadwal';
import { getCurrentHadits, type HariHadits, type Hadits } from '@/data/hadits';
import masjidLogo from '@/assets/masjid.jpg';

interface BerandaProps {
  wilayahId: string;
  onPageChange: (page: string) => void;
  onWilayahChange: (wilayahId: string) => void;
}

export default function Beranda({ wilayahId, onPageChange, onWilayahChange }: BerandaProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [jadwal, setJadwal] = useState<JadwalHarian | null>(null);
  const [haditsHariIni, setHaditsHariIni] = useState<HariHadits | null>(null);
  const [haditsAktif, setHaditsAktif] = useState<Hadits | null>(null);
  const [waktuBerikutnya, setWaktuBerikutnya] = useState({ nama: '', waktu: '', sisaMenit: 0 });
  const [showWilayahModal, setShowWilayahModal] = useState(false);
  const [waktuAktif, setWaktuAktif] = useState<string>('');

  const wilayah = daftarWilayah.find(w => w.id === wilayahId);

  useEffect(() => {
    const todayHadits = getCurrentHadits();
    setHaditsHariIni(todayHadits);

    const updateTimeData = () => {
      const now = new Date();
      setCurrentTime(now);
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const jadwalData = getJadwalHariIni(wilayahId);
      setJadwal(jadwalData);

      if (jadwalData) {
        setWaktuBerikutnya(getWaktuBerikutnya(jadwalData));

        // Tentukan waktu aktif (yang sedang berlangsung)
        const times = [
          { nama: 'Imsak', menit: toMinutes(jadwalData.imsak) },
          { nama: 'Subuh', menit: toMinutes(jadwalData.subuh) },
          { nama: 'Dzuhur', menit: toMinutes(jadwalData.dzuhur) },
          { nama: 'Ashar', menit: toMinutes(jadwalData.ashar) },
          { nama: 'Maghrib', menit: toMinutes(jadwalData.maghrib) },
          { nama: 'Isya', menit: toMinutes(jadwalData.isya) },
        ];

        let active = '';
        if (currentMinutes < times[0].menit) active = 'Isya'; // Sisa semalam
        else if (currentMinutes < times[1].menit) active = 'Imsak';
        else if (currentMinutes < times[2].menit) active = 'Subuh';
        else if (currentMinutes < times[3].menit) active = 'Dzuhur';
        else if (currentMinutes < times[4].menit) active = 'Ashar';
        else if (currentMinutes < times[5].menit) active = 'Maghrib';
        else active = 'Isya';

        setWaktuAktif(active);

        // Sync Hadits
        const syncHadits = todayHadits.hadits.find(h => h.waktu === active) || todayHadits.hadits[0];
        setHaditsAktif(syncHadits);
      }
    };

    updateTimeData();
    const timer = setInterval(updateTimeData, 60000);

    return () => clearInterval(timer);
  }, [wilayahId]);

  const toMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const formatSisaWaktu = (menit: number) => {
    const jam = Math.floor(menit / 60);
    const sisaMenit = menit % 60;
    if (jam > 0) {
      return `${jam}J ${sisaMenit}M LAGI`;
    }
    return `${sisaMenit}M LAGI`;
  };

  const formatTanggal = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return currentTime.toLocaleDateString('id-ID', options).toUpperCase();
  };


  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Header - Left Aligned */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 bg-white">
          <img src={masjidLogo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <h1 className="text-lg font-bold text-green-800 leading-tight">Masjid Al-Mu'awanah</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">SMAN 1 LANGKAPLANCAR</p>
          <div className="mt-1 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-green-600 text-[10px] font-bold">{formatTanggal()}</p>
          </div>
        </div>
      </div>

      {/* Card Waktu Sholat Berikutnya */}
      {jadwal && (
        <div className="card-soft p-5 mb-4 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-30" />

          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-gray-500 text-xs font-medium">WAKTU SHOLAT BERIKUTNYA</span>
            <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {formatSisaWaktu(waktuBerikutnya.sisaMenit)}
            </span>
          </div>

          <div className="flex justify-between items-center relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{waktuBerikutnya.nama}</h2>
              <p className="text-4xl font-bold text-green-600">{waktuBerikutnya.waktu}</p>
              <div className="flex items-center gap-1 mt-2">
                <MapPin size={14} className="text-green-600" />
                <span className="text-gray-500 text-xs uppercase">{wilayah?.nama || 'Pangandaran'}</span>
              </div>
              <p className="text-gray-400 text-[10px]">SUMBER: KEMENAG RI</p>
            </div>
            <div className="text-5xl">🌙</div>
          </div>
        </div>
      )}

      {/* Dzikir Cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div
          onClick={() => onPageChange('dzikir-pagi')}
          className="card-soft p-4 relative overflow-hidden cursor-pointer hover:shadow-lg transition-all active:scale-95 group"
        >
          <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:rotate-12 transition-transform">☀️</div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
            <Sun size={20} className="text-white" />
          </div>
          <h3 className="font-bold text-gray-800 text-sm">Dzikir Pagi</h3>
          <p className="text-amber-600 text-xs">Antara Subuh - Syuruq</p>
        </div>

        <div
          onClick={() => onPageChange('dzikir-petang')}
          className="card-soft p-4 relative overflow-hidden cursor-pointer hover:shadow-lg transition-all active:scale-95 group"
        >
          <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:-rotate-12 transition-transform">🌙</div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
            <Moon size={20} className="text-white" />
          </div>
          <h3 className="font-bold text-gray-800 text-sm">Dzikir Petang</h3>
          <p className="text-indigo-600 text-xs">Antara Ashar - Maghrib</p>
        </div>
      </div>

      {/* Wilayah Button (Dashboard Selector) */}
      <div className="mb-4">
        <button
          onClick={() => setShowWilayahModal(true)}
          className="w-full card-soft p-4 flex items-center justify-between hover:bg-green-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <MapPin size={20} className="text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">LOKASI SAAT INI</p>
              <p className="text-sm font-bold text-green-700">{wilayah?.nama}, {wilayah?.provinsi}</p>
            </div>
          </div>
          <ChevronDown size={20} className="text-green-600" />
        </button>
      </div>

      {/* Jadwal Sholat */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Jadwal Sholat</h3>
          <button
            onClick={() => onPageChange('jadwal')}
            className="text-green-600 text-sm font-medium hover:underline"
          >
            Edit Wilayah
          </button>
        </div>

        {jadwal && (
          <div className="grid grid-cols-3 gap-2">
            {[
              { nama: 'Subuh', waktu: jadwal.subuh, icon: '🌅' },
              { nama: 'Dzuhur', waktu: jadwal.dzuhur, icon: '☀️' },
              { nama: 'Ashar', waktu: jadwal.ashar, icon: '🌤️' },
              { nama: 'Maghrib', waktu: jadwal.maghrib, icon: '🌇' },
              { nama: 'Isya', waktu: jadwal.isya, icon: '🌙' },
              { nama: 'Imsak', waktu: jadwal.imsak, icon: '🥁' },
            ].map((item) => {
              const isActive = waktuAktif === item.nama;
              return (
                <div
                  key={item.nama}
                  className={`rounded-xl p-3 text-center relative overflow-hidden transition-all duration-500 ${isActive
                    ? 'bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 shadow-lg ring-4 ring-green-100 animate-pulse-subtle'
                    : item.nama === 'Imsak'
                      ? 'bg-gradient-to-br from-red-50 to-orange-50 border border-red-100'
                      : 'bg-white border border-green-50'
                    }`}
                >
                  <span className={`absolute top-1 right-1 text-xs ${isActive ? 'text-white opacity-80' : 'opacity-40'}`}>
                    {item.icon}
                  </span>
                  <p className={`text-[10px] font-bold mb-1 ${isActive ? 'text-green-50' : item.nama === 'Imsak' ? 'text-red-500' : 'text-gray-500'
                    }`}>{item.nama.toUpperCase()}</p>
                  <p className={`font-bold ${isActive ? 'text-white text-lg' : item.nama === 'Imsak' ? 'text-red-600' : 'text-gray-800'
                    }`}>{item.waktu}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Hadits Saat Ini */}
      {haditsAktif && (
        <div className="mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Hadits Saat Ini</h3>
            <span className="text-green-600 text-xs font-bold bg-green-50 px-3 py-1 rounded-full border border-green-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              WAKTU {waktuAktif.toUpperCase()}
            </span>
          </div>

          <div className="card-soft p-6 relative overflow-hidden group shadow-md hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" />

            <p className="text-green-800 text-2xl font-amiri text-right leading-[1.8] mb-5 relative z-10" dir="rtl">
              {haditsAktif.arab}
            </p>
            <div className="bg-green-50/50 rounded-2xl p-4 mb-4 border border-green-100/50 relative z-10">
              <p className="text-gray-700 text-sm italic leading-relaxed">
                &quot;{haditsAktif.arti}&quot;
              </p>
            </div>

            <div className="flex justify-between items-center relative z-10 mb-4">
              <p className="text-green-600 text-[10px] font-bold tracking-widest uppercase">{haditsAktif.sumber}</p>
              <span className="text-xs text-green-700 font-medium bg-white px-2 py-0.5 rounded-lg shadow-sm">Ramadhan Hari ke-{haditsHariIni?.hari}</span>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-4 relative z-10 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-green-300 rounded-full" />
                <p className="text-green-100 text-[10px] font-bold tracking-widest uppercase">MUTIARA HIKMAH</p>
              </div>
              <p className="text-white text-xs leading-relaxed font-medium">{haditsAktif.hikmah}</p>
            </div>
          </div>
        </div>
      )}

      {/* Wilayah Modal */}
      {showWilayahModal && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-end sm:items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="fixed inset-0"
            onClick={() => setShowWilayahModal(false)}
          />
          <div className="bg-white rounded-t-[32px] sm:rounded-[32px] w-full max-w-sm max-h-[80vh] overflow-hidden relative z-10 shadow-2xl animate-in slide-in-from-bottom-full duration-500">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto my-3 sm:hidden" />
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                  <MapPin size={20} className="text-green-600" />
                  Pilih Wilayah
                </h3>
                <p className="text-xs text-gray-500">Jadwal sholat menyesuaikan lokasi</p>
              </div>
              <button
                onClick={() => setShowWilayahModal(false)}
                className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-2 max-h-[60vh]">
              {daftarWilayah.map((w) => (
                <button
                  key={w.id}
                  onClick={() => {
                    onWilayahChange(w.id);
                    setShowWilayahModal(false);
                  }}
                  className={`w-full text-left px-5 py-4 rounded-3xl transition-all border ${w.id === wilayahId
                    ? 'bg-green-50 border-green-200 shadow-sm'
                    : 'bg-white border-gray-100 hover:border-green-100 hover:bg-green-50/30'
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`font-bold ${w.id === wilayahId ? 'text-green-700' : 'text-gray-800'}`}>
                        {w.nama}
                      </p>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{w.provinsi}</p>
                    </div>
                    {w.id === wilayahId && (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                        <span className="text-white text-[10px]">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Button Lihat Kalender */}
      <a
        href="https://online.fliphtml5.com/fpmjm/Kalender-Hadis-Bulan-Ramadhan/#p=1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-200"
      >
        <ExternalLink size={18} />
        Lihat Kalender Hadits Lengkap
      </a>
    </div>
  );
}
