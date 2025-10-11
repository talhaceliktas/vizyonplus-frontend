import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./_lib/fonts";

import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Biletcim",
  description: "Sinema rezervasyon sistemi",
};

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
