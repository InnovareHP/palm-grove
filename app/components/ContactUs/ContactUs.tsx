"use client";

import {
  IconDeviceLandlinePhone,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPrinter,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import classes from "./ContactUs.module.css";

type Detail = {
  icon: ComponentType<IconProps>;
  label: string;
  value: string;
  href?: string;
};

const details: Detail[] = [
  {
    icon: IconMapPin,
    label: "Palm Grove Health Center",
    value: "150 Village Crossing Court, St. Augustine, Florida 32084",
  },
  { icon: IconPrinter, label: "Fax", value: "+1 XXX XXX XXX" },
  { icon: IconDeviceLandlinePhone, label: "Hotline", value: "+1 XXX XXX XXX" },
  { icon: IconPhone, label: "Main Local", value: "+1 XXX XXX XXX" },
  { icon: IconPhone, label: "Main Toll Free", value: "+1 XXX XXX XXX" },
  {
    icon: IconMail,
    label: "Email",
    value: "youremail@domain.com",
    href: "mailto:youremail@domain.com",
  },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6110.260822666423!2d-81.36018602287344!3d29.91820392453811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e428617387a88b%3A0x2146425e367e82fe!2s150%20Village%20Crossing%20Ct%2C%20St.%20Augustine%2C%20FL%2032084%2C%20USA!5e1!3m2!1sen!2sph!4v1783341279084!5m2!1sen!2sph";

export function ContactUs() {
  return (
    <section className={classes.section} id="contact">
      <div className={classes.inner}>
        <h2 className={classes.title}>Contact Us</h2>
        <p className={classes.subtitle}>
          We&apos;re here to help. Reach out to our team for more information.
        </p>

        <div className={classes.grid}>
          <div className={classes.mapWrap}>
            <iframe
              src={MAP_SRC}
              className={classes.map}
              title="Palm Grove Health Center location map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <ul className={classes.details}>
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <li key={detail.label} className={classes.item}>
                  <span className={classes.icon}>
                    <Icon size={22} stroke={1.6} />
                  </span>
                  <div>
                    <p className={classes.label}>{detail.label}</p>
                    {detail.href ? (
                      <a className={classes.link} href={detail.href}>
                        {detail.value}
                      </a>
                    ) : (
                      <p className={classes.value}>{detail.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
