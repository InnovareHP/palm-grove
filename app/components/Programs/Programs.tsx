import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import program1 from "@/public/figma/home/program-1.png";
import program2 from "@/public/figma/home/program-2.png";
import program3 from "@/public/figma/home/program-3.png";
import program4 from "@/public/figma/home/program-4.png";
import { Button } from "../ui/Button/Button";
import classes from "./Programs.module.css";

type Program = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
};

const programs: Program[] = [
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

export function Programs() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow pgEyebrowMuted">Programs &amp; Services</p>
          <h2 className="pgTitle">
            Care built around the needs of older adults
          </h2>
          <p className="pgLead">
            A full continuum of specialized behavioral health services — from
            acute stabilization to structured outpatient support — delivered
            with dignity and respect.
          </p>
        </div>

        <div className={classes.grid}>
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className={`pgCard ${classes.card}`}
            >
              <div className={classes.media}>
                <Image
                  src={program.image}
                  alt={program.alt}
                  className={classes.image}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1280px) 25vw, 270px"
                />
              </div>
              <div className={classes.body}>
                <h3 className={`pgCardTitle ${classes.title}`}>
                  {program.title}
                </h3>
                <p className={classes.text}>{program.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={classes.actions}>
          <Button href="/treatment-services">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
