import React from 'react';

const skills = [
  { name: 'C++', icon: '🟦' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML', icon: '🌐' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Git', icon: '🔗' },
  { name: 'Bootstrap', icon: '🟪' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Go', icon: '🐹' },
 
];

export default function Skills() {
  return (
    <section id="skills" className="my-16 relative py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80" />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center glass-card p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 cursor-pointer"
          >
            <span className="text-4xl mb-2 drop-shadow-lg">{skill.icon}</span>
            <span className="text-base font-semibold text-gray-700 dark:text-gray-200 text-center">{skill.name}</span>
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