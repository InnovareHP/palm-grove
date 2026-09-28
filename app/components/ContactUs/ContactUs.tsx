import {
  IconClock24,
  IconPhone,
  IconPrinter,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { siteConfig, type PhoneNumber } from "@/app/lib/site";
import classes from "./ContactUs.module.css";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6110.260822666423!2d-81.36018602287344!3d29.91820392453811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e428617387a88b%3A0x2146425e367e82fe!2s150%20Village%20Crossing%20Ct%2C%20St.%20Augustine%2C%20FL%2032084%2C%20USA!5e1!3m2!1sen!2sph!4v1783341279084!5m2!1sen!2sph";

const { phones } = siteConfig;

const numbers: (PhoneNumber & { Icon: ComponentType<IconProps> })[] = [
  { ...phones.intake, Icon: IconClock24 },
  { ...phones.main, Icon: IconPhone },
  { ...phones.fax, Icon: IconPrinter },
];

export function ContactUs() {
  return (
    <section className="pgSection pgSectionMist">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.content}>
          <p className="pgEyebrow">Visit us</p>
          <h2 className="pgTitle">{siteConfig.name}</h2>
          <p className={classes.address}>{siteConfig.address.short}</p>

          <div className={classes.map}>
            <iframe
              className={classes.mapFrame}
              src={MAP_SRC}
              title="Map showing Palm Grove Health Center in St. Augustine, Florida"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={classes.badges}>
            <div className={`${classes.badge} ${classes.badgeDark}`}>
              <h3 className={classes.badgeLabel}>Office hours</h3>
              <p className={classes.badgeValue}>Mon–Fri 8:00am – 5:00pm</p>
            </div>
            <div className={classes.badge}>
              <h3 className={classes.badgeLabel}>Admissions</h3>
              <p className={classes.badgeValue}>Available 24 / 7</p>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <h2 className={classes.cardTitle}>Connect With Us</h2>
          <ul className={classes.numbers}>
            {numbers.map(({ label, display, href, Icon }) => (
              <li key={label} className={classes.number}>
                <span className={classes.numberIcon}>
                  <Icon aria-hidden size={24} stroke={1.6} />
                </span>
                <div>
                  <p className={classes.numberLabel}>{label}</p>
                  <a className={classes.numberValue} href={href}>
                    {display}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
