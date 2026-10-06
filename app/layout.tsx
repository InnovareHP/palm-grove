import type { Metadata } from "next";
import { Castoro, Lato, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./lib/site";
import { defaultOgImage, organizationJsonLd, siteUrl } from "./lib/seo";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const castoro = Castoro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-castoro",
  display: "swap",
});

const homeTitle =
  "Magnolia Behavioral Health Pasadena — Psychiatric Care for Older Adults";
const homeDescription =
  "Magnolia Behavioral Health offers inpatient and intensive outpatient psychiatric care that helps older adults and their families find stability and renewed hope.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: homeDescription,
  applicationName: siteConfig.name,
  keywords: [
    "older adult psychiatry",
    "senior behavioral health",
    "older adult mental health",
    "inpatient psychiatric care",
    "intensive outpatient program",
    "Pasadena psychiatric hospital",
    "Magnolia Behavioral Health",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: "/",
    title: homeTitle,
    description: homeDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [defaultOgImage.url],
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
    <html
      lang="en"
      className={`${lato.variable} ${libreBaskerville.variable} ${castoro.variable}`}
    >
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
