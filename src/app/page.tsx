import { CircuitTracesBackground } from "@/components/background/CircuitTracesBackground";
import HeroSection from "@/components/sections/HeroSection";
import LinkCards from "@/components/sections/LinkCards";
import RolePills from "@/components/sections/RolePills";
import Awards from "@/components/sections/Awards";
import SocialBar from "@/components/sections/SocialBar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      <a href="#links" className="skip-link">
        Skip to links
      </a>

      {/* Animated circuit traces background */}
      <CircuitTracesBackground />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <RolePills />
        <div id="links">
          <LinkCards />
        </div>
        <Awards />
        <SocialBar />
        <Footer />
      </div>
    </main>
  );
}
