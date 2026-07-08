import Link from "next/link";
import classes from "./ProgramDetail.module.css";

type ProgramSection = {
  heading: string;
  text: string;
};

type ProgramDetailProps = {
  title: string;
  intro: string[];
  sections?: ProgramSection[];
};

export function ProgramDetail({ title, intro, sections }: ProgramDetailProps) {
  return (
    <section className={classes.section}>
      <Link href="/treatment-services" className={classes.backLink}>
        ← Back to Treatment &amp; Services
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
