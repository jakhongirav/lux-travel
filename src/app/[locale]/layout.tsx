import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "LuxTravel - Premium Travel Agency",
  description:
    "Experience luxury travel with LuxTravel, your premium travel agency for unforgettable vacations.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "uz" | "ru" | "en" };
}) {
  return (
    <html
      lang={params.locale}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header locale={params.locale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
