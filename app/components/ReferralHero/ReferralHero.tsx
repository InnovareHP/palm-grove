"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";
import heroImg from "@/public/ReferralPage/HeroSection/Header 1.png";
import classes from "./ReferralHero.module.css";

export function ReferralHero() {
  return (
    <section className={classes.hero}>
      <Image
        src={heroImg}
        alt="Overhead view of a medical team gathered in a hospital hallway"
        className={classes.bg}
        placeholder="blur"
        priority
        fill
        sizes="100vw"
      />

      <div className={classes.inner}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            Partnering with Providers to Deliver Specialized Senior Psychiatric
            Care
          </h1>
          <p className={classes.subtitle}>
            We make referrals simple with responsive communication, coordinated
            admissions, and compassionate care designed specifically for older
            adults.
          </p>

          <Button
            component={Link}
            href="/contact"
            size="lg"
            color="palmGreen"
            leftSection={<IconUserPlus size={20} />}
          >
            Refer a Patient
          </Button>
        </div>
      </div>

      <div className={classes.greenLine} aria-hidden="true" />
    </section>
  );
}
