import { Faq, type FaqItem } from "../ui/Faq/Faq";

const items: FaqItem[] = [
  {
    question: "How long is a typical stay?",
    answer:
      "Length of stay depends on each patient's needs and clinical progress. Inpatient stays are typically short-term and focused on stabilization; our team reviews progress regularly and plans discharge collaboratively with the patient and family.",
  },
  {
    question: "Will my family be involved in care?",
    answer:
      "Yes. Family involvement is central to our approach. With appropriate consent, we keep families informed, invite them into care planning, and provide education and support for the transition home.",
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We work with Medicare and many commercial insurance plans. Our admissions team will verify benefits and explain coverage before admission — please call our 24/7 line to review your specific plan.",
  },
  {
    question: "Can patients bring their own medications?",
    answer:
      "Please bring a complete list of current medications and dosages. For safety, our medical team manages all medications during the stay; personal medications are stored securely and reviewed by our physicians.",
  },
  {
    question: "How do I begin the admission process?",
    answer:
      "Call our 24/7 intake and referral line, or submit a referral online. Our team will complete a confidential assessment and coordinate a safe, timely admission.",
  },
];

export function PatientGuideFaq() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Questions &amp; answers</p>
          <h2 className="pgTitle">Frequently asked questions</h2>
        </div>

        <Faq items={items} />
      </div>
    </section>
  );
}
