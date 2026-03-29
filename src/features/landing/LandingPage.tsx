import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowSection from "./components/HowSection";
import NavBar from "./components/NavBar";
import ProblemSection from "./components/ProblemSection";
import SummarySection from "./components/SummarySection";
import TimelineSection from "./components/TimelineSection";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProblemSection />
      <HowSection />
      <TimelineSection />
      <SummarySection />
      <Footer />
    </div>
  );
}
