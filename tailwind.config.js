/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'svg-sun': "url('/icon/sun.svg')",
        'svg-moon': "url('/icon/varlik.svg')",
      }
    },
  },
  plugins: [],
}
