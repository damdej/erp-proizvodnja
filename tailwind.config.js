/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // ili 'class' ako želiš da ručno prebacuješ
  theme: {
    extend: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
  },
  plugins: [],
}