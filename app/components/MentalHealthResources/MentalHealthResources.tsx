import {
  type CrisisResource,
  crisisResources,
} from "./MentalHealthResources.data";
import classes from "./MentalHealthResources.module.css";

type Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  items?: CrisisResource[];
  eyebrowMuted?: boolean;
  tinted?: boolean;
};

export function MentalHealthResources({
  eyebrow = "Mental health resources",
  title = "Support for patients and families",
  lead = "If you or a loved one needs immediate help, these national resources are available around the clock.",
  items = crisisResources,
  eyebrowMuted = false,
  tinted = false,
}: Props) {
  return (
    <section className={`pgSection ${tinted ? "pgSectionTinted" : ""}`}>
      <div className="pgContainer">
        <div className="pgIntro">
          <p className={`pgEyebrow ${eyebrowMuted ? "pgEyebrowMuted" : ""}`}>
            {eyebrow}
          </p>
          <h2 className="pgTitle">{title}</h2>
          {lead ? <p className="pgLead">{lead}</p> : null}
        </div>

        <ul className={`pgPlainList ${classes.grid}`}>
          {items.map((resource) => {
            const content = (
              <>
                <h3 className={classes.title}>{resource.title}</h3>
                <span className={classes.value}>{resource.value}</span>
                {resource.note ? (
                  <span className={classes.note}>{resource.note}</span>
                ) : null}
                {resource.href?.startsWith("http") ? (
                  <span className="pgSrOnly"> (opens in a new tab)</span>
                ) : null}
              </>
            );

            if (!resource.href) {
              return (
                <li key={resource.title}>
                  <div className={classes.card}>{content}</div>
                </li>
              );
            }

            const isExternal = resource.href.startsWith("http");

            return (
              <li key={resource.title}>
                <a
                  href={resource.href}
                  className={classes.card}
                  {...(isExternal
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {content}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
