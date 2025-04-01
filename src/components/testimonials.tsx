"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      text: "Our Maldives vacation arranged by LuxTravel exceeded all expectations. From the overwater villa to the private dining experiences, every detail was perfect. The personal concierge service made us feel like royalty throughout our stay.",
    },
    {
      name: "James & Emma Wilson",
      location: "London, UK",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      text: "LuxTravel created the perfect honeymoon for us in Santorini. The sunset views from our private terrace were breathtaking, and the exclusive experiences they arranged were truly once-in-a-lifetime. We can't wait to book our next adventure with them!",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      text: "As a frequent luxury traveler, I have high standards, and LuxTravel consistently exceeds them. Their attention to detail and ability to secure exclusive access to unique experiences sets them apart from other agencies I've used in the past.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-beige">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Discover why discerning travelers choose LuxTravel for their most
            important journeys.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="testimonial-card rounded-xl p-8 text-center"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gold">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-gold fill-gold"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-gold" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
