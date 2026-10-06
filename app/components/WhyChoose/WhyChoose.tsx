import classes from "./WhyChoose.module.css";

const reasons = [
  "Every program is designed around the mental health needs of older adults.",
  "Our psychiatrists, nurses, and therapists all specialize in older adults.",
  "Families take part in treatment planning, family meetings, and discharge.",
  "Every discharge plan includes outpatient follow-up and care coordination.",
];

export function WhyChoose() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Why Magnolia</p>
          <h2 className="pgTitle">Care built on experience</h2>
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
