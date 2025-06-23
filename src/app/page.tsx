import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import FloatingActions from '@/components/FloatingAction';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/Testimonials';
import VansSection from '@/components/VansSection';
import React from 'react';


const Home = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VansSection />
      <PackagesSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Home;