import Image from "next/image";
import facilityImg from "@/public/AboutUsPage/FacilitySection/Rectangle 24.png";
import classes from "./AboutFacility.module.css";

export function AboutFacility() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <h2 className={classes.title}>Facility Overview</h2>
          <p className={classes.text}>
            Palm Grove is a senior psychiatric hospital dedicated to meeting the
            unique mental health needs of older adults. Our secure, therapeutic
            environment is designed to promote comfort, safety, and healing
            while supporting every patient&apos;s journey toward recovery.
          </p>
          <p className={classes.text}>
            Patients benefit from comfortable accommodations, therapeutic
            spaces, family-centered care, and a multidisciplinary team committed
            to providing personalized treatment with compassion and respect.
          </p>
        </div>

        <div className={classes.media}>
          <Image
            src={facilityImg}
            alt="Older adults laughing together over tea at the facility"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 47.99em) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
