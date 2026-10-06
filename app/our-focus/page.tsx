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
import heroImg from "@/public/figma/our-focus/hero.jpg";
import whoWeServeImg from "@/public/figma/our-focus/who-we-serve.jpg";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Our Focus",
  description:
    "Older adults have different mental health needs. At Magnolia Behavioral Health, we've built our programs and care team around them.",
  path: "/our-focus",
});

export default function OurFocusPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          title="Our Focus"
          subtitle={`Older adults have different mental health needs. At ${siteConfig.shortName}, we've built our programs and care team around them.`}
          image={heroImg}
          alt="A caregiver hugging a smiling older woman"
          imagePosition="center"
        />
        <OurFocusMissionVision />
        <MediaSplit
          eyebrow="Who we serve"
          title="Care designed for older adults"
          paragraphs={[
            "We treat older adults, typically age 45 and up, who are experiencing acute psychiatric symptoms or behavioral changes that affect their safety, independence, or daily life. At this stage of life, mental health conditions are often tied to medical illness, medication changes, or major life events, and general psychiatric programs are not always set up to manage both.",
            "Our clinicians are experienced in how psychiatric conditions present in older adults, how they interact with physical health and medications, and how to involve families in treatment.",
          ]}
          image={whoWeServeImg}
          alt="A nurse with her arm around an older woman on a sofa"
          reverse
          background="tinted"
          titleSize="lg"
        />
        <OurFocusConditions />
        <OurFocusValues />
        <CtaBand
          title="Have questions about whether we can help?"
          lead="Our admissions team is available 24/7 to talk through your situation."
          variant="light"
        >
          <Button
            href={siteConfig.phones.intake.href}
            leftIcon={<IconPhone size={20} stroke={1.75} />}
          >
            Call {siteConfig.phones.intake.display}
          </Button>
          <Button href="/treatment-services" variant="ghost">
            See Our Programs
          </Button>
        </CtaBand>
      </main>
      <Footer />
    </>
  );
}
