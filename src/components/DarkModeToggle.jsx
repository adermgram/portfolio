import React from 'react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDarkMode((d) => !d)}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {darkMode ? (
        <span role="img" aria-label="Light mode" className="text-yellow-400 text-xl">☀️</span>
      ) : (
        <span role="img" aria-label="Dark mode" className="text-gray-800 dark:text-gray-200 text-xl">🌙</span>
      )}
    </button>
  );
} 