import Image from "next/image";
import sectionImg from "@/public/OurFocusPage/ConditionsSection/image 5.png";
import classes from "./OurFocusConditions.module.css";

const conditions = [
  "Depression and mood disorders",
  "Anxiety disorders",
  "Bipolar disorder",
  "Psychotic disorders",
  "Behavioral symptoms associated with dementia",
  "Medication-related behavioral concerns",
  "Grief, loss, and life transition challenges",
  "Other psychiatric conditions requiring specialized geriatric care",
];

export function OurFocusConditions() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.imageWrapper}>
          <Image
            src={sectionImg}
            alt="Older adult sitting peacefully by the ocean"
            className={classes.image}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>

        <div className={classes.content}>
          <h2 className={classes.title}>Conditions We Treat</h2>
          <p className={classes.body}>
            Our clinical team provides comprehensive assessment and treatment for
            a wide range of psychiatric conditions affecting older adults,
            including:
          </p>
          <ul className={classes.list}>
            {conditions.map((condition) => (
              <li key={condition} className={classes.listItem}>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
