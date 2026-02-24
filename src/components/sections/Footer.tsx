"use client";

import { motion } from "framer-motion";
import { GlowText } from "@/components/effects/GlowText";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      className="relative z-20 py-8 pb-12 px-4 text-center"
    >
      <div className="max-w-lg mx-auto">
        {/* Animated gradient divider */}
        <div className="glow-divider w-32 mx-auto mb-6" />

        <GlowText
          text="EMMI"
          as="span"
          subtle
          className="text-sm font-semibold"
        />
        <p className="text-xs text-cyber-dim mt-1">
          Engaging Minds, Merging Ideas
        </p>
        <p className="text-xs text-cyber-dim/50 mt-1">
          &copy; {new Date().getFullYear()} Emanuel Covasa
        </p>
      </div>
    </motion.footer>
  );
}
