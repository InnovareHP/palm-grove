import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { Button } from "@/app/components/ui/Button/Button";
import { CtaBand } from "@/app/components/ui/CtaBand/CtaBand";
import { MediaSplit } from "@/app/components/ui/MediaSplit/MediaSplit";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { AboutCareTeam } from "@/app/components/AboutCareTeam/AboutCareTeam";
import { AboutCommitment } from "@/app/components/AboutCommitment/AboutCommitment";
import whoWeAreImg from "@/public/figma/about/who-we-are.png";
/* No dedicated About hero shot exists yet; this warm clinician-and-patient
   photo reads differently from the team shot in the section below it. */
import heroImg from "@/public/figma/home/care-team.png";

export const metadata = {
  title: "About Us — Palm Grove Health Center",
  description:
    "Palm Grove Health Center brings specialized, compassionate psychiatric care to the older adults of St. Augustine and the surrounding communities.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Us"
          subtitle="Palm Grove Health Center brings specialized, compassionate psychiatric care to the older adults of St. Augustine and the surrounding communities."
          image={heroImg}
          alt="A Palm Grove clinician sitting with an older adult patient"
          imagePosition="center top"
        />

        <MediaSplit
          eyebrow="Who we are"
          title="A team devoted to senior mental health"
          paragraphs={[
            "Palm Grove Health Center was founded on a simple belief: older adults deserve mental health care as specialized and attentive as the care they receive for their physical health. Aging brings unique emotional and psychiatric challenges, and treating them well requires clinicians who truly understand later life.",
            "From our home in St. Augustine, our interdisciplinary team delivers inpatient and intensive outpatient care grounded in dignity, evidence, and genuine compassion — for patients and for the families who love them.",
          ]}
          image={whoWeAreImg}
          alt="Palm Grove clinicians conferring in the hallway"
          imagePosition="center top"
          mediaAspect="478 / 517"
        />

        <AboutCareTeam />
        <AboutCommitment />

        <CtaBand
          title="Learn more about our care"
          lead="Explore our programs or reach out to our team — we're here to help."
        >
          <Button href="/treatment-services" variant="outline">
            Our Programs
          </Button>
          <Button href="/contact" variant="glass">
            Contact Us
          </Button>
        </CtaBand>
      </main>
      <Footer />
    </>
  );
}
