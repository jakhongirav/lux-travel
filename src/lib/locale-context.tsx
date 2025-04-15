"use client";

import { createContext, useContext, ReactNode } from "react";
import { Locale } from "../../types/translations";

export const LocaleContext = createContext<Locale | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function LocaleProvider({
  value,
  children,
}: {
  value: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
