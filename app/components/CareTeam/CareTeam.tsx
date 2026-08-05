import Image from "next/image";
import careTeamImg from "@/public/figma/home/care-team.png";
import { Button } from "../ui/Button/Button";
import classes from "./CareTeam.module.css";

export function CareTeam() {
  return (
    <section className="pgSection">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.media}>
          <Image
            src={careTeamImg}
            alt="A clinician comforting an older adult patient"
            className={classes.image}
            fill
            sizes="(max-width: 992px) 100vw, (max-width: 1280px) 47vw, 520px"
          />
        </div>

        <div className={classes.content}>
          <p className="pgEyebrow">Whole-person, family centered care</p>
          <h2 className="pgTitle">
            Expert medical care, delivered with compassion and dignity
          </h2>
          <p className="pgLead">
            At Palm Grove Health Center, we combine specialized geriatric
            psychiatry with genuine warmth. Our interdisciplinary team of
            physicians, nurses, and therapists partners closely with families to
            give every patient the best possible chance to heal, recover, and
            return to the highest quality of life possible.
          </p>
          <p className="pgLead">
            Every treatment plan is personalized — addressing the psychological,
            behavioral, physical, and social needs of the whole person, not just
            a diagnosis.
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
