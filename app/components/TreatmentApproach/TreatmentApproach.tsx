import { StepCards, type Step } from "../ui/StepCards/StepCards";

const steps: Step[] = [
  {
    title: "Assessment",
    text: "A thorough psychiatric and medical evaluation on admission.",
  },
  {
    title: "Personalized Plan",
    text: "An individualized treatment plan built by the care team.",
  },
  {
    title: "Active Treatment",
    text: "Therapy, medication management, and daily support.",
  },
  {
    title: "Transition",
    text: "Coordinated discharge and connection to ongoing care.",
  },
];

export function TreatmentApproach() {
  return (
    <section className="pgSection pgSectionMist">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Our approach</p>
          <h2 className="pgTitle">A personalized path for every patient</h2>
          <p className="pgLead">
            Care begins with a thorough assessment and follows a plan built
            around the individual — reviewed and adjusted by the full care team
            throughout the stay.
          </p>
        </div>

        <StepCards steps={steps} />
      </div>
    </section>
  );
}
