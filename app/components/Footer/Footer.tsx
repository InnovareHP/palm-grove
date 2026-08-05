import Image from "next/image";
import Link from "next/link";
import logo from "@/public/figma/home/logo-footer.png";
import classes from "./Footer.module.css";

const exploreLinks = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "About Us", href: "/about" },
];

const resourceLinks = [
  { label: "Referral Process", href: "/referral-process" },
  { label: "Mental Health Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Admissions", href: "/referral-process" },
];

const contacts = [
  { label: "Main", value: "(904) 000-0000", href: "tel:+19040000000" },
  {
    label: "24/7 Intake & Referral",
    value: "(800) 000-0000",
    href: "tel:+18000000000",
  },
  { label: "Fax", value: "(904) 000-0001" },
  {
    label: "Email",
    value: "info@palmgrovecenter.com",
    href: "mailto:info@palmgrovecenter.com",
  },
];

const legalLinks = [
  { label: "Notice of nondiscrimination", href: "/compliance" },
  { label: "Privacy Practices (HIPAA)", href: "/compliance" },
  { label: "Price Transparency", href: "/price-transparency" },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`pgContainer ${classes.inner}`}>
        <div>
          <Image
            src={logo}
            alt="Palm Grove Health Center"
            className={classes.logo}
          />
          <p className={classes.tagline}>
            Compassionate psychiatric and behavioral health care for older
            adults and their families in St. Augustine, Florida
          </p>
          <p className={classes.address}>
            150 Village Crossing Court, St. Augustine, Florida 32084
          </p>
        </div>

        <nav aria-label="Explore">
          <h2 className={classes.columnTitle}>Explore</h2>
          <ul className={classes.links}>
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={classes.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h2 className={classes.columnTitle}>Resources</h2>
          <ul className={classes.links}>
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={classes.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={classes.columnTitle}>Get in touch</h2>
          <ul className={classes.contactList}>
            {contacts.map((contact) => (
              <li key={contact.label}>
                <span className={classes.contactLabel}>{contact.label}</span>
                {contact.href ? (
                  <a className={classes.contactValue} href={contact.href}>
                    {contact.value}
                  </a>
                ) : (
                  <span className={classes.contactValue}>{contact.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.legal}>
        <div className={`pgContainer ${classes.legalInner}`}>
          <p>© 2026 Palm Grove Health Center. All rights reserved.</p>
          <div className={classes.legalLinks}>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={classes.legalLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
