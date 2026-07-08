import Image from "next/image";
import heroImg from "@/public/TreatmentPage/HeroSection/image 6.png";
import classes from "./TreatmentHero.module.css";

export function TreatmentHero() {
  return (
    <section className={classes.hero}>
      <div className={classes.panels}>
        <div className={classes.content}>
          <span className={classes.badge}>What We Offer</span>
          <h1 className={classes.title}>Treatment &amp; Services</h1>
          <p className={classes.subtitle}>
            Specialized psychiatric care designed to help older adults achieve
            stability, recovery, and an improved quality of life.
          </p>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src={heroImg}
            alt="Caregiver smiling with an older adult at home"
            className={classes.image}
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      <div className={classes.greenLine} aria-hidden="true" />
    </section>
  );
}
