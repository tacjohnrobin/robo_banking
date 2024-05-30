import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const iBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});
export const metadata: Metadata = {
  title: "Qubo",
  description: "Qubo is a mordern banking platform for everyone",
  keywords:
    "Qubo, Banking, Finance, Money, Investment, Savings, Loans, Credit, Cards, Cryptocurrency, Blockchain, NFTs, DeFi, Web3, Metaverse",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${iBMPlexSerif.variable}}`}>
        {children}
      </body>
    </html>
  );
}
