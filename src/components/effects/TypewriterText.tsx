"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
  const reducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const stateRef = useRef({
    charIndex: 0,
    stringIndex: 0,
    isDeleting: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(strings[0]);
      return;
    }

    function tick() {
      const s = stateRef.current;
      const current = strings[s.stringIndex];

      if (!s.isDeleting) {
        if (s.charIndex < current.length) {
          s.charIndex++;
          setDisplayed(current.slice(0, s.charIndex));
          timerRef.current = setTimeout(tick, typingSpeed + Math.random() * 40);
        } else {
          // Done typing — pause then start deleting
          timerRef.current = setTimeout(() => {
            s.isDeleting = true;
            tick();
          }, pauseDuration);
        }
      } else {
        if (s.charIndex > 0) {
          s.charIndex--;
          setDisplayed(current.slice(0, s.charIndex));
          timerRef.current = setTimeout(tick, deletingSpeed);
        } else {
          // Done deleting — next string
          s.isDeleting = false;
          s.stringIndex = (s.stringIndex + 1) % strings.length;
          timerRef.current = setTimeout(tick, typingSpeed);
        }
      }
    }

    timerRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reducedMotion, strings, typingSpeed, deletingSpeed, pauseDuration]);

  if (reducedMotion) {
    return <span className={className}>{strings[0]}</span>;
  }

  return (
    <span className={className} aria-label={strings[stateRef.current.stringIndex]}>
      <span aria-hidden="true">
        {displayed}
        <span className="typewriter-cursor" />
      </span>
    </span>
  );
}
