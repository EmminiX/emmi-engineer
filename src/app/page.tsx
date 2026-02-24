import { BeamsBackground } from "@/components/background/BeamsBackground";
import { ScanlineOverlay } from "@/components/effects/ScanlineOverlay";
import HeroSection from "@/components/sections/HeroSection";
import LinkCards from "@/components/sections/LinkCards";
import SocialBar from "@/components/sections/SocialBar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <a href="#links" className="skip-link">
        Skip to links
      </a>

      {/* Animated beams background */}
      <BeamsBackground />

      {/* Subtle scanline CRT overlay */}
      <ScanlineOverlay />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div id="links">
          <LinkCards />
        </div>
        <SocialBar />
        <Footer />
      </div>
    </main>
  );
}
