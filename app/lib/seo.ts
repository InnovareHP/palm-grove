import type { Metadata } from "next";
import { siteConfig } from "./site";

export const siteUrl = siteConfig.url;

const defaultOgImage = {
  url: "/figma/home/hero.png",
  width: 2560,
  height: 1218,
  alt: "Palm Grove Health Center in St. Augustine, Florida",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

// Builds per-page metadata with canonical URL, Open Graph, and Twitter tags.
// The root layout's title template appends the site name.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "Hospital"],
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteUrl,
  logo: `${siteUrl}/figma/home/logo-nav.png`,
  image: `${siteUrl}${defaultOgImage.url}`,
  telephone: siteConfig.phones.main.href.replace("tel:", ""),
  faxNumber: siteConfig.phones.fax.href.replace("tel:", ""),
  email: siteConfig.emails.info,
  medicalSpecialty: ["Psychiatric", "Geriatric"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.stateAbbr,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "St. Augustine, Florida",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "admissions",
      telephone: siteConfig.phones.intake.href.replace("tel:", ""),
      email: siteConfig.emails.referrals,
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
};
