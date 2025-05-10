import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="my-16 flex flex-col items-center">
      <div className="relative w-full max-w-lg rounded-2xl p-8 bg-gradient-to-tr from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-purple-400 flex items-center justify-center mb-4 shadow-md">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1m8 0V9a4 4 0 00-8 0v3" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent text-center">Contact Me</h2>
        <div className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">I'd love to connect! Reach out by email or LinkedIn and I'll get back to you as soon as possible.</div>
        <a
          href="mailto:adamidrisadam004@gmail.com"
          className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold py-2 px-8 rounded-full transition mb-4 shadow-lg text-lg"
        >
          Email Me
        </a>
        <div className="flex flex-col items-center gap-2 text-base text-gray-700 dark:text-gray-200">
          <a href="mailto:adamidrisadam004@gmail.com" className="hover:underline">adamidrisadam004@gmail.com</a>
          <a href="https://www.linkedin.com/in/adam-idris-adam/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
} 