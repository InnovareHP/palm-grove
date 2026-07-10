import { IconDownload } from "@tabler/icons-react";
import classes from "./PriceTransparencyContent.module.css";

const INFO_SECTIONS = [
  {
    title: "Personalized Cost Estimates",
    text: "Every patient's care is unique. If you would like a personalized estimate based on your treatment needs and insurance coverage, please contact our admissions team before your visit.",
  },
  {
    title: "Insurance & Payment Information",
    text: "Palm Grove works with many insurance providers and can help patients and families understand available coverage, benefits, and payment options before admission.",
  },
  {
    title: "Patient Rights & Privacy",
    text: "We are committed to protecting every patient's privacy while providing transparent billing information, respectful care, and access to financial resources when available.",
  },
];

const CHARGE_FILES = [
  {
    title: "Machine-Readable File",
    description:
      "A downloadable file containing standard charges for hospital services in accordance with federal transparency requirements.",
    href: "#",
  },
  {
    title: "Shoppable Services",
    description:
      "A consumer-friendly list of common hospital services that can be scheduled in advance.",
    href: "#",
  },
];

export function PriceTransparencyContent() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <span className={classes.badge}>Price Transparency</span>
        <h1 className={classes.title}>Palm Grove Health Center</h1>

        <div className={classes.details}>
          <p className={classes.detailItem}>
            <strong className={classes.detailLabel}>Address:</strong> 150
            Village Crossing Court, St. Augustine, Florida 32084
          </p>
          <p className={classes.detailItem}>
            <strong className={classes.detailLabel}>Phone:</strong> +1 XXX XXX
            XXX
          </p>
          <p className={classes.detailItem}>
            <strong className={classes.detailLabel}>Website:</strong> (Insert
            Website)
          </p>
        </div>

        <div className={classes.panel}>
          <p className={classes.text}>
            Palm Grove is committed to providing clear and accessible
            information about the cost of care. We support hospital price
            transparency requirements by making standard charge information
            available to help patients, families, and referral partners make
            informed healthcare decisions.
          </p>
          <p className={classes.text}>
            Our pricing information includes standard charges for hospital
            services, as required by applicable regulations. These files are
            intended to improve transparency and may not reflect your
            individual financial responsibility or out-of-pocket costs.
          </p>
          <p className={classes.text}>
            For questions about coverage, insurance, or payment options, our
            team is available to help you better understand your estimated
            costs before treatment begins.
          </p>
          <p className={classes.text}>
            <strong className={classes.detailLabel}>Note:</strong> Standard
            charges are estimates and may vary based on your individual
            treatment plan, insurance coverage, and clinical needs.
          </p>
        </div>

        <div className={classes.headingRow}>
          <h2 className={classes.heading}>Standard Charge Files</h2>
          <div className={classes.rule} aria-hidden="true" />
        </div>

        <div className={classes.cards}>
          {CHARGE_FILES.map((file) => (
            <article key={file.title} className={classes.card}>
              <h3 className={classes.cardTitle}>{file.title}</h3>
              <p className={classes.cardText}>{file.description}</p>
              <a href={file.href} className={classes.download} download>
                <IconDownload size={16} stroke={1.8} />
                Download
              </a>
            </article>
          ))}
        </div>

        {INFO_SECTIONS.map((section) => (
          <div key={section.title} className={classes.infoBlock}>
            <div className={classes.headingRow}>
              <h2 className={classes.heading}>{section.title}</h2>
              <div className={classes.rule} aria-hidden="true" />
            </div>
            <p className={classes.text}>{section.text}</p>
          </div>
        ))}

        <div className={classes.infoBlock}>
          <div className={classes.headingRow}>
            <h2 className={classes.heading}>Contact Information</h2>
            <div className={classes.rule} aria-hidden="true" />
          </div>
          <p className={classes.text}>
            For questions regarding pricing, insurance verification, or
            billing, please contact:
          </p>
          <div className={classes.contactBox}>
            <p className={classes.detailItem}>
              <strong className={classes.detailLabel}>Phone:</strong> +1 XXX
              XXX XXX
            </p>
            <p className={classes.detailItem}>
              <strong className={classes.detailLabel}>Email:</strong>{" "}
              youremail@domain.com
            </p>
            <p className={classes.detailItem}>
              <strong className={classes.detailLabel}>Hours:</strong>{" "}
              Monday&ndash;Friday | 8:00 AM &ndash; 5:00 PM
            </p>
          </div>
        </div>

        <div className={classes.infoBlock}>
          <div className={classes.headingRow}>
            <h2 className={classes.heading}>Learn More</h2>
            <div className={classes.rule} aria-hidden="true" />
          </div>
          <p className={classes.text}>
            We encourage patients and families to learn more about healthcare
            pricing and insurance coverage before receiving care. If you have
            questions about billing or financial responsibilities, our team is
            available to provide guidance and answer your questions.
          </p>
        </div>
      </div>
    </section>
  );
}
