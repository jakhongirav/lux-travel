"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { getTranslations } from "@/locales";

export default function Destinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const locale = useLocale();
  const translations = getTranslations(locale);

  const destinations = [
    {
      name: translations.destinations.destinations[0].name,
      image: "/santorini.jpg",
      description: translations.destinations.destinations[0].description,
    },
    {
      name: translations.destinations.destinations[1].name,
      image: "/maldives.jpg",
      description: translations.destinations.destinations[1].description,
    },
    {
      name: translations.destinations.destinations[2].name,
      image: "/swiss.jpg",
      description: translations.destinations.destinations[2].description,
    },
    {
      name: translations.destinations.destinations[3].name,
      image: "/bali.jpg",
      description: translations.destinations.destinations[3].description,
    },
    {
      name: translations.destinations.destinations[4].name,
      image: "/rome.jpg",
      description: translations.destinations.destinations[4].description,
    },
    {
      name: translations.destinations.destinations[5].name,
      image: "/dubai.jpg",
      description: translations.destinations.destinations[5].description,
    },
    {
      name: translations.destinations.destinations[6].name,
      image: "/malaysiya.jpg",
      description: translations.destinations.destinations[6].description,
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
          <h2 className="section-title">
            {translations.destinations.sectionTitle}
          </h2>
          <p className="section-subtitle">
            {translations.destinations.sectionSubtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full p-3">
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
                      {/* <div className="absolute bottom-1 left-4 right-4"></div> */}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-black">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {destination.description}
                      </p>
                      <Link
                        href="#contact"
                        className="text-gold font-medium hover:underline"
                      >
                        {translations.destinations.explorePackage}
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
            {translations.destinations.viewAllPackages}
          </Link>
        </div>
      </div>
    </section>
  );
}
