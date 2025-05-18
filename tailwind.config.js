/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: '767px' }, // max-sm: <768px
      md: '768px', // ≥768px
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'primary-color': 'var(--primary-color, #f0f0f0)'
      }
    },
  },
  plugins: [],
}

