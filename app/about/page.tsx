import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { AboutHero } from "@/app/components/AboutHero/AboutHero";
import { AboutMissionVision } from "@/app/components/AboutMissionVision/AboutMissionVision";
import { AboutFacility } from "@/app/components/AboutFacility/AboutFacility";
import { AboutGallery } from "@/app/components/AboutGallery/AboutGallery";

export const metadata = {
  title: "About Us — Palm Grove Health Center",
  description:
    "Our mission, vision, and values reflect our commitment to delivering exceptional psychiatric care for older adults.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutMissionVision />
        <AboutFacility />
        <AboutGallery />
      </main>
      <Footer />
    </>
  );
}
