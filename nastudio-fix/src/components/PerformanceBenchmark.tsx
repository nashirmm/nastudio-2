import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  MessageCircle, 
  BadgePercent, 
  ShieldCheck, 
  Clock, 
  Check 
} from 'lucide-react';

export const PerformanceBenchmark: React.FC = () => {
  const points = [
    {
      icon: <Clock className="h-6 w-6 text-indigo-900" />,
      title: 'Terima Beres Tanpa Perlu Paham IT',
      desc: 'Anda hanya perlu kirim foto dan rincian produk lewat WhatsApp. Semua hal teknis (domain, hosting, desain, setting tombol) kami yang urus tuntas.'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-indigo-900" />,
      title: 'Langsung Konek ke WhatsApp Anda',
      desc: 'Saat calon pembeli ingin order, rincian produk sudah terformat rapi dan langsung terkirim ke chat WhatsApp Anda. Proses jualan jadi jauh lebih cepat.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-900" />,
      title: 'Cepat & Ringan Dibuka di Semua HP',
      desc: 'Website dirancang super ringan sehingga tidak memakan banyak kuota internet pembeli dan langsung terbuka dalam hitungan detik.'
    },
    {
      icon: <BadgePercent className="h-6 w-6 text-indigo-900" />,
      title: 'Bebas Potongan Komisi Penjualan',
      desc: 'Jualan lewat website sendiri artinya 100% keuntungan bersih masuk ke rekening Anda tanpa dipotong admin marketplace 8-12%.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-900" />,
      title: 'Gratis Domain & Hosting 1 Tahun',
      desc: 'Tidak ada biaya tersembunyi. Semua paket sudah termasuk alamat website resmi (.COM / .ID) dan sewa tempat penyimpanan selama setahun.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-900" />,
      title: 'Garansi dan Bantuan Jika Ada Kendala',
      desc: 'Website Anda bergaransi. Kapanpun ingin ganti nomor WhatsApp, update harga menu, atau ada kendala teknis, tim kami siap bantu dengan ramah.'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Keuntungan untuk Bisnis Anda
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Kenapa Ratusan Pemilik Usaha Memilih NA Studio?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami memahami kebutuhan pelaku usaha di Indonesia: praktis, cepat selesai, tampilan berkelas, dan biaya yang sangat terjangkau.
          </p>
        </div>

        {/* 6 Key Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 transition-all space-y-3"
            >
              <div className="h-11 w-11 rounded-xl bg-indigo-100/70 border border-indigo-200/60 flex items-center justify-center">
                {pt.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{pt.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
