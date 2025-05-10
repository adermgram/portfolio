import React from 'react';

export default function About() {
  return (
    <section id="about" className="my-16 flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-teal-400 to-purple-400 blur-sm opacity-60"></div>
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg bg-gray-200 flex items-center justify-center">
          <img
            src="/about-pic.JPG"
            alt="Adam Idris"
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class=\'text-5xl text-gray-400\'>👤</span>'; }}
          />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 max-w-2xl text-center">
        Hi! I'm Adam Idris, a passionate software developer and computer science student at SRM University AP. I love building impactful applications, exploring machine learning, and creating fun games. My journey is driven by curiosity and a desire to solve real-world problems with code.
      </p>
      <div className="bg-gradient-to-r from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl p-6 shadow-lg mb-2 w-full max-w-md">
        <div className="font-semibold text-blue-600 dark:text-blue-300 text-center">Education</div>
        <div className="text-center">BSc. in Computer Science, SRM University AP</div>
        <div className="text-sm text-gray-500 text-center">Expected Graduation: May 2025</div>
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400 italic text-center">
        Fun fact: I enjoy building games and tools that make learning and life easier!
      </div>
    </section>
  );
} 