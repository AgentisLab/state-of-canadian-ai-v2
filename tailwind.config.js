/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0284c7",
        "brand-secondary": "#0369a1",
        "brand-accent": "#f0f9ff",
        "page-bg": "#fcfdfe",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 32px 64px -12px rgba(2,132,199,0.12)",
      },
    },
  },
  plugins: [],
};
