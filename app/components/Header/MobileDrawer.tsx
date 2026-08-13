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

/**
 * Off-canvas navigation for tablet and phone widths. Owns its own escape/scroll
 * behaviour; the header only tells it whether it is open.
 */
export function MobileDrawer({
  opened,
  onClose,
  links,
  drawerRef,
}: MobileDrawerProps) {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  // The link handler covers taps, but the route can also change from the back
  // button or a link inside the page — close on any real navigation. Compared
  // against a ref rather than depending on `opened`, which would slam the
  // drawer shut on the render that opens it.
  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;
    onClose();
  }, [pathname, onClose]);

  // Close on Escape and lock the page behind the drawer while it is open.
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
      {/* Pointer affordance only — Escape and the close button handle keyboard
          dismissal, so this stays out of the accessibility tree. */}
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
