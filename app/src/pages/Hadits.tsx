import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { dataHaditsRamadhan } from '@/data/hadits';

export default function Hadits() {
  const [hariAktif, setHariAktif] = useState(3);
  
  const haditsHariIni = dataHaditsRamadhan.find(h => h.hari === hariAktif) || dataHaditsRamadhan[0];
  
  const prevHari = () => {
    if (hariAktif > 1) setHariAktif(hariAktif - 1);
  };
  
  const nextHari = () => {
    if (hariAktif < 30) setHariAktif(hariAktif + 1);
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-md mx-auto">
      {/* Header - Centered */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-3 shadow-lg">
          <span className="text-2xl">📚</span>
        </div>
        <h1 className="text-2xl font-bold text-green-700">Hadits Daily</h1>
        <p className="text-gray-500 text-sm mt-1">Ramadhan 1447 H</p>
      </div>

      {/* Navigator Hari */}
      <div className="card-soft p-3 flex items-center justify-between mb-5">
        <button 
          onClick={prevHari}
          disabled={hariAktif === 1}
          className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center disabled:opacity-50 hover:bg-green-100 transition-colors"
        >
          <ChevronLeft size={20} className="text-green-600" />
        </button>
        
        <div className="text-center">
          <p className="text-green-600 text-xs font-medium">{haditsHariIni.tanggal}</p>
          <p className="font-bold text-gray-800 text-lg">Hari ke-{hariAktif}</p>
        </div>
        
        <button 
          onClick={nextHari}
          disabled={hariAktif === 30}
          className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center disabled:opacity-50 hover:bg-green-100 transition-colors"
        >
          <ChevronRight size={20} className="text-green-600" />
        </button>
      </div>

      {/* Tema Hari Ini */}
      <div className="card-soft p-6 text-center mb-5 relative overflow-hidden">
        <div className="absolute top-2 right-2 text-4xl opacity-10">✨</div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
          <BookOpen size={24} className="text-white" />
        </div>
        <p className="text-green-600 text-xs font-medium mb-1">TEMA HARI INI</p>
        <h2 className="text-lg font-bold text-gray-800">{haditsHariIni.tema}</h2>
      </div>

      {/* List Hadits */}
      <div className="space-y-4">
        {haditsHariIni.hadits.map((hadits, index) => (
          <div key={index} className="card-soft p-5 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            
            {/* Header Hadits */}
            <div className="flex justify-between items-center mb-3 relative z-10">
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {hadits.waktu.toUpperCase()}
              </span>
              <span className="text-green-600 text-xs font-medium">{hadits.sumber}</span>
            </div>
            
            {/* Judul */}
            <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2 relative z-10">
              <span className="w-1 h-5 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></span>
              {hadits.judul}
            </h3>
            
            {/* Arab */}
            <p className="text-green-700 text-xl font-amiri text-right leading-relaxed mb-3 relative z-10" dir="rtl">
              {hadits.arab}
            </p>
            
            {/* Arti */}
            <div className="bg-green-50 rounded-xl p-4 mb-3 relative z-10">
              <p className="text-gray-700 text-sm italic">
                "{hadits.arti}"
              </p>
            </div>
            
            {/* Hikmah */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 relative z-10">
              <p className="text-amber-700 text-xs font-bold mb-1">HIKMAH RAMADHAN</p>
              <p className="text-gray-700 text-sm">{hadits.hikmah}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
