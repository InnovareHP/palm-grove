import Image from "next/image";
import partneringImg from "@/public/figma/home/partnering.png";
import { Button } from "../ui/Button/Button";
import classes from "./Partnering.module.css";

export function Partnering() {
  return (
    <section className={`pgSection ${classes.section}`}>
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.media}>
          <Image
            src={partneringImg}
            alt="Palm Grove Health Center clinical team"
            className={classes.image}
            fill
            sizes="(max-width: 992px) 100vw, (max-width: 1280px) 42vw, 490px"
          />
        </div>

        <div className={classes.content}>
          <p className="pgEyebrow pgEyebrowLight">Work with us</p>
          <h2 className="pgTitle pgTitleLight">
            Healthcare provider partnerships
          </h2>
          <p className="pgLead pgLeadLight">
            We partner with hospitals, physicians, skilled nursing facilities,
            and case managers to ensure safe, seamless transitions of care. Our
            admissions team is available 24 hours a day, 7 days a week.
          </p>
          <div className={classes.actions}>
            <Button href="/referral-process" variant="outline">
              Start a Referral
            </Button>
            <Button href="/contact" variant="glass">
              Submit a Partnership Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
