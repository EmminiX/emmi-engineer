"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Twitter, Instagram, AtSign } from "lucide-react";

const SOCIALS = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/emmic/", label: "LinkedIn" },
  { name: "GitHub", icon: Github, url: "https://github.com/EmminiX", label: "GitHub" },
  { name: "X", icon: Twitter, url: "https://x.com/deep_endX", label: "X / Twitter" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/deep_endx/", label: "Instagram" },
  { name: "Threads", icon: AtSign, url: "https://www.threads.com/@deep_endx", label: "Threads" },
  { name: "Email", icon: Mail, url: "mailto:e.covasa@me.com", label: "Email" },
];

export default function SocialBar() {
  return (
    <section className="relative z-20 py-8 px-4" aria-label="Social links">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {SOCIALS.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.06 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="glass-cyber rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:border-cyber-cyan/50 hover:shadow-[0_0_24px_rgba(42,198,248,0.3),0_0_48px_rgba(139,92,246,0.15)]"
            >
              <social.icon
                size={20}
                className="text-cyber-muted transition-colors duration-200 hover:text-cyber-cyan"
                strokeWidth={1.6}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
