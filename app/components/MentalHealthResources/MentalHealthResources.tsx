import classes from "./MentalHealthResources.module.css";

export type CrisisResource = {
  title: string;
  value: string;
  href?: string;
  note?: string;
};

export const crisisResources: CrisisResource[] = [
  {
    title: "988 Suicide Crisis Lifeline",
    value: "Call or text 988",
    href: "tel:988",
  },
  {
    title: "Veterans Crisis Line",
    value: "1-800-273-8255 (Press 1)",
    href: "tel:+18002738255",
  },
  {
    title: "SAMHSA National Helpline",
    value: "1-800-662-4357",
    href: "tel:+18006624357",
  },
  {
    title: "National Institute of Mental Health",
    value: "Visit Website",
    href: "https://www.nimh.nih.gov",
  },
  { title: "NAMI", value: "1-800-950-6264", href: "tel:+18009506264" },
  {
    title: "Alzheimer's Association",
    value: "1-800-272-3900",
    href: "tel:+18002723900",
  },
];

type Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  items?: CrisisResource[];
  eyebrowMuted?: boolean;
};

export function MentalHealthResources({
  eyebrow = "Mental health resources",
  title = "Support for patients and families",
  lead = "If you or a loved one needs immediate help, these national resources are available around the clock.",
  items = crisisResources,
  eyebrowMuted = false,
}: Props) {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className={`pgEyebrow ${eyebrowMuted ? "pgEyebrowMuted" : ""}`}>
            {eyebrow}
          </p>
          <h2 className="pgTitle">{title}</h2>
          {lead ? <p className="pgLead">{lead}</p> : null}
        </div>

        <div className={classes.grid}>
          {items.map((resource) => {
            const content = (
              <>
                <h3 className={classes.title}>{resource.title}</h3>
                <span className={classes.value}>{resource.value}</span>
                {resource.note ? (
                  <span className={classes.note}>{resource.note}</span>
                ) : null}
              </>
            );

            if (!resource.href) {
              return (
                <div key={resource.title} className={classes.card}>
                  {content}
                </div>
              );
            }

            const isExternal = resource.href.startsWith("http");

            return (
              <a
                key={resource.title}
                href={resource.href}
                className={classes.card}
                {...(isExternal
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
