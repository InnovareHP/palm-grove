import { IconPhone } from "@tabler/icons-react";
import { siteConfig } from "@/app/lib/site";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { Button } from "@/app/components/ui/Button/Button";
import { CtaBand } from "@/app/components/ui/CtaBand/CtaBand";
import { MediaSplit } from "@/app/components/ui/MediaSplit/MediaSplit";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { OurFocusMissionVision } from "@/app/components/OurFocusMissionVision/OurFocusMissionVision";
import { OurFocusConditions } from "@/app/components/OurFocusConditions/OurFocusConditions";
import { OurFocusValues } from "@/app/components/OurFocusValues/OurFocusValues";
import heroImg from "@/public/figma/our-focus/hero.png";
import whoWeServeImg from "@/public/figma/our-focus/who-we-serve.png";

export const metadata = {
  title: "Our Focus — Palm Grove Health Center",
  description:
    "Dedicated exclusively to the mental and behavioral health of older adults — because the needs of seniors deserve specialized, thoughtful care.",
};

export default function OurFocusPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our Focus"
          subtitle="Dedicated exclusively to the mental and behavioral health of older adults — because the needs of seniors deserve specialized, thoughtful care."
          image={heroImg}
          alt="A caregiver walking outdoors with an older adult"
          imagePosition="center top"
        />
        <OurFocusMissionVision />
        <MediaSplit
          eyebrow="Who we serve"
          title="Care designed for older adults"
          paragraphs={[
            "We care for adults, typically age 55 and older, who are experiencing acute psychiatric symptoms or behavioral changes that affect their safety, independence, or quality of life. Aging can bring complex, overlapping medical and emotional challenges — and general mental health settings are not always equipped to address them.",
            "Our clinicians understand how psychiatric conditions present differently in later life, how they interact with physical health and medications, and how to involve families in the healing process.",
          ]}
          image={whoWeServeImg}
          alt="Two older adults walking together outdoors"
          imagePosition="center top"
          reverse
          background="tinted"
        />
        <OurFocusConditions />
        <OurFocusValues />
        <CtaBand
          title="Have questions about whether we can help?"
          lead="Our admissions team is available 24/7 to talk through your situation."
        >
          <Button
            href={siteConfig.phones.intake.href}
            variant="outline"
            leftIcon={<IconPhone size={20} stroke={1.8} />}
          >
            Call {siteConfig.phones.intake.display}
          </Button>
          <Button href="/treatment-services" variant="glass">
            See Our Programs
          </Button>
        </CtaBand>
      </main>
      <Footer />
    </>
  );
}
