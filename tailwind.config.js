/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f4cf3e',
        'accent-blue': '#3D7EFF',
        'background-light': '#f8f8f5',
        'background-dark': '#111315',
        'surface-dark': '#262629',
        'card-dark': '#1A1D1F'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px'
      }
    }
  },
  plugins: []
};
