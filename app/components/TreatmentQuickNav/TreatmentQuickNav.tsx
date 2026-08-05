import {
  IconBed,
  IconHeartHandshake,
  IconHomeHeart,
  IconStethoscope,
} from "@tabler/icons-react";
import classes from "./TreatmentQuickNav.module.css";

const items = [
  { label: "Inpatient", href: "#inpatient", Icon: IconBed },
  {
    label: "Intensive Outpatient",
    href: "#intensive-outpatient",
    Icon: IconStethoscope,
  },
  {
    label: "Family Support",
    href: "#family-support",
    Icon: IconHeartHandshake,
  },
  {
    label: "Continuum of Care",
    href: "#continuum-of-care",
    Icon: IconHomeHeart,
  },
];

/** In-page jump links to each program block. */
export function TreatmentQuickNav() {
  return (
    <div className={classes.wrap}>
      <div className="pgContainer">
        <nav className={classes.bar} aria-label="Programs">
          {items.map(({ label, href, Icon }) => (
            <a key={href} href={href} className={classes.pill}>
              <Icon size={24} stroke={1.6} className={classes.icon} />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
