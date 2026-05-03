export const COLORS = {
  bg: {
    deep: "oklch(12% 0.02 260)",
    surface: "oklch(18% 0.015 260)",
    elevated: "oklch(24% 0.02 260)",
  },
  accent: {
    warm: "oklch(65% 0.12 55)",
    dim: "oklch(65% 0.12 55 / 0.15)",
    glow: "oklch(65% 0.12 55 / 0.3)",
  },
  text: {
    primary: "oklch(95% 0.01 80)",
    secondary: "oklch(72% 0.02 80)",
    muted: "oklch(55% 0.015 80)",
  },
} as const;

export const ANIMATION = {
  staggerChildren: 0.08,
  entranceDuration: 0.6,
  hoverTransition: 0.2,
} as const;

export const ROLES = [
  "Cybersecurity Student",
  "Full-Stack Developer",
  "NeuroBridgeEDU Founder",
  "EU-Green Ambassador",
  "AI Innovator",
] as const;
