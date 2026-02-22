export interface WaktuSholat {
  nama: string;
  waktu: string;
  warna?: string;
}

export interface JadwalHarian {
  tanggal: number;
  bulan: number;
  tahun: number;
  imsak: string;
  subuh: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

export interface Wilayah {
  id: string;
  nama: string;
  provinsi: string;
  latitude: number;
  longitude: number;
}

export const daftarWilayah: Wilayah[] = [
  { id: "pangandaran", nama: "Pangandaran", provinsi: "Jawa Barat", latitude: -7.6833, longitude: 108.65 },
  { id: "ciamis", nama: "Ciamis", provinsi: "Jawa Barat", latitude: -7.3333, longitude: 108.35 },
  { id: "bandung", nama: "Bandung", provinsi: "Jawa Barat", latitude: -6.9147, longitude: 107.6098 },
  { id: "jakarta", nama: "Jakarta", provinsi: "DKI Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { id: "surabaya", nama: "Surabaya", provinsi: "Jawa Timur", latitude: -7.2575, longitude: 112.7521 },
  { id: "yogyakarta", nama: "Yogyakarta", provinsi: "DI Yogyakarta", latitude: -7.7956, longitude: 110.3695 },
  { id: "semarang", nama: "Semarang", provinsi: "Jawa Tengah", latitude: -6.9667, longitude: 110.4167 },
  { id: "malang", nama: "Malang", provinsi: "Jawa Timur", latitude: -7.9839, longitude: 112.6214 },
  { id: "medan", nama: "Medan", provinsi: "Sumatera Utara", latitude: 3.5952, longitude: 98.6722 },
  { id: "makassar", nama: "Makassar", provinsi: "Sulawesi Selatan", latitude: -5.1477, longitude: 119.4327 },
  { id: "palembang", nama: "Palembang", provinsi: "Sumatera Selatan", latitude: -2.9761, longitude: 104.7754 },
  { id: "denpasar", nama: "Denpasar", provinsi: "Bali", latitude: -8.65, longitude: 115.2167 },
  { id: "padang", nama: "Padang", provinsi: "Sumatera Barat", latitude: -0.95, longitude: 100.3531 },
  { id: "banjarmasin", nama: "Banjarmasin", provinsi: "Kalimantan Selatan", latitude: -3.3167, longitude: 114.6 },
  { id: "pontianak", nama: "Pontianak", provinsi: "Kalimantan Barat", latitude: 0.0, longitude: 109.3333 },
  { id: "manado", nama: "Manado", provinsi: "Sulawesi Utara", latitude: 1.5, longitude: 124.85 }
];

// Data jadwal sholat untuk Pangandaran (Februari 2026)
export const jadwalPangandaran: JadwalHarian[] = [
  { tanggal: 1, bulan: 2, tahun: 2026, imsak: "04:15", subuh: "04:25", dzuhur: "12:00", ashar: "15:18", maghrib: "18:12", isya: "19:25" },
  { tanggal: 2, bulan: 2, tahun: 2026, imsak: "04:15", subuh: "04:25", dzuhur: "12:00", ashar: "15:18", maghrib: "18:12", isya: "19:25" },
  { tanggal: 3, bulan: 2, tahun: 2026, imsak: "04:15", subuh: "04:25", dzuhur: "12:00", ashar: "15:17", maghrib: "18:12", isya: "19:25" },
  { tanggal: 4, bulan: 2, tahun: 2026, imsak: "04:16", subuh: "04:26", dzuhur: "12:00", ashar: "15:17", maghrib: "18:12", isya: "19:25" },
  { tanggal: 5, bulan: 2, tahun: 2026, imsak: "04:16", subuh: "04:26", dzuhur: "12:00", ashar: "15:16", maghrib: "18:11", isya: "19:24" },
  { tanggal: 6, bulan: 2, tahun: 2026, imsak: "04:17", subuh: "04:27", dzuhur: "12:00", ashar: "15:16", maghrib: "18:11", isya: "19:24" },
  { tanggal: 7, bulan: 2, tahun: 2026, imsak: "04:17", subuh: "04:27", dzuhur: "12:00", ashar: "15:16", maghrib: "18:11", isya: "19:24" },
  { tanggal: 8, bulan: 2, tahun: 2026, imsak: "04:17", subuh: "04:27", dzuhur: "12:00", ashar: "15:15", maghrib: "18:11", isya: "19:24" },
  { tanggal: 9, bulan: 2, tahun: 2026, imsak: "04:18", subuh: "04:28", dzuhur: "12:00", ashar: "15:15", maghrib: "18:11", isya: "19:23" },
  { tanggal: 10, bulan: 2, tahun: 2026, imsak: "04:18", subuh: "04:28", dzuhur: "12:00", ashar: "15:14", maghrib: "18:11", isya: "19:23" },
  { tanggal: 11, bulan: 2, tahun: 2026, imsak: "04:18", subuh: "04:28", dzuhur: "12:00", ashar: "15:14", maghrib: "18:11", isya: "19:23" },
  { tanggal: 12, bulan: 2, tahun: 2026, imsak: "04:19", subuh: "04:29", dzuhur: "12:00", ashar: "15:13", maghrib: "18:10", isya: "19:22" },
  { tanggal: 13, bulan: 2, tahun: 2026, imsak: "04:19", subuh: "04:29", dzuhur: "12:00", ashar: "15:13", maghrib: "18:10", isya: "19:22" },
  { tanggal: 14, bulan: 2, tahun: 2026, imsak: "04:19", subuh: "04:29", dzuhur: "12:00", ashar: "15:12", maghrib: "18:10", isya: "19:22" },
  { tanggal: 15, bulan: 2, tahun: 2026, imsak: "04:20", subuh: "04:30", dzuhur: "12:00", ashar: "15:12", maghrib: "18:10", isya: "19:21" },
  { tanggal: 16, bulan: 2, tahun: 2026, imsak: "04:20", subuh: "04:30", dzuhur: "12:00", ashar: "15:11", maghrib: "18:10", isya: "19:21" },
  { tanggal: 17, bulan: 2, tahun: 2026, imsak: "04:20", subuh: "04:30", dzuhur: "12:00", ashar: "15:11", maghrib: "18:09", isya: "19:21" },
  { tanggal: 18, bulan: 2, tahun: 2026, imsak: "04:21", subuh: "04:31", dzuhur: "12:00", ashar: "15:10", maghrib: "18:09", isya: "19:20" },
  { tanggal: 19, bulan: 2, tahun: 2026, imsak: "04:21", subuh: "04:31", dzuhur: "12:00", ashar: "15:10", maghrib: "18:09", isya: "19:20" },
  { tanggal: 20, bulan: 2, tahun: 2026, imsak: "04:21", subuh: "04:31", dzuhur: "12:00", ashar: "15:09", maghrib: "18:09", isya: "19:20" },
  { tanggal: 21, bulan: 2, tahun: 2026, imsak: "04:22", subuh: "04:32", dzuhur: "12:00", ashar: "15:09", maghrib: "18:08", isya: "19:19" },
  { tanggal: 22, bulan: 2, tahun: 2026, imsak: "04:22", subuh: "04:32", dzuhur: "12:00", ashar: "15:08", maghrib: "18:08", isya: "19:19" },
  { tanggal: 23, bulan: 2, tahun: 2026, imsak: "04:22", subuh: "04:32", dzuhur: "12:00", ashar: "15:08", maghrib: "18:08", isya: "19:19" },
  { tanggal: 24, bulan: 2, tahun: 2026, imsak: "04:23", subuh: "04:33", dzuhur: "12:00", ashar: "15:07", maghrib: "18:08", isya: "19:18" },
  { tanggal: 25, bulan: 2, tahun: 2026, imsak: "04:23", subuh: "04:33", dzuhur: "12:00", ashar: "15:07", maghrib: "18:07", isya: "19:18" },
  { tanggal: 26, bulan: 2, tahun: 2026, imsak: "04:23", subuh: "04:33", dzuhur: "12:00", ashar: "15:06", maghrib: "18:07", isya: "19:17" },
  { tanggal: 27, bulan: 2, tahun: 2026, imsak: "04:24", subuh: "04:34", dzuhur: "12:00", ashar: "15:06", maghrib: "18:07", isya: "19:17" },
  { tanggal: 28, bulan: 2, tahun: 2026, imsak: "04:24", subuh: "04:34", dzuhur: "12:00", ashar: "15:05", maghrib: "18:06", isya: "19:16" }
];

// Fungsi untuk mendapatkan jadwal berdasarkan wilayah (simulasi)
export const getJadwalByWilayah = (wilayahId: string): JadwalHarian[] => {
  const wilayah = daftarWilayah.find(w => w.id === wilayahId);
  if (!wilayah) return jadwalPangandaran;

  // Simulasi perbedaan waktu berdasarkan longitude
  const baseLongitude = 108.65; // Pangandaran
  const diffMinutes = Math.round((wilayah.longitude - baseLongitude) * 4);

  return jadwalPangandaran.map(jadwal => ({
    ...jadwal,
    imsak: addMinutes(jadwal.imsak, diffMinutes),
    subuh: addMinutes(jadwal.subuh, diffMinutes),
    dzuhur: addMinutes(jadwal.dzuhur, diffMinutes),
    ashar: addMinutes(jadwal.ashar, diffMinutes),
    maghrib: addMinutes(jadwal.maghrib, diffMinutes),
    isya: addMinutes(jadwal.isya, diffMinutes)
  }));
};

// Helper function untuk menambah menit pada waktu
const addMinutes = (time: string, minutes: number): string => {
  const [hours, mins] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + mins + minutes;
  const newHours = Math.floor(totalMinutes / 60);
  const newMins = totalMinutes % 60;
  return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
};

// Fungsi untuk mendapatkan semua hari dalam satu bulan
export const getJadwalBulan = async (wilayahId: string, bulan: number, tahun: number): Promise<JadwalHarian[]> => {
  const daysInMonth = new Date(tahun, bulan, 0).getDate();
  const baseJadwal = getJadwalByWilayah(wilayahId);

  // Ambil data referensi dari jadwalPangandaran (indeks 0 - 27)
  // Geser sedikit menitnya berdasarkan bulan untuk simulasi musiman
  const seasonalOffset = (bulan - 2) * 2; // Simulasi pergeseran 2 menit per bulan

  const results: JadwalHarian[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const refDay = (d - 1) % 28;
    const ref = baseJadwal[refDay];

    results.push({
      tanggal: d,
      bulan: bulan,
      tahun: tahun,
      imsak: addMinutes(ref.imsak, seasonalOffset),
      subuh: addMinutes(ref.subuh, seasonalOffset),
      dzuhur: addMinutes(ref.dzuhur, seasonalOffset),
      ashar: addMinutes(ref.ashar, seasonalOffset),
      maghrib: addMinutes(ref.maghrib, seasonalOffset),
      isya: addMinutes(ref.isya, seasonalOffset)
    });
  }

  return results;
};

export const getJadwalHariIni = (wilayahId: string = "pangandaran"): JadwalHarian | null => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // Untuk hari ini, kita bisa generate on-the-fly
  const baseJadwal = getJadwalByWilayah(wilayahId);
  const seasonalOffset = (month - 2) * 2;

  const refDay = (day - 1) % 28;
  const ref = baseJadwal[refDay];

  return {
    tanggal: day,
    bulan: month,
    tahun: year,
    imsak: addMinutes(ref.imsak, seasonalOffset),
    subuh: addMinutes(ref.subuh, seasonalOffset),
    dzuhur: addMinutes(ref.dzuhur, seasonalOffset),
    ashar: addMinutes(ref.ashar, seasonalOffset),
    maghrib: addMinutes(ref.maghrib, seasonalOffset),
    isya: addMinutes(ref.isya, seasonalOffset)
  };
};

export const getWaktuBerikutnya = (jadwal: JadwalHarian): { nama: string; waktu: string; sisaMenit: number } => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const waktuList = [
    { nama: "Imsak", waktu: jadwal.imsak },
    { nama: "Subuh", waktu: jadwal.subuh },
    { nama: "Dzuhur", waktu: jadwal.dzuhur },
    { nama: "Ashar", waktu: jadwal.ashar },
    { nama: "Maghrib", waktu: jadwal.maghrib },
    { nama: "Isya", waktu: jadwal.isya }
  ];

  for (const w of waktuList) {
    const [hours, mins] = w.waktu.split(':').map(Number);
    const waktuMinutes = hours * 60 + mins;

    if (waktuMinutes > currentMinutes) {
      return {
        nama: w.nama,
        waktu: w.waktu,
        sisaMenit: waktuMinutes - currentMinutes
      };
    }
  }

  // Jika sudah lewat Isya, kembalikan Imsak besok
  const [imsakHours, imsakMins] = jadwal.imsak.split(':').map(Number);
  return {
    nama: "Imsak",
    waktu: jadwal.imsak,
    sisaMenit: (24 * 60 - currentMinutes) + (imsakHours * 60 + imsakMins)
  };
};

// Find nearest wilayah based on coordinates
export const findNearestWilayah = (lat: number, lon: number): Wilayah => {
  let nearest = daftarWilayah[0];
  let minDistance = Infinity;

  for (const wilayah of daftarWilayah) {
    const distance = Math.sqrt(
      Math.pow(wilayah.latitude - lat, 2) +
      Math.pow(wilayah.longitude - lon, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearest = wilayah;
    }
  }

  return nearest;
};
