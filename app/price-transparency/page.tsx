import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PriceTransparencyContent } from "@/app/components/PriceTransparencyContent/PriceTransparencyContent";

export const metadata = {
  title: "Price Transparency — Palm Grove Health Center",
  description:
    "Standard charge information for Palm Grove Health Center — machine-readable files and shoppable services to help patients, families, and referral partners make informed healthcare decisions.",
};

export default function PriceTransparencyPage() {
  return (
    <>
      <Header />
      <main>
        <PriceTransparencyContent />
      </main>
      <Footer />
    </>
  );
}
