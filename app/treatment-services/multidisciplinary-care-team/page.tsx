import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ProgramDetail } from "@/app/components/ProgramDetail/ProgramDetail";

export const metadata = {
  title: "Multidisciplinary Care Team — Palm Grove Health Center",
  description:
    "Our care team includes psychiatrists, nurse practitioners, physicians, nurses, social workers, psychologists, and more working together to deliver coordinated care.",
};

const INTRO = [
  "Team includes psychiatrists, nurse practitioners, physicians, nurses, social workers, psychologists, dietitians, activity therapists, clinical pharmacists, discharge planners, and mental health technicians.",
];

export default function MultidisciplinaryCareTeamPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramDetail title="Multidisciplinary Care Team" intro={INTRO} />
      </main>
      <Footer />
    </>
  );
}
