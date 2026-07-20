import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        surface: 'hsl(var(--surface))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        accentText: 'hsl(var(--accent-text) / <alpha-value>)',
        navy: {
          950: '#0b1220',
          900: '#162136',
          800: '#2b3a57',
        },
        steel: '#657694',
        frost: '#f2f5fa',
        signal: '#00e05c',
      },
      fontFamily: {
        sans: [
          'Inter',
          'TT Norms Pro',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: [
          'clamp(3.6rem, 8vw, 7.7rem)',
          { lineHeight: '0.9', letterSpacing: '-0.065em' },
        ],
        display: [
          'clamp(2.65rem, 5.7vw, 5.75rem)',
          { lineHeight: '0.96', letterSpacing: '-0.06em' },
        ],
        title: [
          'clamp(2rem, 3.8vw, 3.65rem)',
          { lineHeight: '1.03', letterSpacing: '-0.05em' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        float: '0 25px 45px -35px rgba(24, 31, 56, 0.30)',
        card: '0 22px 60px -38px rgba(24, 31, 56, 0.28)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
