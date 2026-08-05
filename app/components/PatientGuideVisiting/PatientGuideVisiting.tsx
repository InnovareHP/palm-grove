import classes from "./PatientGuideVisiting.module.css";

const hours = [
  { day: "Monday – Friday", time: "5:00pm – 7:00pm" },
  { day: "Saturday – Sunday", time: "1:00pm – 4:00pm" },
  { day: "Holidays", time: "By Arrangement" },
];

export function PatientGuideVisiting() {
  return (
    <section className="pgSection pgSectionMist">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.content}>
          <p className="pgEyebrow">Visiting</p>
          <h2 className="pgTitle">Visiting hours &amp; guidelines</h2>
          <p className="pgLead">
            Family involvement supports recovery. Designated visiting hours help
            us balance connection with the structure and rest our patients need.
            Please call ahead to confirm hours and any current guidelines.
          </p>
          <p className="pgLead">
            All visitors check in at the front desk. For everyone&apos;s safety,
            certain items are not permitted on the unit — our staff will gladly
            help with any questions.
          </p>
        </div>

        <div className={classes.card}>
          <h3 className={classes.cardTitle}>General Visiting Hours</h3>
          <ul className={classes.rows}>
            {hours.map((entry) => (
              <li key={entry.day} className={classes.row}>
                <span className={classes.day}>{entry.day}</span>
                <span className={classes.time}>{entry.time}</span>
              </li>
            ))}
          </ul>
          <p className={classes.note}>
            Hours are illustrative — please confirm with our team.
          </p>
        </div>
      </div>
    </section>
  );
}
