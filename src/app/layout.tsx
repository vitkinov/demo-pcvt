import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "КПВТ - Клуб на Програмистите във Велико Търново",
  description: "Изграждаме жива програмистка общност във Велико Търново. Присъединете се към нас за работилници, предизвикателства по програмиране и събития за мрежиране.",
  keywords: ["програмиране", "кодиране", "общност", "Велико Търново", "България", "технологии", "разработчици"],
  authors: [{ name: "Екип на КПВТ" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "КПВТ - Клуб на Програмистите във Велико Търново",
    description: "Изграждаме жива програмистка общност във Велико Търново",
    type: "website",
    locale: "bg_BG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
