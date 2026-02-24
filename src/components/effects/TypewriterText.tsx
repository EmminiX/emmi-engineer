"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  strings: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypewriterText({
  strings,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = "",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    // Single interval state machine — no recursive setTimeout,
    // no dangling callbacks, one cleanup. Reliable on mobile.
    let charIdx = 0;
    let strIdx = 0;
    let phase: "typing" | "pausing" | "deleting" = "typing";
    let lastAction = Date.now();
    let pauseStart = 0;

    const id = setInterval(() => {
      const now = Date.now();
      const current = strings[strIdx];

      if (phase === "typing") {
        if (now - lastAction >= typingSpeed) {
          if (charIdx < current.length) {
            charIdx++;
            setDisplayed(current.slice(0, charIdx));
            lastAction = now;
          } else {
            phase = "pausing";
            pauseStart = now;
          }
        }
      } else if (phase === "pausing") {
        if (now - pauseStart >= pauseDuration) {
          phase = "deleting";
          lastAction = now;
        }
      } else if (phase === "deleting") {
        if (now - lastAction >= deletingSpeed) {
          if (charIdx > 0) {
            charIdx--;
            setDisplayed(current.slice(0, charIdx));
            lastAction = now;
          } else {
            strIdx = (strIdx + 1) % strings.length;
            setStringIndex(strIdx);
            phase = "typing";
            lastAction = now;
          }
        }
      }
    }, 30);

    return () => clearInterval(id);
  }, [strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className} aria-label={strings[stringIndex]}>
      <span aria-hidden="true">
        {displayed}
        <span className="typewriter-cursor" />
      </span>
    </span>
  );
}
