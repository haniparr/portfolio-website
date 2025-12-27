/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-mode="dark"]'], // 👈 Gunakan attribute selector
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: "#957BAC",
        "primary-hover": "#765C8C",
        "primary-tint": "#F4F0F7",
        "bg-main": "#FFFFFF",
        "bg-section": "#F8F9FA",
        "bg-card": "#FFFFFF",
        "border-light": "#E9ECEF",
        "text-heading": "#212529",
        "text-body": "#495057",
        "text-muted": "#868E96",

        // Dark Mode
        "dark-primary": "#957BAC",
        "dark-hover": "#BFAFD0",
        "dark-tint": "#2D2633",
        "dark-bg": "#121212",
        "dark-section": "#18181B",
        "dark-card": "#1E1E22",
        "dark-border": "#2F3336",
        "dark-heading": "#EDEDED",
        "dark-body": "#B0B3B8",
        "dark-muted": "#6C757D",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
    },
  },
};
