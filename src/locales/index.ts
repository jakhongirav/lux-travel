import { Locale, Translation } from "../../types/translations";

export const translations: Record<Locale, Translation> = {
  uz: {
    header: {
      navItems: ["Bosh sahifa", "Biz haqimizda", "Yo'nalishlar", "Takliflar"],
      bookNow: "Buyurtma berish",
    },
    hero: {
      title: "LuxTravel bilan Dunyoni Kezing",
      subtitle:
        "Dunyodagi eng ajoyib joylarda saralangan hashamatli sayohatlar",
      button: "Orzuingizdagi Safarni Rejalashtiring",
    },
    about: {
      sectionTitle: "LuxTravel Haqida",
      sectionSubtitle:
        "10 yildan ortiq vaqt davomida LuxTravel g'ayrioddiy sayohatlarni izlovchi talabchan mijozlar uchun premium sayohatlarni yaratib kelmoqda. Bizning tajribamiz hashamat, haqiqiylik va unutilmas lahzalarni birlashtirgan shaxsiy marshrutlarni tashkil etishdir.",
      features: [
        {
          title: "VIP Joylashuv",
          description:
            "Sizning istaklaringizga moslashtirilgan eng yaxshi VIP mehmonxonalardan bahramand bo'ling.",
        },
        {
          title: "Birinchi Sinf Aviareyslar",
          description:
            "Shaxsiy tanlov asosida birinchi sinfda qulay sayohat qiling.",
        },
        {
          title: "Shaxsiy Ekskursiyalar",
          description:
            "Qiziqishlaringizga mos shaxsiy gid bilan eksklyuziv ekskursiyalar.",
        },
        {
          title: "Sayohat Sug'urtasi",
          description: "Sayohatingizga moslashtirilgan kompleks sug'urta.",
        },
        {
          title: "Hashamatli Tadbirlar",
          description: "Sizning mazagingizga ko'ra noyob premium tadbirlar.",
        },
        {
          title: "24/7 Konsyerj Xizmati",
          description:
            "Har qanday masalani hal qilish uchun shaxsiy konsyerj xizmati.",
        },
      ],
    },
  },
  ru: {
    header: {
      navItems: ["Главная", "О нас", "Направления", "Предложения"],
      bookNow: "Забронировать",
    },
    hero: {
      title: "Исследуйте Мир с LuxTravel",
      subtitle:
        "Эксклюзивные роскошные путешествия в самых захватывающих дух местах мира",
      button: "Запланируйте Путешествие Вашей Мечты",
    },
    about: {
      sectionTitle: "О LuxTravel",
      sectionSubtitle:
        "Более десяти лет LuxTravel создает премиальные путешествия для взыскательных клиентов, ищущих необыкновенные впечатления. Наша экспертиза заключается в организации индивидуальных маршрутов, сочетающих роскошь, аутентичность и незабываемые моменты.",
      features: [
        {
          title: "VIP-Размещение",
          description:
            "Наслаждайтесь лучшими VIP-отелями, подобранными согласно вашим предпочтениям.",
        },
        {
          title: "Авиаперелеты Первого Класса",
          description:
            "Путешествуйте с комфортом в первом классе по индивидуальному подбору.",
        },
        {
          title: "Частные Экскурсии",
          description:
            "Эксклюзивные экскурсии с персональным гидом по вашим интересам.",
        },
        {
          title: "Страховка для Путешествий",
          description:
            "Комплексная страховка, адаптированная под ваше путешествие.",
        },
        {
          title: "Роскошные Мероприятия",
          description: "Уникальные премиальные мероприятия по вашему вкусу.",
        },
        {
          title: "Круглосуточный Консьерж",
          description: "Персональный консьерж 24/7 для решения любых вопросов.",
        },
      ],
    },
  },
  en: {
    header: {
      navItems: ["Home", "About", "Destinations", "Offers"],
      bookNow: "Book Now",
    },
    hero: {
      title: "Explore the World with LuxTravel",
      subtitle:
        "Curated luxury experiences in the world's most breathtaking destinations",
      button: "Plan Your Dream Trip",
    },
    about: {
      sectionTitle: "About LuxTravel",
      sectionSubtitle:
        "For over a decade, LuxTravel has been crafting premium travel experiences for discerning travelers who seek the extraordinary. Our expertise lies in curating bespoke journeys that combine luxury, authenticity, and unforgettable moments.",
      features: [
        {
          title: "VIP Accommodations",
          description:
            "Experience the finest VIP accommodations tailored to your preferences.",
        },
        {
          title: "First-Class Flights",
          description:
            "Experience the finest first-class flights tailored to your preferences.",
        },
        {
          title: "Private Tours",
          description:
            "Experience the finest private tours tailored to your preferences.",
        },
        {
          title: "Travel Insurance",
          description:
            "Experience the finest travel insurance tailored to your preferences.",
        },
        {
          title: "Luxury Experiences",
          description:
            "Experience the finest luxury experiences tailored to your preferences.",
        },
        {
          title: "24/7 Concierge",
          description:
            "Experience the finest 24/7 concierge tailored to your preferences.",
        },
      ],
    },
  },
};

export const getTranslations = (locale: Locale): Translation => {
  return translations[locale] || translations.uz;
};
