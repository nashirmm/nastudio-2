import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Contoh Website', href: '#contoh' },
    { label: 'Pilihan Paket & Harga', href: '#harga' },
    { label: 'Kenapa Kami?', href: '#keunggulan' },
    { label: 'Tips Bisnis', href: '#tips' },
    { label: 'Tanya Jawab', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-colors duration-200">
      <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white shadow-sm shadow-indigo-900/20">
            <span className="font-bold text-sm tracking-tight">NA</span>
          </div>
          <div>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors">
              NA Studio
            </span>
            <span className="hidden sm:inline-block ml-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              · Jasa Bikin Website
            </span>
          </div>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <button
            onClick={onOpenCalculator}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-all whitespace-nowrap"
          >
            Hitung Biaya
          </button>
          
          <a
            href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20tertarik%20bikin%20website%20untuk%20usaha%20saya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Navbar Desktop')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm shadow-emerald-600/20 transition-all whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-5 space-y-3 shadow-lg transition-colors">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-900 dark:hover:text-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"
            >
              Hitung Estimasi Biaya
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=6285819922239&text=Halo%20NA%20Studio,%20saya%20mau%20tanya%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Navbar Mobile Drawer')}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
