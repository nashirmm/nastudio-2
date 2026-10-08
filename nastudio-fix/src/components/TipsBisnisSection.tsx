import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { businessArticles, ArticleItem } from '../data/articlesData';
import { trackWhatsAppClick } from '../lib/analytics';

export const TipsBisnisSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleConsultWA = (title: string) => {
    trackWhatsAppClick('Tips Bisnis Article', title);
    const msg = `Halo NA Studio, saya membaca artikel "${title}" dan tertarik ingin konsultasi pembuatan website yang sesuai.`;
    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="tips" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Tips Bisnis & Edukasi Digital</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Panduan Praktis Mengembangkan Usaha Lewat Website
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pelajari wawasan dan strategi digital praktis yang dapat langsung Anda terapkan untuk menaikkan omzet penjualan dan kredibilitas brand di pasar Indonesia.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg inline-block">
              Update Rutin untuk UMKM Indonesia
            </span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {businessArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group"
            >
              <div className="space-y-3.5">
                
                {/* Meta: Category & Read Time */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-900 bg-indigo-100/70 px-2.5 py-0.5 rounded-md border border-indigo-200/80">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <Clock className="h-3 w-3 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-bold font-display text-base sm:text-lg text-slate-900 group-hover:text-indigo-900 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Key Takeaways snippet */}
                <div className="pt-2 border-t border-slate-200/60 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Poin Penting:
                  </span>
                  {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{takeaway}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{article.publishDate}</span>
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-900 group-hover:text-indigo-700 transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400">· {selectedArticle.readTime}</span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Tutup Artikel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6 overflow-y-auto grow space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <span>Diterbitkan: {selectedArticle.publishDate}</span>
                  <span>·</span>
                  <span>Oleh Tim Redaksi NA Studio</span>
                </div>
              </div>

              {/* Key Takeaways Callout Box */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/70 space-y-2">
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider block">
                  Ringkasan Manfaat untuk Usaha Anda:
                </span>
                <ul className="space-y-1.5">
                  {selectedArticle.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                {selectedArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Ingin menerapkan strategi ini langsung pada website bisnis Anda?
              </span>
              <button
                onClick={() => handleConsultWA(selectedArticle.title)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Konsultasi Strategi via WA</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
