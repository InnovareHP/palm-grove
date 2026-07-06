"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { IconPhone, IconUserPlus } from "@tabler/icons-react";
import partnerImg from "@/public/HomePage/HeroSection/Rectangle 9.png";
import classes from "./TrustedPartner.module.css";

export function TrustedPartner() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.media}>
          <Image
            src={partnerImg}
            alt="Caregiver smiling with an older adult in a wheelchair"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 47.99em) 100vw, 50vw"
          />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>
            A Trusted Partner in Senior Mental Health
          </h2>
          <p className={classes.subtitle}>
            Our experienced team provides individualized psychiatric care
            designed to promote safety, healing, and long-term well-being.
          </p>

          <Group gap="md" className={classes.actions}>
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
      </div>
    </section>
  );
}
