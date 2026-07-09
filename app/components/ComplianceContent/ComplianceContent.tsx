import Link from "next/link";
import classes from "./ComplianceContent.module.css";

const NO_AUTH_DISCLOSURES = [
  {
    title: "As Required by Law and Law Enforcement",
    text: "Palm Grove Health Center may use or disclose PHI when required by law, in response to court orders or to report crimes or other law enforcement purposes.",
  },
  {
    title: "For Public Health Activities and Public Health Risks",
    text: "Palm Grove Health Center may disclose PHI to officials in charge of public health matters, such as reporting disease, child abuse, medication reactions, or product defects.",
  },
  {
    title: "For Health Oversight Activities",
    text: "PHI may be disclosed for audits, investigations, inspections, or licensure actions.",
  },
  {
    title: "Coroners, Medical Examiners, and Funeral Directors",
    text: "PHI may be disclosed to identify a decedent or determine cause of death.",
  },
  {
    title: "Organ, Eye, and Tissue Donation",
    text: "PHI may be released to facilitate organ, eye, or tissue donation and transplantation.",
  },
  {
    title: "Research",
    text: "Under certain circumstances, Palm Grove Health Center may use and disclose PHI for medical research purposes.",
  },
  {
    title: "To Avoid a Serious Threat to Health or Safety",
    text: "Palm Grove Health Center may disclose PHI to prevent or lessen a serious threat to a person’s or public’s health or safety.",
  },
  {
    title: "Specialized Government Functions",
    text: "Palm Grove Health Center may disclose PHI of military personnel or veterans, or for national security and intelligence purposes.",
  },
  {
    title: "Workers' Compensation",
    text: "PHI may be disclosed to comply with workers' compensation laws.",
  },
  {
    title: "Health-Related Benefits and Services",
    text: "PHI may be used to inform you of treatment alternatives or other health-related benefits or services.",
  },
  {
    title: "Disclosures to You or for HIPAA Compliance Investigations",
    text: "Palm Grove Health Center may disclose PHI to you, your representative, or to the U.S. Department of Health and Human Services for HIPAA compliance investigations.",
  },
];

const PATIENT_RIGHTS = [
  {
    title: "Restriction Requests",
    text: "You may request restrictions on use and disclosure of your PHI. Palm Grove Health Center is not required to agree but will honor approved restrictions except in emergencies.",
  },
  {
    title: "Confidential Communications",
    text: "You may request communications at specific locations or by specific means. Requests must be in writing to the Privacy Officer.",
  },
  {
    title: "Access and Copies",
    text: "You may inspect or obtain copies of your PHI by submitting a written request. Palm Grove Health Center may charge reasonable fees for copying or mailing.",
  },
  {
    title: "Amendments",
    text: "You may request corrections to your PHI by writing to the Medical Records Department.",
  },
  {
    title: "Accounting of Disclosures",
    text: "You may request a list of PHI disclosures made in the past six (6) years, excluding specific categories.",
  },
  {
    title: "Paper Copy",
    text: "You have the right to a paper copy of this notice even if received electronically.",
  },
  {
    title: "Complaints",
    text: "You may file a complaint with Palm Grove Health Center’s Privacy Officer or the U.S. Department of Health and Human Services without retaliation.",
  },
];

export function ComplianceContent() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <article id="medical-disclaimer" className={classes.card}>
          <h2 className={classes.cardTitle}>Medical Disclaimer</h2>
          <p className={classes.text}>
            The information on this website is provided for general
            informational and educational purposes only and is not intended as a
            substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical
            condition. Never disregard professional medical advice or delay
            seeking it because of something you have read on this website. If
            you are experiencing a medical or psychiatric emergency, call 911
            immediately.
          </p>
        </article>

        <article id="notice-of-nondiscrimination" className={classes.card}>
          <h2 className={classes.cardTitle}>Notice of Nondiscrimination</h2>
          <p className={classes.text}>
            Palm Grove Health Center complies with applicable federal civil
            rights laws and does not discriminate in the provision of services
            to an individual based on the individual&apos;s race, color,
            national origin, age, disability, creed, religion, ethnicity,
            handicap, sex, gender identity, and sexual orientation.
          </p>
        </article>

        <article id="price-transparency" className={classes.card}>
          <h2 className={classes.cardTitle}>Price Transparency</h2>
          <p className={classes.text}>
            We support price transparency for the patients and families we
            serve. View our disclaimer, standard charges, and shoppable services
            on the dedicated Price Transparency page.
          </p>
          <p className={classes.text}>
            <Link href="/price-transparency" className={classes.link}>
              Visit the Price Transparency page &rsaquo;
            </Link>
          </p>
        </article>

        <article id="hipaa" className={classes.card}>
          <h2 className={classes.cardTitle}>
            Notice of Privacy Practices (HIPAA)
          </h2>
          <p className={classes.text}>
            This notice describes how medical information about you may be used
            and disclosed and how you can get access to this information. Please
            review it carefully. Palm Grove Health Center will be referred to in
            this Notice of Privacy Practices (&ldquo;Notice&rdquo;) as
            &ldquo;Palm Grove&rdquo;. This Notice is given to you by a Palm
            Grove facility to describe the ways in which Palm Grove may use and
            disclose your medical information (called &ldquo;protected health
            information&rdquo; or &ldquo;PHI&rdquo;) and to notify you of your
            rights with respect to PHI in the possession of Palm Grove Health
            Center. Palm Grove Health Center protects the privacy of PHI, which
            also is protected from disclosure by state and federal law. In
            certain circumstances, pursuant to this Notice, patient
            authorization or applicable laws and regulations, PHI can be used by
            Palm Grove Health Center or disclosed to other parties. Below are
            categories describing these uses and disclosures, along with some
            examples to help you better understand each category.
          </p>

          <h3 className={classes.subheading}>
            Uses and Disclosures for Treatment, Payment and Health Care
            Operations
          </h3>
          <p className={classes.text}>
            Palm Grove Health Center may use or disclose your PHI for the
            purposes of treatment, payment and health care operations, described
            in more detail below, without obtaining written authorization from
            you.
          </p>

          <h4 className={classes.subsubheading}>For Treatment:</h4>
          <p className={classes.text}>
            Palm Grove Health Center may use and disclose PHI in the course of
            providing, coordinating, or managing your medical treatment,
            including the disclosure of PHI for treatment activities at another
            healthcare facility. These types of uses and disclosures may take
            place between physicians, nurses, technicians, students, and other
            health care professionals who provide your health care services or
            are otherwise involved in your care. For example, if you are being
            treated by a primary care physician, that physician may need to
            use/disclose PHI to a specialist physician whom he or she consults
            regarding your condition, or to a nurse who is assisting in your
            care.
          </p>

          <h4 className={classes.subsubheading}>For Payment:</h4>
          <p className={classes.text}>
            Palm Grove Health Center may use and disclose PHI to collect payment
            for the health care services provided to you. For example, Palm
            Grove Health Center may need to give PHI to your health plan to be
            reimbursed for the services provided to you. Palm Grove Health
            Center may also disclose PHI to their business associates, such as
            billing companies, claims processing companies, and others that
            assist in processing health claims. Palm Grove Health Center may
            also disclose PHI to other health care providers and health plans
            for the payment activities of such providers or health plans.
          </p>

          <h4 className={classes.subsubheading}>For Health Care Operations:</h4>
          <p className={classes.text}>
            Palm Grove Health Center may use and disclose PHI as part of their
            operations, including for quality assessment and improvement, such
            as evaluating the treatment and services you receive and the
            performance of our staff in caring for you. Other activities include
            hospital training, underwriting activities, compliance and risk
            management activities, planning and development, and management and
            administration. Palm Grove Health Center may disclose PHI to
            doctors, nurses, technicians, students, attorneys, consultants,
            accountants, and others for review and learning purposes. These
            disclosures help make sure that Palm Grove Health Center is
            complying with all applicable laws and are continuing to provide
            health care to patients at a high level of quality. Palm Grove
            Health Center may also disclose PHI to other health care facilities
            plans for certain of their operations, including their quality
            assessment and improvement activities, credentialing and peer review
            activities, and health care fraud and abuse detection or compliance,
            provided that those other facilities and plans have, or have had in
            the past, a relationship with the patient who is the subject of the
            information.
          </p>

          <h4 className={classes.subsubheading}>
            For Sharing PHI Among Palm Grove Health Center and Professional
            Staff:
          </h4>
          <p className={classes.text}>
            Palm Grove Health Center works together with physicians and other
            care providers on their professional staff to provide medical
            services to you when you are a patient at a Palm Grove Health Center
            facility. Palm Grove Health Center and members of their respective
            professional staff will share PHI with each other as needed to
            perform their treatment, payment and health care operations
            activities.
          </p>

          <h3 className={classes.subheading}>
            Other Uses and Disclosures for Which Authorization Is Not Required
          </h3>
          <p className={classes.text}>
            In addition to using or disclosing PHI for treatment, payment and
            health care operations, Palm Grove Health Center may use and
            disclose PHI without your written authorization under the following
            circumstances:
          </p>
          <ul className={classes.list}>
            {NO_AUTH_DISCLOSURES.map((item) => (
              <li key={item.title} className={classes.listItem}>
                <strong className={classes.listLabel}>{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>

          <h4 className={classes.subsubheading}>
            Confidentiality of Alcohol &amp; Drug Abuse Records:
          </h4>
          <p className={classes.text}>
            Palm Grove Health Center may not disclose identifying information
            about a patient&apos;s participation in its programs unless you
            consent, a court order allows it, or disclosure is made in a medical
            emergency, for research, or audit purposes.
          </p>

          <h3 className={classes.subheading}>
            Uses and Disclosures to Which You May Object
          </h3>
          <p className={classes.text}>
            You may object to the inclusion of your information in a patient
            directory available to contacts you designate. You will receive a
            unique patient code for those contacts.
          </p>

          <h3 className={classes.subheading}>
            Other Uses and Disclosures of PHI for Which Authorization Is
            Required
          </h3>
          <p className={classes.text}>
            Other types of uses and disclosures of your PHI not described above
            will be made only with your written authorization, which you have
            the limited right to revoke in writing.
          </p>

          <h3 className={classes.subheading}>
            Regulatory Requirements and Your Rights
          </h3>
          <ul className={classes.list}>
            {PATIENT_RIGHTS.map((item) => (
              <li key={item.title} className={classes.listItem}>
                <strong className={classes.listLabel}>{item.title}:</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className={classes.text}>
            You also have the right to file a complaint with the Secretary of
            the Department of Health and Human Services at 200 Independence
            Avenue, S.E., Washington, DC 20201.
          </p>

          <div className={classes.contact}>
            <p className={classes.text}>
              If you have any questions about this notice, please contact:
            </p>
            <p className={classes.contactDetail}>
              Palm Grove Health Center Administrator
              <br />
              150 Village Crossing Court, St. Augustine, Florida 32084
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
