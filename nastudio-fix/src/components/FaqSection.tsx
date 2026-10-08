import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqsData } from '../data/servicesData';
import { trackWhatsAppClick } from '../lib/analytics';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 pb-10">
          <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Tanya Jawab
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Punya pertanyaan seputar pembuatan website? Cek jawabannya di sini:
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-indigo-900 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <span className="text-xs text-slate-600">
            Ada pertanyaan lain yang belum terjawab di sini?
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20mau%20tanya-tanya%20dulu%20soal%20bikin%20website"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('FAQ Help Banner')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Tanya Langsung ke Tim via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
