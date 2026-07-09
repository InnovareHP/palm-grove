import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ResourcesList } from "@/app/components/ResourcesList/ResourcesList";

export const metadata = {
  title: "Resources — Palm Grove Health Center",
  description:
    "Trusted organizations and hotlines offering support for mental health, substance abuse, and crisis intervention.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesList />
      </main>
      <Footer />
    </>
  );
}
