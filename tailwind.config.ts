import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — yuna.io warmth adapted to "Blue Angel"
        cream: "#F6F1E9", // warm off-white page background
        sand: "#EFE7DA", // slightly deeper warm tone for alternating sections
        navy: {
          DEFAULT: "#0E2A47", // primary deep brand blue (yuna's forest-green role)
          900: "#0A2038",
          800: "#0E2A47",
          700: "#173A5E",
          600: "#22496F",
        },
        azure: {
          DEFAULT: "#3E7CB1", // bright accent
          light: "#6FA3CE",
          dark: "#2F6394",
        },
        gold: "#C9A24B", // secondary accent, sparingly
        ink: "#12233A", // body text
        muted: "#5B6B7C", // secondary text
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 42, 71, 0.18)",
        card: "0 2px 24px -8px rgba(14, 42, 71, 0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
