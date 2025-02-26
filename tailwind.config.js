/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/src/Assets/img/hidr.png')",
        img: "url('/src/Assets/img/burger.png')"
      }
    },
  },
  plugins: [],
}

