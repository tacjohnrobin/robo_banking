import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ClientAppWrapper from "@/components/splash/CLientAppWrapper";

// Load fonts from Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Clickpay",
  description: "Send, save and spend smarter with Clickpay!",
  keywords:
    "Clickpay, Banking, Finance, Money, Investment, Savings, Loans, Credit, Cards",
  icons: {
    icon: "/icons/logo.svg",
  },
};

// RootLayout component defining the structure of the entire app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <ClientAppWrapper>{children}</ClientAppWrapper>
      </body>
    </html>
  );
}
