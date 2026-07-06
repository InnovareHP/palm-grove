"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { IconCheck, IconPhone, IconUserPlus } from "@tabler/icons-react";
import imgTop from "@/public/HomePage/WhySection/Rectangle 9.png";
import imgLeft from "@/public/HomePage/WhySection/Rectangle 10.png";
import imgRight from "@/public/HomePage/WhySection/Rectangle 9 (2).png";
import classes from "./WhyChoose.module.css";

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Specialized in Older Adult Psychiatry",
    description:
      "Our programs are designed specifically for adults 50+, recognizing the unique mental health needs that come with aging.",
  },
  {
    title: "Experienced Multidisciplinary Team",
    description:
      "Psychiatrists, nurses, therapists, social workers, and care coordinators work together to develop personalized treatment plans.",
  },
  {
    title: "Family-Centered Approach",
    description:
      "Families remain informed, involved, and supported throughout the treatment journey.",
  },
  {
    title: "Coordinated Continuum of Care",
    description:
      "We partner with hospitals, physicians, nursing facilities, and community providers to ensure smooth transitions after discharge.",
  },
  {
    title: "Compassionate Environment",
    description:
      "We provide a calm, welcoming environment where older adults are treated with dignity, respect, and compassion.",
  },
];

const gallery: { src: StaticImageData; alt: string }[] = [
  { src: imgLeft, alt: "Three women walking together on a beach" },
  { src: imgRight, alt: "Clinician reviewing a scan with an older patient" },
];

export function WhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h2 className={classes.title}>
          Why Families and Providers Choose Palm Grove Health Center?
        </h2>

        <div className={classes.grid}>
          <ul className={classes.reasons}>
            {reasons.map((reason) => (
              <li key={reason.title} className={classes.card}>
                <span className={classes.icon}>
                  <IconCheck size={18} stroke={3} />
                </span>
                <div>
                  <h3 className={classes.cardTitle}>{reason.title}</h3>
                  <p className={classes.cardText}>{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.media}>
            <Image
              src={imgTop}
              alt="Family looking at a photo album with an older relative"
              className={classes.imageTop}
              placeholder="blur"
              sizes="(max-width: 61.99em) 100vw, 45vw"
            />
            <div className={classes.mediaRow}>
              {gallery.map((item) => (
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  className={classes.imageSmall}
                  placeholder="blur"
                  sizes="(max-width: 61.99em) 50vw, 22vw"
                />
              ))}
            </div>
          </div>
        </div>

        <div className={classes.actions}>
          <Button
            component={Link}
            href="/contact"
            size="lg"
            color="palmGreen"
            leftSection={<IconPhone size={20} />}
          >
            Call Intake
          </Button>
          <Button
            component={Link}
            href="/refer"
            size="lg"
            variant="outline"
            color="palmGreen"
            leftSection={<IconUserPlus size={20} />}
          >
            Refer a Patient
          </Button>
        </div>
      </div>
    </section>
  );
}
