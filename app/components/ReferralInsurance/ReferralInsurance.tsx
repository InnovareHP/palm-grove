"use client";

import Image from "next/image";
import { Button } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import insuranceImg from "@/public/ReferralPage/InsuranceSection/image 4.png";
import classes from "./ReferralInsurance.module.css";

export function ReferralInsurance() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h2 className={classes.title}>Insurance &amp; Coverage</h2>
        <p className={classes.subtitle}>
          Our Intake Team can help verify insurance coverage and discuss
          available payment options before admission to ensure a smooth referral
          experience.
        </p>

        <div className={classes.grid}>
          <div className={classes.card}>
            <h3 className={classes.cardTitle}>Need assistance?</h3>
            <p className={classes.cardText}>
              Contact our Intake Team for insurance verification, referral
              requirements, and admission support.
            </p>
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

          <div className={classes.media}>
            <Image
              src={insuranceImg}
              alt="Woman speaking on her phone"
              className={classes.image}
              placeholder="blur"
              sizes="(max-width: 47.99em) 100vw, 44vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
