export const COLORS = {
  bg: {
    primary: '#0a0a0f',
    secondary: '#111118',
    card: 'rgba(17, 17, 24, 0.8)',
  },
  cyan: {
    DEFAULT: '#2ac6f8',
    light: '#5dd8ff',
    dark: '#1a8ab0',
    glow: 'rgba(42, 198, 248, 0.4)',
    glowStrong: 'rgba(42, 198, 248, 0.6)',
  },
  violet: {
    DEFAULT: '#8B5CF6',
    light: '#a78bfa',
    dark: '#6d28d9',
    glow: 'rgba(139, 92, 246, 0.4)',
    glowStrong: 'rgba(139, 92, 246, 0.6)',
  },
  text: {
    primary: '#f0f0f5',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    card: 'rgba(42, 198, 248, 0.2)',
    hover: 'rgba(42, 198, 248, 0.5)',
  },
} as const;

export const ANIMATION = {
  staggerChildren: 0.12,
  entranceDuration: 0.6,
  hoverScale: 1.03,
  glowTransition: 0.3,
} as const;

export const ROLES = [
  'Cybersecurity Student',
  'Full-Stack Developer',
  'NeuroBridgeEDU Founder',
  'EU-Green Ambassador',
  'AI Innovator',
] as const;
