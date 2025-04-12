export interface Translation {
  header: {
    navItems: string[];
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  // Add other sections as needed
}

export type Locale = "uz" | "ru" | "en";
