import Image from "next/image";
import Link from "next/link";
import imgInpatient from "@/public/TreatmentPage/ProgramSection/Rectangle 18.png";
import imgIop from "@/public/TreatmentPage/ProgramSection/Rectangle 19.png";
import imgCareTeam from "@/public/TreatmentPage/ProgramSection/Rectangle 21.png";
import classes from "./TreatmentPrograms.module.css";

const PROGRAMS = [
  {
    id: "inpatient",
    title: "Inpatient Psychiatric Program",
    description:
      "Provides 24-hour psychiatric care for older adults requiring evaluation, stabilization, and intensive treatment in a safe, structured environment.",
    image: imgInpatient,
    alt: "Nurse assisting an older adult who is standing with a cane",
    href: "/treatment-services/inpatient-psychiatric-program",
  },
  {
    id: "iop",
    title: "Intensive Outpatient Program (IOP)",
    description:
      "Structured outpatient therapy for older adults who benefit from ongoing treatment while maintaining their daily routines at home.",
    image: imgIop,
    alt: "Caregiver sharing fresh vegetables with an older couple at home",
    href: "/treatment-services/intensive-outpatient-program",
  },
  {
    id: "care-team",
    title: "Multidisciplinary Care Team",
    description:
      "Our experienced team includes psychiatrists, nurses, therapists, social workers, case managers, and behavioral health professionals working together to deliver personalized, coordinated care.",
    image: imgCareTeam,
    alt: "Care team members reviewing information together at a desk",
    href: "/treatment-services/multidisciplinary-care-team",
  },
];

function ArrowIcon() {
  return (
    <svg
      className={classes.buttonArrow}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TreatmentPrograms() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        {PROGRAMS.map((program) => (
          <article key={program.id} className={classes.card}>
            <div className={classes.cardContent}>
              <h2 className={classes.cardTitle}>{program.title}</h2>
              <p className={classes.cardText}>{program.description}</p>
              <Link href={program.href} className={classes.learnMore}>
                Learn More
                <ArrowIcon />
              </Link>
            </div>
            <div className={classes.imageWrapper}>
              <Image
                src={program.image}
                alt={program.alt}
                className={classes.image}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
