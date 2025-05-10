import React from 'react';

const experiences = [
  {
    company: 'Edunet Foundation',
    role: 'Research Intern',
    date: 'June 2024 – July 2024',
    details: [
      'Analyzed car sales data and uncovered insights regarding vehicle depreciation and market trends.',
      'Provided valuable information for potential car buyers, sellers, and dealers.'
    ],
  },
  {
    company: 'Prodigy InfoTech',
    role: 'Software Development Intern',
    date: '2024',
    details: [
      'Built a robust library management system using Python and Tkinter.',
      'Developed a Sudoku solver using Java and Swing.'
    ],
  },
  {
    company: 'Next Tech Lab',
    role: 'Associate Software Developer',
    date: 'Oct 2024 – Present',
    details: [
      'Built a secure file-sharing web application with encryption and QR code access.',
      'Developed a real-time chat app using the MERN stack.'
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-500">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <div key={exp.company} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{exp.role}</span>
              <span className="text-sm text-gray-500">{exp.date}</span>
            </div>
            <div className="font-medium text-blue-600 dark:text-blue-400 mb-1">{exp.company}</div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm pl-2">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 