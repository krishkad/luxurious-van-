import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Born from a passion for adventure and luxury, we&apos;ve redefined road travel with our premium camper van rentals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-playfair font-semibold text-luxury-navy mb-6">
              The Rise of Road Trip Culture
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              In today&apos;s fast-paced world, road trips have become the ultimate escape. We recognized the growing desire for comfortable, luxurious travel experiences that don&apos;t compromise on adventure. Our premium fleet bridges the gap between wanderlust and comfort.
            </p>
            <p className="text-gray-600 mb-8 font-inter leading-relaxed">
              Whether you&apos;re planning a corporate retreat, family vacation, or a spiritual journey, our meticulously maintained vans provide the perfect blend of luxury and functionality. Every detail has been carefully curated to ensure your journey is as memorable as your destination.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-luxury-gold/20">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-navy">100+</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-semibold text-luxury-navy font-playfair">Happy Travelers</h4>
                  <p className="text-gray-600 max-sm:text-sm font-inter">Trusted by families and corporates across India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Luxury Van Interior" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Scenic Road Trip" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Mountain Adventure" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Forest Drive" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;