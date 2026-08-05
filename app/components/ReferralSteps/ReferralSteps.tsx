import { StepCards, type Step } from "../ui/StepCards/StepCards";

const steps: Step[] = [
  {
    title: "Reach Out",
    text: "Call our 24/7 intake line, fax, or complete the referral form to start the conversation.",
  },
  {
    title: "Assessment",
    text: "Our clinical team completes a confidential assessment to confirm the right level of care.",
  },
  {
    title: "Coordination",
    text: "We verify benefits and coordinate a safe, timely transfer.",
  },
  {
    title: "Admission",
    text: "The patient is admitted and treatment begins, with the referring party kept informed.",
  },
];

export function ReferralSteps() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">How it works</p>
          <h2 className="pgTitle">Four simple steps</h2>
        </div>

        <StepCards steps={steps} tone="tinted" />
      </div>
    </section>
  );
}
