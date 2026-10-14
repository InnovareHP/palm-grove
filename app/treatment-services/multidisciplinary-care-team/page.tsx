import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ProgramDetail } from "@/app/components/ProgramDetail/ProgramDetail";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Geriatric Psychiatry Care Team",
  description:
    "Meet Palm Grove's multidisciplinary team: psychiatrists, nurse practitioners, physicians, nurses, social workers, and psychologists for older adults.",
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
        <ProgramDetail
          title="Multidisciplinary Care Team"
          path="/treatment-services/multidisciplinary-care-team"
          intro={INTRO}
        />
      </main>
      <Footer />
    </>
  );
}
