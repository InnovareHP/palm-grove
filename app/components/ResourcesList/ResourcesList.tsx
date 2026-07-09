import classes from "./ResourcesList.module.css";

type Resource = {
  title: string;
  phone?: string;
  website: string;
};

const RESOURCES: Resource[] = [
  {
    title: "National Suicide Prevention Lifeline",
    phone: "Dial 988",
    website: "https://988lifeline.org",
  },
  {
    title: "Veterans Crisis Line",
    phone: "1-800-273-8255 (Press 1)",
    website: "https://www.veteranscrisisline.net",
  },
  {
    title: "Domestic Violence Hotline",
    phone: "1-800-799-7233",
    website: "https://thehotline.org",
  },
  {
    title: "National Institute of Mental Health (NIMH)",
    website: "https://www.nimh.nih.gov",
  },
  {
    title: "Substance Abuse & Mental Health Services (SAMHSA)",
    phone: "1-800-662-4357",
    website: "https://www.samhsa.gov",
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    phone: "1-800-950-NAMI (6264)",
    website: "https://www.nami.org",
  },
];

export function ResourcesList() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h1 className={classes.title}>Resources</h1>
        <p className={classes.subtitle}>
          We&apos;ve compiled a list of trusted organizations and hotlines
          offering support for mental health, substance abuse, crisis
          intervention, and more. You are not alone &mdash; help is always
          available.
        </p>

        <ul className={classes.cards}>
          {RESOURCES.map((resource) => (
            <li key={resource.title} className={classes.card}>
              <h2 className={classes.cardTitle}>{resource.title}</h2>
              {resource.phone && (
                <p className={classes.detail}>
                  <span className={classes.label}>Phone:</span> {resource.phone}
                </p>
              )}
              <p className={classes.detail}>
                <span className={classes.label}>Website:</span>{" "}
                <a
                  className={classes.link}
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.website}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
