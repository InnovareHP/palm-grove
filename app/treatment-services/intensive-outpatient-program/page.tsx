import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ProgramDetail } from "@/app/components/ProgramDetail/ProgramDetail";

export const metadata = {
  title: "Intensive Outpatient Program (IOP) — Palm Grove Health Center",
  description:
    "Structured psychiatric treatment for older adults who need continued support while maintaining their daily routines at home.",
};

const INTRO = [
  "Palm Grove's Intensive Outpatient Program (IOP) provides structured psychiatric treatment for older adults who need continued support while maintaining their daily routines at home. The program offers a flexible level of care for individuals who no longer require inpatient hospitalization but continue to benefit from ongoing therapeutic services.",
  "Our IOP is designed to help patients strengthen coping skills, improve emotional well-being, and maintain the progress made during inpatient treatment or other levels of care. Through a personalized treatment plan, patients receive comprehensive support while remaining connected to their families and communities.",
  "Treatment may include individual therapy, group therapy, medication management, psychoeducation, and family involvement, all led by an experienced multidisciplinary behavioral health team.",
];

const SECTIONS = [
  {
    heading: "Personalized Outpatient Care",
    text: "Every patient receives an individualized treatment plan based on their unique needs, goals, and clinical recommendations. Our team works closely with patients, families, and referring providers to ensure coordinated care that promotes continued recovery and long-term wellness.",
  },
  {
    heading: "Assessment & Admission",
    text: "A confidential assessment helps determine whether the Intensive Outpatient Program is the right level of care. Our intake team works with patients, families, physicians, and referral partners to recommend the most appropriate treatment pathway based on each individual's needs.",
  },
];

export default function IntensiveOutpatientProgramPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramDetail
          title="Intensive Outpatient Program (IOP)"
          intro={INTRO}
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </>
  );
}
