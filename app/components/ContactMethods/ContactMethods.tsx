import {
  IconClock24,
  IconMail,
  IconPhone,
  IconPrinter,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import classes from "./ContactMethods.module.css";

type Method = {
  label: string;
  value: string;
  href?: string;
  hint?: string;
  Icon: ComponentType<IconProps>;
};

const methods: Method[] = [
  {
    label: "Main",
    value: "(904) 000-0000",
    href: "tel:+19040000000",
    Icon: IconPhone,
  },
  {
    label: "24/7 Intake & Referral",
    value: "(800) 000-0000",
    href: "tel:+18000000000",
    hint: "(Available around the clock)",
    Icon: IconClock24,
  },
  { label: "Fax", value: "(904) 000-0001", Icon: IconPrinter },
  {
    label: "Email",
    value: "info@palmgrovehealthcenter.com",
    href: "mailto:info@palmgrovehealthcenter.com",
    Icon: IconMail,
  },
];

export function ContactMethods() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <ul className={classes.grid}>
          {methods.map(({ label, value, href, hint, Icon }) => (
            <li key={label} className={classes.item}>
              <span className={classes.icon}>
                <Icon size={26} stroke={1.6} />
              </span>
              <div>
                <h2 className={classes.label}>{label}</h2>
                {href ? (
                  <a className={classes.value} href={href}>
                    {value}
                  </a>
                ) : (
                  <span className={classes.value}>{value}</span>
                )}
                {hint ? <span className={classes.hint}>{hint}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
