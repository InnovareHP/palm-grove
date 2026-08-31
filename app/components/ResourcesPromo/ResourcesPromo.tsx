import { Button } from "../ui/Button/Button";
import { siteConfig } from "@/app/lib/site";
import classes from "./ResourcesPromo.module.css";

export function ResourcesPromo() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className={classes.grid}>
          <div className={`${classes.card} ${classes.dark}`}>
            <h2 className={classes.title}>Palm Grove brochure</h2>
            <p className={classes.text}>
              A printable overview of our programs, admissions process, and what
              to expect — ideal for sharing with patients and families.
            </p>
            <div className={classes.actions}>
              <Button
                href={siteConfig.brochure.pdf}
                download={siteConfig.brochure.filename}
                variant="outline"
              >
                Download Brochure
              </Button>
              {/* Reading it should not cost a download: the brochure page
                  shows both spreads on screen and offers the PDF again. */}
              <Button href={siteConfig.brochure.page} variant="ghostLight">
                Read It Online
              </Button>
            </div>
          </div>

          <div className={`${classes.card} ${classes.light}`}>
            <h2 className={classes.title}>Make a Referral</h2>
            <p className={classes.text}>
              Ready to refer a patient? Start online or call our 24/7 intake and
              referral line to speak with our admissions team.
            </p>
            <div className={classes.actions}>
              <Button href="/referral-process">Refer a Patient</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
