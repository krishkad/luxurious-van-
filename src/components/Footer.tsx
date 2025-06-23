"use client"
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/luxuryvans',
      whatsapp: 'https://wa.me/919876543210',
      youtube: 'https://youtube.com/@luxuryvans',
      linkedin: 'https://linkedin.com/company/luxuryvans'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-luxury-navy-light border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center">
                <span className="text-luxury-navy font-bold text-lg">LV</span>
              </div>
              <div>
                <h3 className="text-white font-playfair font-bold text-xl">Luxury Vans</h3>
                <p className="text-luxury-gold text-sm">Premium Rentals</p>
              </div>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed">
              Experience the ultimate in luxury road travel. We provide premium camper van rentals that transform your journey into an unforgettable adventure.
            </p>
            <div className="flex space-x-2 text-sm text-gray-400">
              <span>Trusted by 100+ travelers</span>
              <span>•</span>
              <span>2+ years of excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-playfair font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Vans', id: 'vans' },
                { name: 'Packages', id: 'packages' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-luxury-gold transition-colors duration-300 font-inter text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-playfair font-semibold text-lg">Connect With Us</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300 font-inter">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@luxuryvans.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: '📷', platform: 'instagram', label: 'Instagram' },
                { icon: '💬', platform: 'whatsapp', label: 'WhatsApp' },
                { icon: '📺', platform: 'youtube', label: 'YouTube' },
                { icon: '💼', platform: 'linkedin', label: 'LinkedIn' }
              ].map((social) => (
                <button
                  key={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                  className="w-10 h-10 bg-white/10 hover:bg-luxury-gold hover:text-luxury-navy rounded-full flex items-center justify-center text-luxury-gold transition-all duration-300 transform hover:scale-110"
                  title={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-inter text-sm">
              © {currentYear} Luxury Vans. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 font-inter">
              <button className="hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-luxury-gold transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-luxury-gold transition-colors duration-300">
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;