import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";
import { ContactUs } from "@/app/components/ContactUs/ContactUs";

export const metadata = {
  title: "Contact Us — Palm Grove Health Center",
  description:
    "We're here to help. Reach out to the Palm Grove Health Center team for more information.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
