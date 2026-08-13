"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/app/lib/site";
import { CheckList } from "../ui/CheckList/CheckList";
import {
  FieldGrid,
  FormDisclaimer,
  FormStatus,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
} from "../ui/FormFields/FormFields";
import classes from "./ReferralForm.module.css";

const referrers = [
  "Hospitals & emergency departments",
  "Physicians & primary care providers",
  "Skilled nursing & assisted living facilities",
  "Case managers & social workers",
  "Home health agencies",
  "Patients & family members",
];

const programs = [
  "Inpatient",
  "Intensive Outpatient (IOP)",
  "Family Support & Education",
  "Not sure yet",
];

const REFERRAL_EMAIL = siteConfig.emails.referrals;

export function ReferralForm() {
  const [sent, setSent] = useState(false);

  // No backend is wired up, so the submission is handed to the visitor's mail
  // client, pre-addressed to the intake inbox.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Referring contact: ${data.get("name")}`,
      `Organization/facility: ${data.get("organization") || "—"}`,
      `Contact number: ${data.get("phone")}`,
      `Email: ${data.get("email") || "—"}`,
      `Patient initials: ${data.get("initials")}`,
      `Program of interest: ${data.get("program")}`,
      "",
      "Reason for referral / notes:",
      `${data.get("notes")}`,
    ].join("\n");

    window.location.href = `mailto:${REFERRAL_EMAIL}?subject=${encodeURIComponent(
      "Patient referral",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

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
          <h2 className={classes.cardTitle}>Submit a Referral</h2>
          <p className={classes.cardLead}>
            We welcome referrals from a wide range of sources and coordinate
            closely with each to ensure a safe transition of care.
          </p>

          <form onSubmit={handleSubmit}>
            <FieldGrid>
              <TextField
                id="referral-name"
                name="name"
                label="Referring Contact Name"
                placeholder="Full Name"
                required
              />
              <TextField
                id="referral-org"
                name="organization"
                label="Organization/Facility"
                placeholder="Hospital, Facility Name"
              />
              <TextField
                id="referral-phone"
                name="phone"
                type="tel"
                label="Contact Number"
                placeholder="+1 (000) 000-0000"
                required
              />
              <TextField
                id="referral-email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@organization.com"
              />
              <TextField
                id="referral-initials"
                name="initials"
                label="Patient Initials"
                placeholder="e.g. J.D."
                required
              />
              <SelectField
                id="referral-program"
                name="program"
                label="Program of Interest"
                options={programs}
                defaultValue={programs[0]}
                required
              />
              <TextAreaField
                id="referral-notes"
                name="notes"
                label="Reason for Referral/Notes"
                placeholder="Briefly describe the situation and any immediate concerns."
                required
              />
            </FieldGrid>

            <SubmitButton>Submit Referral</SubmitButton>

            {sent ? (
              <FormStatus>
                Your email client should now be open with the referral details.
                If it did not open, email {REFERRAL_EMAIL} directly.
              </FormStatus>
            ) : null}

            <FormDisclaimer>
              Please do not include full protected health information in this
              form. Our team will collect clinical details securely by phone.
            </FormDisclaimer>
          </form>
        </div>
      </div>
    </section>
  );
}
