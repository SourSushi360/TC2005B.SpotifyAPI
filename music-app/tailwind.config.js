/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'se': '15px 0 0 0 #d4d4d8',
        'ss': '-15px 0 0 0 #d4d4d8',
      }
    },
  },
  plugins: [],
}

