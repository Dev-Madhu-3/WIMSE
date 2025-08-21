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
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(0.7)', opacity: '0' },
          '10%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '90%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        zoomInOut: 'zoomInOut 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

