import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs">
                NA
              </div>
              <span className="font-display text-base font-bold text-white tracking-tight">
                NA Studio
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Jasa pembuatan website murah, praktis, dan terima beres untuk UMKM, toko online, dan perusahaan di seluruh Indonesia.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pilihan Layanan
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#harga" className="hover:text-white transition-colors">Paket Landing Page Hemat (Rp 499rb)</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Paket Toko Online WhatsApp (Rp 1,19jt)</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Paket Company Profile (Rp 1,99jt)</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Menu Cepat
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#contoh" className="hover:text-white transition-colors">Contoh Website</a></li>
              <li><a href="#keunggulan" className="hover:text-white transition-colors">Keuntungan Bikin di Sini</a></li>
              <li><a href="#tips" className="hover:text-white transition-colors">Tips Bisnis & Edukasi</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Hubungi WhatsApp Admin</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NA Studio. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-4">
            <span>Privasi Aman</span>
            <span>·</span>
            <span>Garansi 100%</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
