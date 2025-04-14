import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer />
    </>
  );
}
