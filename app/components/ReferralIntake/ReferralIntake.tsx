"use client";

import { Button } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import classes from "./ReferralIntake.module.css";

export function ReferralIntake() {
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <span className={classes.badge}>Referral Process</span>
        <h2 className={classes.title}>Contact Our Intake Team</h2>
        <p className={classes.text}>
          Call our Intake Department to discuss the patient&apos;s needs and
          begin the referral process. Our team is available to answer questions,
          review clinical information, and guide you through the next steps.
        </p>
        <Button
          component="a"
          href="tel:+19045550100"
          size="lg"
          color="palmGreen"
          leftSection={<IconPhone size={20} />}
        >
          Call Intake
        </Button>
      </div>
    </section>
  );
}
