import Footer from "@/components/footer";
import Header from "@/components/header";
import { Locale } from "../../../types/translations";

export type paramsType = Promise<{ locale: Locale }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: paramsType;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer />
    </>
  );
}
