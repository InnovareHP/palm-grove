"use client";

import { useState, type FormEvent } from "react";
import fields from "../ui/FormFields/FormFields.module.css";
import classes from "./ContactUs.module.css";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6110.260822666423!2d-81.36018602287344!3d29.91820392453811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e428617387a88b%3A0x2146425e367e82fe!2s150%20Village%20Crossing%20Ct%2C%20St.%20Augustine%2C%20FL%2032084%2C%20USA!5e1!3m2!1sen!2sph!4v1783341279084!5m2!1sen!2sph";

const CONTACT_EMAIL = "info@palmgrovehealthcenter.com";

export function ContactUs() {
  const [sent, setSent] = useState(false);

  // No backend is wired up, so the message is handed to the visitor's mail
  // client, pre-addressed to the main inbox.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Contact number: ${data.get("phone")}`,
      `Email: ${data.get("email") || "—"}`,
      "",
      "How we can help:",
      `${data.get("message") || "—"}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="pgSection pgSectionMist">
      <div className={`pgContainer ${classes.inner}`}>
        <div className={classes.content}>
          <p className="pgEyebrow">Visit us</p>
          <h2 className="pgTitle">Palm Grove Health Center</h2>
          <p className={classes.address}>
            150 Village Crossing Ct. St. Augustine, FL 32084
          </p>

          <div className={classes.map}>
            <iframe
              className={classes.mapFrame}
              src={MAP_SRC}
              title="Map showing Palm Grove Health Center in St. Augustine, Florida"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={classes.badges}>
            <div className={`${classes.badge} ${classes.badgeDark}`}>
              <h3 className={classes.badgeLabel}>Office hours</h3>
              <p className={classes.badgeValue}>Mon–Fri 8:00am – 5:00pm</p>
            </div>
            <div className={classes.badge}>
              <h3 className={classes.badgeLabel}>Admissions</h3>
              <p className={classes.badgeValue}>Available 24 / 7</p>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <h2 className={classes.cardTitle}>Send us a message</h2>
          <p className={classes.cardLead}>
            We&apos;ll respond as soon as possible. For urgent needs, please
            call our 24/7 line.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={`${fields.fields} ${fields.single}`}>
              <div className={fields.field}>
                <label className={fields.label} htmlFor="contact-name">
                  Name <span className={fields.required}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  className={fields.input}
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="contact-phone">
                  Contact Number <span className={fields.required}>*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className={fields.input}
                  placeholder="+1 (000) 000-0000"
                  required
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={fields.input}
                  placeholder="you@organization.com"
                />
              </div>

              <div className={fields.field}>
                <label className={fields.label} htmlFor="contact-message">
                  How We Can Help
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`${fields.textarea} ${fields.textareaTall}`}
                  placeholder="Tell us a little about what you need."
                />
              </div>
            </div>

            <button type="submit" className={fields.submit}>
              Send Message
            </button>

            {sent ? (
              <p className={fields.status} aria-live="polite">
                Your email client should now be open with your message. If it
                did not open, email {CONTACT_EMAIL} directly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
