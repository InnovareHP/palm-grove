import classes from "./StepCards.module.css";

export type Step = {
  title: string;
  text: string;
};

type StepCardsProps = {
  steps: Step[];
  tone?: "white" | "tinted";
};

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
