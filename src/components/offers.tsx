"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Offers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;

        if (newSeconds < 0) {
          const newMinutes = prevTime.minutes - 1;

          if (newMinutes < 0) {
            const newHours = prevTime.hours - 1;

            if (newHours < 0) {
              const newDays = prevTime.days - 1;
              return {
                days: newDays < 0 ? 0 : newDays,
                hours: newDays < 0 ? 0 : 23,
                minutes: newDays < 0 ? 0 : 59,
                seconds: newDays < 0 ? 0 : 59,
              };
            }

            return {
              ...prevTime,
              hours: newHours,
              minutes: 59,
              seconds: 59,
            };
          }

          return {
            ...prevTime,
            minutes: newMinutes,
            seconds: 59,
          };
        }

        return {
          ...prevTime,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pricingPlans = [
    {
      name: "Silver",
      price: "$1,999",
      features: [
        "4-star accommodations",
        "Economy class flights",
        "Shared guided tours",
        "Airport transfers",
        "Daily breakfast",
        "24/7 customer support",
      ],
      recommended: false,
    },
    {
      name: "Gold",
      price: "$3,499",
      features: [
        "5-star accommodations",
        "Business class flights",
        "Semi-private guided tours",
        "Private airport transfers",
        "Daily breakfast and dinner",
        "Premium experiences",
        "24/7 concierge service",
      ],
      recommended: true,
    },
    {
      name: "Platinum",
      price: "$5,999",
      features: [
        "Luxury 5-star accommodations",
        "First class flights",
        "Private guided tours",
        "Luxury vehicle transfers",
        "All-inclusive dining",
        "Exclusive experiences",
        "Personal concierge",
        "Luxury amenities package",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="offers" className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Exclusive Offers</h2>
          <p className="section-subtitle">
            Take advantage of our limited-time luxury travel packages with
            special rates and added benefits.
          </p>
        </motion.div>

        {/* Limited Time Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/special-offer.jpg"
                alt="Special Offer - Bali Retreat"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Bali Luxury Retreat
              </h3>
              <p className="text-gray-600 mb-6">
                Experience 7 nights in a private villa with infinity pool, daily
                spa treatments, and exclusive cultural experiences. Includes
                business class flights and private transfers.
              </p>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gold">$3,999</span>
                <span className="ml-3 text-gray-500 line-through">$5,499</span>
                <span className="ml-3 bg-gold/10 text-gold px-2 py-1 rounded text-sm">
                  Save 27%
                </span>
              </div>

              <div className="countdown-timer rounded-lg p-4 text-white mb-6">
                <p className="font-medium mb-2">Offer ends in:</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs">Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">Minutes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">Seconds</div>
                  </div>
                </div>
              </div>

              <Link href="#contact" className="btn-primary w-full text-center">
                Book This Offer
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Pricing Plans
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg p-6 border ${
                plan.recommended ? "border-gold relative" : "border-transparent"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold mb-2">{plan.name} Package</h4>
              <div className="text-3xl font-bold text-navy mb-4">
                {plan.price}
              </div>
              <p className="text-gray-600 mb-6">per person</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check
                      size={18}
                      className="text-gold mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full text-center block py-3 px-4 rounded-md font-medium transition-all ${
                  plan.recommended
                    ? "bg-gold text-white hover:bg-opacity-90"
                    : "bg-navy/10 text-navy hover:bg-navy/20"
                }`}
              >
                Select Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
