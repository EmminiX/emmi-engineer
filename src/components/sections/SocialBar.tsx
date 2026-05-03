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
    <section className="relative z-10 py-10 px-4" aria-label="Social links">
      <div className="max-w-2xl mx-auto">
        {/* Separator */}
        <div className="warm-separator mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 sm:gap-3 flex-wrap"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              className="social-icon"
            >
              <social.icon
                size={20}
                strokeWidth={1.5}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
