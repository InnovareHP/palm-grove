import type { StaticImageData } from "next/image";
import program1 from "@/public/figma/home/program-1.png";
import program2 from "@/public/figma/home/program-2.png";
import program3 from "@/public/figma/home/program-3.png";
import program4 from "@/public/figma/home/program-4.png";

export type Program = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
};

export const programs: Program[] = [
  {
    title: "Geriatric Psychiatric Inpatient",
    description:
      "Crisis stabilization and comprehensive psychiatric care with 24-hour medical support for seniors in acute need.",
    image: program1,
    alt: "A nurse supporting an older adult patient",
    href: "/treatment-services/inpatient-psychiatric-program",
  },
  {
    title: "Intensive Outpatient (IOP)",
    description:
      "Structured daytime therapy and psychiatric monitoring while patients maintain independence and live at home.",
    image: program2,
    alt: "A therapist leading a small group session",
    href: "/treatment-services/intensive-outpatient-program",
  },
  {
    title: "Family Support and Education",
    description:
      "Family education, caregiver support, and collaborative discharge planning for the best possible outcomes.",
    image: program3,
    alt: "A family meeting with a care team member",
    href: "/patient-visitor-guide",
  },
  {
    title: "Continuum of Care",
    description:
      "Seamless step-down programs and community coordination that support long-term stability and recovery.",
    image: program4,
    alt: "An older adult smiling with a caregiver",
    href: "/treatment-services/multidisciplinary-care-team",
  },
];
