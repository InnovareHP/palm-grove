import Image from "next/image";
import Link from "next/link";
import {
  IconDeviceLandlinePhone,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPrinter,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import logo from "@/public/Logo/palm-grove-logo.png";
import classes from "./Footer.module.css";

type Contact = {
  id: string;
  icon: ComponentType<IconProps>;
  value: string;
  href?: string;
};

const contacts: Contact[] = [
  {
    id: "address",
    icon: IconMapPin,
    value: "150 Village Crossing Court, St. Augustine, Florida 32084",
  },
  { id: "fax", icon: IconPrinter, value: "+1 XXX XXX XXX" },
  { id: "hotline", icon: IconDeviceLandlinePhone, value: "+1 XXX XXX XXX" },
  { id: "main-local", icon: IconPhone, value: "+1 XXX XXX XXX" },
  { id: "main-toll-free", icon: IconPhone, value: "+1 XXX XXX XXX" },
  {
    id: "email",
    icon: IconMail,
    value: "youremail@domain.com",
    href: "mailto:youremail@domain.com",
  },
];

const patientResources = [
  { label: "HIPAA Privacy Practices", href: "/compliance" },
  { label: "Price Transparency", href: "/price-transparency" },
  { label: "Terms of Use", href: "/compliance" },
  { label: "Brochure", href: "/brochure" },
];

const policies = [
  { label: "Medical Disclaimer", href: "/compliance" },
  {
    label: "Notice of Nondiscrimination",
    href: "/compliance",
  },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.brand}>
          <Image
            src={logo}
            alt="Palm Grove Health Center"
            className={classes.logo}
          />
          <p className={classes.tagline}>
            Compassionate psychiatric care for older adults and their families.
          </p>
          <ul className={classes.contacts}>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <li key={contact.id} className={classes.contactItem}>
                  <Icon
                    size={16}
                    stroke={1.6}
                    className={classes.contactIcon}
                  />
                  {contact.href ? (
                    <a className={classes.contactLink} href={contact.href}>
                      {contact.value}
                    </a>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <nav className={classes.column} aria-label="Patient Resources">
          <h3 className={classes.columnTitle}>Patient Resources</h3>
          <ul className={classes.links}>
            {patientResources.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={classes.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={classes.column} aria-label="Policies & Notices">
          <h3 className={classes.columnTitle}>Policies &amp; Notices</h3>
          <ul className={classes.links}>
            {policies.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={classes.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
