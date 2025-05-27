export interface Translation {
  header: {
    navItems: string[];
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    features: feature[];
  };
  destinations: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllPackages: string;
    explorePackage: string;
    destinations: Destination[];
  };
  footer: {
    company: string;
    aboutUs: string;
    contactUs: string;
    payment: string;
    description: string;
    contact: string;
    allRightsReserved: string;
  };
  payment: {
    body: string;
  };
  features: {
    body: {
      title: string;
      description: string;
    }[];
    title: string;
    description: string;
  };
}

interface feature {
  title: string;
  description: string;
}

interface Destination {
  name: string;
  description: string;
}

export type Locale = "uz" | "ru" | "en";
