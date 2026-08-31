import Image from "next/image";
import Link from "next/link";
import {
  footerExploreLinks,
  footerResourceLinks,
  mailto,
  siteConfig,
} from "@/app/lib/site";
import logo from "@/public/figma/home/logo-footer.png";
import classes from "./Footer.module.css";

const { phones, emails, address } = siteConfig;

const contacts = [
  {
    label: phones.main.label,
    value: phones.main.display,
    href: phones.main.href,
  },
  {
    label: phones.intake.label,
    value: phones.intake.display,
    href: phones.intake.href,
  },
  { label: phones.fax.label, value: phones.fax.display },
  {
    label: "Email",
    value: emails.info,
    href: mailto(emails.info),
  },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`pgContainer ${classes.inner}`}>
        <div>
          {/* 48px tall at a 3:1 ratio — see the note on the header mark. */}
          <Image
            src={logo}
            alt={siteConfig.name}
            className={classes.logo}
            sizes="144px"
          />
          <p className={classes.tagline}>{siteConfig.tagline}</p>
          <p className={classes.address}>{address.full}</p>
        </div>

        <nav aria-label="Explore">
          <h2 className={classes.columnTitle}>Explore</h2>
          <ul className={classes.links}>
            {footerExploreLinks.map((link) => (
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
            {footerResourceLinks.map((link) => (
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
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
