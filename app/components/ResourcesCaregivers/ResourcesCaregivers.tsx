import { IconArrowUpRight } from "@tabler/icons-react";
import classes from "./ResourcesCaregivers.module.css";

const organizations = [
  {
    title: "NAMI",
    text: "National Alliance on Mental Illness — education and family support.",
    href: "https://www.nami.org",
  },
  {
    title: "Alzheimer's Association",
    text: "24/7 helpline and resources for dementia caregivers.",
    href: "https://www.alz.org",
  },
  {
    title: "National Institute of Mental Health",
    text: "Trusted information on mental health conditions.",
    href: "https://www.nimh.nih.gov",
  },
  {
    title: "Family Caregiver Alliance",
    text: "Practical tools and support for caregivers.",
    href: "https://www.caregiver.org",
  },
];

export function ResourcesCaregivers() {
  return (
    <section className="pgSection pgSectionMist">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">For families &amp; caregivers</p>
          <h2 className="pgTitle">Understanding and support</h2>
          <p className="pgLead">
            Caring for an older adult with a mental health condition can be
            challenging. These organizations offer trusted education and
            support.
          </p>
        </div>

        <div className={classes.grid}>
          {organizations.map((org) => (
            <a
              key={org.title}
              href={org.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`pgCard ${classes.card}`}
            >
              <span>
                <h3 className={classes.title}>{org.title}</h3>
                <p className={classes.text}>{org.text}</p>
              </span>
              <IconArrowUpRight
                size={40}
                stroke={1.5}
                className={classes.arrow}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
