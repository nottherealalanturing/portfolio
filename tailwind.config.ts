import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        win: {
          bg: '#c0c0c0',
          teal: '#008080',
          light: '#fafafa',
          dark: '#5a5a5a',
          mid: '#808080',
          blue: '#000080',
          blueLight: '#1084d0',
        },
      },
      boxShadow: {
        win: '0.5px 0.5px 0 #000',
      },
      fontFamily: {
        sans: ['var(--font-ms-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'win-pop': {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'win-pop': 'win-pop 120ms ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
