import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Biletcim",
  description: "Sinema rezervasyon sistemi",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary-900 antialiased ${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
