import type { Config } from 'tailwindcss';
import { cyan, lime } from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'diagonal-lines':
          'repeating-linear-gradient(315deg, rgba(255, 255, 255, 0.15) 0px, rgba(255, 255, 255, 0.15) 1px, transparent 1px, transparent 10px)',
        'polka-dots':
          'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(200px) scale(1.1)' },
        },
        circlePath: {
          '0%': {
            transform: 'translate(0, -50%)', // Start at the top center
          },
          '25%': {
            transform: 'translate(100%, 0)', // Right middle
          },
          '50%': {
            transform: 'translate(0, 50%)', // Bottom center
          },
          '75%': {
            transform: 'translate(-100%, 0)', // Left middle
          },
          '100%': {
            transform: 'translate(0, -50%)', // Back to top center
          },
        },
      },
      animation: {
        blob: 'blob 10s ease-in-out infinite',
        'circle-move': 'circlePath 4s linear infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bgDark: '#0a0a0a',
        bgLeft: '#091826',
        bgRight: '#181E41',
        primaryDark: cyan[700],
        primaryPurple: '#CC72FF',
        primaryCyan: '#41FDFE',
        primaryRed: '#f24e1e',
        primaryLime: lime[400],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
