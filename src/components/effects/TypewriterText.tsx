"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const charIndex = useRef(0);
  const stringIndex = useRef(0);
  const isDeleting = useRef(false);
  const cancelled = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(strings[0]);
      return;
    }

    cancelled.current = false;
    charIndex.current = 0;
    stringIndex.current = 0;
    isDeleting.current = false;
    setDisplayed("");

    function schedule(fn: () => void, ms: number) {
      if (!cancelled.current) {
        setTimeout(() => {
          if (!cancelled.current) fn();
        }, ms);
      }
    }

    function tick() {
      if (cancelled.current) return;

      const current = strings[stringIndex.current];

      if (!isDeleting.current) {
        if (charIndex.current < current.length) {
          charIndex.current++;
          setDisplayed(current.slice(0, charIndex.current));
          schedule(tick, typingSpeed + Math.random() * 40);
        } else {
          schedule(() => {
            isDeleting.current = true;
            tick();
          }, pauseDuration);
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current--;
          setDisplayed(current.slice(0, charIndex.current));
          schedule(tick, deletingSpeed);
        } else {
          isDeleting.current = false;
          stringIndex.current = (stringIndex.current + 1) % strings.length;
          schedule(tick, typingSpeed);
        }
      }
    }

    schedule(tick, typingSpeed);

    return () => {
      cancelled.current = true;
    };
  }, [reducedMotion, strings, typingSpeed, deletingSpeed, pauseDuration]);

  if (reducedMotion) {
    return <span className={className}>{strings[0]}</span>;
  }

  return (
    <span className={className} aria-label={strings[stringIndex.current]}>
      <span aria-hidden="true">
        {displayed}
        <span className="typewriter-cursor" />
      </span>
    </span>
  );
}
