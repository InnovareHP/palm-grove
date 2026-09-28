import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { BrochureViewer } from "@/app/components/BrochureViewer/BrochureViewer";
import { Button } from "@/app/components/ui/Button/Button";
import { siteConfig } from "@/app/lib/site";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Brochure",
  description:
    "Read the Palm Grove Health Center brochure online, or download the printable PDF to share with patients, families, and referral partners.",
  path: "/brochure",
});

export default function BrochurePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Print & share"
          title="Palm Grove brochure"
          subtitle="A printable overview of our programs, admissions process, and what to expect. Read both sides below, or download the PDF to print and share."
          actions={
            <Button
              href={siteConfig.brochure.pdf}
              download={siteConfig.brochure.filename}
              variant="outline"
            >
              Download Brochure
            </Button>
          }
        />
        <BrochureViewer />
      </main>
      <Footer />
    </>
  );
}
