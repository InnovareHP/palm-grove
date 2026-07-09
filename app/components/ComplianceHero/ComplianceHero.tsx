import classes from "./ComplianceHero.module.css";

export function ComplianceHero() {
  return (
    <section className={classes.hero}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Compliance, Legal, and Policies</h1>
        <p className={classes.subtitle}>
          Our commitment to safety, compliance, and transparency for patients,
          families, and visitors.
        </p>
      </div>
    </section>
  );
}
