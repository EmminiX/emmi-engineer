"use client";

import { useCallback, useRef } from "react";

export function useMousePosition() {
  const isTouchDevice = useRef<boolean | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isTouchDevice.current === null) {
        isTouchDevice.current =
          "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      if (isTouchDevice.current) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    },
    []
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.setProperty("--mouse-x", "50%");
      e.currentTarget.style.setProperty("--mouse-y", "50%");
    },
    []
  );

  return { handleMouseMove, handleMouseLeave };
}
