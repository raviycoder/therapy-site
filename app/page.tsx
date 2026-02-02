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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        heading="Live your life in full bloom"
        subheading="Therapy for Adults in Minneapolis, MN."
        ctaText="CONNECT WITH ME"
        ctaHref="#contact"
        imageSrc="/image1.png"
        imageAlt="Person holding lilac flowers"
      />
      <About />
      <Services />
      <Support />
      <Contact />
      <FAQ />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </main>
  );
}
