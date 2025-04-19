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
