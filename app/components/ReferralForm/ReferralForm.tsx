"use client";

import { useState, type FormEvent } from "react";
import { CheckList } from "../ui/CheckList/CheckList";
import fields from "../ui/FormFields/FormFields.module.css";
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

const REFERRAL_EMAIL = "referrals@palmgrovehealthcenter.com";

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
            <div className={fields.fields}>
              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-name">
                  Referring Contact Name{" "}
                  <span className={fields.required}>*</span>
                </label>
                <input
                  id="referral-name"
                  name="name"
                  className={fields.input}
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-org">
                  Organization/Facility
                </label>
                <input
                  id="referral-org"
                  name="organization"
                  className={fields.input}
                  placeholder="Hospital, Facility Name"
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-phone">
                  Contact Number <span className={fields.required}>*</span>
                </label>
                <input
                  id="referral-phone"
                  name="phone"
                  type="tel"
                  className={fields.input}
                  placeholder="+1 (000) 000-0000"
                  required
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-email">
                  Email
                </label>
                <input
                  id="referral-email"
                  name="email"
                  type="email"
                  className={fields.input}
                  placeholder="you@organization.com"
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-initials">
                  Patient Initials <span className={fields.required}>*</span>
                </label>
                <input
                  id="referral-initials"
                  name="initials"
                  className={fields.input}
                  placeholder="e.g. J.D."
                  required
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="referral-program">
                  Program of Interest <span className={fields.required}>*</span>
                </label>
                <select
                  id="referral-program"
                  name="program"
                  className={fields.select}
                  required
                  defaultValue={programs[0]}
                >
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${fields.field} ${fields.full}`}>
                <label className={fields.label} htmlFor="referral-notes">
                  Reason for Referral/Notes{" "}
                  <span className={fields.required}>*</span>
                </label>
                <textarea
                  id="referral-notes"
                  name="notes"
                  className={fields.textarea}
                  placeholder="Briefly describe the situation and any immediate concerns."
                  required
                />
              </div>
            </div>

            <button type="submit" className={fields.submit}>
              Submit Referral
            </button>

            {sent ? (
              <p className={fields.status} aria-live="polite">
                Your email client should now be open with the referral details.
                If it did not open, email {REFERRAL_EMAIL} directly.
              </p>
            ) : null}

            <p className={fields.disclaimer}>
              Please do not include full protected health information in this
              form. Our team will collect clinical details securely by phone.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
