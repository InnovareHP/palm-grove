import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ProgramDetail } from "@/app/components/ProgramDetail/ProgramDetail";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Multidisciplinary Care Team",
  description:
    "Our care team includes psychiatrists, nurse practitioners, physicians, nurses, social workers, psychologists, and more working together to deliver coordinated care.",
  path: "/treatment-services/multidisciplinary-care-team",
});

const INTRO = [
  "Team includes psychiatrists, nurse practitioners, physicians, nurses, social workers, psychologists, dietitians, activity therapists, clinical pharmacists, discharge planners, and mental health technicians.",
];

export default function MultidisciplinaryCareTeamPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ProgramDetail title="Multidisciplinary Care Team" intro={INTRO} />
      </main>
      <Footer />
    </>
  );
}
