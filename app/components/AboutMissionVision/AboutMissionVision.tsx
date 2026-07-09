import classes from "./AboutMissionVision.module.css";

const STATEMENTS = [
  {
    title: "Our Mission",
    description:
      "To provide compassionate, specialized psychiatric care for older adults in a safe and supportive environment, helping patients achieve stability, dignity, and an improved quality of life.",
  },
  {
    title: "Our Vision",
    description:
      "To be a trusted leader in senior behavioral healthcare, recognized for clinical excellence, compassionate service, and meaningful partnerships with patients, families, and healthcare providers.",
  },
];

export function AboutMissionVision() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        {STATEMENTS.map((statement) => (
          <div key={statement.title} className={classes.card}>
            <h2 className={classes.title}>{statement.title}</h2>
            <p className={classes.text}>{statement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
