import classes from "./StepCards.module.css";

export type Step = {
  title: string;
  text: string;
};

type StepCardsProps = {
  steps: Step[];
  tone?: "white" | "tinted";
};

/** Numbered 01–04 cards used by the "our approach" / "how it works" sections. */
export function StepCards({ steps, tone = "white" }: StepCardsProps) {
  return (
    <ol
      className={`${classes.grid} ${tone === "tinted" ? classes.tinted : ""}`}
    >
      {steps.map((step, index) => (
        <li key={step.title} className={`pgCard ${classes.card}`}>
          <span className={classes.number}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={classes.title}>{step.title}</h3>
          <p className={classes.text}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
