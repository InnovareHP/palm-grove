import classes from "./ContinuumOfCare.module.css";

const STEPS = [
  {
    title: "Assessment & Stabilization",
    description:
      "Receive a comprehensive psychiatric evaluation, medication management, and personalized care in a safe, structured environment focused on stabilization and recovery.",
  },
  {
    title: "Personalized Treatment",
    description:
      "Patients participate in evidence-based therapies, family support, and multidisciplinary care focused on achieving treatment goals and improving overall well-being.",
  },
  {
    title: "Discharge & Continued Care",
    description:
      "Transition with confidence through coordinated discharge planning, follow-up services, and community resources that support continued recovery and well-being.",
  },
];

export function ContinuumOfCare() {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <h2 className={classes.title}>Continuum of Care</h2>
        <ol className={classes.cards}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={classes.card}>
              <span className={classes.stepNumber} aria-hidden="true">
                {index + 1}
              </span>
              <h3 className={classes.cardTitle}>{step.title}</h3>
              <p className={classes.cardText}>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className={classes.closing}>
          From admission through recovery, Palm Grove works alongside
          patients, families, and healthcare providers to ensure every
          individual receives compassionate, coordinated care and the support
          needed for lasting success.
        </p>
      </div>
    </section>
  );
}
