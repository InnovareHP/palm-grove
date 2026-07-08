import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { TreatmentHero } from "@/app/components/TreatmentHero/TreatmentHero";
import { TreatmentApproach } from "@/app/components/TreatmentApproach/TreatmentApproach";
import { TherapyPrograms } from "@/app/components/TherapyPrograms/TherapyPrograms";
import { TreatmentPrograms } from "@/app/components/TreatmentPrograms/TreatmentPrograms";
import { ContinuumOfCare } from "@/app/components/ContinuumOfCare/ContinuumOfCare";

export const metadata = {
  title: "Treatment & Services — Palm Grove Health Center",
  description:
    "Specialized psychiatric care designed to help older adults achieve stability, recovery, and an improved quality of life.",
};

export default function TreatmentServicesPage() {
  return (
    <>
      <Header />
      <main>
        <TreatmentHero />
        <TreatmentApproach />
        <TherapyPrograms />
        <TreatmentPrograms />
        <ContinuumOfCare />
      </main>
      <Footer />
    </>
  );
}
