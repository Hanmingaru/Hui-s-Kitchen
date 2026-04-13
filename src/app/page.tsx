import Header from "@/components/Header";
import MenuClient from "@/components/MenuClient";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <Header />
      <MenuClient />
    </main>
  );
}
