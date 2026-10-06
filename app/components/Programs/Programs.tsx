import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button/Button";
import { programs } from "./Programs.data";
import classes from "./Programs.module.css";

export function Programs() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Programs &amp; Services</p>
          <h2 className="pgTitle">
            Psychiatric treatment for older adults, at every level of need
          </h2>
          <p className="pgLead">
            We offer a connected range of behavioral health services, from
            short-term crisis stabilization to flexible outpatient programs, all
            built on respect, dignity, and clinical expertise.
          </p>
        </div>

        <ul className={`pgPlainList ${classes.grid}`}>
          {programs.map((program) => (
            <li key={program.title}>
              <Link href={program.href} className={`pgCard ${classes.card}`}>
                <div className={classes.media}>
                  <Image
                    src={program.image}
                    alt={program.alt}
                    className={classes.image}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1280px) 33vw, 348px"
                  />
                </div>
                <div className={classes.body}>
                  <h3 className={`pgCardTitle ${classes.title}`}>
                    {program.title}
                  </h3>
                  <p className={classes.text}>{program.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <Button href="/treatment-services">See All Programs</Button>
        </div>
      </div>
    </section>
  );
}
