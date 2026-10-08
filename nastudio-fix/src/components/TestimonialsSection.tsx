import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { clientTestimonials } from '../data/servicesData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 pb-12">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Ulasan Pemilik Usaha
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Apa Kata Mereka yang Sudah Punya Website Sendiri?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Testimoni jujur dari pelaku UMKM dan pemilik bisnis di berbagai kota di Indonesia:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-900 to-purple-900 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                  <div className="text-[11px] text-slate-500">
                    {item.role} · <strong className="text-indigo-900">{item.business} ({item.city})</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
