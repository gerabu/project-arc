import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { HowSection } from "./components/how-section";
import { FeatureSection } from "./components/feature-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <HowSection />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
