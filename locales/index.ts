import { Locale, Translation } from "../types/translations";

export const translations: Record<Locale, Translation> = {
  uz: {
    header: {
      navItems: ["Bosh sahifa", "Biz haqimizda", "Yo'nalishlar", "Takliflar"],
      bookNow: "Buyurtma berish",
    },
    hero: {
      title: "Sayohatingizni biz bilan qiling",
      subtitle: "Premium sayohat xizmatlari",
      cta: "Boshlash",
    },
    about: {
      title: "Biz haqimizda",
      description: "Biz eng yaxshi sayohat tajribasini taqdim etamiz",
    },
  },
  ru: {
    header: {
      navItems: ["Главная", "О нас", "Направления", "Предложения"],
      bookNow: "Забронировать",
    },
    hero: {
      title: "Отправьтесь в путешествие с нами",
      subtitle: "Премиальные туристические услуги",
      cta: "Начать",
    },
    about: {
      title: "О нас",
      description: "Мы обеспечиваем лучший туристический опыт",
    },
  },
  en: {
    header: {
      navItems: ["Home", "About", "Destinations", "Offers"],
      bookNow: "Book Now",
    },
    hero: {
      title: "Travel With Us",
      subtitle: "Premium travel services",
      cta: "Get Started",
    },
    about: {
      title: "About Us",
      description: "We provide the best travel experience",
    },
  },
};

export const getTranslations = (locale: Locale): Translation => {
  return translations[locale] || translations.uz;
};
