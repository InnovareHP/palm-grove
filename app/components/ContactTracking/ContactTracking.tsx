"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";
import { siteConfig } from "@/app/lib/site";

// Only our own lines count as leads; crisis hotlines and fax are left out.
const leadPhones = new Set([
  siteConfig.phones.main.href,
  siteConfig.phones.intake.href,
]);

// One delegated listener covers every phone/email link on every page.
export function ContactTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;
      if (leadPhones.has(href)) {
        sendGAEvent("event", "phone_call", {
          phone_number: href.slice(4),
          page_path: location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", { page_path: location.pathname });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
