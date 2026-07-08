import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ProgramDetail } from "@/app/components/ProgramDetail/ProgramDetail";

export const metadata = {
  title: "Inpatient Psychiatric Program — Palm Grove Health Center",
  description:
    "Specialized, short-term psychiatric care for older adults who require stabilization in a safe, structured, and supportive environment.",
};

const INTRO = [
  "Palm Grove's Inpatient Psychiatric Program provides specialized, short-term psychiatric care for older adults who require stabilization in a safe, structured, and supportive environment. Our program is designed to help patients experiencing behavioral health challenges receive the focused care they need while preserving dignity, comfort, and quality of life.",
  "Each patient receives a comprehensive psychiatric evaluation and an individualized treatment plan developed by our multidisciplinary team. Treatment focuses on stabilization, symptom management, medication evaluation, therapeutic interventions, and preparing patients for the next stage of care.",
  "Throughout each patient's stay, we work closely with families, caregivers, and referring providers to ensure clear communication, coordinated treatment, and a smooth transition following discharge.",
];

const SECTIONS = [
  {
    heading: "Comprehensive Inpatient Care",
    text: "Our inpatient program combines evidence-based psychiatric treatment with compassionate, person-centered care tailored to the unique needs of older adults. Patients participate in individualized therapies, medication management, therapeutic activities, and family involvement designed to promote recovery and emotional well-being.",
  },
  {
    heading: "Assessment & Admission",
    text: "Palm Grove offers a confidential assessment to determine the most appropriate level of care for each patient. Our experienced intake team works closely with families, physicians, hospitals, and referral partners to ensure a seamless admission process and timely access to treatment.",
  },
];

export default function InpatientPsychiatricProgramPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramDetail
          title="Inpatient Psychiatric Program"
          intro={INTRO}
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
