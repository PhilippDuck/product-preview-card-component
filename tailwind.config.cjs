/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
      colors:{
        'darkCyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'darkGrayishBlue': 'hsl(228, 12%, 48%)',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}