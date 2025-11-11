/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './frontend/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003DA5',
        'secondary': '#CD2B2B',
        'accent': '#FFD700',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
