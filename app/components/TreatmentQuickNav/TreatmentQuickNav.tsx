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

export function TreatmentQuickNav() {
  return (
    <div className={classes.wrap}>
      <div className="pgContainer">
        <nav aria-label="Programs">
          <ul className={`pgPlainList ${classes.bar}`}>
            {items.map(({ label, href, Icon }) => (
              <li key={href} className={classes.item}>
                <a href={href} className={classes.pill}>
                  <Icon
                    aria-hidden
                    size={24}
                    stroke={1.6}
                    className={classes.icon}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
