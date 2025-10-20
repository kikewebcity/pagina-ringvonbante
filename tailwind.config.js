// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Componentes y páginas
    "./public/index.html",        // Si usas Vite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        accent: "#EAB308",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
