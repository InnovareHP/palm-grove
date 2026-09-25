"use client";

import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import popupImg from "@/public/figma/home/opening-popup.jpg";
import classes from "./OpeningPopup.module.css";

const DISMISSED_KEY = "pg-opening-popup-dismissed";

function wasDismissed() {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    sessionStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // Storage blocked (private mode etc.) — popup simply shows again next visit.
  }
}

export function OpeningPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!wasDismissed()) setMounted(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!mounted || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted]);

  function close() {
    dialogRef.current?.close();
  }

  // Fires for the close button, Escape, and backdrop clicks alike.
  function handleClose() {
    rememberDismissed();
    setMounted(false);
  }

  if (!mounted) return null;

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click is a pointer shortcut; <dialog> closes on Escape natively.
    <dialog
      ref={dialogRef}
      className={classes.dialog}
      aria-labelledby="opening-popup-title"
      aria-describedby="opening-popup-body"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button
        type="button"
        className={classes.close}
        aria-label="Close announcement"
        onClick={close}
      >
        <IconX size={22} stroke={2} />
      </button>

      <div className={classes.panel}>
        <div className={classes.content}>
          <p className={classes.eyebrow}>Opening January 2027</p>
          <h2 id="opening-popup-title" className={classes.title}>
            A New Chapter in Care Begins Here
          </h2>
          <div id="opening-popup-body" className={classes.body}>
            <p>
              Palm Grove Health Center is opening its doors in January 2027,
              bringing compassionate, specialized psychiatric care for older
              adults to St. Augustine.
            </p>
            <p>
              Our team is preparing to welcome patients and families with the
              dignity, respect, and personalized attention they deserve.
            </p>
          </div>
        </div>

        <div className={classes.media}>
          <Image
            src={popupImg}
            alt="Smiling older adults holding a Palm Grove Health Center sign outdoors"
            className={classes.image}
            placeholder="blur"
            fill
            sizes="(max-width: 899px) 640px, 45vw"
          />
        </div>
      </div>
    </dialog>
  );
}
