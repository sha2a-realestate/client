import type { Metadata } from "next";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sha2a - Realestate",
  description: "Your one and only place to sell/buy properties",
};

const mainFont = Baloo_Bhaijaan_2({
  display: "swap",
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
