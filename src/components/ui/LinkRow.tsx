"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface LinkRowProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  ariaLabel?: string;
}

export function LinkRow({
  href,
  title,
  description,
  icon: Icon,
  delay = 0,
  ariaLabel,
}: LinkRowProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="link-row group"
    >
      {/* Icon */}
      <div className="link-icon-wrap flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-bg-surface border border-bg-elevated flex items-center justify-center">
        <Icon
          size={20}
          className="text-text-muted group-hover:text-accent-warm transition-colors duration-200"
          strokeWidth={1.6}
        />
      </div>

      {/* Text */}
      <div className="flex-grow min-w-0">
        <h3 className="link-title text-fluid-lg font-semibold text-text-primary truncate">
          {title}
        </h3>
        <p className="text-fluid-sm text-text-secondary truncate">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <ArrowRight
          size={18}
          className="link-arrow"
          strokeWidth={1.5}
        />
      </div>
    </motion.a>
  );
}
