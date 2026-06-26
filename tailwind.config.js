/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arctic-powder': '#F1F6F4',
        'forsythia': '#FFC801',
        'nocturnal-expedition': '#114C5A',
        'mystic-mint': '#D9E8E2',
        'deep-saffron': '#FF9932',
        'oceanic-noir': '#172B36',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
