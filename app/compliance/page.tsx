import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ComplianceHero } from "@/app/components/ComplianceHero/ComplianceHero";
import { ComplianceContent } from "@/app/components/ComplianceContent/ComplianceContent";

export const metadata = {
  title: "Compliance, Legal, and Policies — Palm Grove Health Center",
  description:
    "Our commitment to safety, compliance, and transparency for patients, families, and visitors — medical disclaimer, nondiscrimination notice, price transparency, and HIPAA privacy practices.",
};

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main>
        <ComplianceHero />
        <ComplianceContent />
      </main>
      <Footer />
    </>
  );
}
