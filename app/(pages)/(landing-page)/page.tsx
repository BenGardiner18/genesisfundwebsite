import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import Spotlight from "@/components/sections/Spotlight";
import Schools from '@/components/sections/Schools';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      {/* <Portfolio /> */}
      <Partners />
      <Spotlight />
      <Schools />
    </main>
  );
}