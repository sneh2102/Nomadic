/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#13357B",
      "white": "#FFFFFF",
      "gray": "#697488",
      "light-gray": "#F5F5F5",
      "gray-border": "#ddd",
      "success": "#008009",
    }
  },
  plugins: [],
}