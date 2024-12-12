import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import Investment from "@/components/sections/Investment";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Portfolio />
      <Investment />
    </main>
  );
}