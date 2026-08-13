"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { isNavLinkActive, navLinks, siteConfig } from "@/app/lib/site";
import logo from "@/public/figma/home/logo-nav.png";
import { Button } from "../ui/Button/Button";
import { CrisisBanner } from "./CrisisBanner";
import classes from "./Header.module.css";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpened(false);
    burgerRef.current?.focus();
  }, []);

  return (
    <>
      <CrisisBanner />

      <header className={classes.header}>
        <div className={`pgContainer ${classes.inner}`}>
          <Link
            href="/"
            className={classes.logoLink}
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src={logo}
              alt={siteConfig.name}
              className={classes.logo}
              priority
            />
          </Link>

          <nav className={classes.desktopNav} aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classes.link}
                aria-current={
                  isNavLinkActive(pathname, link.href) ? "page" : undefined
                }
              >
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

      <MobileDrawer
        opened={opened}
        onClose={close}
        links={navLinks}
        drawerRef={drawerRef}
      />
    </>
  );
}
