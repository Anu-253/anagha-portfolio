import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        heading: ["'Outfit'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      colors: {
        ink: "#0A0A0B",
        paper: "#111113",
        card: "#18181B",
        line: "#27272A",
        amber: {
          DEFAULT: "#F59E0B",
          bright: "#FCD34D",
          dim: "#92400E",
        },
        rose: "#F43F5E",
        sage: "#4ADE80",
        fog: {
          100: "#FAFAFA",
          200: "#E4E4E7",
          400: "#A1A1AA",
          600: "#52525B",
          800: "#27272A",
        },
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
