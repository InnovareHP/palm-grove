import Image from "next/image";
import iconMark from "@/public/figma/brand/icon-mark.png";
import careImg from "@/public/figma/home/clinical-care.jpg";
import { Button } from "../ui/Button/Button";
import classes from "./CareTeam.module.css";

export function CareTeam() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className={classes.mark} aria-hidden="true">
        <Image
          src={iconMark}
          alt=""
          className={classes.markImage}
          sizes="464px"
        />
      </div>

      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.media}>
          <Image
            src={careImg}
            alt="A nurse reviewing a tablet with a patient"
            className={classes.image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 992px) 620px, (max-width: 1280px) 47vw, 500px"
          />
        </div>

        <div className={classes.content}>
          <p className="pgEyebrow">Person-first, family-inclusive care</p>
          <h2 className="pgTitle">
            Clinical excellence, delivered with compassion and respect
          </h2>
          <p className="pgLead">
            Older adults often face psychiatric conditions alongside medical
            illness, medication changes, memory concerns, or major life
            transitions. Our psychiatrists, nurses, therapists, and social
            workers treat these together, as one team.
          </p>
          <p className="pgLead">
            Each patient receives an individualized treatment plan, and families
            are kept informed and involved throughout the stay. Our goal is a
            safe return home and lasting stability.
          </p>
          <div className={classes.actions}>
            <Button href="/treatment-services/multidisciplinary-care-team">
              Meet Our Care Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
