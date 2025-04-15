"use client";
import { LocaleProvider } from "@/lib/locale-context";
import { Locale } from "../../types/translations";

export default function ClientLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return <LocaleProvider value={locale}>{children}</LocaleProvider>;
}
