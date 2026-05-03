"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      className="relative z-10 py-10 pb-16 px-4 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-1">
        <span className="text-fluid-xs font-medium text-text-muted tracking-widest uppercase">
          EMMI
        </span>
        <p className="text-fluid-xs text-text-muted" style={{ opacity: 0.6 }}>
          Engaging Minds, Merging Ideas
        </p>
        <p className="text-fluid-xs text-text-muted" style={{ opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} Emanuel Covasa
        </p>
      </div>
    </motion.footer>
  );
}
