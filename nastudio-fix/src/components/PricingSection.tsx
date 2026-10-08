import React from 'react';
import { Check, MessageCircle, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { trackSelectPricingPlan, trackWhatsAppClick } from '../lib/analytics';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'Paket Hemat Landing Page',
      subtitle: 'Cocok untuk jualan 1 produk, jasa spesifik, atau link bio Instagram/TikTok.',
      originalPrice: 'Rp 850.000',
      price: 'Rp 499.000',
      timeline: '2 - 4 Hari Jadi',
      popular: false,
      features: [
        '1 Halaman promosi berkonversi tinggi',
        'Tombol langsung chat ke WhatsApp Anda',
        'Gratis Domain & Hosting 1 Tahun',
        'Tampilan super cepat & ringan di HP',
        'Dibantu susun tulisan promosi menarik',
        'Garansi perbaikan jika ada kendala'
      ]
    },
    {
      name: 'Paket Bisnis UMKM & Toko WA',
      subtitle: 'Pilihan paling laris! Toko online katalog dengan checkout langsung ke WhatsApp.',
      originalPrice: 'Rp 1.800.000',
      price: 'Rp 1.190.000',
      timeline: '4 - 7 Hari Jadi',
      popular: true,
      badge: 'Paling Banyak Dipilih',
      features: [
        'Katalog produk hingga puluhan foto rapi',
        'Checkout otomatis terformat ke WhatsApp admin',
        'Bisa atur harga diskon, varian rasa / ukuran',
        'Gratis Domain .COM / .ID & Hosting 1 Tahun',
        'Dibantu upload 15 produk pertama sampai siap',
        'Bebas biaya komisi penjualan selamanya',
        'Garansi bantuan penuh selama 1 tahun'
      ]
    },
    {
      name: 'Paket Company Profile Lengkap',
      subtitle: 'Untuk perusahaan, kantor jasa, klinik, atau instansi agar dipercaya klien tender.',
      originalPrice: 'Rp 3.000.000',
      price: 'Rp 1.990.000',
      timeline: '5 - 9 Hari Jadi',
      popular: false,
      features: [
        'Hingga 5 - 7 Halaman Konten Eksklusif',
        'Profil perusahaan, daftar layanan, & galeri',
        'Desain profesional elegan warna navy keunguan',
        'Email bisnis resmi (info@perusahaananda.com)',
        'Terhubung ke Google Maps lokasi kantor',
        'Gratis Domain .COM / .ID & Hosting Cepat',
        'Video panduan gampang untuk update sendiri'
      ]
    }
  ];

  const handleOrderWhatsApp = (planName: string, price: string) => {
    trackSelectPricingPlan(planName, price);
    trackWhatsAppClick('Pricing Section', `${planName} - ${price}`);
    const msg = `Halo NA Studio, saya mau pesan ${planName} (${price}). Bagaimana langkah awalnya ya?`;
    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="harga" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Harga Promo Terjangkau</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Pilihan Paket Website Murah & Terima Beres
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Semua paket sudah termasuk sewa server hosting dan domain gratis selama 1 tahun. Tanpa biaya tersembunyi!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all bg-white ${
                plan.popular
                  ? 'border-indigo-600 shadow-xl shadow-indigo-950/10 ring-2 ring-indigo-600/30 relative'
                  : 'border-slate-200/80 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                
                {plan.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-lg font-bold font-display text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{plan.subtitle}</p>

                {/* Price Display */}
                <div className="mt-4 pb-4 border-b border-slate-100">
                  <div className="text-xs text-rose-500 line-through font-medium">
                    {plan.originalPrice}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1 font-medium">
                    <Clock className="h-3 w-3 text-indigo-700" />
                    <span>Waktu pengerjaan: {plan.timeline}</span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                    Fasilitas yang Anda Dapatkan:
                  </span>
                  <ul className="space-y-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-7 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleOrderWhatsApp(plan.name, plan.price)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-slate-900 hover:bg-indigo-950 text-white'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Pesan Paket Ini via WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-10 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/60 text-center text-xs text-indigo-950 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Sistem Bayar Aman: DP 50% di Awal, Pelunasan Setelah Website Jadi</span>
          </span>
          <span className="hidden sm:inline text-indigo-300">·</span>
          <span>100% Hak Milik Website & Domain Atas Nama Anda</span>
        </div>

      </div>
    </section>
  );
};
