import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { TrustedPartner } from "./components/TrustedPartner/TrustedPartner";
import { Programs } from "./components/Programs/Programs";
import { CareTeam } from "./components/CareTeam/CareTeam";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";
import { Partnering } from "./components/Partnering/Partnering";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedPartner />
        <Programs />
        <CareTeam />
        <WhyChoose />
        <Partnering />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
