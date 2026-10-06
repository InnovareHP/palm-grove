import Image from "next/image";
import partneringImg from "@/public/figma/home/partnering.jpg";
import { Button } from "../ui/Button/Button";
import classes from "./Partnering.module.css";

export function Partnering() {
  return (
    <section className="pgSection pgBrand">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.media}>
          <Image
            src={partneringImg}
            alt="Four smiling clinicians in scrubs and white coats"
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
            We accept referrals from hospitals, physicians, skilled nursing and
            assisted living communities, and case managers. Our admissions team
            is available 24 hours a day, 7 days a week, to review referrals and
            coordinate placement.
          </p>
          <div className={classes.actions}>
            <Button href="/referral-process" variant="outline">
              Send a Referral
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
