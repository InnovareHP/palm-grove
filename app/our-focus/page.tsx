import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { OurFocusHero } from "@/app/components/OurFocusHero/OurFocusHero";
import { OurFocusExpertise } from "@/app/components/OurFocusExpertise/OurFocusExpertise";
import { OurFocusWhoWeServe } from "@/app/components/OurFocusWhoWeServe/OurFocusWhoWeServe";
import { OurFocusConditions } from "@/app/components/OurFocusConditions/OurFocusConditions";

export const metadata = {
  title: "Our Focus — Palm Grove Health Center",
  description:
    "Compassionate, personalized mental health care designed to support older adults, their families, and the healthcare professionals who care for them.",
};

export default function OurFocusPage() {
  return (
    <>
      <Header />
      <main>
        <OurFocusHero />
        <OurFocusExpertise />
        <OurFocusWhoWeServe />
        <OurFocusConditions />
      </main>
      <Footer />
    </>
  );
}
