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
    destinations: {
      sectionTitle: "Hashamatli Manzillar",
      sectionSubtitle:
        "Dunyoning eng eksklyuziv manzillarini o'z ichiga olgan tanlangan ro'yxatimizni kashf eting. Har bir manzil noyob tajribalar va benuqson hashamatni taklif etadi.",
      viewAllPackages: "Barcha Paketlar",
      explorePackage: "Batafsil →",
      destinations: [
        {
          name: "Santorini, Gretsiya",
          description: "Oq rangga bo'yalgan uylar va nafis quyosh botishlari.",
        },
        {
          name: "Maldiv orollari",
          description: "Tiniq ko'k suv ustidagi hashamatli bungalovlar.",
        },
        {
          name: "Shveytsariya Alplari",
          description:
            "Dunyoning eng yaxshi chang'i kurortlari va ajoyib tog' manzaralari.",
        },
        {
          name: "Bali, Indoneziya",
          description:
            "Yashil landshaftlar va jonli madaniyatga ega tropik jannat.",
        },
        {
          name: "Rim, Italiya",
          description:
            "O'zgacha dengiz manzaralari va jozibali O'rta er dengizi qishloqlari.",
        },
        {
          name: "Dubay, BAA",
          description: "Rekordlar shahrida ultra-hashamatli tajribalar.",
        },
        {
          name: "Malayziya",
          description:
            "Zamonaviy osmono'par binalar qadimgi tropik o'rmonlar bilan hashamatli uyg'unlikda uchrashadigan joy.",
        },
      ],
    },
    footer: {
      company: "Kompaniya",
      aboutUs: "Biz haqimizda",
      contactUs: "Bog'lanish",
      payment: "To'lov",
      description:
        "LuxTravel - bu hashamatli ta'tillar va noyob sayohat tajribalarini qidirayotgan sayohatchilar uchun maxsus hashamatli sayohat agentligi.",
      contact: "Biz bilan bog'laning",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
    },
    payment: {
      body: "To‘lash uchun skanerlаng",
    },
    features: {
      body: [
        {
          title: "VIP xizmat",
          description:
            "24/7 sizning har bir istagingizni bajarishga tayyor bo‘lgan maxsus konsyerj jamoamiz bilan mukammal xizmatdan bahramand bo‘ling.",
        },
        {
          title: "Shaxsiy marshrutlar",
          description:
            "Har bir sayohat sizning xohish, qiziqish va sayohat uslubingizga mos ravishda alohida tarzda yaratiladi.",
        },
        {
          title: "Tanlab olingan hashamatli mehmonxonalar",
          description:
            "Dunyoning eng eksklyuziv mehmonxonalarida, eng yaxshi xizmat, qulaylik va joylashuvga ega maskanlarda yashang.",
        },
      ],
      title: "Nega bizni tanlashadi",
      description:
        "LuxTravel’da biz sizning sayohatingizdagi barcha kutganlaringizdan oshib ketishga intilamiz. Bizning jamoamiz sizning barcha istaklaringizni 24/7 bajarishga tayyor.",
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
    destinations: {
      sectionTitle: "Роскошные Направления",
      sectionSubtitle:
        "Откройте для себя наш тщательно отобранный список самых эксклюзивных направлений мира, каждое из которых предлагает уникальные впечатления и непревзойденную роскошь.",
      viewAllPackages: "Все Пакеты",
      explorePackage: "Подробнее →",
      destinations: [
        {
          name: "Санторини, Греция",
          description: "Знаменитые белоснежные дома и захватывающие закаты.",
        },
        {
          name: "Мальдивы",
          description:
            "Роскошные бунгало над кристально чистой бирюзовой водой.",
        },
        {
          name: "Швейцарские Альпы",
          description:
            "Величественные горные пейзажи и лучшие горнолыжные курорты.",
        },
        {
          name: "Бали, Индонезия",
          description:
            "Тропический рай с пышными ландшафтами и яркой культурой.",
        },
        {
          name: "Рим, Италия",
          description:
            "Потрясающие виды на побережье и очаровательные средиземноморские деревушки.",
        },
        {
          name: "Дубай, ОАЭ",
          description: "Ультра-роскошные впечатления в городе рекордов.",
        },
        {
          name: "Малайзия",
          description:
            "Где современные небоскребы встречаются с древними тропическими лесами в идеальной роскошной гармонии.",
        },
      ],
    },
    footer: {
      company: "Компания",
      aboutUs: "О нас",
      contactUs: "Контакты",
      payment: "Оплата",
      description:
        "LuxTravel - это агентство по бронированию роскошных путешествий и эксклюзивных опытов для путешественников, которые ищут нечто особенное.",
      contact: "Свяжитесь с нами",
      allRightsReserved: "Все права защищены.",
    },
    payment: {
      body: "Для оплаты сканируйте QR-код",
    },
    features: {
      body: [
        {
          title: "VIP-сервис",
          description:
            "Испытайте непревзойденное внимание к деталям с нашей командой консьержей, доступной 24/7 для выполнения любого вашего запроса.",
        },
        {
          title: "Индивидуальные маршруты",
          description:
            "Каждое путешествие создается индивидуально, учитывая ваши предпочтения, интересы и стиль путешествий для по-настоящему уникального опыта.",
        },
        {
          title: "Отобранные роскошные отели",
          description:
            "Останавливайтесь в самых эксклюзивных отелях мира, тщательно отобранных за их исключительный сервис, удобства и расположение.",
        },
      ],
      title: "Почему выбирают нас",
      description:
        "В LuxTravel мы стремимся превзойти все ожидания вашего путешествия. Наша команда готова удовлетворить все ваши пожелания 24/7.",
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
    destinations: {
      sectionTitle: "Luxury Destinations",
      sectionSubtitle:
        "Discover our handpicked selection of the world's most exclusive destinations, each offering unique experiences and unparalleled luxury.",
      viewAllPackages: "View All Packages",
      explorePackage: "Explore Package →",
      destinations: [
        {
          name: "Santorini, Greece",
          description:
            "Experience the iconic white-washed buildings and breathtaking sunsets.",
        },
        {
          name: "Maldives",
          description:
            "Luxury overwater bungalows in crystal clear turquoise waters.",
        },
        {
          name: "Swiss Alps",
          description: "Majestic mountain views and world-class ski resorts.",
        },
        {
          name: "Bali, Indonesia",
          description:
            "Tropical paradise with lush landscapes and vibrant culture.",
        },
        {
          name: "Rome, Italy",
          description:
            "Stunning coastal views and charming Mediterranean villages.",
        },
        {
          name: "Dubai, UAE",
          description: "Ultra-luxury experiences in the city of superlatives.",
        },
        {
          name: "Dubai, UAE",
          description: "Ultra-luxury experiences in the city of superlatives.",
        },
        {
          name: "Malaysia",
          description:
            "Where modern skyscrapers meet ancient rainforests in perfect luxury harmony.",
        },
      ],
    },
    footer: {
      company: "Company",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      payment: "Payment",
      description:
        "LuxTravel is a premium travel agency specializing in bespoke luxury vacations and experiences for discerning travelers seeking the extraordinary.",
      contact: "Contact Us",
      allRightsReserved: "All rights reserved.",
    },
    payment: {
      body: "For payment, scan the QR code",
    },
    features: {
      body: [
        {
          title: "VIP Service",
          description:
            "Experience unparalleled attention to detail with our dedicated concierge team available 24/7 to fulfill your every request.",
        },
        {
          title: "Personalized Itineraries",
          description:
            "Every journey is uniquely crafted to match your preferences, interests, and travel style for a truly bespoke experience.",
        },
        {
          title: "Handpicked Luxury Hotels",
          description:
            "Stay in the world's most exclusive properties, carefully selected for their exceptional service, amenities, and locations.",
        },
      ],
      title: "Why Choose Us",
      description:
        "At LuxTravel, we go above and beyond to ensure your travel experience exceeds all expectations. Our dedicated team is ready to fulfill all your requests 24/7.",
    },
  },
};

export const getTranslations = (locale: Locale): Translation => {
  return translations[locale] || translations.uz;
};
