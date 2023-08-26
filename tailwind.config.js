/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", {mytheme: {"primary": "#250821"}}],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

