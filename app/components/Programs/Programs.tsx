"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import img1 from "@/public/HomePage/ProgramSection/Rectangle 11.png";
import img2 from "@/public/HomePage/ProgramSection/Rectangle 12.png";
import img3 from "@/public/HomePage/ProgramSection/Rectangle 13.png";
import img4 from "@/public/HomePage/ProgramSection/Rectangle 14.png";
import classes from "./Programs.module.css";

type Program = {
  image: StaticImageData;
  title: string;
  description: string;
};

const programs: Program[] = [
  {
    image: img1,
    title: "Inpatient Care",
    description:
      "Hospital-based treatment for seniors experiencing acute psychiatric symptoms requiring 24-hour care.",
  },
  {
    image: img2,
    title: "Outpatient Program",
    description:
      "Structured therapy several days each week for seniors who need continued support while living at home.",
  },
  {
    image: img3,
    title: "Family Support",
    description:
      "Education, communication, and care planning that keeps families involved throughout treatment.",
  },
  {
    image: img4,
    title: "Continuum of Care",
    description:
      "Coordinated transition planning with community and physicians to support long-term stability.",
  },
];

export function Programs() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <span className={classes.badge}>OUR PROGRAMS</span>
        <h2 className={classes.title}>
          Specialized Psychiatric Services for Older Adults
        </h2>
        <p className={classes.subtitle}>
          Palm Grove Health Center provides personalized psychiatric care for
          older adults, offering compassionate treatment, stabilization, and
          support for lasting recovery.
        </p>

        <div className={classes.grid}>
          {programs.map((program) => (
            <article key={program.title} className={classes.card}>
              <Image
                src={program.image}
                alt={program.title}
                className={classes.cardImage}
                placeholder="blur"
                sizes="(max-width: 47.99em) 100vw, 25vw"
              />
              <h3 className={classes.cardTitle}>{program.title}</h3>
              <p className={classes.cardText}>{program.description}</p>
            </article>
          ))}
        </div>

        <Button
          component={Link}
          href="/services"
          size="lg"
          color="palmGreen"
          className={classes.cta}
        >
          Explore Our Services
        </Button>
      </div>
    </section>
  );
}
