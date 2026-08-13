import { IconMail, IconPhone } from "@tabler/icons-react";
import { mailto, siteConfig } from "@/app/lib/site";
import classes from "./ReferralIntake.module.css";

const { phones, emails } = siteConfig;

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
              <a className={classes.number} href={phones.intake.href}>
                {phones.intake.display}
              </a>
            </div>
          </div>

          <div className={classes.item}>
            <span className={classes.icon}>
              <IconMail size={24} stroke={1.6} />
            </span>
            <p className={classes.text}>
              Fax referrals to{" "}
              <a className={classes.strong} href={phones.fax.href}>
                {phones.fax.display}
              </a>{" "}
              or email{" "}
              <a className={classes.strong} href={mailto(emails.referrals)}>
                {emails.referrals}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
