import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs";
import { CareTeam } from "./components/CareTeam/CareTeam";
import { WhyChoose } from "./components/WhyChoose/WhyChoose";
import { Partnering } from "./components/Partnering/Partnering";
import { MentalHealthResources } from "./components/MentalHealthResources/MentalHealthResources";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Programs />
        <CareTeam />
        <WhyChoose />
        <Partnering />
        <MentalHealthResources tinted />
      </main>
      <Footer />
    </>
  );
}
