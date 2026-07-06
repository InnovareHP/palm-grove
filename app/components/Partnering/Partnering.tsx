"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";
import partnerImg from "@/public/HomePage/PartneringSection/Rectangle 9 (3).png";
import classes from "./Partnering.module.css";

export function Partnering() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.media}>
          <Image
            src={partnerImg}
            alt="Healthcare professionals reviewing a patient chart together"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 47.99em) 100vw, 50vw"
          />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>
            Partnering with Healthcare Professionals
          </h2>
          <p className={classes.text}>
            Palm Grove Health Center works closely with hospitals, emergency
            departments, physicians, nursing facilities, assisted living
            communities, case managers, and behavioral health providers to
            support timely admissions and coordinated care.
          </p>
          <Button
            component={Link}
            href="/refer"
            size="lg"
            color="palmGreen"
            leftSection={<IconUserPlus size={20} />}
            className={classes.cta}
          >
            Refer a Patient
          </Button>
        </div>
      </div>
    </section>
  );
}
