/** @type {import('tailwindcss').Config} */
//palete ["#777d71", "#bbd48c", "#f8f6e6", "#e0ddc6", "#bef509"]
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gris':'#777d71',
        'verdeM': '#bbd48c',
        'beige': '#f8f6e6',
        'beige2': '#e0ddc6',
        'fluor': '#bef509',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}
