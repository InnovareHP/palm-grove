import classes from "./TherapyPrograms.module.css";

function IconIndividual() {
  return (
    <svg className={classes.icon} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="var(--pg-green-dark)" />
      <circle cx="18.5" cy="14.5" r="3.8" fill="none" stroke="#ffffff" strokeWidth="1.8" />
      <path
        d="M11.5 28c1.4-4 4-5.7 7-5.7 1.2 0 2.3.2 3.3.8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M25.6 29.2s-3.1-2-3.1-4a1.75 1.75 0 013.1-1.1 1.75 1.75 0 013.1 1.1c0 2-3.1 4-3.1 4z"
        fill="#ffffff"
      />
    </svg>
  );
}

function IconFamily() {
  return (
    <svg className={classes.icon} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="var(--pg-green-dark)" />
      <path
        d="M20 29.5s-8-4.9-8-10.3a4.6 4.6 0 018-3.1 4.6 4.6 0 018 3.1c0 5.4-8 10.3-8 10.3z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="17.6" cy="18" r="1.6" fill="#ffffff" />
      <circle cx="22.4" cy="18" r="1.6" fill="#ffffff" />
      <path
        d="M15.2 23.2c.6-1.6 1.5-2.3 2.4-2.3s1.8.7 2.4 2.3"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 23.2c.6-1.6 1.5-2.3 2.4-2.3s1.8.7 2.4 2.3"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconRecreation() {
  return (
    <svg className={classes.icon} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="var(--pg-green-dark)" />
      <circle cx="19" cy="19" r="8" fill="none" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="16.2" cy="17.2" r="1.2" fill="#ffffff" />
      <path
        d="M20.8 16.8q1.3 1.1 2.6 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.8 21.4c.9 1.1 2 1.6 3.2 1.6 1.1 0 2.2-.5 3.1-1.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M26.4 29.4s-2.9-1.9-2.9-3.7a1.6 1.6 0 012.9-1 1.6 1.6 0 012.9 1c0 1.8-2.9 3.7-2.9 3.7z"
        fill="#ffffff"
      />
    </svg>
  );
}

function IconGroup() {
  return (
    <svg className={classes.icon} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="var(--pg-green-dark)" />
      <circle cx="20" cy="13.5" r="2.8" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <path
        d="M15.8 22.4c.9-2.9 2.5-4.1 4.2-4.1s3.3 1.2 4.2 4.1"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12.8" cy="20.2" r="2.3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      <path
        d="M9 28.3c.8-2.5 2.2-3.6 3.8-3.6 1.1 0 2.1.5 2.9 1.6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="27.2" cy="20.2" r="2.3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      <path
        d="M31 28.3c-.8-2.5-2.2-3.6-3.8-3.6-1.1 0-2.1.5-2.9 1.6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const PROGRAMS = [
  {
    title: "Individual Therapy",
    description:
      "One-on-one sessions focused on emotional well-being, treatment goals, coping strategies, and recovery.",
    Icon: IconIndividual,
  },
  {
    title: "Family Therapy",
    description:
      "Education, guidance, and involvement that help families better understand the treatment process and support recovery.",
    Icon: IconFamily,
  },
  {
    title: "Recreation Therapy",
    description:
      "Purposeful activities that promote social engagement, cognitive stimulation, emotional wellness, and overall quality of life.",
    Icon: IconRecreation,
  },
  {
    title: "Group Therapy",
    description:
      "Therapeutic group sessions that encourage connection, communication, emotional support, and skill development.",
    Icon: IconGroup,
  },
];

export function TherapyPrograms() {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Personalized Therapy Programs</h2>
      <div className={classes.cards}>
        {PROGRAMS.map(({ title, description, Icon }) => (
          <div key={title} className={classes.card}>
            <Icon />
            <h3 className={classes.cardTitle}>{title}</h3>
            <p className={classes.cardText}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
