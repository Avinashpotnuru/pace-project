/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Apply Poppins as the default font family
      },
      backgroundImage: {
        registerBanner: "url('./assets/register.webp')",
      },
    },
  },
  plugins: [],
};
