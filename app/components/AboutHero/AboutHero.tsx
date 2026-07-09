import Image from "next/image";
import heroImg from "@/public/AboutUsPage/HeroSection/Rectangle 24.png";
import classes from "./AboutHero.module.css";

export function AboutHero() {
  return (
    <section className={classes.hero}>
      <div className={classes.inner}>
        <div className={classes.media}>
          <Image
            src={heroImg}
            alt="Group of smiling older adults outdoors under the trees"
            className={classes.image}
            placeholder="blur"
            priority
            sizes="(max-width: 47.99em) 100vw, 40vw"
          />
        </div>

        <div className={classes.content}>
          <h1 className={classes.title}>
            <span className={classes.titleLine}>Guided by Compassion.</span>{" "}
            <span className={classes.titleLine}>Driven by Purpose.</span>
          </h1>
          <p className={classes.subtitle}>
            Our mission, vision, and values reflect our commitment to delivering
            exceptional psychiatric care for older adults and supporting every
            patient with respect, empathy, and clinical excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
