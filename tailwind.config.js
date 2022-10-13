/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "braown": "#B45B35"
      },
      container: {
        padding: "32px",
        center: true
      }
    },
  },
  plugins: [],
}