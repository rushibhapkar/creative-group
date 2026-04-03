//app\page.tsx

'use client';
// Absolute imports (assuming @ points to project root)
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProjectsSection from '@/components/projects-section';
import DroneShowcase from '@/components/drone-showcase';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import GallerySection from '@/components/gallery/GallerySection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <GallerySection />
      <DroneShowcase />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
}
