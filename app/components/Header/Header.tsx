"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/figma/home/logo-nav.png";
import { Button } from "../ui/Button/Button";
import classes from "./Header.module.css";

const NAV_LINKS = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Referrals", href: "/referral-process" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

const DRAWER_LINKS = [
  ...NAV_LINKS,
  { label: "Price Transparency", href: "/price-transparency" },
];

export function Header() {
  const [opened, setOpened] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape and lock the page behind the drawer while it is open.
  useEffect(() => {
    if (!opened) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpened(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    drawerRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [opened]);

  function close() {
    setOpened(false);
    burgerRef.current?.focus();
  }

  return (
    <>
      <div className={classes.banner}>
        <div className={`pgContainer ${classes.bannerInner}`}>
          <p>
            In a crisis? Call or text{" "}
            <a className={classes.bannerLink} href="tel:988">
              <span className={classes.bannerStrong}>988</span>
            </a>{" "}
            or dial{" "}
            <a className={classes.bannerLink} href="tel:911">
              <span className={classes.bannerStrong}>911</span>
            </a>
          </p>
          <div className={classes.bannerContacts}>
            <p>
              Main:{" "}
              <a className={classes.bannerLink} href="tel:+19040000000">
                <span className={classes.bannerStrong}>(904) 000-0000</span>
              </a>
            </p>
            <p>
              24/7 Intake:{" "}
              <a className={classes.bannerLink} href="tel:+18000000000">
                <span className={classes.bannerStrong}>(800) 000-0000</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <header className={classes.header}>
        <div className={`pgContainer ${classes.inner}`}>
          <Link
            href="/"
            className={classes.logoLink}
            aria-label="Palm Grove Health Center home"
          >
            <Image
              src={logo}
              alt="Palm Grove Health Center"
              className={classes.logo}
              priority
            />
          </Link>

          <nav className={classes.desktopNav} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={classes.link}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            href="/referral-process"
            variant="solidBordered"
            className={classes.cta}
          >
            Refer a Patient
          </Button>

          <button
            type="button"
            ref={burgerRef}
            className={`${classes.burger} ${opened ? classes.burgerOpen : ""}`}
            aria-label={opened ? "Close navigation" : "Open navigation"}
            aria-expanded={opened}
            aria-controls="mobile-nav"
            onClick={() => setOpened((value) => !value)}
          >
            <span className={classes.burgerBox} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Pointer affordance only — Escape and the close button handle keyboard
          dismissal, so this stays out of the accessibility tree. */}
      <div
        className={`${classes.overlay} ${opened ? classes.overlayOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        ref={drawerRef}
        className={`${classes.drawer} ${opened ? classes.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        tabIndex={-1}
        inert={!opened}
      >
        <div className={classes.drawerHead}>
          <p className={classes.drawerTitle}>Menu</p>
          <button
            type="button"
            className={classes.drawerClose}
            aria-label="Close navigation"
            onClick={close}
          >
            ×
          </button>
        </div>

        <nav className={classes.drawerNav} aria-label="Mobile">
          {DRAWER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classes.drawerLink}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/referral-process"
          variant="solid"
          block
          className={classes.drawerCta}
        >
          Refer a Patient
        </Button>
      </div>
    </>
  );
}
