import classes from "./OurFocusMissionVision.module.css";

export function OurFocusMissionVision() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className="pgIntro">
          <h2 className={`pgTitle pgTitleLg ${classes.title}`}>
            Mission and Vision
          </h2>
        </div>

        <div className={classes.grid}>
          <div className={classes.card}>
            <h3 className={classes.label}>Our Mission</h3>
            <p className={classes.text}>
              To provide older adults with safe, specialized psychiatric care,
              and to help them return home with the stability and support they
              need.
            </p>
          </div>

          <div className={`${classes.card} ${classes.cardDark}`}>
            <h3 className={classes.label}>Our Vision</h3>
            <p className={classes.text}>
              A community where older adults can get specialized psychiatric
              care when they need it, close to home and with their families
              involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
