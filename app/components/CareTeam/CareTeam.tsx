"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import careImg from "@/public/HomePage/CareTeamSection/Rectangle 9 (1).png";
import classes from "./CareTeam.module.css";

export function CareTeam() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.media}>
          <Image
            src={careImg}
            alt="Care team member speaking with an older adult patient"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 47.99em) 100vw, 50vw"
          />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>Compassionate and Personalized Care</h2>
          <p className={classes.text}>
            Mental health challenges in older adults are often connected to
            physical health, medications, life transitions, grief, or cognitive
            changes. Our interdisciplinary team looks beyond symptoms to provide
            compassionate, individualized treatment that supports the whole
            person.
          </p>
          <Button
            component={Link}
            href="/care-team"
            size="lg"
            color="palmGreen"
            className={classes.cta}
          >
            Meet Our Care Team
          </Button>
        </div>
      </div>
    </section>
  );
}
