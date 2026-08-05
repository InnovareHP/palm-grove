import classes from "./OurFocusMissionVision.module.css";

export function OurFocusMissionVision() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <h2 className="pgTitle">Mission and Vision</h2>
        </div>

        <div className={classes.grid}>
          <div className={classes.card}>
            <h3 className={classes.label}>Our Mission</h3>
            <p className={classes.text}>
              Palm Grove Health Center is dedicated to being a trusted
              psychiatric provider offering compassionate, comprehensive care to
              seniors — treating every psychological, behavioral, physical, and
              social need with dignity and respect.
            </p>
          </div>

          <div className={`${classes.card} ${classes.cardDark}`}>
            <h3 className={classes.label}>Our Vision</h3>
            <p className={classes.text}>
              To be recognized as a leading senior psychiatric provider —
              differentiated by discovery, innovation, and compassionate,
              patient- and family-centered care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
