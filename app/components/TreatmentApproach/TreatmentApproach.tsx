import Image from "next/image";
import imgPersonalized from "@/public/TreatmentPage/PersonalizedSection/Rectangle 9.png";
import imgCollaborative from "@/public/TreatmentPage/CollaborativeSection/Rectangle 11.png";
import classes from "./TreatmentApproach.module.css";

export function TreatmentApproach() {
  return (
    <>
      <section className={classes.sectionLight}>
        <div className={classes.grid}>
          <div className={classes.imageWrapper}>
            <Image
              src={imgPersonalized}
              alt="Nurse and an older adult smiling at each other in a bright room"
              className={classes.image}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div>
            <h2 className={classes.title}>Personalized Treatment Approach</h2>
            <p className={classes.text}>
              At Palm Grove, every patient receives an individualized
              treatment plan based on their medical history, psychiatric
              needs, functional abilities, and personal goals. Our team works
              closely with patients, families, and referring providers to
              ensure care is compassionate, coordinated, and focused on
              long-term well-being.
            </p>
            <p className={classes.text}>
              Treatment may include psychiatric evaluation, medication
              management, individual and group therapy, family involvement,
              recreational therapy, and discharge planning&mdash;all designed
              to support recovery in a safe, structured environment.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.sectionTinted}>
        <div className={classes.gridReverse}>
          <div>
            <h2 className={classes.title}>A Collaborative Approach to Care</h2>
            <p className={classes.text}>
              Healing is most effective when patients, families, and
              healthcare professionals work together. Our interdisciplinary
              team collaborates throughout the treatment process to provide
              comprehensive, person-centered care that addresses each
              patient&apos;s unique needs.
            </p>
            <p className={classes.text}>
              We encourage patients to participate in their treatment, build
              healthy coping strategies, and work toward meaningful goals
              while preparing for a successful transition beyond
              hospitalization.
            </p>
          </div>
          <div className={classes.imageWrapper}>
            <Image
              src={imgCollaborative}
              alt="Care team reviewing information on a laptop with an older couple"
              className={classes.image}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
