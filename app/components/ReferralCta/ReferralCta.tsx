"use client";

import { Button } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";
import classes from "./ReferralCta.module.css";

export function ReferralCta() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h2 className={classes.title}>Ready to Make a Referral?</h2>
        <p className={classes.subtitle}>
          Our Intake Team is available to assist healthcare professionals,
          answer referral questions, and coordinate timely admissions.
        </p>

        <div className={classes.cards}>
          <div className={classes.card}>
            <span className={classes.icon}>
              <IconPhone size={22} stroke={1.6} />
            </span>
            <div>
              <p className={classes.label}>Main Toll Free</p>
              <p className={classes.value}>+1 XXX XXX XXX</p>
            </div>
          </div>

          <div className={classes.card}>
            <span className={classes.icon}>
              <IconMail size={22} stroke={1.6} />
            </span>
            <div>
              <p className={classes.label}>Email</p>
              <a className={classes.link} href="mailto:youremail@domain.com">
                youremail@domain.com
              </a>
            </div>
          </div>
        </div>

        <Button
          component="a"
          href="tel:+19045550100"
          size="md"
          color="palmGreen"
          leftSection={<IconPhone size={18} />}
        >
          Call Intake
        </Button>
      </div>
    </section>
  );
}
