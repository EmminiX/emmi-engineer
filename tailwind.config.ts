import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0a0a0f",
          surface: "#111118",
          cyan: "#2ac6f8",
          "cyan-light": "#5dd8ff",
          violet: "#8B5CF6",
          "violet-light": "#a78bfa",
          text: "#f0f0f5",
          muted: "#9ca3af",
          dim: "#6b7280",
        },
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "neon-pulse": "neon-pulse 3s ease-in-out infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
