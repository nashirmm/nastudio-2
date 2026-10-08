import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioProjects } from '../data/projectsData';
import { PortfolioProject } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { trackViewDemo, trackWhatsAppClick } from '../lib/analytics';

interface PortfolioShowcaseProps {
  onConsultProject: (title: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onConsultProject }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const handleOpenDemoModal = (project: PortfolioProject) => {
    trackViewDemo(project.title);
    setSelectedProject(project);
  };

  const handleQuickWA = (project: PortfolioProject) => {
    trackWhatsAppClick('Portfolio Card', project.title);
    const msg = `Halo NA Studio, saya tertarik ingin bikin website seperti contoh "${project.title}". Berapa estimasi biaya dan lama pengerjaannya?`;
    window.open(`https://api.whatsapp.com/send?phone=6285819922239&text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contoh" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Contoh Hasil Karya Nyata</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Lihat Contoh Website yang Siap Dipakai Usaha Anda
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Semua website di bawah ini telah disesuaikan dengan kebiasaan pembeli di Indonesia: langsung terhubung ke WhatsApp, mudah dibuka di HP, dan tampilan bersih elegan.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg inline-block">
              Simulasi Interaktif Bisa Dicoba Langsung
            </span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('/images/')) {
                      img.src = '/images/portfolio_craft_ecommerce.jpg';
                    }
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-900 text-white text-xs font-semibold shadow-xs">
                    {project.priceTag}
                  </span>
                </div>

                {/* Hover Trigger Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => handleOpenDemoModal(project)}
                    className="px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform"
                  >
                    <Eye className="h-4 w-4 text-indigo-900" />
                    <span>Coba Demo & Uji Fitur</span>
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex flex-col grow space-y-3.5">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{project.clientName}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-indigo-900 transition-colors mt-0.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Result Highlight */}
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800">
                  {project.results}
                </div>

                {/* Feature Bullet points */}
                <div className="space-y-1.5 pt-1">
                  {project.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-700 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => handleOpenDemoModal(project)}
                    className="text-xs font-bold text-indigo-900 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <span>Coba Demo Interaktif</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => handleQuickWA(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Pesan Model Ini</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsultProject={onConsultProject}
        />
      )}
    </section>
  );
};
