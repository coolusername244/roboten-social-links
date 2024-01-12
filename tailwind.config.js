/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        body: 'rgb(11, 74, 111)',
      },
      colors: {
        iconColor: 'rgb(75, 163, 230)',
        iconHover: 'rgb(24, 134, 243)',
        iconActive: 'rgb(0, 134, 201)',
      },
    },
  },
  plugins: [],
};
