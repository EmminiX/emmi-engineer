# EMMI Links - Unified Links Website

A modern, animated links-in-bio website for Emanuel Covasa (EMMI) featuring a Three.js generative art background and glassmorphism design.

## Features

- **Three.js Generative Art**: Animated icosahedron background with morphing vertices
- **Glassmorphism Design**: Modern glass-effect cards with gradient borders
- **Fully Responsive**: Mobile-first design with optimized layouts
- **Performance Optimized**: Lazy loading, code splitting, and mobile-specific optimizations
- **Accessibility First**: WCAG compliant with semantic HTML and ARIA labels
- **Type-Safe**: Full TypeScript implementation
- **Easy to Update**: Centralized data structure in `src/data/links.ts`

## Tech Stack

- **Next.js 15.3.5** - App Router
- **React 19** - Latest React features
- **TypeScript 5.6** - Type safety
- **Three.js** - 3D graphics and animations
- **Tailwind CSS 3.4** - Utility-first styling

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and utilities
├── components/
│   ├── hero/
│   │   ├── GenerativeArtScene.tsx  # Three.js animation
│   │   └── AnomalousMatterHero.tsx # Hero wrapper
│   ├── sections/
│   │   ├── LogoSection.tsx         # Profile header
│   │   ├── SocialLinks.tsx         # Social media icons
│   │   ├── MainLinks.tsx           # Primary CTA links
│   │   ├── ProjectsGrid.tsx        # Projects showcase
│   │   └── Footer.tsx              # Site footer
│   └── ui/
│       └── Icon.tsx                # Icon component
└── data/
    └── links.ts          # All link data and configuration
```

## Customization

### Update Links

Edit `src/data/links.ts` to modify:
- Profile information
- Social media links
- Main CTA links
- Project showcase

### Update Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --background: 0, 0%, 0%;
  --foreground: 0, 0%, 100%;
  --sky-300: 199, 89%, 48%;
  --gray-300: 0, 0%, 82%;
}
```

### Add Avatar

Replace the placeholder avatar in `LogoSection.tsx` with your image:
1. Add image to `public/` folder
2. Update the avatar div in `src/components/sections/LogoSection.tsx`

## Performance

- Three.js scene reduces geometry subdivisions on mobile
- Dynamic imports with Suspense for code splitting
- Optimized animations with CSS transforms
- Minimal bundle size with tree-shaking

## Accessibility

- Semantic HTML structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast (WCAG AA)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

## License

Copyright © 2025 Emanuel Covasa (EMMI). All rights reserved.

---

**Built with speed, clarity, and gratitude.**

*Work smart, not hard.*
