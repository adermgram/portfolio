import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.to);
        return el ? el.offsetTop : 0;
      });
      const scroll = window.scrollY + 120;
      let idx = 0;
      for (let i = 0; i < offsets.length; i++) {
        if (scroll >= offsets[i]) idx = i;
      }
      setActive(navLinks[idx].to);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2 font-extrabold text-xl bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent select-none cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span>Adam</span>
          <span className="hidden sm:inline">Idris</span>
        </div>
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => scrollToSection(link.to)}
              className={`px-4 py-2 rounded-full font-semibold transition text-sm ${active === link.to ? 'bg-blue-500 text-white shadow' : 'hover:bg-blue-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'}`}
            >
              {link.label}
            </button>
          ))}
          <a href="https://github.com/adermgram" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-blue-500 transition" aria-label="GitHub">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <a href="https://github.com/adermgram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition" aria-label="GitHub">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg px-4 pb-4 flex flex-col gap-2 animate-fadein">
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => { scrollToSection(link.to); setMenuOpen(false); }}
              className={`px-4 py-2 rounded-full font-semibold transition text-sm text-left ${active === link.to ? 'bg-blue-500 text-white shadow' : 'hover:bg-blue-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
      <style>{`
        .animate-fadein {
          animation: fadein 0.2s ease;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
} 