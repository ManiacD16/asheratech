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
          950: '#070526',
          900: '#0f0b4d',
          800: '#1d1a80',
        },
        steel: '#6470a8',
        frost: '#eef4ff',
        signal: '#01e6ff',
        ink: '#0f0b4d',
        night: '#070526',
        paper: '#f6faff',
        violet: '#2c0d81',
        royal: '#124ed9',
        azure: '#00a8f7',
        cyan: '#01e6ff',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        display: ['var(--font-display)'],
      },
      fontSize: {
        hero: [
          'clamp(3.6rem, 8vw, 7.7rem)',
          { lineHeight: '0.88', letterSpacing: '0' },
        ],
        display: [
          'clamp(2.65rem, 5.7vw, 5.75rem)',
          { lineHeight: '0.92', letterSpacing: '0' },
        ],
        title: [
          'clamp(2rem, 3.8vw, 3.65rem)',
          { lineHeight: '1', letterSpacing: '0' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      // Square corners throughout; only true circles keep a radius.
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        '4xl': '0',
        full: '9999px',
      },
      boxShadow: {
        float: '0 25px 45px -35px rgba(15, 11, 77, 0.30)',
        card: '0 22px 60px -38px rgba(15, 11, 77, 0.28)',
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
