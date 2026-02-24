"use client";

import { motion } from "framer-motion";

interface CyberpunkCardProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  ariaLabel?: string;
}

export function CyberpunkCard({
  href,
  children,
  className = "",
  delay = 0,
  ariaLabel,
}: CyberpunkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`folder-container-neon block no-underline ${className}`}
    >
      {/* Doc sheets — neon lines that rise on hover */}
      <div className="doc-sheet sheet-1" />
      <div className="doc-sheet sheet-2" />
      <div className="doc-sheet sheet-3" />

      {/* Main folder card */}
      <div className="folder-card-neon">
        <div className="relative z-[6] flex items-center gap-4 h-full">
          {children}
        </div>
      </div>
    </motion.a>
  );
}
