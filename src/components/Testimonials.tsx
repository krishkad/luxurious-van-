
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      trip: "Pune to Goa Getaway",
      rating: 5,
      review: "Absolutely fantastic experience! The van was luxurious and comfortable. Our family had the best road trip ever. The driver was professional and the amenities exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Priya Patel",
      trip: "Ashtavinayak Yatra",
      rating: 5,
      review: "The spiritual journey was made so much more comfortable with their premium van service. Every detail was taken care of. Highly recommend for family pilgrimages!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332-4ac8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Corporate Group - TechCorp",
      trip: "Corporate Retreat Package",
      rating: 5,
      review: "Outstanding service for our team outing! The 9-seater van was perfect for our group. Professional service, on-time pickup, and excellent condition of the vehicle.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "Amit & Kavya",
      trip: "Pune to Mahabaleshwar",
      rating: 5,
      review: "Perfect for our romantic getaway! The van was clean, comfortable, and had all the amenities we needed. The ambient lighting created such a nice atmosphere during our evening drive.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "The Mehta Family",
      trip: "Jyotirlinga Darshan",
      rating: 5,
      review: "Three generations of our family traveled together comfortably. The spacious interior and smooth ride made our long journey enjoyable. Excellent service from start to finish!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-luxury-gold' : 'text-gray-400'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Real experiences from our valued customers who chose luxury for their journeys
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review */}
                <p className="text-gray-600 mb-6 font-inter italic leading-relaxed text-center">
                  &quot;{testimonial.review}&quot;
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-luxury-navy font-playfair">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-luxury-gold font-inter">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-luxury-navy mb-2">100+</div>
              <div className="text-gray-600 font-inter">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-luxury-navy mb-2">50+</div>
              <div className="text-gray-600 font-inter">Destinations Covered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-luxury-navy mb-2">2+</div>
              <div className="text-gray-600 font-inter">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-luxury-navy mb-2">24/7</div>
              <div className="text-gray-600 font-inter">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;