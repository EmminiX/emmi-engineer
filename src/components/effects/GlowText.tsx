"use client";

interface GlowTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "p" | "div";
  subtle?: boolean;
  className?: string;
}

export function GlowText({
  text,
  as: Tag = "div",
  subtle = false,
  className = "",
}: GlowTextProps) {
  return (
    <Tag
      className={`glow-text ${subtle ? "glow-text-subtle" : ""} relative text-white tracking-tight ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
