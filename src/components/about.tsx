"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bed, Plane, MapPin, Shield, Award, Clock } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { getTranslations } from "@/locales";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const locale = useLocale();
  const translations = getTranslations(locale);

  const features = [
    { icon: <Bed size={24} />, title: translations.about.features[0].title },
    { icon: <Plane size={24} />, title: translations.about.features[1].title },
    { icon: <MapPin size={24} />, title: translations.about.features[2].title },
    { icon: <Shield size={24} />, title: translations.about.features[3].title },
    { icon: <Award size={24} />, title: translations.about.features[4].title },
    { icon: <Clock size={24} />, title: translations.about.features[5].title },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-beige">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About LuxTravel</h2>
          <p className="section-subtitle">
            {translations.about.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 text-center shadow-md card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gold/10 text-gold">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                Experience the finest {feature.title.toLowerCase()} tailored to
                your preferences.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
