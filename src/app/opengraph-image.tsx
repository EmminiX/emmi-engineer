import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Emanuel Covasa — EMMI | Engaging Minds, Merging Ideas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0f 0%, #111118 40%, #0a0a0f 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "300px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,198,248,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "250px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* EMMI chip label */}
        <div
          style={{
            display: "flex",
            padding: "8px 32px",
            border: "1px solid rgba(42, 198, 248, 0.3)",
            borderRadius: "8px",
            marginBottom: "32px",
            background: "rgba(42, 198, 248, 0.05)",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              background: "linear-gradient(90deg, #2ac6f8, #8B5CF6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            EMMI
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f0f0f5",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
          }}
        >
          EMANUEL COVASA
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            margin: "0 0 40px 0",
            fontWeight: 300,
          }}
        >
          Engaging Minds, Merging Ideas
        </p>

        {/* Roles row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Cybersecurity",
            "Full-Stack Dev",
            "NeuroBridgeEDU",
            "EU-Green",
            "AI",
          ].map((role) => (
            <span
              key={role}
              style={{
                fontSize: "16px",
                color: "#2ac6f8",
                padding: "6px 16px",
                border: "1px solid rgba(42, 198, 248, 0.2)",
                borderRadius: "20px",
                background: "rgba(42, 198, 248, 0.06)",
              }}
            >
              {role}
            </span>
          ))}
        </div>

        {/* URL */}
        <p
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "#6b7280",
            letterSpacing: "0.05em",
          }}
        >
          emmi.engineer
        </p>
      </div>
    ),
    { ...size }
  );
}
