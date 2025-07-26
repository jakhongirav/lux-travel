"use client";

import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { getTranslations } from "../locales";
import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const locale = useLocale();
  const translations = getTranslations(locale);
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: translations.footer.company,
      links: [
        { name: translations.footer.aboutUs, href: "#about" },
        { name: translations.footer.contactUs, href: "#contact" },
        { name: translations.footer.payment, href: "#payment" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+998 33 302 30 33",
      href: "tel:+998333023033",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+998 93 600 22 83",
      href: "tel:+998936002283",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "luxtraveluzb1@gmail.com",
      href: "mailto:luxtraveluzb1@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: translations.footer.adress,
      href: "https://www.google.com/maps/place/41%C2%B018'36.7%22N+69%C2%B017'25.2%22E/@41.3098683,69.2896259,17.39z/data=!4m4!3m3!8m2!3d41.3101944!4d69.2903333?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/luxtravel.uzb",
      icon: <Instagram size={24} />,
    },
    {
      name: "Telegram",
      href: "https://t.me/luxtraveluzb",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.53-1.47.52-.49-.01-1.43-.28-2.13-.51-.86-.28-1.55-.43-1.49-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.63 4.75-1.91 5.41-1.91.12 0 .38.03.55.17.14.12.18.28.2.45-.02.14-.02.3-.04.42z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/998333023033",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-navy text-white" id="contact">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-playfair font-bold">
                LuxTravel
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              {translations.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-gold/80 p-2 rounded-full transition-colors"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold mb-4">
              {translations.footer.contact}
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gold mt-1">{info.icon}</span>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex justify-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} LuxTravel.{" "}
            {translations.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
