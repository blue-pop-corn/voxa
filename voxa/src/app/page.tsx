import VoiceDemo from "@/components/VoiceDemo";
import { FeaturesSection } from "../components/sections/features-section";
import { FinalCTA } from "../components/sections/final-cta";
import { Footer } from "../components/sections/footer";
import { HeroSection } from "../components/sections/hero-section";
import { LogosSection } from "../components/sections/logos-section";
import { Navbar } from "../components/sections/navbar";
import { TestimonialsSection } from "../components/sections/testimonials-section";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <VoiceDemo />
      </section>
      <FeaturesSection />
      <LogosSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
