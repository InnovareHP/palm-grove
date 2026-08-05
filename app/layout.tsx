import type { Metadata } from "next";
import { Castoro, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const castoro = Castoro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-castoro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palm Grove Health Center — Psychiatric Care for Older Adults",
  description:
    "Compassionate psychiatric and behavioral health care for older adults and their families in St. Augustine, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${castoro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
