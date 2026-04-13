"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/data/menuItems";

interface MenuTileProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export default function MenuTile({ item, onSelect }: MenuTileProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onSelect(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        cursor: "pointer",
        border: hovered ? "2px solid #a6262f" : "2px solid transparent",
        transition: "border-color 0.3s ease",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Food image */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        style={{
          objectFit: "cover",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          transition: "background 0.3s ease",
          display: "flex",
          alignItems: "flex-end",
          padding: "16px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            lineHeight: 1.2,
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          {item.name}
        </span>
      </div>

      {/* Burgundy accent bar on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: "#a6262f",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.3s ease",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
