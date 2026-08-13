import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { ResourcesAlert } from "@/app/components/ResourcesAlert/ResourcesAlert";
import { MentalHealthResources } from "@/app/components/MentalHealthResources/MentalHealthResources";
import type { CrisisResource } from "@/app/components/MentalHealthResources/MentalHealthResources.data";
import { ResourcesCaregivers } from "@/app/components/ResourcesCaregivers/ResourcesCaregivers";
import { ResourcesPromo } from "@/app/components/ResourcesPromo/ResourcesPromo";
/* No dedicated Resources hero shot exists yet; this group photo carries the
   "you are not doing this alone" tone of the page. */
import heroImg from "@/public/figma/treatment/continuum.png";

export const metadata = {
  title: "Mental Health Resources — Palm Grove Health Center",
  description:
    "Support and information for patients, families, and caregivers — including crisis lines available around the clock.",
};

const crisisLines: CrisisResource[] = [
  {
    title: "988 Suicide Crisis Lifeline",
    value: "Call or text 988",
    href: "tel:988",
    note: "Free, confidential support, 24/7.",
  },
  {
    title: "Veterans Crisis Line",
    value: "1-800-273-8255 (Press 1)",
    href: "tel:+18002738255",
    note: "Support for veterans and their families.",
  },
  {
    title: "SAMHSA National Helpline",
    value: "1-800-662-4357",
    href: "tel:+18006624357",
    note: "Treatment referral and information service.",
  },
  {
    title: "National Domestic Violence Hotline",
    value: "1-800-799-7233",
    href: "tel:+18007997233",
    note: "Confidential help, available around the clock.",
  },
  {
    title: "Eldercare Locator",
    value: "1-800-677-1116",
    href: "tel:+18006771116",
    note: "Connects older adults to local services.",
  },
  {
    title: "Florida 211",
    value: "Dial 211",
    href: "tel:211",
    note: "Local health and human services in Florida.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Mental Health Resources"
          subtitle="Support and information for patients, families, and caregivers — including crisis lines available around the clock."
          image={heroImg}
          alt="Older adults and family members together outdoors"
          imagePosition="center top"
        />
        <ResourcesAlert />
        <MentalHealthResources
          eyebrow="Crisis & immediate help"
          eyebrowMuted
          title="Someone is always available"
          lead=""
          items={crisisLines}
        />
        <ResourcesCaregivers />
        <ResourcesPromo />
      </main>
      <Footer />
    </>
  );
}
