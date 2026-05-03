"use client";

import { ROLES } from "@/lib/constants";

export default function RolePills() {
  // Duplicate roles for seamless infinite scroll
  const duplicatedRoles = [...ROLES, ...ROLES];

  return (
    <section
      className="relative z-10 py-6 overflow-hidden"
      aria-label="Roles"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-bg-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-bg-deep to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedRoles.map((role, i) => (
          <span
            key={`${role}-${i}`}
            className="role-pill mx-2 inline-flex"
          >
            {role}
          </span>
        ))}
      </div>
    </section>
  );
}
