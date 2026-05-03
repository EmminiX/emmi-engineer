"use client";

import { motion } from "framer-motion";
import { ROLES } from "@/lib/constants";

export default function RolePills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative z-10 py-8 px-4"
      aria-label="Roles"
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {ROLES.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="role-pill"
            >
              {role}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
