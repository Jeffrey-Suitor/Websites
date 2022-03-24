/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.ts',
    ],
    options: {
      safelist: ['prose', 'prose-sm', 'm-auto'],
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      opacity: ['dark', 'active', 'disabled'],
    },
  },
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: { light: '#1C7C54', active: '#2BBF81', dark: '#0C310C' },
        cta: colors.violet[700],
        success: colors.emerald[700],
        fail: colors.rose[700],
        warning: colors.amber[700],
        light: colors.gray[200],
        dark: colors.gray[700],
        disabledColor: colors.gray[600],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              '&:hover': {
                opacity: 1,
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
}
