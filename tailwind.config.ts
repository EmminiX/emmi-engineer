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
        // Backgrounds
        "bg-deep": "oklch(12% 0.02 260)",
        "bg-surface": "oklch(18% 0.015 260)",
        "bg-elevated": "oklch(24% 0.02 260)",
        // Text
        "text-primary": "oklch(95% 0.01 80)",
        "text-secondary": "oklch(72% 0.02 80)",
        "text-muted": "oklch(55% 0.015 80)",
        // Accent — warm amber/copper, used sparingly
        "accent-warm": "oklch(65% 0.12 55)",
        "accent-dim": "oklch(65% 0.12 55 / 0.15)",
        "accent-glow": "oklch(65% 0.12 55 / 0.3)",
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "chevron-bounce": "chevronBounce 2s ease-in-out infinite",
        "trace-draw": "traceDraw 3s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        chevronBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        traceDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
