import { Home, BookOpen, BookMarked, Calendar, Settings } from 'lucide-react';

interface BottomNavProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'beranda', label: 'Beranda', icon: Home },
  { id: 'quran', label: 'Quran', icon: BookOpen },
  { id: 'hadits', label: 'Hadits', icon: BookMarked },
  { id: 'jadwal', label: 'Jadwal', icon: Calendar },
  { id: 'atur', label: 'Atur', icon: Settings },
];

export default function BottomNav({ activePage, onPageChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-green-100 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-green-600 scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`relative ${isActive ? 'animate-bounce-soft' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isActive 
                    ? 'bg-green-100' 
                    : 'bg-transparent'
                }`}>
                  <Icon 
                    size={20} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className={isActive ? 'text-green-600' : ''}
                  />
                </div>
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-green-600' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="h-1 w-24 bg-gradient-to-r from-green-300 to-green-500 rounded-full mx-auto mt-1" />
    </nav>
  );
}
