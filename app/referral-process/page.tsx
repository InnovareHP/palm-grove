import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { ReferralIntake } from "@/app/components/ReferralIntake/ReferralIntake";
import { ReferralSteps } from "@/app/components/ReferralSteps/ReferralSteps";
import { ReferralForm } from "@/app/components/ReferralForm/ReferralForm";
import heroImg from "@/public/figma/referral/hero.png";

export const metadata = {
  title: "Referral Process — Palm Grove Health Center",
  description:
    "Referring a patient to Palm Grove is simple, and our admissions team is here to help every step of the way — 24 hours a day, 7 days a week.",
};

export default function ReferralProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Referral Process"
          subtitle="Referring a patient to Palm Grove is simple, and our admissions team is here to help every step of the way — 24 hours a day, 7 days a week."
          image={heroImg}
          alt="A care coordinator taking a referral call"
          imageRight
        />
        <ReferralIntake />
        <ReferralSteps />
        <ReferralForm />
      </main>
      <Footer />
    </>
  );
}
