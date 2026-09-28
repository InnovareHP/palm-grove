import type { Metadata } from "next";
import { Castoro, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./lib/site";
import { organizationJsonLd, siteUrl } from "./lib/seo";

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

const homeTitle =
  "Palm Grove Health Center — Psychiatric Care for Older Adults";
const homeDescription =
  "Compassionate psychiatric and behavioral health care for older adults and their families in St. Augustine, Florida.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: homeDescription,
  applicationName: siteConfig.name,
  keywords: [
    "geriatric psychiatry",
    "senior behavioral health",
    "older adult mental health",
    "inpatient psychiatric care",
    "intensive outpatient program",
    "St. Augustine psychiatric hospital",
    "St. Johns County mental health",
    "Palm Grove Health Center",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: "/",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/figma/home/hero.png",
        width: 2560,
        height: 1218,
        alt: "Palm Grove Health Center in St. Augustine, Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/figma/home/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${castoro.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a className="pgSkipLink" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
