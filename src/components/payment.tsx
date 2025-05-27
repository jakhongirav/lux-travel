"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { getTranslations } from "@/locales";
import { useLocale } from "@/lib/locale-context";

export default function Payment() {
  const locale = useLocale();
  const translations = getTranslations(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" id="payment">
      <div className="bg-[#00DBF4] p-6 sm:p-12 rounded-3xl text-center w-full max-w-lg shadow-lg">
        <div className="flex items-center justify-center rounded-2xl p-2 bg-white/0">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/qr.png"
              alt="Payment QR Code"
              fill
              className="object-contain rounded-2xl p-2 bg-white"
              priority
            />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-2 text-black">{translations.payment.body}</h2>
        <div className="flex justify-center mb-2">
          <span className="bg-white px-6 py-2 rounded-lg inline-block font-bold text-2xl sm:text-3xl text-black" style={{ fontStyle: 'italic' }}>
            payme
          </span>
        </div>
        <div className="text-xs text-white tracking-widest mb-4">LUXTRAVEL</div>
        <div className="flex items-center justify-center gap-4 text-black font-medium text-lg mt-2">
          <Phone className="w-5 h-5 inline-block mr-1" />
          <span>1350</span>
          <span className="mx-2">|</span>
          <span>payme.uz</span>
        </div>
      </div>
    </div>
  );
}
