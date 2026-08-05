import { IconMail, IconPhone } from "@tabler/icons-react";
import classes from "./ReferralIntake.module.css";

export function ReferralIntake() {
  return (
    <div className={classes.wrap}>
      <div className="pgContainer">
        <div className={classes.bar}>
          <div className={classes.item}>
            <span className={classes.icon}>
              <IconPhone size={24} stroke={1.6} />
            </span>
            <div>
              <p className={classes.label}>24/7 Intake &amp; Referral Line</p>
              <a className={classes.number} href="tel:+18000000000">
                (800) 000-0000
              </a>
            </div>
          </div>

          <div className={classes.item}>
            <span className={classes.icon}>
              <IconMail size={24} stroke={1.6} />
            </span>
            <p className={classes.text}>
              Fax referrals to{" "}
              <a className={classes.strong} href="tel:+19040000001">
                (904) 000-0001
              </a>{" "}
              or email{" "}
              <a
                className={classes.strong}
                href="mailto:referrals@palmgrovehealthcenter.com"
              >
                referrals@palmgrovehealthcenter.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
