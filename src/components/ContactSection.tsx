"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919876543210";
    const message = "Hi! I have a query about your luxury camper van rentals. Could you please assist me?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:info@luxuryvans.com?subject=Inquiry about Luxury Van Rentals', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Ready to plan your luxury journey? Contact us through any of these channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Phone */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={handleCall}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-luxury-navy text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-playfair text-lg">Call Us Now</h3>
                    <p className="text-luxury-gold font-inter">+91 98765 43210</p>
                    <p className="text-gray-300 text-sm">Available 24/7 for your convenience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-playfair text-lg">WhatsApp Chat</h3>
                    <p className="text-luxury-gold font-inter">+91 98765 43210</p>
                    <p className="text-gray-300 text-sm">Instant response guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={handleEmail}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-playfair text-lg">Email Us</h3>
                    <p className="text-luxury-gold font-inter">info@luxuryvans.com</p>
                    <p className="text-gray-300 text-sm">Detailed inquiries welcome</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-playfair text-lg">Business Hours</h3>
                    <p className="text-luxury-gold font-inter">Mon-Sun: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-300 text-sm">Emergency bookings available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-luxury-navy text-2xl">📍</span>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-300 font-inter px-4">
                      Premium Van Rentals Hub<br/>
                      Pune, Maharashtra<br/>
                      India - 411001
                    </p>
                    <Button
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                      variant="outline"
                      className="mt-4 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy"
                    >
                      View on Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-16 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            📞 Call Now
          </Button>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="outline"
            className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            💬 WhatsApp Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;