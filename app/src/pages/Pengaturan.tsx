import { useState } from 'react';
import { MapPin, Bell, Info, Check } from 'lucide-react';
import { daftarWilayah } from '@/data/jadwal';
import masjidLogo from '@/assets/masjid.jpg';

interface PengaturanProps {
  wilayahId: string;
  onWilayahChange: (wilayahId: string) => void;
}

export default function Pengaturan({ wilayahId, onWilayahChange }: PengaturanProps) {
  const [notifikasiAdzan, setNotifikasiAdzan] = useState(true);
  const [hanyaMaghrib, setHanyaMaghrib] = useState(true);
  const [semuaWaktu, setSemuaWaktu] = useState(true);
  const [showWilayahModal, setShowWilayahModal] = useState(false);
  const [modeWilayah, setModeWilayah] = useState<'Otomatis' | 'Manual'>('Manual');

  const wilayah = daftarWilayah.find(w => w.id === wilayahId);

  const handleNotifikasiChange = (checked: boolean) => {
    setNotifikasiAdzan(checked);
    if (!checked) {
      setHanyaMaghrib(false);
      setSemuaWaktu(false);
    }
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Header - Centered */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-3 shadow-lg">
          <span className="text-2xl">⚙️</span>
        </div>
        <h1 className="text-2xl font-bold text-green-700">Pengaturan</h1>
        <p className="text-gray-500 text-sm mt-1">Atur preferensi aplikasi</p>
      </div>

      {/* Wilayah Card */}
      <div className="card-soft p-5 mb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <MapPin size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Wilayah</h3>
              <p className="text-gray-500 text-xs">Lokasi jadwal sholat</p>
            </div>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['Otomatis', 'Manual'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setModeWilayah(mode)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${modeWilayah === mode
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-500'
                  }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowWilayahModal(true)}
          className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
        >
          <p className="font-semibold text-gray-800">{wilayah?.nama}, {wilayah?.provinsi}</p>
        </button>
      </div>

      {/* Notifikasi Card */}
      <div className="card-soft p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Bell size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Notifikasi Adzan</h3>
              <p className="text-gray-500 text-xs">Imsak & Sholat 5 Waktu</p>
            </div>
          </div>
          <button
            onClick={() => handleNotifikasiChange(!notifikasiAdzan)}
            className={`w-12 h-6 rounded-full transition-colors relative ${notifikasiAdzan ? 'bg-green-500' : 'bg-gray-300'
              }`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-md ${notifikasiAdzan ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
          </button>
        </div>

        {notifikasiAdzan && (
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className={`w-5 h-5 rounded flex items-center justify-center ${hanyaMaghrib ? 'bg-green-500' : 'border-2 border-gray-300'
                }`}>
                {hanyaMaghrib && <Check size={14} className="text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={hanyaMaghrib}
                onChange={(e) => setHanyaMaghrib(e.target.checked)}
              />
              <span className="text-sm text-gray-700">Hanya Maghrib (Berbuka)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <div className={`w-5 h-5 rounded flex items-center justify-center ${semuaWaktu ? 'bg-green-500' : 'border-2 border-gray-300'
                }`}>
                {semuaWaktu && <Check size={14} className="text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={semuaWaktu}
                onChange={(e) => setSemuaWaktu(e.target.checked)}
              />
              <span className="text-sm text-gray-700">Semua Waktu Sholat</span>
            </label>
          </div>
        )}
      </div>

      {/* Tentang Aplikasi */}
      <div className="card-soft p-5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <Info size={20} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Tentang Aplikasi</h3>
            <p className="text-gray-500 text-xs">Informasi pengembang</p>
          </div>
        </div>

        <div className="space-y-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-gray-600 text-sm italic leading-relaxed">
            <span className="font-medium not-italic">Collaboration with</span> Alumni, DKM Masjid Al-Mu'awanah Bidang Kajian, Pendidikan, dan Intelektual, and IRMA SMAN 1 Langkaplancar
          </p>
          <p className="text-gray-500 text-[10px] mt-2">Versi 2.5 • Terakhir Diupdate: 22 Feb 2026 (12:21) • Publisher: Harapmoon Corp.</p>
        </div>
      </div>

      {/* Masjid Card */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-14 h-14 rounded-full bg-white/20 p-0.5">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={masjidLogo}
                alt="Masjid"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Masjid Al-Mu'awanah</h3>
            <p className="text-green-100 text-xs">SMAN 1 LANGKAPLANCAR</p>
          </div>
        </div>

        <p className="text-green-100 text-sm mb-4 relative z-10">
          Aplikasi ini dikembangkan untuk memudahkan jamaah dalam mengakses jadwal sholat dan hadits harian selama bulan Ramadhan 1447 H.
        </p>

        <div className="flex gap-3 relative z-10">
          <button
            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=-7.50266,108.42143', '_blank')}
            className="flex-1 bg-white/20 hover:bg-white/30 transition-colors rounded-xl py-3 text-sm font-medium"
          >
            Kunjungi Masjid
          </button>
          <button className="flex-1 bg-white/20 hover:bg-white/30 transition-colors rounded-xl py-3 text-sm font-medium">
            Donasi
          </button>
        </div>
      </div>

      {/* Wilayah Modal */}
      {showWilayahModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <MapPin size={16} className="text-green-600" />
                Pilih Wilayah
              </h3>
              <button
                onClick={() => setShowWilayahModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Tutup
              </button>
            </div>
            <div className="overflow-y-auto max-h-96">
              {daftarWilayah.map((w) => (
                <button
                  key={w.id}
                  onClick={() => {
                    onWilayahChange(w.id);
                    setShowWilayahModal(false);
                  }}
                  className={`w-full text-left px-4 py-3 border-b border-gray-50 ${w.id === wilayahId ? 'bg-green-50' : 'hover:bg-gray-50'
                    }`}
                >
                  <p className={`font-medium ${w.id === wilayahId ? 'text-green-700' : 'text-gray-800'}`}>
                    {w.nama}
                  </p>
                  <p className="text-xs text-gray-500">{w.provinsi}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
