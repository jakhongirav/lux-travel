"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Travel Deals
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to receive special
            offers, travel inspiration, and exclusive promotions.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-md text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-300">
              Thank you for subscribing! Check your email for a confirmation.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-300">
              There was an error subscribing. Please try again.
            </p>
          )}

          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from LuxTravel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
