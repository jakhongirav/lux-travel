"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
// import Logo from "./logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="w-16 h-8">
          <Logo color={isScrolled ? "#000080" : "#FFFFFF"} />
          {/* <span
            className={`text-2xl font-playfair font-bold ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            LuxTravel
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 md:items-center">
          {["Home", "About", "Destinations", "Offers"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-navy hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`btn-primary ${
              isScrolled ? "bg-gold text-white" : "bg-white text-navy"
            }`}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-navy" : "text-white"} size={24} />
          ) : (
            <Menu
              className={isScrolled ? "text-navy" : "text-white"}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 container-custom">
            {[
              "Home",
              "About",
              "Destinations",
              "Offers",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-navy hover:text-gold font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary bg-gold text-white w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
