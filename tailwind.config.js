/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-700': '#d6306b',
        'pink-500': '#ff69b4',
        'gray-50': '#f9fafb',
        'gray-200': '#e5e7eb',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      pulse: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        pulse: 'pulse 1s infinite',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
      import('@tailwindcss/forms')
  ],
}