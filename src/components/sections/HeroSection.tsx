"use client";

import { motion } from "framer-motion";
import { GlowText } from "@/components/effects/GlowText";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { CpuArchitecture } from "@/components/ui/CpuArchitecture";
import { ROLES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center pt-20 pb-8 px-4 min-h-[50vh] sm:min-h-[55vh]"
      aria-label="Profile"
    >
      {/* CPU Architecture — animated circuit board with EMMI chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="logo-glow mb-8 w-[520px] h-[260px] sm:w-[640px] sm:h-[320px]"
      >
        <CpuArchitecture
          text="EMMI"
          className="cpu-glow"
          lineMarkerSize={18}
        />
      </motion.div>

      {/* Name — Apple-style gradient glow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4"
      >
        <GlowText
          text="EMANUEL COVASA"
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-center"
        />
      </motion.div>

      {/* Tagline — typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-8 flex items-center justify-center"
      >
        <TypewriterText
          strings={ROLES}
          className="text-sm sm:text-base md:text-lg text-cyber-muted font-light tracking-wide"
        />
      </motion.div>

      {/* Subtitle — subtle glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-5"
      >
        <GlowText
          text="Engaging Minds, Merging Ideas"
          as="p"
          subtle
          className="text-sm sm:text-base text-center font-medium"
        />
      </motion.div>
    </section>
  );
}
