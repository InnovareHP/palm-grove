import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { ContactMethods } from "@/app/components/ContactMethods/ContactMethods";
import { ContactUs } from "@/app/components/ContactUs/ContactUs";
/* No dedicated Contact hero shot exists yet; this consultation photo matches
   the "talk to our team" message and is not used anywhere else on the page. */
import heroImg from "@/public/figma/home/program-4.png";

export const metadata = {
  title: "Contact Us — Palm Grove Health Center",
  description:
    "We're here to help. Reach out to our team for admissions, questions, or more information about Palm Grove Health Center.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="We're here to help. Reach out to our team for admissions, questions, or more information about Palm Grove Health Center."
          image={heroImg}
          alt="A clinician talking through care options with an older adult and their family"
        />
        <ContactMethods />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
