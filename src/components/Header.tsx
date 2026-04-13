import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "#000000",
        borderBottom: "2px solid #f4b8cc",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          position: "relative",
          width: 120,
          height: 120,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          src="/assets/logo.webp"
          alt="Hui's Kitchen"
          fill
          style={{ objectFit: "cover", transform: "scale(1.0)", transformOrigin: "center" }}
          priority
        />
      </div>
    </header>
  );
}
