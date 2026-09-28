import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { ReferralIntake } from "@/app/components/ReferralIntake/ReferralIntake";
import { ReferralSteps } from "@/app/components/ReferralSteps/ReferralSteps";
import { ReferralPartners } from "@/app/components/ReferralPartners/ReferralPartners";
import heroImg from "@/public/figma/referral/hero.png";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Referral Process",
  description:
    "Referring a patient to Palm Grove is simple, and our admissions team is here to help every step of the way — 24 hours a day, 7 days a week.",
  path: "/referral-process",
});

export default function ReferralProcessPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          title="Referral Process"
          subtitle="Referring a patient to Palm Grove is simple, and our admissions team is here to help every step of the way — 24 hours a day, 7 days a week."
          image={heroImg}
          alt="A care coordinator taking a referral call"
          imageRight
        />
        <ReferralIntake />
        <ReferralSteps />
        <ReferralPartners />
      </main>
      <Footer />
    </>
  );
}
