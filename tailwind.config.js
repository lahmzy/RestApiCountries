/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',     // Small devices (e.g., phones)
      md: '768px',     // Medium devices (e.g., tablets)
      lg: '1024px',    // Large devices (e.g., small laptops)
      xl: '1280px',    // Extra-large devices (e.g., larger laptops and desktops)
    },
    extend: {
      colors: {
        light: {
          bg: "#FFFFFF",
          text: "#000000",
        },
        dark: {
          bg: "#1A202C",
          text: "#FFFFFF",
        },
        
      },
    },
  },
  plugins: [],
};
