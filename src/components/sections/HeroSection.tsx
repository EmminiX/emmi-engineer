"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CpuArchitecture } from "@/components/ui/CpuArchitecture";
import { ScrollIndicator } from "@/components/effects/ScrollIndicator";
import { ROLES } from "@/lib/constants";

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center min-h-dvh px-4"
      aria-label="Profile"
    >
      {/* CPU Architecture — animated circuit board with EMMI chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-10 w-[320px] h-[160px] sm:w-[480px] sm:h-[240px] md:w-[560px] md:h-[280px]"
      >
        <CpuArchitecture
          text="EMMI"
          lineMarkerSize={18}
        />
      </motion.div>

      {/* Name — Cabinet Grotesk display */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-display text-fluid-3xl font-bold text-text-primary text-center tracking-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        EMANUEL COVASA
      </motion.h1>

      {/* Tagline — typewriter effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 min-h-[1.75rem] flex items-center justify-center"
      >
        <TypewriterTagline />
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator show={showScrollIndicator} />
    </section>
  );
}

function TypewriterTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(ROLES[currentIndex]);
      return;
    }

    const currentRole = ROLES[currentIndex];
    const speed = isDeleting ? 40 : 80;

    if (pause) {
      const timer = setTimeout(() => setPause(false), 2000);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && displayText === currentRole) {
      setPause(true);
      setIsDeleting(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, pause, currentIndex, prefersReducedMotion]);

  return (
    <span
      className="font-body text-fluid-sm text-text-secondary font-light tracking-wide"
      aria-label={ROLES[currentIndex]}
    >
      <span aria-hidden="true">{displayText}</span>
      {!prefersReducedMotion && (
        <span aria-hidden="true" className="inline-block w-[2px] h-[1.1em] bg-accent-warm ml-[2px] align-text-bottom animate-pulse" />
      )}
    </span>
  );
}
