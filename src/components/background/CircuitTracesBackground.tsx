"use client";

import { useEffect, useRef, useState } from "react";

interface Trace {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  drawProgress: number;
  drawSpeed: number;
  pulse: number;
  pulseSpeed: number;
  hasPulse: boolean;
  pulsePosition: number;
}

function createTrace(width: number, height: number): Trace {
  const isHorizontal = Math.random() > 0.5;
  let x1: number, y1: number, x2: number, y2: number;

  if (isHorizontal) {
    y1 = Math.random() * height;
    x1 = Math.random() * width * 0.3;
    x2 = x1 + 80 + Math.random() * 200;
    y2 = y1 + (Math.random() - 0.5) * 40;
  } else {
    x1 = Math.random() * width;
    y1 = Math.random() * height * 0.3;
    y2 = y1 + 80 + Math.random() * 200;
    x2 = x1 + (Math.random() - 0.5) * 40;
  }

  return {
    x1,
    y1,
    x2,
    y2,
    opacity: 0.03 + Math.random() * 0.04,
    drawProgress: 0,
    drawSpeed: 0.003 + Math.random() * 0.005,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.008 + Math.random() * 0.012,
    hasPulse: Math.random() > 0.85,
    pulsePosition: 0,
  };
}

const TRACE_COUNT = 45;

export function CircuitTracesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tracesRef = useRef<Trace[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      tracesRef.current = Array.from({ length: TRACE_COUNT }, () =>
        createTrace(window.innerWidth, window.innerHeight)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function drawTrace(ctx: CanvasRenderingContext2D, trace: Trace) {
      const dx = trace.x2 - trace.x1;
      const dy = trace.y2 - trace.y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len === 0) return;

      const nx = dx / len;
      const ny = dy / len;

      // Draw the base trace line
      const currentLen = len * trace.drawProgress;
      const endX = trace.x1 + nx * currentLen;
      const endY = trace.y1 + ny * currentLen;

      ctx.beginPath();
      ctx.moveTo(trace.x1, trace.y1);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = `rgba(230, 220, 200, ${trace.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw pulse dot if this trace has one and is fully drawn
      if (trace.hasPulse && trace.drawProgress >= 1) {
        const pulseX = trace.x1 + nx * trace.pulsePosition;
        const pulseY = trace.y1 + ny * trace.pulsePosition;
        const pulseOpacity =
          trace.opacity * 3 * (0.5 + Math.sin(trace.pulse) * 0.5);

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 140, 80, ${Math.max(0, pulseOpacity)})`;
        ctx.fill();
      }
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      tracesRef.current.forEach((trace) => {
        if (!prefersReducedMotion && trace.drawProgress < 1) {
          trace.drawProgress += trace.drawSpeed;
          if (trace.drawProgress > 1) trace.drawProgress = 1;
        } else if (prefersReducedMotion) {
          trace.drawProgress = 1;
        }

        if (!prefersReducedMotion) {
          trace.pulse += trace.pulseSpeed;

          if (trace.hasPulse && trace.drawProgress >= 1) {
            const dx = trace.x2 - trace.x1;
            const dy = trace.y2 - trace.y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            trace.pulsePosition = ((Math.sin(trace.pulse * 0.3) + 1) / 2) * len;
          }
        }

        drawTrace(ctx, trace);
      });

      if (!prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [mounted, prefersReducedMotion]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden bg-bg-deep" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Radial fade to deep bg at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(12% 0.02 260) 85%)",
        }}
      />
    </div>
  );
}
