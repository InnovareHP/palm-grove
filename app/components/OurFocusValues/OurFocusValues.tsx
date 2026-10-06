import classes from "./OurFocusValues.module.css";

const values = [
  {
    title: "Compassion",
    text: "We meet every patient and family with warmth, patience, and genuine care — never judgment.",
  },
  {
    title: "Dignity",
    text: "We treat every patient as a whole person, with a history, preferences, and a voice in their own care.",
  },
  {
    title: "Family Partnership",
    text: "Families are part of the treatment process, from admission through discharge.",
  },
  {
    title: "Excellence",
    text: "Our psychiatrists, nurses, and therapists specialize in the mental health needs of older adults.",
  },
];

export function OurFocusValues() {
  return (
    <section className={`pgSection pgBrand ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow pgEyebrowLight">What guides us</p>
          <h2 className="pgTitle pgTitleLg pgTitleLight">Our Values</h2>
        </div>

        <ul className={classes.grid}>
          {values.map((value) => (
            <li key={value.title} className={`pgCard ${classes.card}`}>
              <h3 className={classes.title}>{value.title}</h3>
              <p className={classes.text}>{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
