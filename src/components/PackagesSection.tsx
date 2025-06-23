"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PackagesSection = () => {
  const packages = [
    {
      id: 'goa',
      title: 'Pune to Goa Getaway',
      duration: '3 Days / 2 Nights',
      price: '₹31,500',
      distance: '900 km',
      route: 'Pune → Goa → Pune',
      includes: ['Driver', 'Fuel', 'Onboard amenities', 'Permit'],
      excludes: ['Parking', 'Toll', 'Entry fees'],
      driverDA: '₹500/day',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ujjain',
      title: 'Pune to Ujjain Mahakaleshwar, Omkareshwar',
      duration: '2 Days / 1 Night',
      price: '₹49,000',
      distance: '1,400 km',
      route: 'Pune → Ujjain → Omkareshwar → Pune',
      includes: ['Driver', 'Fuel', 'Onboard amenities', 'Permit'],
      excludes: ['Parking', 'Toll', 'Temple entry fees'],
      driverDA: '₹500/day',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'mahabaleshwar',
      title: 'Pune to Mahabaleshwar',
      duration: '2 Days / 1 Night',
      price: '₹8,500/day',
      distance: '300 km',
      route: 'Pune → Mahabaleshwar → Tapola Lake → Pune',
      includes: ['Driver', 'Onboard amenities', 'Permit'],
      excludes: ['Parking', 'Fuel', 'Toll', 'Entry fees'],
      driverDA: '₹500/day',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'ashtavinayak',
      title: 'Ashtavinayak Yatra',
      duration: '2 Days / 1 Night',
      price: '₹24,500',
      distance: '700 km',
      route: 'All 8 Ganpati Temples → Pune',
      includes: ['Driver', 'Fuel', 'Onboard amenities', 'Permit'],
      excludes: ['Parking', 'Toll', 'Entry fees'],
      driverDA: '₹500/day',
      image: 'https://images.unsplash.com/photo-1730808465657-e34a14c6a62a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'jyotirlinga',
      title: 'Jyotirlinga Darshan',
      duration: '3 Days / 2 Nights',
      price: '₹56,000',
      distance: '1,600 km',
      route: 'Pune → Bhimashankar → Trimbakeshwar → Ujjain → Omkareshwar → Grishneshwar → Pune',
      includes: ['Driver', 'Fuel', 'Onboard amenities', 'Permit'],
      excludes: ['Parking', 'Toll', 'Entry fees'],
      driverDA: '₹500/day',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  const handleBookPackage = (packageTitle: string) => {
    const phoneNumber = "919876543210";
    const message = `Hi! I'm interested in booking the "${packageTitle}" package. Could you please share more details and check availability?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-luxury-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Premium Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Carefully curated journeys to India&apos;s most beautiful destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-scale-in p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-60`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-playfair text-xl font-bold leading-tight">
                    {pkg.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-luxury-gold font-semibold text-sm">Duration</p>
                    <p className="text-luxury-navy font-bold">{pkg.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-luxury-gold font-semibold text-sm">Price</p>
                    <p className="text-luxury-navy font-bold text-lg">{pkg.price}</p>
                  </div>
                </div>

                {/* Route & Distance */}
                <div className="mb-4">
                  <p className="text-luxury-gold font-semibold text-sm mb-1">Route</p>
                  <p className="text-gray-700 text-sm">{pkg.route}</p>
                </div>

                <div className="mb-4">
                  <p className="text-luxury-gold font-semibold text-sm mb-1">Distance</p>
                  <p className="text-gray-700 text-sm">{pkg.distance}</p>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-luxury-gold font-semibold text-sm mb-2">Includes:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2 text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div className="mb-4">
                  <h4 className="text-luxury-gold font-semibold text-sm mb-2">Excludes:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    {pkg.excludes.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-red-500 mr-2 text-xs">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Driver DA */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold text-luxury-gold">Driver DA:</span> {pkg.driverDA}
                  </p>
                </div>

                {/* Terms */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 italic">Terms & Conditions Applied</p>
                </div>

                {/* Book Button */}
                <Button
                  onClick={() => handleBookPackage(pkg.title)}
                  className="w-full bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;