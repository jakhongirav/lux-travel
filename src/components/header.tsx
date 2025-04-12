"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getTranslations } from "../../locales";

interface HeaderProps {
  locale: "uz" | "ru" | "en";
}

export default function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translations = getTranslations(locale);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace locale
    router.push(segments.join("/"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <div className="container-custom flex justify-between items-center max-h-24">
        <Link href={`/${locale}`} className="flex items-center h-full">
          <Logo color={isScrolled ? "#000080" : "#FFFFFF"} />
        </Link>

        <nav className="hidden md:flex space-x-8 md:items-center">
          {translations.header.navItems.map((item, idx) => (
            <Link
              key={item}
              href={`#${["home", "about", "destinations", "offers"][idx]}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-navy hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <Select onValueChange={changeLocale} defaultValue={locale}>
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder={locale.toUpperCase()} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="uz">Uz</SelectItem>
              <SelectItem value="ru">Ru</SelectItem>
              <SelectItem value="en">En</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

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

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 container-custom">
            {translations.header.navItems.map((item, idx) => (
              <Link
                key={item}
                href={`#${["home", "about", "destinations", "offers"][idx]}`}
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
              {translations.header.bookNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
