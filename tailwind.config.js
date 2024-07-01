/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#417245',
        secondary: '#faea17',
        tertiary: '#f0db27',
        quaternary: '#ebcd37',
        quinary: '#e6b954',
        header: '#434318',
      },
    },
  },
  plugins: [],
}
