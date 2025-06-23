"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const VansSection = () => {
  const handleBookVan = (vanType: string) => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = `Hi! I'm interested in booking your ${vanType} for my trip. Could you please share availability and pricing details?`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="vans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Choose from our meticulously maintained luxury vans, each designed
            for comfort and style
          </p>
        </div>

        {/* 6-Seater Van */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-luxury-cream rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1535655685871-dc8158ff167e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="6-Seater Luxury Van"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-luxury-gold text-luxury-navy px-4 py-2 rounded-full font-semibold text-sm">
                      Most Popular
                    </span>
                    <span className="text-luxury-navy font-bold text-2xl">
                      ₹8,500/day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-6">
                6-Seater Luxury Van
              </h3>
              <p className="text-gray-600 mb-8 font-inter leading-relaxed">
                Perfect for small groups and families, our 6-seater van combines
                comfort with intimacy. Every journey becomes a memorable
                experience with premium amenities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🪑", feature: "Recliner Seats" },
                  { icon: "❄️", feature: "Dual Zone AC" },
                  { icon: "🧊", feature: "Mini Fridge" },
                  { icon: "📺", feature: "Entertainment System" },
                  { icon: "⚡", feature: "USB Chargers" },
                  { icon: "💡", feature: "Ambient Lighting" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-[var(--luxury-cream)]/50 rounded-lg p-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-luxury-navy font-medium font-inter">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookVan("6-Seater Luxury Van")}
                className="bg-luxury-navy hover:bg-luxury-navy-light text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book 6-Seater Van
              </Button>
            </div>
          </div>
        </div>

        {/* 9-Seater Van */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-in-right">
              <div className="bg-luxury-cream rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1675912739507-fe527bb8279d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="9-Seater Luxury Van"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-navy px-4 py-2 rounded-full font-semibold text-sm">
                      Premium Choice
                    </span>
                    <span className="text-luxury-navy font-bold text-2xl">
                      ₹12,500/day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 animate-slide-in-left">
              <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-6">
                9-Seater Luxury Van
              </h3>
              <p className="text-gray-600 mb-8 font-inter leading-relaxed">
                Ideal for larger groups and corporate travel, our 9-seater van
                offers spacious luxury without compromise. Experience the
                ultimate in group travel comfort.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏢", feature: "Spacious Layout" },
                  { icon: "🛋️", feature: "Plush Interiors" },
                  { icon: "🔊", feature: "Premium Sound" },
                  { icon: "❄️", feature: "Multi-Zone AC" },
                  { icon: "🪟", feature: "Large Windows" },
                  { icon: "🧳", feature: "Luggage Racks" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-[var(--luxury-cream)]/50 rounded-lg p-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-luxury-navy font-medium font-inter">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBookVan("9-Seater Luxury Van")}
                className="bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Book 9-Seater Van
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VansSection;
