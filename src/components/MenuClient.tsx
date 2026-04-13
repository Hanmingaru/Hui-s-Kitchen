"use client";

import { useState } from "react";
import { menuItems, type MenuItem } from "@/data/menuItems";
import MenuTile from "./MenuTile";
import MenuModal from "./MenuModal";

export default function MenuClient() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <>
      {/* Section heading */}
      <div style={{ textAlign: "center", padding: "48px 24px 32px" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a6262f",
            margin: "0 0 12px",
            fontWeight: 600,
          }}
        >
          Our Menu
        </p>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Handcrafted Dishes
        </h1>
        <div
          style={{
            width: 48,
            height: 2,
            backgroundColor: "#a6262f",
            margin: "16px auto 0",
          }}
        />
      </div>

      {/* 3-column grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {menuItems.map((item) => (
          <MenuTile key={item.id} item={item} onSelect={setSelectedItem} />
        ))}
      </div>

      {/* Detail modal */}
      {selectedItem && (
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
