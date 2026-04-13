"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { MenuItem } from "@/data/menuItems";

interface MenuModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function MenuModal({ item, onClose }: MenuModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      {/* Modal card — stop propagation so clicks inside don't close it */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #f0c8d8",
          borderTop: "3px solid #f9a8c9",
          maxWidth: 860,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "none",
            border: "none",
            color: "#999",
            fontSize: "1.5rem",
            cursor: "pointer",
            lineHeight: 1,
            zIndex: 10,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#a6262f")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#999")}
        >
          ✕
        </button>

        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            width: "45%",
            minHeight: 360,
            flexShrink: 0,
          }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 860px) 45vw, 387px"
          />
        </div>

        {/* Right: Details */}
        <div
          style={{
            flex: 1,
            padding: "40px 36px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Name */}
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              lineHeight: 1.1,
              margin: 0,
              paddingRight: 32,
            }}
          >
            {item.name}
          </h2>

          {/* Price */}
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#a6262f",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            {item.price}
          </p>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "#f0c8d8" }} />

          {/* Description */}
          <div>
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#a6262f",
                margin: "0 0 8px",
              }}
            >
              Description
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#444444",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 300,
              }}
            >
              {item.description}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#a6262f",
                margin: "0 0 10px",
              }}
            >
              Ingredients
            </h3>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {item.ingredients.map((ingredient, idx) => (
                <li
                  key={idx}
                  style={{
                    backgroundColor: "#fdf0f5",
                    border: "1px solid #f0c8d8",
                    color: "#555555",
                    fontSize: "0.85rem",
                    padding: "4px 12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
