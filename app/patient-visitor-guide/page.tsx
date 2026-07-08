import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PatientVisitorHero } from "@/app/components/PatientVisitorHero/PatientVisitorHero";
import { PatientVisitorGuide } from "@/app/components/PatientVisitorGuide/PatientVisitorGuide";

export const metadata = {
  title: "Patient & Visitor Guide — Palm Grove Health Center",
  description:
    "Everything you need to know before, during, and after your visit to Palm Grove Health Center.",
};

export default function PatientVisitorPage() {
  return (
    <>
      <Header />
      <main>
        <PatientVisitorHero />
        <PatientVisitorGuide />
      </main>
      <Footer />
    </>
  );
}
