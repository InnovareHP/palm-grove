import Image from "next/image";
import { IconArrowRight, IconPhone, IconUserCheck } from "@tabler/icons-react";
import { siteConfig } from "@/app/lib/site";
import heroBg from "@/public/figma/home/hero-bg.jpg";
import heroFade from "@/public/figma/home/hero-fade.png";
import heroPeople from "@/public/figma/home/hero-people.png";
import { Button } from "../ui/Button/Button";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <section className={classes.hero}>
      <Image
        src={heroBg}
        alt=""
        className={classes.background}
        placeholder="blur"
        preload
        fill
        sizes="100vw"
      />

      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.heading}>
          <p className={classes.eyebrow}>
            Older Adult Psychiatry • Pasadena, CA
          </p>
          <h1 className={classes.title}>
            Specialized and compassionate psychiatric care for older adults
          </h1>
        </div>

        <div className={classes.body}>
          <div className={classes.content}>
            <p className={classes.subtitle}>
              {siteConfig.shortName} offers inpatient and intensive outpatient
              psychiatric care that helps older adults and their families find
              stability and renewed hope.
            </p>

            <div className={classes.actions}>
              <Button
                href="/referral-process"
                variant="solidBordered"
                leftIcon={<IconUserCheck aria-hidden size={20} stroke={1.75} />}
              >
                Refer a Patient
              </Button>
              <Button
                href="/treatment-services"
                variant="ghost"
                rightIcon={
                  <IconArrowRight aria-hidden size={20} stroke={1.75} />
                }
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          <a className={classes.intake} href={siteConfig.phones.intake.href}>
            <span className={classes.intakeIcon}>
              <IconPhone aria-hidden size={22} stroke={1.5} />
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
      </div>

      <div className={classes.people}>
        <Image
          src={heroPeople}
          alt="Two older adults smiling with their adult children"
          className={classes.peopleImage}
          preload
          sizes="(max-width: 992px) 90vw, 664px"
        />
      </div>

      <Image src={heroFade} alt="" className={classes.fade} sizes="100vw" />
    </section>
  );
}
