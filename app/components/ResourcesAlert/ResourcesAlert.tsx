import { IconAlertTriangle } from "@tabler/icons-react";
import classes from "./ResourcesAlert.module.css";

export function ResourcesAlert() {
  return (
    <div className={classes.wrap}>
      <div className="pgContainer">
        <div className={classes.bar}>
          <span className={classes.icon}>
            <IconAlertTriangle size={26} stroke={1.8} />
          </span>
          <p className={classes.text}>
            <span className={classes.strong}>In an emergency, call 911.</span>{" "}
            If you or someone you love is in crisis, call or text the 988
            Suicide &amp; Crisis Lifeline — free, confidential, and available
            24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
