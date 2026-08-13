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
