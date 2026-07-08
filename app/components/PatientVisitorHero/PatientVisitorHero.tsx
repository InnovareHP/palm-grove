import Image from "next/image";
import heroImg from "@/public/PatientVisitorPage/HeroSection/image 4.png";
import classes from "./PatientVisitorHero.module.css";

export function PatientVisitorHero() {
  return (
    <section className={classes.hero}>
      <Image
        src={heroImg}
        alt="Older couple embracing while looking at a scenic ocean view"
        className={classes.bg}
        placeholder="blur"
        priority
        sizes="100vw"
      />

      <div className={classes.inner}>
        <div className={classes.content}>
          <span className={classes.badge}>What to Expect</span>
          <h1 className={classes.title}>Patient &amp; Visitor Guide</h1>
          <p className={classes.subtitle}>
            Everything you need to know before, during, and after your visit to
            Palm Grove. We&apos;re here to help make every step of the care
            journey as comfortable and informed as possible.
          </p>
        </div>
      </div>

      <div className={classes.greenLine} aria-hidden="true" />
    </section>
  );
}
