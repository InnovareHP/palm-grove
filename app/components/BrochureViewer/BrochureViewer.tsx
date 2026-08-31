import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import page1Img from "@/public/figma/brochure/page-1.png";
import page2Img from "@/public/figma/brochure/page-2.png";
import { siteConfig } from "@/app/lib/site";
import { Button } from "../ui/Button/Button";
import classes from "./BrochureViewer.module.css";

type BrochurePage = {
  image: StaticImageData;
  /** Full-size view opened when the spread is tapped — the webp derivative
   *  built by `pnpm brochure`, ~85% lighter than the PNG it comes from. */
  href: string;
  label: string;
  alt: string;
};

/**
 * The brochure is a two-sided letter-landscape tri-fold. Each side is one wide
 * spread, so at phone widths the type inside it is too small to read: the
 * spreads link out to the full-size export, where the browser's own pinch-zoom
 * takes over. The PDF stays the thing to download and print.
 */
const PAGES: BrochurePage[] = [
  {
    image: page1Img,
    href: "/figma/brochure/page-1.webp",
    label: "Side one — our approach, about us, and how to reach us",
    alt: "Brochure side one: our four-step approach, who we are and our mission, and the 24/7 intake, main, fax, and email contact details.",
  },
  {
    image: page2Img,
    href: "/figma/brochure/page-2.webp",
    label: "Side two — services, conditions treated, and the referral process",
    alt: "Brochure side two: the four treatment programs, why families choose Palm Grove, the conditions we treat, and the four-step referral process.",
  },
];

export function BrochureViewer() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className={classes.pages}>
          {PAGES.map((page, index) => (
            <figure className={classes.page} key={page.href}>
              <a
                className={classes.frame}
                href={page.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={page.image}
                  alt={page.alt}
                  className={classes.image}
                  placeholder="blur"
                  quality={90}
                  priority={index === 0}
                  sizes="(max-width: 1280px) 100vw, 1088px"
                />
              </a>
              <figcaption className={classes.caption}>
                <span className={classes.captionLabel}>{page.label}</span>
                <span className={classes.captionHint}>
                  Tap to open full size in a new tab
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* The spreads are images, so a screen reader gets the summary in their
            alt text and nothing more. These two pages carry the same content as
            running copy. */}
        <p className={classes.fallback}>
          Prefer to read it as text? Everything in the brochure also lives on{" "}
          <Link className={classes.fallbackLink} href="/treatment-services">
            Treatment &amp; Services
          </Link>{" "}
          and{" "}
          <Link className={classes.fallbackLink} href="/referral-process">
            Referral Process
          </Link>
          .
        </p>

        <div className={classes.actions}>
          <Button
            href={siteConfig.brochure.pdf}
            download={siteConfig.brochure.filename}
          >
            Download the PDF
          </Button>
          <Button href="/contact" variant="outline">
            Request Printed Copies
          </Button>
        </div>
      </div>
    </section>
  );
}
