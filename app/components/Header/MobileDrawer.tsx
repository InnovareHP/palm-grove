"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type RefObject, useEffect, useRef } from "react";
import { homeLink, isNavLinkActive, type NavLink } from "@/app/lib/site";
import { Button } from "../ui/Button/Button";
import classes from "./MobileDrawer.module.css";

type MobileDrawerProps = {
  opened: boolean;
  onClose: () => void;
  links: NavLink[];
  drawerRef: RefObject<HTMLDivElement | null>;
};

export function MobileDrawer({
  opened,
  onClose,
  links,
  drawerRef,
}: MobileDrawerProps) {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!opened) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    drawerRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [opened, onClose, drawerRef]);

  return (
    <>
      <div
        className={`${classes.overlay} ${opened ? classes.overlayOpen : ""}`}
        onClick={onClose}
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
        <div className={classes.head}>
          <p className={classes.title}>Menu</p>
          <button
            type="button"
            className={classes.close}
            aria-label="Close navigation"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <nav className={classes.nav} aria-label="Mobile">
          {[homeLink, ...links].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classes.link}
              aria-current={
                isNavLinkActive(pathname, link.href) ? "page" : undefined
              }
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/referral-process"
          variant="solid"
          block
          className={classes.cta}
        >
          Refer a Patient
        </Button>
      </div>
    </>
  );
}
