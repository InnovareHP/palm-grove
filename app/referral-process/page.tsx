import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ReferralHero } from "@/app/components/ReferralHero/ReferralHero";
import { ReferralIntake } from "@/app/components/ReferralIntake/ReferralIntake";
import { ReferralCommitment } from "@/app/components/ReferralCommitment/ReferralCommitment";
import { ReferralInsurance } from "@/app/components/ReferralInsurance/ReferralInsurance";
import { ReferralWhyChoose } from "@/app/components/ReferralWhyChoose/ReferralWhyChoose";
import { ReferralCta } from "@/app/components/ReferralCta/ReferralCta";

export const metadata = {
  title: "Referral Process — Palm Grove Health Center",
  description:
    "Partnering with providers to deliver specialized senior psychiatric care. Simple referrals with responsive communication and coordinated admissions.",
};

export default function ReferralProcessPage() {
  return (
    <>
      <Header />
      <main>
        <ReferralHero />
        <ReferralIntake />
        <ReferralCommitment />
        <ReferralInsurance />
        <ReferralWhyChoose />
        <ReferralCta />
      </main>
      <Footer />
    </>
  );
}
