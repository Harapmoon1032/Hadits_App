import { ArrowLeft, Sun, Moon, Info } from 'lucide-react';
import { dzikirPagi, dzikirPetang } from '@/data/dzikir';

interface DzikirProps {
    type: 'pagi' | 'petang';
    onBack: () => void;
}

export default function Dzikir({ type, onBack }: DzikirProps) {
    const data = type === 'pagi' ? dzikirPagi : dzikirPetang;
    const isPagi = type === 'pagi';

    return (
        <div className="min-h-screen pb-24 bg-gradient-to-br from-green-50 to-white">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-green-100 px-4 py-4 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    <ArrowLeft size={20} className="text-gray-600" />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-gray-800">
                        Dzikir {isPagi ? 'Pagi' : 'Petang'}
                    </h1>
                    <p className="text-xs text-gray-500">
                        {isPagi ? 'Waktu: Setelah Subuh s/d Syuruq' : 'Waktu: Setelah Ashar s/d Maghrib'}
                    </p>
                </div>
                <div className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center ${isPagi ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                    {isPagi ? <Sun size={20} /> : <Moon size={20} />}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 max-w-md mx-auto space-y-4">
                {/* Info Card */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
                    <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">
                        Dzikir {type} adalah amalan yang sangat dianjurkan untuk memulai dan menutup hari agar senantiasa dalam lindungan Allah SWT.
                    </p>
                </div>

                {/* List Dzikir */}
                {data.map((item, index) => (
                    <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-green-50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
                                {index + 1}
                            </span>
                            <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full">
                                ULANG {item.ulang}
                            </span>
                        </div>

                        <p className="text-2xl font-amiri text-right text-gray-800 leading-[1.8] mb-6 relative z-10" dir="rtl">
                            {item.arab}
                        </p>

                        <div className="space-y-4 relative z-10">
                            <div className="p-4 bg-green-50/50 rounded-2xl border border-green-100/50">
                                <p className="text-green-800 text-[13px] leading-relaxed italic">
                                    &quot;{item.latin}&quot;
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-2xl">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.arti}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 pt-2">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full bg-green-400" />
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{item.sumber}</p>
                                </div>
                                {item.note && (
                                    <p className="text-[10px] text-blue-500 font-medium">
                                        * {item.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
