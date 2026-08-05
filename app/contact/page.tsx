import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { PageHero } from "@/app/components/ui/PageHero/PageHero";
import { ContactMethods } from "@/app/components/ContactMethods/ContactMethods";
import { ContactUs } from "@/app/components/ContactUs/ContactUs";

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
        />
        <ContactMethods />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
