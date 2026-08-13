import Image from "next/image";
import { IconArrowRight, IconPhone, IconUserCheck } from "@tabler/icons-react";
import { siteConfig } from "@/app/lib/site";
import heroImg from "@/public/figma/home/hero.png";
import { Button } from "../ui/Button/Button";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.content}>
          <p className={classes.eyebrow}>
            Geriatric Psychiatry • St. Augustine FL
          </p>
          <h1 className={classes.title}>
            Compassionate psychiatric care for older adults
          </h1>
          <p className={classes.subtitle}>
            Helping seniors and their families find safety, healing, and hope.
            Palm Grove Health Center provides specialized inpatient and
            intensive outpatient behavioral health care designed for the unique
            needs of older adults.
          </p>

          <div className={classes.actions}>
            <Button
              href="/referral-process"
              variant="outline"
              leftIcon={<IconUserCheck size={20} stroke={1.8} />}
            >
              Refer a Patient
            </Button>
            <Button
              href="/treatment-services"
              variant="ghostLight"
              rightIcon={<IconArrowRight size={20} stroke={1.8} />}
            >
              Explore Our Services
            </Button>
          </div>

          <a className={classes.intake} href={siteConfig.phones.intake.href}>
            <span className={classes.intakeIcon}>
              <IconPhone size={24} stroke={1.6} />
            </span>
            <span>
              <span className={classes.intakeLabel}>
                24/7 Intake &amp; Referral Line
              </span>
              <span className={classes.intakeNumber}>
                {siteConfig.phones.intake.display}
              </span>
            </span>
          </a>
        </div>

        <div className={classes.media}>
          <Image
            src={heroImg}
            alt="An older adult walking on the beach in St. Augustine"
            className={classes.image}
            placeholder="blur"
            priority
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 992px) 620px, (max-width: 1280px) 45vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}
