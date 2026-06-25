/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#16324F", // deep navy - primary text / dark sections
          50: "#EAF0F5",
          100: "#CBDBE6",
          400: "#3B6E91",
          600: "#234A6B",
          700: "#16324F",
          800: "#102438",
          900: "#0A1722",
        },
        ocean: {
          DEFAULT: "#3B6E91", // ocean blue - accents, buttons
          light: "#5C8AAD",
          dark: "#2A5475",
        },
        sky: {
          DEFAULT: "#C7DBE6", // sky mist - soft accent bg
          light: "#E3EEF3",
        },
        pearl: "#FBFAF7", // pearl white - page background
        cloud: "#EEF3F6", // cloud grey-blue - card background
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-italianno)", "cursive"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease forwards",
        petal: "petalFall linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10%) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "100%": { transform: "translateY(110vh) translateX(40px) rotate(220deg)", opacity: "0" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "grain": "radial-gradient(rgba(22,50,79,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
