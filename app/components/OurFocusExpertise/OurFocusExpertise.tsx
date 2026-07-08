"use client";

import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { IconPhone, IconUserPlus } from "@tabler/icons-react";
import classes from "./OurFocusExpertise.module.css";

export function OurFocusExpertise() {
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <h2 className={classes.title}>Expertise in Geriatric Psychiatry</h2>

        <p className={classes.body}>
          At Palm Grove, we provide specialized psychiatric care designed
          exclusively for older adults. Our experienced team understands the
          unique mental health challenges that can accompany aging and is
          committed to delivering compassionate, evidence-based treatment in a
          safe, supportive environment.
        </p>

        <p className={classes.body}>
          We work closely with patients, families, caregivers, and healthcare
          providers to develop personalized treatment plans that promote
          stabilization, recovery, and a successful transition to the next level
          of care.
        </p>

        <p className={classes.body}>
          Every patient receives individualized care from our multidisciplinary
          team, ensuring treatment addresses their emotional, behavioral,
          cognitive, and overall well-being.
        </p>

        <Group justify="center" gap="md" className={classes.actions}>
          <Button
            component="a"
            href="tel:+19045550100"
            size="lg"
            color="palmGreen"
            leftSection={<IconPhone size={20} />}
          >
            Call Intake
          </Button>
          <Button
            component={Link}
            href="/referral-process"
            size="lg"
            variant="default"
            leftSection={<IconUserPlus size={20} />}
          >
            Refer a Patient
          </Button>
        </Group>
      </div>
    </section>
  );
}
