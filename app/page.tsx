import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Support from "@/components/sections/Support";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import ProfessionalBackground from "@/components/sections/ProfessionalBackground";
import CTA from "@/components/sections/CTA";
import Office from "@/components/sections/Office";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        heading="Therapy for High-Achieving Adults in Santa Monica"
        subheading="Find a safe, grounded space to release tension, heal from the past, and reconnect with your true self."
        ctaText="BOOK A FREE CONSULTATION"
        ctaHref="#contact"
        imageSrc="/images2/image1.webp"
        imageAlt="Dr. Maya Reynolds, Psychologist"
      />
      <About />
      <Services />
      <Support />
      <Contact />
      <Office />
      <FAQ />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </main>
  );
}
