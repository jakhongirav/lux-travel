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
}

interface feature {
  title: string;
  description: string;
}

export type Locale = "uz" | "ru" | "en";
