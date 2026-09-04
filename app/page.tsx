import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DarkAnalyticsSection from "@/components/DarkAnalyticsSection";
import ImpactPhotoSection from "@/components/ImpactPhotoSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import ValuesGrid from "@/components/ValuesGrid";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        
        <About />
        
        <TwoColumnSection 
          eyebrow="Vertical 01"
          headline="Space Sciences & IoT R&D"
          description="We build rugged, deployment-ready IoT sensor arrays to gather ground-truth telemetry. Combined with satellite imagery and machine learning, we create predictive models for agriculture, water conservation, and climate resilience."
          imageSrc="/Sensor-IoT diagram.png"
          imageAlt="Harit Vikas IoT ecosystem diagram — field sensors, weather stations, soil probes, satellite uplink, cloud platform, web dashboard and mobile app working together for precision agriculture"
          ctaText="Explore R&D"
          imageLeft={false}
        />
        

        
        <TwoColumnSection
          id="impact"
          eyebrow="Vertical 02"
          headline="Community Impact"
          description="Technology fails without the people who use it. We deploy digital literacy programs, sustainable farming workshops, and capacity-building initiatives directly to the communities most affected by climate change."
          imageSrc="/vertical-impact.png"
          imageAlt="Community training workshop"
          ctaText="Explore Impact"
          imageLeft={true}
        />

        <ValuesGrid />
        
        <ImpactPhotoSection />
        
        <Team />
        
        <Projects />
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
