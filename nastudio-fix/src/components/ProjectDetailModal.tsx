import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Quote
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { InteractiveSimulators } from './InteractiveSimulators';
import { trackWhatsAppClick } from '../lib/analytics';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onConsultProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onConsultProject
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'cerita'>('demo');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');

  const handleOrderThis = () => {
    trackWhatsAppClick('Project Detail Modal', project.title);
    const msg = `Halo NA Studio, saya tertarik ingin bikin website seperti contoh "${project.title}" (${project.priceTag}). Boleh dijelaskan langkah pembuatannya?`;
    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900 border border-indigo-200">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">· {project.clientName}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOrderThis}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Mau Seperti Ini</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Title & Tab Switcher */}
        <div className="px-5 sm:px-7 pt-5 pb-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {project.summary}
              </p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                {project.priceTag}
              </span>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 mt-4 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'demo'
                  ? 'bg-indigo-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Coba Simulasi Fitur Website
            </button>

            <button
              onClick={() => setActiveTab('cerita')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'cerita'
                  ? 'bg-indigo-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Cerita Sukses & Ulasan Klien
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-5 sm:px-7 py-4 overflow-y-auto grow space-y-5 bg-slate-50/50">
          
          {/* TAB 1: DEMO SIMULASI INTERAKTIF */}
          {activeTab === 'demo' && (
            <div className="space-y-4">
              
              {/* Device switcher */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Coba langsung cara kerja fiturnya:
                </span>
                
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      deviceMode === 'mobile' ? 'bg-indigo-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Layar HP</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      deviceMode === 'desktop' ? 'bg-indigo-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    <span>Komputer</span>
                  </button>
                </div>
              </div>

              {/* Simulation Container */}
              <div className="flex justify-center p-3 bg-slate-100 rounded-2xl border border-slate-200">
                <div className={`transition-all duration-300 w-full ${deviceMode === 'mobile' ? 'max-w-[400px]' : 'max-w-full'}`}>
                  <InteractiveSimulators type={project.interactiveType} />
                </div>
              </div>

              {/* Fitur yang didapat */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">Fitur Utama yang Disertakan:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CERITA KLIEN */}
          {activeTab === 'cerita' && (
            <div className="space-y-4">
              
              {/* Highlight hasil */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">Hasil Nyata Setelah Website Jadi:</span>
                <div className="text-lg font-bold text-emerald-900 mt-1">
                  {project.results}
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-rose-700 uppercase">Kendala Sebelum Punya Web:</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.story.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-indigo-900 uppercase">Solusi yang Dibuat NA Studio:</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.story.solution}
                  </p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200/80 relative">
                <Quote className="h-6 w-6 text-indigo-300 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                  "{project.story.testimonial.quote}"
                </p>
                <div className="mt-3 pt-3 border-t border-indigo-200/60 flex items-center gap-2 text-xs">
                  <span className="font-bold text-slate-900">{project.story.testimonial.author}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600">{project.story.testimonial.role}</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Mau website seperti ini untuk usaha Anda? Gratis konsultasi dan dibantu sampai online.
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleOrderThis}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Pesan via WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
