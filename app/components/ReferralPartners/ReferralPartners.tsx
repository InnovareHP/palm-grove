import { IconClock24, IconPhone } from "@tabler/icons-react";
import { siteConfig } from "@/app/lib/site";
import { CheckList } from "../ui/CheckList/CheckList";
import { Button } from "../ui/Button/Button";
import classes from "./ReferralPartners.module.css";

const referrers = [
  "Hospitals & emergency departments",
  "Physicians & primary care providers",
  "Skilled nursing & assisted living facilities",
  "Case managers & social workers",
  "Home health agencies",
  "Patients & family members",
];

const { intake } = siteConfig.phones;

export function ReferralPartners() {
  return (
    <section className="pgSection pgSectionMist">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.content}>
          <p className="pgEyebrow">Who can refer</p>
          <h2 className="pgTitle">Partners in care</h2>
          <p className="pgLead">
            We welcome referrals from a wide range of sources and coordinate
            closely with each to ensure a safe transition of care.
          </p>
          <CheckList items={referrers} />
          <div className={classes.note}>
            <p className={classes.noteText}>
              Patients and family members are also welcome to reach out
              directly. There is no need for a physician referral to begin the
              conversation.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <h2 className={classes.cardTitle}>Make a Referral</h2>
          <p className={classes.cardLead}>
            Call our intake team any time, day or night. We&apos;ll gather the
            details securely by phone and guide you through next steps.
          </p>

          <a className={classes.intake} href={intake.href}>
            <span className={classes.intakeIcon}>
              <IconClock24 aria-hidden size={26} stroke={1.6} />
            </span>
            <span>
              <span className={classes.intakeLabel}>{intake.label}</span>
              <span className={classes.intakeNumber}>{intake.display}</span>
            </span>
          </a>

          <Button
            href={intake.href}
            leftIcon={<IconPhone aria-hidden size={20} stroke={1.8} />}
            block
          >
            Call {intake.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
