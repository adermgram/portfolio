import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 pt-24 md:pt-32 max-w-5xl mx-auto px-4">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="w-full text-center py-8 bg-gradient-to-t from-blue-50/60 dark:from-gray-900/60 to-transparent text-gray-500 dark:text-gray-400 text-sm flex flex-col items-center gap-2">
        <div className="flex gap-4 mb-2">
          <a href="mailto:adamidrisadam004@gmail.com" className="hover:text-blue-500 transition"><span className="sr-only">Email</span><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M4 4l8 8 8-8"/></svg></a>
          <a href="https://www.linkedin.com/in/adam-idris-adam/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><span className="sr-only">LinkedIn</span><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v6H2v-6a6 6 0 0 1 6-6h8z"/><circle cx="12" cy="7" r="4"/></svg></a>
        </div>
        <div>&copy; {new Date().getFullYear()} Adam Idris. All rights reserved.</div>
      </footer>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="w-full flex justify-center my-12">
      <svg height="8" width="120" className="opacity-30">
        <ellipse cx="60" cy="4" rx="60" ry="4" fill="url(#grad)" />
        <defs>
          <linearGradient id="grad" x1="0" x2="120" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default App; 