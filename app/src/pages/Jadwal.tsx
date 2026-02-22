import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Navigation, Calendar } from 'lucide-react';
import { getJadwalBulan, daftarWilayah, findNearestWilayah, type JadwalHarian } from '@/data/jadwal';

interface JadwalProps {
  wilayahId: string;
  onWilayahChange: (wilayahId: string) => void;
}

export default function Jadwal({ wilayahId, onWilayahChange }: JadwalProps) {
  const [showWilayahSelector, setShowWilayahSelector] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [jadwalBulanan, setJadwalBulanan] = useState<JadwalHarian[]>([]);

  const wilayah = daftarWilayah.find(w => w.id === wilayahId);

  const daftarBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJadwalBulan(wilayahId, selectedMonth, selectedYear);
      setJadwalBulanan(data);
    };
    fetchData();
  }, [wilayahId, selectedMonth, selectedYear]);

  const getCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const nearest = findNearestWilayah(
            position.coords.latitude,
            position.coords.longitude
          );
          onWilayahChange(nearest.id);
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
          alert('Tidak dapat mengakses lokasi. Pastikan izin lokasi diaktifkan.');
        }
      );
    } else {
      setIsLocating(false);
      alert('Browser tidak mendukung geolokasi.');
    }
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Header - Centered */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-3 shadow-lg">
          <span className="text-2xl">📅</span>
        </div>
        <h1 className="text-2xl font-bold text-green-700">Jadwal Sholat</h1>
        <p className="text-gray-500 text-sm mt-1">{daftarBulan[selectedMonth - 1]} {selectedYear}</p>
      </div>

      {/* Select Month & Year */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full appearance-none bg-white border border-green-100 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:ring-2 focus:ring-green-100 outline-none"
          >
            {daftarBulan.map((bulan, idx) => (
              <option key={bulan} value={idx + 1}>{bulan}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <div className="w-28 relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="w-full appearance-none bg-white border border-green-100 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:ring-2 focus:ring-green-100 outline-none"
          >
            {[2025, 2026, 2027].map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Wilayah Selector */}
      <div className="card-soft p-4 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <MapPin size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-green-600 text-xs font-bold">{wilayah?.nama.toUpperCase()}</p>
              <p className="text-gray-500 text-xs">{wilayah?.provinsi}</p>
            </div>
          </div>
          <button
            onClick={() => setShowWilayahSelector(!showWilayahSelector)}
            className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-2 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors"
          >
            Ubah
            <ChevronDown size={16} className={`transition-transform ${showWilayahSelector ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Auto Location Button */}
        <button
          onClick={getCurrentLocation}
          disabled={isLocating}
          className="w-full mt-3 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
        >
          <Navigation size={14} className={isLocating ? 'animate-spin' : ''} />
          {isLocating ? 'Mencari lokasi...' : 'Gunakan Lokasi Saat Ini'}
        </button>

        {/* Dropdown Wilayah */}
        {showWilayahSelector && (
          <div className="mt-3 pt-3 border-t border-green-50 max-h-60 overflow-y-auto">
            {daftarWilayah.map((w) => (
              <button
                key={w.id}
                onClick={() => {
                  onWilayahChange(w.id);
                  setShowWilayahSelector(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm ${w.id === wilayahId
                  ? 'bg-green-100 text-green-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {w.nama}, {w.provinsi}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="card-soft p-4 flex items-center gap-4 mb-5 border-l-4 border-l-green-500">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
          <Calendar size={24} className="text-green-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">Cek Jadwal Masa Depan</p>
          <p className="text-xs text-gray-500 leading-relaxed">Pilih bulan dan tahun di atas untuk melihat jadwal sholat mendatang secara akurat.</p>
        </div>
      </div>

      {/* Ramadhan Banner - Conditional */}
      {selectedMonth === 2 && selectedYear === 2026 && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-5 mb-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <p className="text-green-100 text-xs font-medium mb-1 relative z-10">RAMADHAN 1447 H</p>
          <h2 className="text-white text-xl font-bold relative z-10">{daftarBulan[selectedMonth - 1]} {selectedYear}</h2>
        </div>
      )}

      {/* Tabel Jadwal */}
      <div className="bg-white rounded-2xl border border-green-100 overflow-hidden shadow-sm">
        {/* Header Tabel */}
        <div className="grid grid-cols-7 gap-1 bg-green-50 p-3 text-center">
          {['TGL', 'IMS', 'SBH', 'DHU', 'ASR', 'MAG', 'ISY'].map((header) => (
            <span key={header} className="text-[10px] font-bold text-green-700">{header}</span>
          ))}
        </div>

        {/* Data Tabel */}
        <div className="divide-y divide-green-50">
          {jadwalBulanan.map((jadwal) => (
            <JadwalRow key={jadwal.tanggal} jadwal={jadwal} />
          ))}
        </div>
      </div>
    </div>
  );
}

function JadwalRow({ jadwal }: { jadwal: JadwalHarian }) {
  const now = new Date();
  const isToday = jadwal.tanggal === now.getDate() &&
    jadwal.bulan === (now.getMonth() + 1) &&
    jadwal.tahun === now.getFullYear();

  return (
    <div className={`grid grid-cols-7 gap-1 p-3 text-center items-center transition-colors ${isToday ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
      <span className={`text-xs font-medium ${isToday ? 'text-green-700 font-bold' : 'text-gray-700'}`}>
        {jadwal.tanggal}
      </span>
      <span className="text-xs text-gray-600">{jadwal.imsak}</span>
      <span className="text-xs text-gray-600">{jadwal.subuh}</span>
      <span className="text-xs text-gray-600">{jadwal.dzuhur}</span>
      <span className="text-xs text-gray-600">{jadwal.ashar}</span>
      <span className="text-xs text-green-600 font-medium">{jadwal.maghrib}</span>
      <span className="text-xs text-gray-600">{jadwal.isya}</span>
    </div>
  );
}
