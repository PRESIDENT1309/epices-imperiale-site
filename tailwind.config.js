/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0908',
          50: '#F5F4F2',
          100: '#E8E6E2',
          200: '#C9C5BE',
          300: '#A8A299',
          400: '#7A746B',
          500: '#524E47',
          600: '#3A3733',
          700: '#2A2825',
          800: '#1A1917',
          900: '#0A0908',
        },
        ivory: {
          DEFAULT: '#F7F3ED',
          50: '#FDFBF8',
          100: '#F7F3ED',
          200: '#EDE6DA',
          300: '#E0D5C2',
          400: '#CDBCA0',
        },
        earth: {
          DEFAULT: '#8B6F47',
          light: '#A88860',
          dark: '#6B5235',
        },
        spice: {
          DEFAULT: '#B8472D',
          light: '#D4623F',
          dark: '#8C3520',
          ember: '#E07A4A',
        },
        saffron: {
          DEFAULT: '#D4A017',
          light: '#E8B830',
          dark: '#A87D0E',
        },
        clay: {
          DEFAULT: '#C4654B',
          light: '#D88068',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 11rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-1': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'none': '0px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'decel': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '500': '500ms',
        '700': '700ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
        'line-grow': 'line-grow 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
