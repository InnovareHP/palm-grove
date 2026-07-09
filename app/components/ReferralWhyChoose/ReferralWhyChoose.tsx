import classes from "./ReferralWhyChoose.module.css";

const REASONS = [
  {
    title: "Specialized Older Adult Psychiatry",
    description:
      "Experienced clinicians dedicated to the unique mental health needs of older adults.",
  },
  {
    title: "Multidisciplinary Care Team",
    description:
      "Psychiatrists, nurses, therapists, social workers, and behavioral professionals are working together.",
  },
  {
    title: "Family-Centered Care",
    description:
      "Families remain informed, involved, and supported throughout the treatment journey.",
  },
  {
    title: "Coordinated Continuum of Care",
    description:
      "Thoughtful discharge planning and ongoing collaboration with community providers.",
  },
];

export function ReferralWhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h2 className={classes.title}>
          Why Healthcare Providers Choose Palm Grove
        </h2>
        <ul className={classes.cards}>
          {REASONS.map((reason) => (
            <li key={reason.title} className={classes.card}>
              <h3 className={classes.cardTitle}>{reason.title}</h3>
              <p className={classes.cardText}>{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
