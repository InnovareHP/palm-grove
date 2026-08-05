import classes from "./WhyChoose.module.css";

const reasons = [
  "Specialized in geriatric psychiatry — not just general mental health.",
  "An expert interdisciplinary team trained specifically in senior care.",
  "Families are involved at every step of the treatment journey.",
  "A full continuum of care that supports patients well beyond discharge.",
];

export function WhyChoose() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Why Palm Grove</p>
          <h2 className="pgTitle">Specialized care you can trust</h2>
        </div>

        <ul className={classes.grid}>
          {reasons.map((reason, index) => (
            <li key={reason} className={`pgCard ${classes.card}`}>
              <span className={classes.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className={classes.text}>{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
