import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { CertificationSection } from "@/app/components/certification-section";
import { ServicesSection } from "@/app/components/services-section";
import { GallerySection } from "@/app/components/gallery-section";
import { ContactSection } from "@/app/components/contact-section";
import { Footer } from "@/app/components/footer";
import { TestimonialsSection } from "@/app/components/testimonials-section";

export default function Home() {
  return (
    <main className="bg-san-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <CertificationSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
