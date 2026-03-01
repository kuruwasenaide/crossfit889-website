"use client";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ClassesSection from "@/components/sections/ClassesSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import PlansSection from "@/components/sections/PlansSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cf-darker">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <ArticlesSection />
        <PlansSection />
        <ClassesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
