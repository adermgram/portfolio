import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[70vh] text-center gap-6 bg-gradient-to-tr from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative w-36 h-36 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-purple-400 blur-sm opacity-60"></div>
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg bg-gray-200 flex items-center justify-center">
          <img
            src="/adam.PNG"
            alt="Adam Idris"
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class=\'text-6xl text-gray-400\'>👤</span>'; }}
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-2">Adam Idris</h1>
      <div className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-1">Software Developer & ML Enthusiast</div>
      <div className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-4 max-w-xl mx-auto">I build modern web apps, solve real-world problems, and love to create things that make life easier.</div>
      <div className="flex gap-4 mt-2 flex-wrap justify-center">
        <a href="mailto:adamidrisadam004@gmail.com" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-teal-500 transition-transform duration-200">Email</a>
        <a href="https://www.linkedin.com/in/adam-idris-adam/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold shadow-lg hover:scale-105 hover:from-gray-800 hover:to-gray-600 transition-transform duration-200 dark:bg-gradient-to-r dark:from-white dark:to-gray-200 dark:text-gray-900">LinkedIn</a>
        <a href="/Adam Idris.pdf" download className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-400 text-white font-semibold shadow-lg hover:scale-105 hover:from-teal-600 hover:to-blue-500 transition-transform duration-200">Download Resume</a>
      </div>
    </section>
  );
} 