"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { IconPhone, IconUserPlus } from "@tabler/icons-react";
import heroImg from "@/public/HomePage/HeroSection/home-hero-1.png";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <Image
        src={heroImg}
        alt="Older adult walking along the beach at St. Augustine"
        className={classes.bg}
        placeholder="blur"
        priority
        fill
        sizes="100vw"
      />

      <div className={classes.inner}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            Compassionate Psychiatric Care for Older Adults in St. Augustine
          </h1>
          <p className={classes.subtitle}>
            Helping seniors and families find safety, stabilization, support,
            and a path forward through specialized psychiatric care designed for
            older adults.
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
