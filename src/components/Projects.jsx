import React from 'react';

const projects = [
  {
    name: 'ScanCycle',
    description: 'A full-stack app that incentivizes recycling with a points-based reward system. Users scan QR codes on recyclables to earn points and receive coupons when their can is full.',
    tech: [
      'React.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Twilio', 'QR Code'
    ],
    image: '/projects/scancycle.jpg',
    link: 'https://github.com/adermgram/scan-cycle',
  },
  {
    name: 'Tide Share',
    description: 'A secure file-sharing web service with AES-256 encryption, QR code access, and single-use download links.',
    tech: ['Node.js', 'Express', 'React', 'Crypto', 'QR Code'],
    link: 'https://tideshare-adermgrams-projects.vercel.app',
    image: '/projects/tideshare.png',
  },
  {
    name: 'Studvize',
    description: 'A RESTful API and web app for user authentication and task management, with secure password storage and efficient MongoDB schema.',
    tech: ['Node.js', 'Express', 'React', 'MongoDB', 'JWT'],
    link: 'https://github.com/adermgram/studvize',
    image: '/projects/studvize.png',
  },
  {
    name: 'adermGPT',
    description: 'A RESTful API integrating Cohere AI to generate text responses, with secure API calls and dynamic deployment.',
    tech: ['Node.js', 'Express', 'React', 'Cohere AI'],
    link: 'https://github.com/adermgram/adermGPT',
    image: '/projects/adermGPT.jpg',
  },
  {
    name: 'Bitcoin Price Prediction',
    description: 'A machine learning model to forecast Bitcoin prices using advanced algorithms and feature engineering.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas'],
    link: '#',
    image: '/projects/bitcoin.jpg',
  },
  {
    name: 'Tetris Game Clone',
    description: 'A fully functional Tetris game built with C++ and Raylib, featuring responsive UI and core game mechanics.',
    tech: ['C++', 'Raylib'],
    link: 'https://github.com/adermgram/Tetris-game',
    image: '/projects/tetris.png',
  },

];

export default function Projects() {
  return (
    <section id="projects" className="my-16 relative py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80" />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="glass-card rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 cursor-pointer">
            <div className="w-full h-36 bg-gradient-to-tr from-blue-200 via-teal-200 to-purple-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class=\'text-4xl text-blue-400 dark:text-blue-300\'>🚀</span>'; }}
                />
              ) : (
                <span className="text-4xl text-blue-400 dark:text-blue-300">🚀</span>
              )}
            </div>
            <div>
              <div className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">{project.name}</div>
              <div className="text-gray-700 dark:text-gray-200 mb-2 text-sm">{project.description}</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-xs font-medium">{t}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">View Project</a>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(180, 220, 255, 0.2);
        }
        .dark .glass-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
} 