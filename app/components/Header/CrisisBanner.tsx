import { siteConfig } from "@/app/lib/site";
import classes from "./CrisisBanner.module.css";

export function CrisisBanner() {
  const { crisis, phones } = siteConfig;

  return (
    <nav className={classes.banner} aria-label="Crisis and contact numbers">
      <ul className={`pgContainer ${classes.inner}`}>
        <li>
          <span>In a crisis?</span>{" "}
          <a
            className={classes.link}
            href={crisis.lifeline.href}
          >
            Call or text{" "}
            <strong className={classes.strong}>{crisis.lifeline.label}</strong>
            <span className="pgSrOnly">, Suicide &amp; Crisis Lifeline</span>
          </a>{" "}
          or{" "}
          <a
            className={classes.link}
            href={crisis.emergency.href}
          >
            dial{" "}
            <strong className={classes.strong}>{crisis.emergency.label}</strong>
          </a>
        </li>
        <li className={classes.contacts}>
          <ul className={classes.contactList}>
            <li>
              {phones.main.label}:{" "}
              <a className={classes.link} href={phones.main.href}>
                <strong className={classes.strong}>
                  {phones.main.display}
                </strong>
              </a>
            </li>
            <li>
              24/7 Intake:{" "}
              <a className={classes.link} href={phones.intake.href}>
                <strong className={classes.strong}>
                  {phones.intake.display}
                </strong>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
