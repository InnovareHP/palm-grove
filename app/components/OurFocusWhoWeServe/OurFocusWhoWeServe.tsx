import Image from "next/image";
import sectionImg from "@/public/OurFocusPage/WhoWeServeSection/image 3.png";
import classes from "./OurFocusWhoWeServe.module.css";

export function OurFocusWhoWeServe() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <h2 className={classes.title}>Who We Serve</h2>
          <p className={classes.body}>
            Palm Grove serves older adults who require specialized psychiatric
            evaluation, stabilization, and treatment. We care for patients
            referred by hospitals, physicians, emergency departments, skilled
            nursing facilities, assisted living communities, case managers, and
            other healthcare providers, as well as families seeking support for
            a loved one.
          </p>
          <p className={classes.body}>
            Our programs are designed for seniors who would benefit from a
            structured, therapeutic environment focused on improving mental
            health, restoring stability, and enhancing quality of life.
          </p>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src={sectionImg}
            alt="Two older adults smiling and walking together outdoors"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
