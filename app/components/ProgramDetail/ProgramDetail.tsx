import Link from "next/link";
import { siteUrl } from "@/app/lib/seo";
import { JsonLd } from "../JsonLd/JsonLd";
import classes from "./ProgramDetail.module.css";

type ProgramSection = {
  heading: string;
  text: string;
};

type ProgramDetailProps = {
  title: string;
  path: string;
  intro: string[];
  sections?: ProgramSection[];
};

export function ProgramDetail({
  title,
  path,
  intro,
  sections,
}: ProgramDetailProps) {
  return (
    <section className={classes.section}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Treatment & Services",
              item: `${siteUrl}/treatment-services`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: title,
              item: `${siteUrl}${path}`,
            },
          ],
        }}
      />
      <Link href="/treatment-services" className={classes.backLink}>
        <span aria-hidden="true">← </span>Back to Treatment &amp; Services
      </Link>
      <div className={classes.detail}>
        <h1 className={classes.detailTitle}>{title}</h1>
        <div className={classes.introBox}>
          {intro.map((paragraph) => (
            <p key={paragraph} className={classes.introText}>
              {paragraph}
            </p>
          ))}
        </div>
        {sections?.map((section) => (
          <div key={section.heading} className={classes.subSection}>
            <h2 className={classes.ruleHeading}>{section.heading}</h2>
            <p className={classes.detailText}>{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
