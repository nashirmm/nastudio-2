import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';
import { craftEcommerceImg } from '../assets/images';

interface HeroProps {
  onOpenCalculator: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator, onExplorePortfolio }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      
      {/* Subtle soft gradient background blobs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-600/10 dark:to-purple-600/10 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-48 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-200/40 to-blue-200/30 dark:from-slate-800/40 dark:to-blue-900/20 blur-3xl" 
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/70 dark:border-indigo-800/70 text-indigo-900 dark:text-indigo-300 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>Promo Spesial: Website Siap Pakai Mulai Rp 499.000</span>
            </div>

            {/* Main Headline (Clean minimalist sans-serif) */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] [text-wrap:balance]">
              Bikin Website Bisnis Jadi Mudah, Cepat, dan Terima Beres.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Solusi praktis untuk UMKM, toko online, dan perusahaan di Indonesia. Desain bersih dan elegan, otomatis terhubung ke WhatsApp Anda, dan siap dipakai jualan dalam 3–5 hari kerja.
            </p>

            {/* Key Value Points (Clean list) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Gratis Domain .COM / .ID & Hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Tombol Chat WhatsApp Langsung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Nggak Perlu Paham Coding / IT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Garansi Bantuan & Bebas Revisi</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20mau%20konsultasi%20bikin%20website%20untuk%20usaha%20saya"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Hero Section')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-md shadow-emerald-600/25 transition-all text-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>

              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs transition-all text-center"
              >
                <span>Lihat Contoh Website</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <ShieldCheck className="h-4 w-4 text-indigo-700 dark:text-indigo-400" />
                <span>Pembayaran Bertahap (DP 50% di Awal)</span>
              </div>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span>100+ UMKM & Perusahaan Terbantu</span>
            </div>

          </div>

          {/* Right Column: Clean Visual Showcase (Glass Card & Navy Accent) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-4 sm:p-5 shadow-xl shadow-indigo-950/5 relative overflow-hidden group">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-0.5 rounded-full">
                  www.bisnisanda.com
                </div>
                <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  Online
                </div>
              </div>

              {/* Preview Image with fallbacks */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 shadow-inner">
                <img
                  src={craftEcommerceImg}
                  alt="Contoh Toko Online Bersih Buatan NA Studio"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== '/images/portfolio_craft_ecommerce.jpg') {
                      img.src = '/images/portfolio_craft_ecommerce.jpg';
                    }
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />

                {/* Floating WhatsApp Bubble */}
                <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
                  <div className="h-7 w-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="text-[11px]">
                    <div className="font-bold text-slate-800 dark:text-slate-100">Order Masuk Otomatis</div>
                    <div className="text-slate-500 dark:text-slate-400 text-[10px]">Langsung ke WhatsApp Anda</div>
                  </div>
                </div>
              </div>

              {/* Feature highlight footer on card */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  Harga promo mulai <strong className="text-indigo-900 dark:text-indigo-400 font-bold">Rp 499rb</strong>
                </span>
                <button
                  onClick={onOpenCalculator}
                  className="text-xs font-bold text-indigo-900 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  <span>Cek Estimasi</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
