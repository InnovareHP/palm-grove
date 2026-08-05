import classes from "./OurFocusValues.module.css";

const values = [
  {
    title: "Compassion",
    text: "We meet every patient and family with warmth, patience, and genuine care — never judgment.",
  },
  {
    title: "Dignity",
    text: "Older adults deserve respect. We protect the dignity of every person in our care at every moment.",
  },
  {
    title: "Family Partnership",
    text: "Families are essential partners. We keep them informed and involved throughout treatment.",
  },
  {
    title: "Excellence",
    text: "We hold ourselves to the highest clinical standards, grounded in evidence-based geriatric psychiatry.",
  },
];

export function OurFocusValues() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">What guides us</p>
          <h2 className="pgTitle">Our Values</h2>
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
