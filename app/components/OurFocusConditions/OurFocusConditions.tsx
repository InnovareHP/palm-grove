import { CheckCards } from "../ui/CheckCards/CheckCards";
import classes from "./OurFocusConditions.module.css";

const conditions = [
  "Depression & mood disorders",
  "Anxiety disorders",
  "Dementia-related behavioral changes",
  "Bipolar disorder",
  "Psychosis & thought disorders",
  "Grief & adjustment difficulties",
  "Agitation & aggression",
  "Medication management concerns",
  "Suicidal thoughts & safety concerns",
];

export function OurFocusConditions() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Conditions we treat</p>
          <h2 className="pgTitle">
            Specialized help for a range of conditions
          </h2>
          <p className="pgLead">
            Our team assesses and treats the psychiatric and behavioral
            conditions most common among older adults.
          </p>
        </div>

        <div className={classes.grid}>
          <CheckCards items={conditions} />
        </div>

        <p className={classes.note}>
          This list is not exhaustive. Our admissions team can help determine
          whether Palm Grove is the right fit for a specific situation.
        </p>
      </div>
    </section>
  );
}
