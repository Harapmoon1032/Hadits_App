import { useState, useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import Beranda from '@/pages/Beranda';
import Quran from '@/pages/Quran';
import Hadits from '@/pages/Hadits';
import Jadwal from '@/pages/Jadwal';
import Pengaturan from '@/pages/Pengaturan';
import Dzikir from '@/pages/Dzikir';
import { findNearestWilayah } from '@/data/jadwal';

function App() {
  const [activePage, setActivePage] = useState('beranda');
  const [wilayahId, setWilayahId] = useState('pangandaran');
  const [isLoading, setIsLoading] = useState(true);

  // Load wilayah dari localStorage saat mount dan coba ambil lokasi
  useEffect(() => {
    const savedWilayah = localStorage.getItem('wilayahId');
    if (savedWilayah) {
      setWilayahId(savedWilayah);
      setIsLoading(false);
    } else {
      // Try to get location on first load
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const nearest = findNearestWilayah(
              position.coords.latitude,
              position.coords.longitude
            );
            setWilayahId(nearest.id);
            localStorage.setItem('wilayahId', nearest.id);
            setIsLoading(false);
          },
          (error) => {
            console.error('Error getting location:', error);
            // Keep default pangandaran
            localStorage.setItem('wilayahId', 'pangandaran');
            setIsLoading(false);
          }
        );
      } else {
        setIsLoading(false);
      }
    }
  }, []);

  // Save wilayah ke localStorage saat berubah
  useEffect(() => {
    localStorage.setItem('wilayahId', wilayahId);
  }, [wilayahId]);

  const handleWilayahChange = (newWilayahId: string) => {
    setWilayahId(newWilayahId);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'beranda':
        return <Beranda wilayahId={wilayahId} onPageChange={setActivePage} onWilayahChange={handleWilayahChange} />;
      case 'quran':
        return <Quran />;
      case 'hadits':
        return <Hadits />;
      case 'jadwal':
        return <Jadwal wilayahId={wilayahId} onWilayahChange={handleWilayahChange} />;
      case 'atur':
        return <Pengaturan wilayahId={wilayahId} onWilayahChange={handleWilayahChange} />;
      case 'dzikir-pagi':
        return <Dzikir type="pagi" onBack={() => setActivePage('beranda')} />;
      case 'dzikir-petang':
        return <Dzikir type="petang" onBack={() => setActivePage('beranda')} />;
      default:
        return <Beranda wilayahId={wilayahId} onPageChange={setActivePage} onWilayahChange={handleWilayahChange} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #f1f8e9 50%, #e8f5e9 100%)' }}>
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">🕌</div>
          <p className="text-green-600 font-medium">Memuat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins" style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #f1f8e9 50%, #e8f5e9 100%)' }}>
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-green-200/20 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activePage={activePage} onPageChange={setActivePage} />
    </div>
  );
}

export default App;
