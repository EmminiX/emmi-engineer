"use client";

import React from "react";

export interface CpuArchitectureProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

/* Each orb: path data (same as visible path), gradient id, duration, delay */
const ORBS = [
  { path: "M 10 20 h 79.5 q 5 0 5 5 v 24", grad: "cpu-blue-grad", dur: "3.5s", delay: "0s" },
  { path: "M 180 10 h -69.7 q -5 0 -5 5 v 24", grad: "cpu-yellow-grad", dur: "4s", delay: "0.3s" },
  { path: "M 130 20 v 21.8 q 0 5 -5 5 h -10", grad: "cpu-pinkish-grad", dur: "3s", delay: "0.6s" },
  { path: "M 170 80 v -21.8 q 0 -5 -5 -5 h -50", grad: "cpu-white-grad", dur: "3.8s", delay: "0.2s" },
  { path: "M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20", grad: "cpu-green-grad", dur: "5s", delay: "0.5s" },
  { path: "M 94.8 95 v -36", grad: "cpu-orange-grad", dur: "2.8s", delay: "0.8s" },
  { path: "M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14", grad: "cpu-cyan-grad", dur: "4.5s", delay: "0.4s" },
  { path: "M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20", grad: "cpu-rose-grad", dur: "3.2s", delay: "0.7s" },
];

export function CpuArchitecture({
  className = "",
  width = "100%",
  height = "100%",
  text = "EMMI",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureProps) {
  return (
    <svg
      className={`text-cyber-muted ${className}`}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
      >
        <path strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
        <path strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        <path strokeDasharray="100 100" pathLength="100" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
        <path d="M 94.8 95 v -36" />
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Colored light orbs — using SVG animateMotion for cross-browser support */}
      {ORBS.map((orb, i) => (
        <g key={i} mask={`url(#cpu-mask-${i + 1})`}>
          <circle cx="0" cy="0" r="8" fill={`url(#${orb.grad})`}>
            <animateMotion
              path={orb.path}
              dur={orb.dur}
              begin={orb.delay}
              repeatCount="indefinite"
              calcMode="linear"
              fill="freeze"
            />
          </circle>
        </g>
      ))}

      {/* CPU Box */}
      <g>
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
            <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
          </g>
        )}
        <rect x="85" y="40" width="30" height="20" rx="2" fill="#181818" filter="url(#cpu-light-shadow)" />
        <text
          x="89"
          y="53"
          fontSize="6.5"
          fill={animateText ? "url(#cpu-text-gradient)" : "white"}
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {text}
        </text>
      </g>

      {/* Defs: masks, gradients, filters */}
      <defs>
        <mask id="cpu-mask-1"><path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-2"><path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-3"><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-4"><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-5"><path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-6"><path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-7"><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="cpu-mask-8"><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="0.5" stroke="white" /></mask>

        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#2ac6f8" />
          <stop offset="50%" stopColor="#08F" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFD800" />
          <stop offset="50%" stopColor="#FFD800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#2ac6f8" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter id="cpu-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.1" />
        </filter>

        <marker id="cpu-circle-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth={lineMarkerSize} markerHeight={lineMarkerSize}>
          <circle cx="5" cy="5" r="2" fill="#0a0a0f" stroke="#2ac6f8" strokeWidth="0.4">
            {animateMarkers && <animate attributeName="r" values="0; 3; 2" dur="0.5s" />}
          </circle>
        </marker>

        <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate attributeName="offset" values="0; 1; 2;" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
