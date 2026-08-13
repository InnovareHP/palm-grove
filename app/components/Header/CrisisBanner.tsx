import { siteConfig } from "@/app/lib/site";
import classes from "./CrisisBanner.module.css";

/**
 * Thin strip above the navigation carrying the national crisis lines and the
 * facility's own numbers. Server-rendered — it holds no state.
 */
export function CrisisBanner() {
  const { crisis, phones } = siteConfig;

  return (
    <div className={classes.banner}>
      <div className={`pgContainer ${classes.inner}`}>
        <p>
          In a crisis? Call or text{" "}
          <a className={classes.link} href={crisis.lifeline.href}>
            <span className={classes.strong}>{crisis.lifeline.label}</span>
          </a>{" "}
          or dial{" "}
          <a className={classes.link} href={crisis.emergency.href}>
            <span className={classes.strong}>{crisis.emergency.label}</span>
          </a>
        </p>
        <div className={classes.contacts}>
          <p>
            {phones.main.label}:{" "}
            <a className={classes.link} href={phones.main.href}>
              <span className={classes.strong}>{phones.main.display}</span>
            </a>
          </p>
          <p>
            24/7 Intake:{" "}
            <a className={classes.link} href={phones.intake.href}>
              <span className={classes.strong}>{phones.intake.display}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
