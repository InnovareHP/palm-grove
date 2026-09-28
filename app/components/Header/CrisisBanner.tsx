import { siteConfig } from "@/app/lib/site";
import classes from "./CrisisBanner.module.css";

export function CrisisBanner() {
  const { crisis, phones } = siteConfig;

  return (
    <aside className={classes.banner} aria-label="Crisis and contact numbers">
      <div className={`pgContainer ${classes.inner}`}>
        <p>
          In a crisis? Call or text{" "}
          <a
            className={classes.link}
            href={crisis.lifeline.href}
            aria-label={`Call or text ${crisis.lifeline.label}, Suicide & Crisis Lifeline`}
          >
            <strong className={classes.strong}>{crisis.lifeline.label}</strong>
          </a>{" "}
          or dial{" "}
          <a
            className={classes.link}
            href={crisis.emergency.href}
            aria-label={`Call ${crisis.emergency.label}`}
          >
            <strong className={classes.strong}>{crisis.emergency.label}</strong>
          </a>
        </p>
        <div className={classes.contacts}>
          <p>
            {phones.main.label}:{" "}
            <a className={classes.link} href={phones.main.href}>
              <strong className={classes.strong}>{phones.main.display}</strong>
            </a>
          </p>
          <p>
            24/7 Intake:{" "}
            <a className={classes.link} href={phones.intake.href}>
              <strong className={classes.strong}>
                {phones.intake.display}
              </strong>
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
