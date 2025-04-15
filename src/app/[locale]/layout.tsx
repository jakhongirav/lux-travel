import Footer from "@/components/footer";
import Header from "@/components/header";
import { Locale } from "../../../types/translations";
import ClientLayout from "@/lib/client-layout";

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
    <ClientLayout locale={locale}>
      <Header locale={locale} />
      {children}
      <Footer />
    </ClientLayout>
  );
}
