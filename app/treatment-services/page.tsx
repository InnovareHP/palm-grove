import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { Button } from "@/app/components/ui/Button/Button";
import { CheckList } from "@/app/components/ui/CheckList/CheckList";
import { CtaBand } from "@/app/components/ui/CtaBand/CtaBand";
import { MediaSplit } from "@/app/components/ui/MediaSplit/MediaSplit";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { TreatmentQuickNav } from "@/app/components/TreatmentQuickNav/TreatmentQuickNav";
import { TreatmentApproach } from "@/app/components/TreatmentApproach/TreatmentApproach";
import inpatientImg from "@/public/figma/treatment/inpatient.png";
import iopImg from "@/public/figma/treatment/iop.png";
import familySupportImg from "@/public/figma/treatment/family-support.png";
import continuumImg from "@/public/figma/treatment/continuum.png";

export const metadata = {
  title: "Treatment & Services — Palm Grove Health Center",
  description:
    "A full continuum of behavioral health care for older adults — from around-the-clock inpatient stabilization to structured outpatient support and long-term coordination.",
};

const PROGRAM_ASPECT = "478 / 539";

export default function TreatmentServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Treatment & Services"
          subtitle="A full continuum of behavioral health care for older adults — from around-the-clock inpatient stabilization to structured outpatient support and long-term coordination."
        />
        <TreatmentQuickNav />

        <MediaSplit
          id="inpatient"
          eyebrow="Geriatric psychiatric inpatient"
          title="Around-the-clock inpatient care"
          paragraphs={[
            "For seniors in acute psychiatric crisis, our inpatient program provides a safe, structured environment with 24-hour nursing and medical support. We stabilize symptoms, adjust medications carefully, and treat the whole person.",
          ]}
          image={inpatientImg}
          alt="A nurse checking in with an older adult patient"
          mediaAspect={PROGRAM_ASPECT}
        >
          <CheckList
            items={[
              "24/7 nursing and psychiatric coverage",
              "Comprehensive medical and psychiatric assessment",
              "Careful medication evaluation and management",
              "Individual, group, and milieu therapy",
            ]}
          />
        </MediaSplit>

        <MediaSplit
          id="intensive-outpatient"
          eyebrow="Intensive outpatient program (IOP)"
          title="Structured support while living at home"
          paragraphs={[
            "Our Intensive Outpatient Program offers structured therapy and psychiatric monitoring during the day, allowing patients to return home each evening and maintain their independence and routines.",
          ]}
          image={iopImg}
          alt="A group therapy session for older adults"
          reverse
          mediaAspect={PROGRAM_ASPECT}
        >
          <CheckList
            items={[
              "Scheduled therapy sessions several days per week",
              "Ongoing psychiatric medication monitoring",
              "Individual and group therapy",
              "A step down from inpatient, or a step up from routine outpatient care",
            ]}
          />
        </MediaSplit>

        <MediaSplit
          id="family-support"
          eyebrow="Family support & education"
          title="Support for the whole family"
          paragraphs={[
            "Caregiving for an older adult with a psychiatric condition can be overwhelming. We equip families with education, resources, and a collaborative discharge plan so they feel confident and supported.",
          ]}
          image={familySupportImg}
          alt="A family member comforting an older adult"
          mediaAspect="478 / 474"
        >
          <CheckList
            items={[
              "Family education about diagnosis and treatment",
              "Caregiver guidance and community resources",
              "Collaborative, coordinated discharge planning",
              "Regular updates and involvement in care decisions",
            ]}
          />
        </MediaSplit>

        <MediaSplit
          id="continuum-of-care"
          eyebrow="Continuum of care"
          title="Support that continues after discharge"
          paragraphs={[
            "Recovery does not end at discharge. We coordinate seamless step-down programs and connect patients and caregivers with community resources to support long-term stability.",
          ]}
          image={continuumImg}
          alt="Older adults with family members outdoors"
          reverse
          mediaAspect={PROGRAM_ASPECT}
        >
          <CheckList
            items={[
              "Coordinated step-down to outpatient care",
              "Warm handoffs to community providers",
              "Follow-up planning and appointment coordination",
              "Connection to caregiver and support resources",
            ]}
          />
        </MediaSplit>

        <TreatmentApproach />

        <CtaBand
          title="Ready to make a referral?"
          lead="Our admissions team can complete an assessment and coordinate admission 24 hours a day."
        >
          <Button href="/referral-process" variant="outline">
            Refer a Patient
          </Button>
          <Button href="tel:+18000000000" variant="glass">
            Call (800) 000-0000
          </Button>
        </CtaBand>
      </main>
      <Footer />
    </>
  );
}
