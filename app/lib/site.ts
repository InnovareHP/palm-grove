export type PhoneNumber = {
  label: string;
  display: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Magnolia Behavioral Health Pasadena",
  shortName: "Magnolia Behavioral Health",
  url: "https://magnoliabhp.com",
  tagline:
    "Compassionate psychiatric and behavioral health care for older adults and their families in Pasadena, California.",

  address: {
    street: "4900 E Sam Houston Pkwy S",
    city: "Pasadena",
    state: "Texas",
    stateAbbr: "TX",
    zip: "77505",
    full: "4900 E Sam Houston Pkwy S, Pasadena, Texas 77505",
    short: "4900 E Sam Houston Pkwy S. Pasadena, TX 77505",
  },

  phones: {
    main: {
      label: "Local Main",
      display: "(346) 344-6400",
      href: "tel:+13463446400",
    },
    tollFree: {
      label: "Toll Free Main",
      display: "(888) 545-0005",
      href: "tel:+18885450005",
    },
    intake: {
      label: "Toll Free Intake",
      display: "(888) 545-0007",
      href: "tel:+18885450007",
    },
    fax: {
      label: "Fax",
      display: "(346) 344-6401",
      href: "tel:+13463446401",
    },
  } satisfies Record<string, PhoneNumber>,

  crisis: {
    lifeline: { label: "988", href: "tel:988" },
    emergency: { label: "911", href: "tel:911" },
  },

  emails: {
    info: "contact@magnoliabhp.com",
    referrals: "contact@magnoliabhp.com",
  },

  brochure: {
    pdf: "/palm-grove-brochure.pdf",
    filename: "Palm-Grove-Health-Center-Brochure.pdf",
    page: "/brochure",
  },
} as const;

export const homeLink: NavLink = { label: "Home", href: "/" };

export const navLinks: NavLink[] = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "Referrals", href: "/referral-process" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

export function isNavLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const footerExploreLinks: NavLink[] = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "About Us", href: "/about" },
];

export const footerResourceLinks: NavLink[] = [
  { label: "Referral Process", href: "/referral-process" },
  { label: "Mental Health Resources", href: "/resources" },
  { label: "Brochure", href: siteConfig.brochure.page },
  { label: "Contact Us", href: "/contact" },
  { label: "Admissions", href: "/referral-process" },
];

export const mailtoHint = "Opens your email app";

export function isMailto(href: string) {
  return href.startsWith("mailto:");
}

export function mailto(address: string, subject?: string) {
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}
