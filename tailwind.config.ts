import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#3C2415',
        'coffee-medium': '#8B4513',
        'coffee-light': '#D2B48C',
        'coffee-cream': '#F5F5DC',
        'coffee-gold': '#DAA520',
        'colombia-yellow': '#FCE205',
        'colombia-blue': '#003893',
        'colombia-red': '#CE1126',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #D2B48C 0%, #F5F5DC 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
export default config 