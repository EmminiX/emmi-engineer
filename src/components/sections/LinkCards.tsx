"use client";

import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  AtSign,
  Globe,
  Brain,
  ArrowRight,
} from "lucide-react";
import { CyberpunkCard } from "@/components/ui/CyberpunkCard";
import { ANIMATION } from "@/lib/constants";

const LINKS = [
  {
    title: "emmi.zone",
    description: "Portfolio, blog & projects",
    url: "https://emmi.zone",
    icon: Globe,
    ariaLabel: "Visit Emanuel's portfolio website",
  },
  {
    title: "LinkedIn",
    description: "Professional network & updates",
    url: "https://www.linkedin.com/in/emmic/",
    icon: Linkedin,
    ariaLabel: "Visit Emanuel's LinkedIn profile",
  },
  {
    title: "GitHub",
    description: "Open source & code",
    url: "https://github.com/EmminiX",
    icon: Github,
    ariaLabel: "Visit Emanuel's GitHub profile",
  },
  {
    title: "NeuroBridgeEDU",
    description: "Accessible AI education platform",
    url: "https://NeurobridgeEDU.eu",
    icon: Brain,
    ariaLabel: "Visit NeuroBridgeEDU platform",
  },
  {
    title: "X / Twitter",
    description: "Thoughts, threads & deep dives",
    url: "https://x.com/deep_endX",
    icon: Twitter,
    ariaLabel: "Visit Emanuel's X (Twitter) profile",
  },
  {
    title: "Instagram",
    description: "Visual stories & moments",
    url: "https://www.instagram.com/deep_endx/",
    icon: Instagram,
    ariaLabel: "Visit Emanuel's Instagram profile",
  },
  {
    title: "Threads",
    description: "Conversations & ideas",
    url: "https://www.threads.com/@deep_endx",
    icon: AtSign,
    ariaLabel: "Visit Emanuel's Threads profile",
  },
];

export default function LinkCards() {
  return (
    <section className="relative z-20 py-4 px-4" aria-label="Links">
      <div className="max-w-lg mx-auto space-y-3 sm:space-y-4">
        {LINKS.map((link, i) => (
          <CyberpunkCard
            key={link.title}
            href={link.url}
            delay={0.3 + i * ANIMATION.staggerChildren}
            ariaLabel={link.ariaLabel}
          >
            {/* Icon with glow on hover */}
            <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyber-cyan/15 to-cyber-violet/10 flex items-center justify-center transition-all duration-300">
              <link.icon
                size={22}
                className="text-cyber-cyan icon-glow transition-colors duration-200"
                strokeWidth={1.8}
              />
            </div>

            {/* Text */}
            <div className="flex-grow min-w-0 relative z-10">
              <h2 className="text-base sm:text-lg font-semibold text-cyber-text transition-colors duration-200">
                {link.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyber-muted transition-colors duration-200 truncate">
                {link.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 relative z-10">
              <ArrowRight
                size={18}
                className="text-cyber-dim transition-all duration-200"
                strokeWidth={1.5}
              />
            </div>
          </CyberpunkCard>
        ))}
      </div>
    </section>
  );
}
