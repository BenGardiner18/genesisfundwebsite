import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import Spotlight from "@/components/sections/Spotlight";
import Schools from '@/components/sections/Schools';
import WaveShape from '@/components/ui/WaveShape';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaveShape position="top-left" />
        <WaveShape position="top-right" />
        <WaveShape position="bottom-left" />
        <WaveShape position="bottom-right" />
      </div>
      
      <div className="relative">
        <Hero />
        <Stats />
        {/* <Portfolio /> */}
        <Partners />
        <Spotlight />
        <Schools />
      </div>
    </main>
  );
}