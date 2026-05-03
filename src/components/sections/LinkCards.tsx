"use client";

import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  AtSign,
  Globe,
  Brain,
} from "lucide-react";
import { LinkRow } from "@/components/ui/LinkRow";
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
    <section className="relative z-10 py-4 px-4" aria-label="Links" id="links">
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <span className="section-label block mb-6">Connections</span>

        {/* Links */}
        <div>
          {LINKS.map((link, i) => (
            <LinkRow
              key={link.title}
              href={link.url}
              title={link.title}
              description={link.description}
              icon={link.icon}
              delay={i * ANIMATION.staggerChildren}
              ariaLabel={link.ariaLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
