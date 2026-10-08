import React from 'react';
import { Target, ShoppingBag, Building2, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { trackWhatsAppClick } from '../lib/analytics';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'landing-page':
        return <Target className="h-6 w-6 text-indigo-900" />;
      case 'toko-wa':
        return <ShoppingBag className="h-6 w-6 text-indigo-900" />;
      case 'company-profile':
        return <Building2 className="h-6 w-6 text-indigo-900" />;
      default:
        return <Target className="h-6 w-6 text-indigo-900" />;
    }
  };

  const handleWA = (title: string, price: string) => {
    trackWhatsAppClick('Services Section', `${title} - ${price}`);
    const msg = `Halo NA Studio, saya ingin tanya lebih lanjut tentang layanan ${title} (${price}).`;
    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Layanan Utama NA Studio
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Pilih Jenis Website yang Paling Pas untuk Bisnis Anda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tidak perlu bingung dengan istilah IT rumit. Cukup pilih salah satu dari 3 kategori sederhana ini:
          </p>
        </div>

        {/* 3 Simple Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-white ${
                svc.popular
                  ? 'border-indigo-600/60 shadow-lg shadow-indigo-950/5 ring-1 ring-indigo-500/20'
                  : 'border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  {getIcon(svc.id)}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                  </div>
                  <div className="text-xs font-bold text-indigo-950 mt-1">
                    Biaya: {svc.price}
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                    Keunggulan:
                  </span>
                  {svc.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleWA(svc.title, svc.price)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-indigo-950 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Tanya Layanan Ini via WA</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
