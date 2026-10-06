import type { StaticImageData } from "next/image";
import programContinuum from "@/public/figma/home/program-continuum.jpg";
import programFamily from "@/public/figma/home/program-family.jpg";
import programInpatient from "@/public/figma/home/program-inpatient.jpg";

export type Program = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
};

export const programs: Program[] = [
  {
    title: "Inpatient Psychiatric Care",
    description:
      "A secure inpatient unit with 24-hour psychiatric and medical care for older adults in acute crisis.",
    image: programInpatient,
    alt: "A physician talking with an older adult patient at a table",
    href: "/treatment-services/inpatient-psychiatric-program",
  },
  {
    title: "Family Support and Education",
    description:
      "Family meetings, caregiver education, and shared discharge planning, so families know what to expect when their loved one comes home.",
    image: programFamily,
    alt: "An older couple embracing their adult daughter at home",
    href: "/patient-visitor-guide",
  },
  {
    title: "Continuum of Care",
    description:
      "Step-down planning and coordination with outpatient providers, primary care physicians, and residential communities after discharge.",
    image: programContinuum,
    alt: "A clinician reviewing a care plan with an older couple",
    href: "/treatment-services/multidisciplinary-care-team",
  },
];
