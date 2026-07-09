import Image from "next/image";
import commitmentImg from "@/public/ReferralPage/CommitmentSection/image 3.png";
import classes from "./ReferralCommitment.module.css";

export function ReferralCommitment() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.media}>
          <Image
            src={commitmentImg}
            alt="Three generations of a family lying together on the grass"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 47.99em) 100vw, 50vw"
          />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>Commitment to Families</h2>
          <p className={classes.text}>
            Every admission includes compassionate communication, family
            involvement, and coordinated care planning to support both patients
            and their loved ones throughout treatment.
          </p>
        </div>
      </div>
    </section>
  );
}
