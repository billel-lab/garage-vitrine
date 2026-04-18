import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Services from "@/components/home/Services";
import Metrics from "@/components/home/Metrics";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Zone from "@/components/home/Zone";
import FAQ from "@/components/home/FAQ";
import CTAFinal from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Metrics />
      <Portfolio />
      <Testimonials />
      <Zone />
      <FAQ />
      <CTAFinal />
    </>
  );
}
