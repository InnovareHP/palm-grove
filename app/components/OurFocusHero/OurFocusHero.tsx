import Image from "next/image";
import heroImg from "@/public/OurFocusPage/HeroSection/image 4.png";
import classes from "./OurFocusHero.module.css";

export function OurFocusHero() {
  return (
    <section className={classes.hero}>
      <div className={classes.panels}>
      <div className={classes.imageWrapper}>
        <Image
          src={heroImg}
          alt="Nurse walking with an older adult in a wheelchair outdoors"
          className={classes.image}
          placeholder="blur"
          priority
          sizes="45vw"
        />
      </div>

      <div className={classes.content}>
        <span className={classes.badge}>Our Focus</span>
        <h1 className={classes.title}>
          Specialized Psychiatric Care for Older Adults
        </h1>
        <p className={classes.subtitle}>
          Compassionate, personalized mental health care designed to support
          older adults, their families, and the healthcare professionals who
          care for them.
        </p>
      </div>
      </div>

      <div className={classes.greenLine} aria-hidden="true" />
    </section>
  );
}
