/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',      // Custom dark background
        neon: '#00ff88',      // Neon green accent
        'neon-dark': '#00dd77', // Slightly darker hover version
      },
      dropShadow: {
        neon: '0 0 10px #00ff88',
        'neon-sm': '0 0 5px #00ff88',
      },
    },
  },
  plugins: [],
};
