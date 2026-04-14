import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Lessons from "@/components/Lessons";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { CTABanner, Footer } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Lessons />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}