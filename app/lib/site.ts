/**
 * Single source of truth for the facility's contact details and site-wide
 * navigation. Every component that renders a phone number, an address, or a
 * nav link reads it from here — the details are still placeholders, so they
 * have to be replaceable in one edit rather than eleven.
 */

export type PhoneNumber = {
  /** How the number is introduced in copy, e.g. "24/7 Intake & Referral". */
  label: string;
  /** Formatted for display. */
  display: string;
  /** `tel:` URL. */
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
    /** Long form, used in the footer. */
    full: "150 Village Crossing Court, St. Augustine, Florida 32084",
    /** Short form, used in the contact card. */
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

  /** National crisis lines shown in the header strip and the resources alert. */
  crisis: {
    lifeline: { label: "988", href: "tel:988" },
    emergency: { label: "911", href: "tel:911" },
  },

  emails: {
    info: "info@palmgrovehealthcenter.com",
    referrals: "referrals@palmgrovehealthcenter.com",
  },

  /**
   * The brochure ships as a two-page letter-landscape PDF built from the Figma
   * page exports in `public/figma/brochure/` — one file to view, print, or
   * forward, instead of two loose PNGs.
   */
  brochure: {
    pdf: "/palm-grove-brochure.pdf",
    /** Filename the browser saves it under. */
    filename: "Palm-Grove-Health-Center-Brochure.pdf",
    /** Page that shows both spreads on screen, for reading without a download. */
    page: "/brochure",
  },
} as const;

/**
 * Home is not part of `navLinks`: on desktop the logo is the route home, so a
 * separate link would be a duplicate. The drawer covers the logo when it is
 * open, so it renders this one at the top of its list instead.
 */
export const homeLink: NavLink = { label: "Home", href: "/" };

/** Primary navigation, in the order the header and mobile drawer render it. */
export const navLinks: NavLink[] = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "Referrals", href: "/referral-process" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

/**
 * Whether a nav link points at the page currently being viewed. Sub-pages count
 * as their parent's section — /treatment-services/multidisciplinary-care-team
 * keeps "Treatment & Services" marked — so the prefix test needs the trailing
 * slash, or /about would also match a future /about-us.
 */
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

/** `mailto:` helper so subject lines stay encoded consistently. */
export function mailto(address: string, subject?: string) {
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}
