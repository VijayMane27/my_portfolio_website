/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Deep dark theme
        surface: '#171717',
        primary: {
          400: '#a855f7', // Purple
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        secondary: {
          400: '#ec4899', // Pink
          500: '#d946ef',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-secondary': '0 0 20px rgba(236, 72, 153, 0.4)',
      }
    },
  },
  plugins: [],
}
