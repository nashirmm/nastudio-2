import React from 'react';
import { MessageSquare, Layout, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Kirim Bahan & Diskusi via WhatsApp',
      desc: 'Cukup kirimkan nama usaha, foto produk/layanan, dan nomor HP WhatsApp Anda. Tim kami bantu rapikan susunan katanya.',
      icon: <MessageSquare className="h-6 w-6 text-indigo-900" />
    },
    {
      num: '2',
      title: 'Pengerjaan Desain & Setting Sistem',
      desc: 'Kami mendesain website, menghubungkan domain, dan memasang tombol pesan otomatis ke WhatsApp Anda dalam 2–5 hari kerja.',
      icon: <Layout className="h-6 w-6 text-indigo-900" />
    },
    {
      num: '3',
      title: 'Review Bersama & Siap Dipakai Jualan',
      desc: 'Anda cek tampilan website di HP Anda. Jika ada yang ingin diubah, kami revisi sampai puas. Website langsung siap disebar ke calon pembeli!',
      icon: <Rocket className="h-6 w-6 text-indigo-900" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Alur Kerja Praktis
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Cara Pesan Website: Cukup 3 Langkah Mudah
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tidak ada proses berbelit-belit. Semuanya bisa dikoordinasikan santai lewat chat WhatsApp.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-2xl border border-slate-200 bg-white relative space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  {st.icon}
                </div>
                <span className="text-3xl font-extrabold text-indigo-100">
                  0{st.num}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
