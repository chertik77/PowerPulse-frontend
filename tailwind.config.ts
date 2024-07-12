import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '20px', md: '32px', lg: '96px' },
      screens: { sm: '375px', md: '768px', lg: '1440px' }
    },
    colors: {
      black: '#040404',
      white: '#EFEDE8',
      orange: '#E6533C',
      coral: '#EF8964',
      beige: '#EFA082',
      success: '#3CBF61',
      error: '#D80027'
    },
    fontSize: {
      sm: ['12px', { lineHeight: '1.5' }],
      base: ['14px', { lineHeight: '1.28' }],
      md: ['16px', { lineHeight: '1.5' }],
      lg: ['18px', { lineHeight: '1.11' }],
      xl: ['20px', { lineHeight: '1.2' }],
      '2xl': ['24px', { lineHeight: '1.33' }],
      '3xl': ['32px', { lineHeight: '1.37', fontWeight: 700 }],
      '4xl': ['38px', { lineHeight: '1.37', fontWeight: 700 }],
      '5xl': [
        '48px',
        { lineHeight: '1.04', fontWeight: 700, letterSpacing: '-1px' }
      ],
      '6xl': [
        '66px',
        { lineHeight: '1', fontWeight: 500, letterSpacing: '0.66px' }
      ],
      '7xl': [
        '70px',
        { lineHeight: '1.11', fontWeight: 500, letterSpacing: '0.7px' }
      ],
      '8xl': [
        '160px',
        { lineHeight: '0.93', fontWeight: 500, letterSpacing: '1.6px' }
      ]
    },
    extend: {
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px'
      }
    }
  },
  plugins: [
    require('tailwindcss-text-fill'),
    require('tailwindcss-animate'),
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus', '&:active'])
    })
  ]
} satisfies Config
