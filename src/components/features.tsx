"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Star, Plane, Hotel } from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Star className="w-10 h-10 text-gold" />,
      title: "VIP Service",
      description:
        "Experience unparalleled attention to detail with our dedicated concierge team available 24/7 to fulfill your every request.",
    },
    {
      icon: <Plane className="w-10 h-10 text-gold" />,
      title: "Personalized Itineraries",
      description:
        "Every journey is uniquely crafted to match your preferences, interests, and travel style for a truly bespoke experience.",
    },
    {
      icon: <Hotel className="w-10 h-10 text-gold" />,
      title: "Handpicked Luxury Hotels",
      description:
        "Stay in the world's most exclusive properties, carefully selected for their exceptional service, amenities, and locations.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-navy text-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title !text-gray-200">Why Choose Us</h2>
          <p className="section-subtitle !text-gray-400">
            At LuxTravel, we go above and beyond to ensure your travel
            experience exceeds all expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
