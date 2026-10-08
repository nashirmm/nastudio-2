import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Phone, MapPin, Send } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType = '' }) => {
  const [nama, setNama] = useState('');
  const [noWa, setNoWa] = useState('');
  const [jenisWeb, setJenisWeb] = useState(initialProjectType || 'Paket Bisnis UMKM & Toko WA (Rp 1.190.000)');
  const [pesan, setPesan] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !noWa) return;

    trackWhatsAppClick('Contact Form Submission', `${jenisWeb} - ${nama}`);

    const msg = [
      `Halo NA Studio, saya ingin pesan website:`,
      `Nama: ${nama}`,
      `No. WhatsApp: ${noWa}`,
      `Pilihan Paket: ${jenisWeb}`,
      pesan ? `Catatan: ${pesan}` : '',
      `Mohon info langkah selanjutnya ya!`
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Info */}
          <div className="md:col-span-5 space-y-5">
            <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Hubungi Kami
            </span>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Siap Punya Website Keren untuk Usaha Anda?
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Diskusikan kebutuhan bisnis Anda bersama kami. Kami bantu pilihkan solusi yang paling hemat dan tepat sasaran.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">WhatsApp Hotline (Respon Cepat):</div>
                  <div className="font-bold text-slate-900">+62 858-1992-2239</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">Lokasi:</div>
                  <div className="font-bold text-slate-900">Indonesia (Layanan Online Seluruh Indonesia)</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Mau Konsultasi Cepat Tanpa Isi Form?</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                Langsung klik tombol hijau di bawah untuk terhubung ke WhatsApp kami dalam 1 detik.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20mau%20konsultasi%20bikin%20website"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Contact Section Fast Button')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs"
              >
                <span>Buka WhatsApp Sekarang</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Formulir Pemesanan Sederhana
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Isi data singkat berikut dan pesan Anda akan langsung otomatis terformat ke WhatsApp:
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-900"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={noWa}
                  onChange={(e) => setNoWa(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-900"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Pilihan Paket Website
                </label>
                <select
                  value={jenisWeb}
                  onChange={(e) => setJenisWeb(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-900"
                >
                  <option>Paket Hemat Landing Page (Rp 499.000)</option>
                  <option>Paket Bisnis UMKM & Toko WA (Rp 1.190.000)</option>
                  <option>Paket Company Profile Lengkap (Rp 1.990.000)</option>
                  <option>Konsultasi Dulu / Custom</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Ceritakan Singkat Usaha Anda (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Jualan baju online, mau ada katalog dan tombol beli via WA..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Kirim Pemesanan ke WhatsApp NA Studio</span>
              </button>

              {submitted && (
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center gap-1.5 border border-emerald-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Membuka WhatsApp... Silakan klik Kirim pada chat WA Anda!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
