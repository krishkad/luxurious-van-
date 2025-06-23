"use client";


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your luxury camper van rentals. Could you please share more details about your packages?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">LV</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-playfair font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-luxury-navy' : 'text-white'
                }`}>
                  Luxury Vans
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-luxury-gold' : 'text-luxury-gold-light'
                }`}>
                  Premium Rentals
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Vans', 'Packages', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium font-inter transition-colors duration-300 hover:text-[var(--luxury-gold)] cursor-pointer ${
                    isScrolled ? 'text-luxury-navy' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleBookNow}
              className="bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-luxury-navy' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Vans', 'Packages', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-luxury-navy hover:text-luxury-gold transition-colors duration-300 w-full text-left"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={handleBookNow}
                  className="w-full bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy font-semibold py-2 rounded-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;