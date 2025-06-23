"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: "",
    customTrip: "",
    dates: "",
    distance: "",
    pax: "",
    preferences: "",
  });
  const [isCustomPackage, setIsCustomPackage] = useState(false);

  const packages = [
    "Pune to Goa Getaway",
    "Pune to Ujjain + Omkareshwar",
    "Pune to Mahabaleshwar",
    "Ashtavinayak Yatra",
    "Jyotirlinga Darshan",
    "Custom Package",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "package") {
      setIsCustomPackage(value === "Custom Package");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.package
    ) {
      //   toast({
      //     title: "Missing Information",
      //     description: "Please fill in all required fields.",
      //     variant: "destructive",
      //   });
      return;
    }

    // Create WhatsApp message
    let message = `Hi! I would like to book a luxury camper van. Here are my details:\n\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Package: ${formData.package}\n`;

    if (isCustomPackage) {
      message += `\nCustom Trip Details:\n`;
      message += `Trip Name: ${formData.customTrip}\n`;
      message += `Dates: ${formData.dates}\n`;
      message += `Approx Distance: ${formData.distance}\n`;
      message += `Number of Passengers: ${formData.pax}\n`;
      message += `Preferences: ${formData.preferences}\n`;
    }

    message += `\nPlease share availability and pricing details. Thank you!`;

    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // toast({
    //   title: "Booking Request Sent!",
    //   description: "Your details have been sent via WhatsApp. We'll get back to you soon!",
    // });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--luxury-navy)] mb-6">
            Book Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to embark on your luxury adventure? Fill in your details and
            we&apos;ll get back to you instantly
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-gradient-to-br from-[var(--luxury-cream)] to-white animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-playfair text-luxury-navy">
              Booking Details
            </CardTitle>
            <p className="text-gray-600 font-inter">
              Your luxury journey starts here
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-luxury-navy font-semibold"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-luxury-navy font-semibold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-luxury-navy font-semibold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Package Selection */}
              <div className="w-full">
                <Label
                  htmlFor="package"
                  className="text-luxury-navy font-semibold"
                >
                  Select Package *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("package", value)}
                >
                  <SelectTrigger className="mt-1 w-full border-luxury-gold/30 focus:border-luxury-gold">
                    <SelectValue placeholder="Choose your preferred package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg} value={pkg}>
                        {pkg}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Package Details */}
              {isCustomPackage && (
                <div className="space-y-4 p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20 animate-fade-in">
                  <h3 className="text-lg font-semibold text-luxury-navy font-playfair">
                    Custom Package Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="customTrip"
                        className="text-luxury-navy font-semibold"
                      >
                        Trip Name
                      </Label>
                      <Input
                        id="customTrip"
                        type="text"
                        value={formData.customTrip}
                        onChange={(e) =>
                          handleInputChange("customTrip", e.target.value)
                        }
                        className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                        placeholder="e.g., Mumbai to Kerala Road Trip"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="dates"
                        className="text-luxury-navy font-semibold"
                      >
                        Preferred Dates
                      </Label>
                      <Input
                        id="dates"
                        type="text"
                        value={formData.dates}
                        onChange={(e) =>
                          handleInputChange("dates", e.target.value)
                        }
                        className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                        placeholder="e.g., 15-18 March 2024"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="distance"
                        className="text-luxury-navy font-semibold"
                      >
                        Approx Distance
                      </Label>
                      <Input
                        id="distance"
                        type="text"
                        value={formData.distance}
                        onChange={(e) =>
                          handleInputChange("distance", e.target.value)
                        }
                        className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                        placeholder="e.g., 1500 km round trip"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="pax"
                        className="text-luxury-navy font-semibold"
                      >
                        Number of Passengers
                      </Label>
                      <Input
                        id="pax"
                        type="number"
                        value={formData.pax}
                        onChange={(e) =>
                          handleInputChange("pax", e.target.value)
                        }
                        className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                        placeholder="e.g., 6"
                        min="1"
                        max="9"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="preferences"
                      className="text-luxury-navy font-semibold"
                    >
                      Special Preferences
                    </Label>
                    <Textarea
                      id="preferences"
                      value={formData.preferences}
                      onChange={(e) =>
                        handleInputChange("preferences", e.target.value)
                      }
                      className="mt-1 border-luxury-gold/30 focus:border-luxury-gold"
                      placeholder="Any specific requirements, pickup location, or special requests..."
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-gold-gradient hover:bg-luxury-gold-dark text-luxury-navy font-bold w-full py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  📱 Send Details via WhatsApp
                </Button>
                <p className="text-sm text-gray-500 mt-3 font-inter">
                  Your details will be sent directly to our WhatsApp for instant
                  response
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
