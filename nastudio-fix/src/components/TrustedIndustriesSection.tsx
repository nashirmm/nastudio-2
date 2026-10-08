import React from 'react';
import { 
  Coffee, 
  Truck, 
  ShoppingBag, 
  HeartPulse, 
  Building2, 
  Palette, 
  Briefcase, 
  Car,
  CheckCircle2,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export const TrustedIndustriesSection: React.FC = () => {
  const industries = [
    {
      name: 'Kuliner & Kafe (F&B)',
      description: 'Kafe, Roastery Kopi, Resto & Bakery',
      icon: <Coffee className="h-5 w-5 text-indigo-900" />,
      count: '45+ Bisnis'
    },
    {
      name: 'Kreator & Bisnis Kreatif',
      description: 'Content Creator, Designer & Influencer',
      icon: <Palette className="h-5 w-5 text-indigo-900" />,
      count: '38+ Kreator'
    },
    {
      name: 'Fashion & Retail D2C',
      description: 'Brand Baju, Batik, Hijab & Aksesoris',
      icon: <ShoppingBag className="h-5 w-5 text-indigo-900" />,
      count: '50+ Toko'
    },
    {
      name: 'Logistik & Ekspedisi',
      description: 'Kargo Laut, Darat & Forwarding B2B',
      icon: <Truck className="h-5 w-5 text-indigo-900" />,
      count: '28+ Perusahaan'
    },
    {
      name: 'Klinik & Kesehatan',
      description: 'Klinik Medika, Dokter & Skincare',
      icon: <HeartPulse className="h-5 w-5 text-indigo-900" />,
      count: '24+ Fasilitas'
    },
    {
      name: 'Kontraktor & Interior',
      description: 'Jasa Renovasi, Arsitek & Konstruksi',
      icon: <Building2 className="h-5 w-5 text-indigo-900" />,
      count: '32+ Badan Usaha'
    },
    {
      name: 'Konsultan & Jasa Profesional',
      description: 'Konsultan Pajak, Notaris & Akuntansi',
      icon: <Briefcase className="h-5 w-5 text-indigo-900" />,
      count: '26+ Kantor'
    },
    {
      name: 'Otomotif & Transportasi',
      description: 'Rental Mobil, Bengkel & Sparepart',
      icon: <Car className="h-5 w-5 text-indigo-900" />,
      count: '20+ Mitra'
    }
  ];

  const cityHighlights = [
    'Jakarta', 'Bandung', 'Surabaya', 'Semarang', 'Solo', 'Yogyakarta', 'Medan', 'Makassar', 'Denpasar'
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/70">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Terpercaya di Berbagai Bidang Usaha</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Dipercaya Pelaku Usaha dari Berbagai Sektor Industri
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            Kami berpengalaman merancang website yang disesuaikan dengan alur bisnis nyata di Indonesia—mulai dari UMKM berkembang hingga perseroan (PT & CV).
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md hover:shadow-indigo-950/5 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800/80 flex items-center justify-center group-hover:bg-indigo-900 dark:group-hover:bg-indigo-600 group-hover:text-white transition-colors [&>svg]:group-hover:text-white [&>svg]:dark:text-indigo-300">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-bold text-indigo-900 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-100 dark:border-indigo-800/80">
                    {ind.count}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors leading-snug">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    {ind.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Klien tersebar di seluruh Indonesia:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {cityHighlights.map((city, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-medium shadow-2xs"
              >
                {city}
              </span>
            ))}
            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium">& kota lainnya</span>
          </div>
        </div>

      </div>
    </section>
  );
};
