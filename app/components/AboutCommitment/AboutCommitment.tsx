import classes from "./AboutCommitment.module.css";

const commitments = [
  {
    title: "Evidence-Based Care",
    text: "Our treatment is grounded in current best practices in geriatric psychiatry.",
  },
  {
    title: "Safety First",
    text: "A secure, supportive environment designed specifically for the needs of older adults.",
  },
  {
    title: "Dignity & Respect",
    text: "Every patient is treated as a whole person deserving of compassion at every step.",
  },
];

export function AboutCommitment() {
  return (
    <section className="pgSection pgSectionMist">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Our commitment</p>
          <h2 className="pgTitle">Held to the highest standard</h2>
        </div>

        <ul className={classes.grid}>
          {commitments.map((commitment) => (
            <li key={commitment.title} className={classes.item}>
              <h3 className={classes.title}>{commitment.title}</h3>
              <p className={classes.text}>{commitment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
