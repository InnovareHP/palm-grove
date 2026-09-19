
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
  name: "Palm Grove Health Center",
  tagline:
    "Compassionate psychiatric and behavioral health care for older adults and their families in St. Augustine, Florida",

  address: {
    street: "150 Village Crossing Court",
    city: "St. Augustine",
    state: "Florida",
    stateAbbr: "FL",
    zip: "32084",
    full: "150 Village Crossing Court, St. Augustine, Florida 32084",
    short: "150 Village Crossing Ct. St. Augustine, FL 32084",
  },

  phones: {
    main: {
      label: "Main",
      display: "(904) 000-0000",
      href: "tel:+19040000000",
    },
    intake: {
      label: "24/7 Intake & Referral",
      display: "(800) 000-0000",
      href: "tel:+18000000000",
    },
    fax: {
      label: "Fax",
      display: "(904) 000-0001",
      href: "tel:+19040000001",
    },
  } satisfies Record<string, PhoneNumber>,

  crisis: {
    lifeline: { label: "988", href: "tel:988" },
    emergency: { label: "911", href: "tel:911" },
  },

  emails: {
    info: "info@palmgrovehealthcenter.com",
    referrals: "referrals@palmgrovehealthcenter.com",
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

export function mailto(address: string, subject?: string) {
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}
