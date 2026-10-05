/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff4b0b",
          orangeDark: "#e73f04",
          charcoal: "#252525",
          panel: "#2b2b2b",
          muted: "#6b6b6b"
        }
      },
      fontFamily: {
        display: ["Arial Black", "Arial", "sans-serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(0,0,0,0.10)",
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};