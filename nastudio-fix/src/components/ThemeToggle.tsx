import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${className}`}
    >
      <div className="relative h-4 w-4">
        <Sun
          className={`h-4 w-4 text-amber-500 transition-all duration-300 transform ${
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0 absolute'
          }`}
        />
        <Moon
          className={`h-4 w-4 text-slate-700 dark:text-slate-200 transition-all duration-300 transform ${
            isDark ? 'scale-0 rotate-90 opacity-0 absolute' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
      </div>
      {showLabel && (
        <span className="ml-2 text-xs font-semibold">
          {isDark ? 'Mode Terang' : 'Mode Gelap'}
        </span>
      )}
    </button>
  );
};
