"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact & Booking</h2>
          <p className="section-subtitle">
            Ready to embark on your luxury journey? Contact our travel experts
            to start planning your dream vacation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Mail className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">info@luxtravel.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="text-gray-600">
                    123 Luxury Avenue, New York, NY 10001
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy text-white p-2 rounded-full hover:bg-gold transition-colors"
                      aria-label={`Visit our ${social} page`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md">
                  Thank you! Your message has been sent successfully. We&apos;ll
                  get back to you shortly.
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md">
                  There was an error sending your message. Please try again
                  later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
