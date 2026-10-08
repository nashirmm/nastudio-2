/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedIndustriesSection } from './components/TrustedIndustriesSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { PerformanceBenchmark } from './components/PerformanceBenchmark';
import { ProcessSection } from './components/ProcessSection';
import { CostCalculator } from './components/CostCalculator';
import { PricingSection } from './components/PricingSection';
import { TipsBisnisSection } from './components/TipsBisnisSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from './lib/analytics';

export default function App() {
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('Paket Bisnis UMKM & Toko WA (Rp 1.190.000)');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    scrollToSection('estimasi');
  };

  const handleOpenContact = () => {
    scrollToSection('kontak');
  };

  const handleExplorePortfolio = () => {
    scrollToSection('contoh');
  };

  const handleConsultService = (serviceName: string) => {
    setSelectedInquiryType(serviceName);
    scrollToSection('kontak');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Clean Glass Navbar */}
      <Navbar
        onOpenCalculator={handleOpenCalculator}
        onOpenContact={handleOpenContact}
      />

      {/* Main Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenCalculator={handleOpenCalculator}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Trusted By / Sektor Industri yang Dilayani */}
        <TrustedIndustriesSection />

        {/* 3 Simple Services */}
        <ServicesSection onSelectService={handleConsultService} />

        {/* Showcase / Portfolio Contoh Website */}
        <PortfolioShowcase onConsultProject={handleConsultService} />

        {/* Keuntungan Nyata untuk Bisnis Indonesia */}
        <PerformanceBenchmark />

        {/* 3 Langkah Mudah Pemesanan */}
        <ProcessSection />

        {/* Pilihan Paket Harga Terjangkau */}
        <PricingSection onSelectPlan={handleConsultService} />

        {/* Kalkulator Biaya Sederhana */}
        <div id="estimasi">
          <CostCalculator onConsultProject={handleConsultService} />
        </div>

        {/* Tips Bisnis & Edukasi Digital (SEO & Otoritas Lokal) */}
        <TipsBisnisSection />

        {/* Testimoni Klien Nyata */}
        <TestimonialsSection />

        {/* Tanya Jawab Sering Ditanyakan */}
        <FaqSection />

        {/* Kontak & Form Pemesanan WA */}
        <ContactSection initialProjectType={selectedInquiryType} />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Chat WhatsApp Admin" className="fixed bottom-5 right-5 z-30">
        <a
          href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20mau%20konsultasi%20bikin%20website"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Floating Button')}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all border border-emerald-400/50"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
