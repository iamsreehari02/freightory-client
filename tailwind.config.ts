import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "section-bg": "#FBFBFE",
      },
    },
  },
  plugins: [],
};

export default config;
