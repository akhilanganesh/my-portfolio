import type { Config } from 'tailwindcss'

// const plugin = require('tailwindcss/plugin')
const defTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
// console.log(colors)

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // plugins: [
  //   plugin(({ matchUtilities, theme }: any) => {
  //     matchUtilities(
  //       {
  //         'rotate-by-x': (value: string) => ({
  //           rotate: `x ${value}`
  //         }),
  //         '-rotate-by-x': (value: string) => ({
  //           rotate: `x -${value}`
  //         }),
  //         'rotate-by-y': (value: string) => ({
  //           rotate: `y ${value}`
  //         }),
  //         '-rotate-by-y': (value: string) => ({
  //           rotate: `y -${value}`
  //         }),
  //       },
  //       { values: theme('rotate') }
  //     )
  //   }),
  // ],
  theme: {
    screens: {
      'xs': '376px',
      ...defTheme.screens,
    },
    extend: {
      screens: {
        'sm-h': { 'raw': '(min-height: 500px)' },
        'md-h': { 'raw': '(min-height: 720px)' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '30%': '30%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
      },
      colors: {
        // 'theme_bg': '#D1BAA1',
        // 'theme_fg': '#281E17',
        // 'theme_nav': '#A88A6B',
        // 'theme_item1': '#913930',
        // 'theme_item2': '#A58E48',
        'theme-white':      colors.slate['100'], //'#EAF4F4', //colors.zinc['200']
        'theme-offwhite':   '#E1FFEA', 
        'theme-black':      colors.gray['900'],
        'theme-lightgray':  colors.gray['300'],
        'theme-gray':       colors.stone['200'],
        'theme-darkgray':   colors.gray['700'],
        'theme-color1':     colors.cyan['950'],
        'theme-color1b':    colors.slate['400'],
        'theme-color1c':    colors.slate['300'],
        'theme-color2':     colors.emerald['400'], // colored
        'theme-color2b':    colors.emerald['200'], // toned
        'theme-color3':     '#F64740', // colors.rose['600'], // or colors.teal['500']
        'theme-color3b':    '#FD8A86', // colors.rose['400'],
        'theme-color4':     colors.cyan['600'],
        'theme-color4b':    colors.cyan['400'],
      },
      keyframes: {
        wiggle: {
          '0%':  { transform: 'rotate(-1.5deg)'},
          '15%': { transform: 'rotate(1.5deg)' },
          '30%': { transform: 'rotate(0deg)' },
          '45%': { transform: 'rotate(0deg)' },
        },
        wiggle2: {
          '0%':  { transform: 'rotate(0deg)' },
          '8%':  { transform: 'rotate(-9deg)' },
          '16%': { transform: 'rotate(9deg)' },
          '32%': { transform: 'rotate(-9deg)' },
          '40%': { transform: 'rotate(9deg)' },
          '48%': { transform: 'rotate(0deg)' },
        },
        stretch: {
          '0%':  { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(0.8)' },
        },
        pulse_out: {
          '0%':   { 'box-shadow': '0 0 0 0px rgba(0, 0, 0, 0.2)' },
          '100%': { 'box-shadow': '0 0 0 20px rgba(0, 0, 0, 0)' }
        },
        heartbeat: {
          '0%':   { transform: 'scale(1)' },
          '30%':  { transform: 'scale(0.9)' },
          '50%':  { transform: 'scale(1)' },
          // '60%':  { transform: 'scale(1)' },
          '80%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        heartbeat2: {
          '0%':   { transform: 'scale(1)' },
          '30%':  { transform: 'scale(0.95)' },
          '50%':  { transform: 'scale(1)' },
          // '60%':  { transform: 'scale(1)' },
          '80%':  { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        spin: {
          '0%':  { transform: 'rotate(360deg)' },
          '20%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.8s ease-in-out infinite',
        wiggle2: 'wiggle2 0.8s ease-in-out infinite',
        spin: 'spin 1s ease-in-out infinite',
        pulse_out: 'pulse_out 1.5s infinite',
        heartbeat: 'heartbeat 1.2s ease 0s infinite',
        heartbeat2: 'heartbeat2 1.2s ease 0s infinite',
        // 'fa-shake': 'fa-shake 1.5s infinite linear',
        // pulse: 'stretch 4s ease-linear infinite',
      },
    },
  },
}
export default config