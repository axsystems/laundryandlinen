import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Testimonials } from "@/components/marketing/testimonials";
import { CTASection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
