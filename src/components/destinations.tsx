"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Destinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = [
    {
      name: "Santorini, Greece",
      image: "/images/santorini.jpg",
      price: "$2,499",
      description:
        "Experience the iconic white-washed buildings and breathtaking sunsets.",
    },
    {
      name: "Maldives",
      image: "/images/maldives.jpg",
      price: "$3,299",
      description:
        "Luxury overwater bungalows in crystal clear turquoise waters.",
    },
    {
      name: "Swiss Alps",
      image: "/images/swiss-alps.jpg",
      price: "$2,899",
      description: "Majestic mountain views and world-class ski resorts.",
    },
    {
      name: "Bali, Indonesia",
      image: "/images/bali.jpg",
      price: "$1,999",
      description:
        "Tropical paradise with lush landscapes and vibrant culture.",
    },
    {
      name: "Amalfi Coast, Italy",
      image: "/images/amalfi.jpg",
      price: "$2,799",
      description:
        "Stunning coastal views and charming Mediterranean villages.",
    },
    {
      name: "Dubai, UAE",
      image: "/images/dubai.jpg",
      price: "$3,499",
      description: "Ultra-luxury experiences in the city of superlatives.",
    },
  ];

  const visibleDestinations = destinations.slice(
    activeIndex,
    activeIndex +
      (typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3)
  );

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + 1 >= destinations.length - 2 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev - 1 < 0 ? destinations.length - 3 : prev - 1
    );
  };

  return (
    <section id="destinations" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Luxury Destinations</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of the world&apos;s most exclusive
            destinations, each offering unique experiences and unparalleled
            luxury.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {visibleDestinations.map((destination, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-lg card-hover"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">
                          {destination.name}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gold font-bold">
                            From {destination.price}
                          </span>
                          <span className="text-white text-sm">per person</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">
                        {destination.description}
                      </p>
                      <Link
                        href="#contact"
                        className="text-gold font-medium hover:underline"
                      >
                        Explore Package →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors z-10"
            aria-label="Previous destination"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-md text-navy hover:text-gold transition-colors z-10"
            aria-label="Next destination"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="btn-secondary">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
