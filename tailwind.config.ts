import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E8192C',
          dim:     'rgba(232,25,44,0.10)',
          border:  'rgba(232,25,44,0.25)',
        },
        bg: {
          DEFAULT: '#080808',
          2: '#0e0e0e',
          3: '#141414',
          4: '#1a1a1a',
        },
        fore:   '#f0ede8',
        grey:   '#666',
        greylt: '#999',
        bdr:    'rgba(255,255,255,0.07)',
        bdrhv:  'rgba(255,255,255,0.14)',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        '10': ['10px', { lineHeight: '1.4' }],
        '11': ['11px', { lineHeight: '1.4' }],
        '13': ['13px', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
      },
      screens: {
        sm: '520px',
        md: '900px',
        lg: '1100px',
        xl: '1400px',
      },
    },
  },
  plugins: [],
}

export default config
