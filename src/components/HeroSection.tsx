"use client"
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleExplorePackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWhatsApp = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = "Hi! I would like to book your luxury camper van for my upcoming trip. Please share the available packages and pricing.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="relative h-svh flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682678368748-3e9ffcda4d79?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Luxury Camper Van
            <span className="block text-luxury-gold">Rentals from Pune</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter font-light max-w-3xl mx-auto">
            Your Adventure, Our Comfort – Whether Leisure or Corporate
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleExplorePackages}
              className="bg-luxury-cream text-luxury-navy hover:bg-luxury-cream-dark font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px]"
            >
              Explore Packages
            </Button>
            
            <Button
              onClick={handleBookWhatsApp}
              variant="outline"
              className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px]"
            >
              📱 Book on WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;