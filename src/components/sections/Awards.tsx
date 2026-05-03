"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AWARDS = [
  {
    title: "EU Green Innovation Days 2025",
    detail: "1st place",
  },
  {
    title: "Irish Enterprise Awards 2026",
    detail: null,
  },
  {
    title: "Ethical AI Excellence Award 2026",
    detail: "NeuroBridgeEDU",
  },
  {
    title: "ATUSU Student Senator of the Year",
    detail: "2024-2025",
  },
  {
    title: "ATUSU Advocate of the Year 2026",
    detail: "Emanuel Covasa",
  },
];

export default function Awards() {
  return (
    <section className="relative z-10 py-8 px-4" aria-label="Awards">
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <span className="section-label block mb-6">Recognition</span>

        <div className="space-y-0">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center gap-4 py-3 border-b border-bg-surface last:border-b-0"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-accent-dim flex items-center justify-center">
                <Award
                  size={16}
                  className="text-accent-warm"
                  strokeWidth={1.8}
                />
              </div>
              <div className="min-w-0">
                <span className="text-fluid-sm font-medium text-text-primary">
                  {award.title}
                </span>
                {award.detail && (
                  <span className="text-fluid-xs text-text-muted ml-2">
                    — {award.detail}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
