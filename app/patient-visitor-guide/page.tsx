import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { Button } from "@/app/components/ui/Button/Button";
import { CtaBand } from "@/app/components/ui/CtaBand/CtaBand";
import { MediaSplit } from "@/app/components/ui/MediaSplit/MediaSplit";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { PatientGuideCards } from "@/app/components/PatientGuideCards/PatientGuideCards";
import { PatientGuideVisiting } from "@/app/components/PatientGuideVisiting/PatientGuideVisiting";
import { PatientGuideFaq } from "@/app/components/PatientGuideFaq/PatientGuideFaq";
import heroImg from "@/public/figma/patient-guide/hero.png";
import expectImg from "@/public/figma/patient-guide/what-to-expect.png";

export const metadata = {
  title: "Patient & Visitor Guide — Palm Grove Health Center",
  description:
    "Everything patients and families need to know about admission, visiting, and what to expect during a stay at Palm Grove.",
};

export default function PatientVisitorGuidePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Patient & Visitor Guide"
          subtitle="Everything patients and families need to know about admission, visiting, and what to expect during a stay at Palm Grove."
          image={heroImg}
          alt="A family visiting an older adult at Palm Grove"
          imageVariant="card"
          imagePosition="center 25%"
        />

        <MediaSplit
          eyebrow="What to expect"
          title="A calm, supportive start"
          paragraphs={[
            "On admission, every patient receives a comprehensive psychiatric and medical assessment. Our team takes time to understand the whole person — their history, their strengths, and their goals — before building an individualized treatment plan.",
            "Families are welcomed as partners from day one. We'll explain the plan, answer questions, and keep you informed throughout your loved one's stay.",
          ]}
          image={expectImg}
          alt="A clinician talking with an older adult patient"
          reverse
          mediaAspect="480 / 371"
        />

        <PatientGuideCards />
        <PatientGuideVisiting />
        <PatientGuideFaq />

        <CtaBand
          title="Still have questions?"
          lead="Our team is happy to walk you through anything before or during a stay."
        >
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </CtaBand>
      </main>
      <Footer />
    </>
  );
}
