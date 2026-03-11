/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#1a1a2e',
          light: '#1f1f3a',
          lighter: '#252547',
        },
        accent: {
          DEFAULT: '#4ecdc4',
          dark: '#3dbdb5',
          light: '#6ed8d1',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.05)',
          hover: 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#c4c4d4',
            a: { color: '#4ecdc4', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            h1: { color: '#fff' },
            h2: { color: '#fff' },
            h3: { color: '#fff' },
            h4: { color: '#fff' },
            strong: { color: '#fff' },
            code: { color: '#4ecdc4', background: 'rgba(78,205,196,0.1)', padding: '2px 6px', borderRadius: '4px' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: { borderLeftColor: '#4ecdc4', color: '#a0a0b8' },
            hr: { borderColor: 'rgba(255,255,255,0.1)' },
            thead: { borderBottomColor: 'rgba(255,255,255,0.1)' },
            'tbody tr': { borderBottomColor: 'rgba(255,255,255,0.05)' },
            th: { color: '#fff' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
