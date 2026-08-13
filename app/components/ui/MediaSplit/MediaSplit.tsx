import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import classes from "./MediaSplit.module.css";

type MediaSplitProps = {
  title: string;
  paragraphs: string[];
  image: StaticImageData;
  alt: string;
  eyebrow?: string;
  /** Puts the photo on the right instead of the left. */
  reverse?: boolean;
  background?: "white" | "tinted" | "mist" | "dark";
  actions?: ReactNode;
  children?: ReactNode;
  /** Anchor target, for in-page jump links. */
  id?: string;
  /** CSS aspect-ratio for the photo, e.g. "478 / 539". */
  mediaAspect?: string;
  /**
   * CSS object-position for the photo, e.g. "center top". Worth setting on any
   * portrait photo whose faces sit high in the frame: the mobile layout crops
   * it to a landscape box, and the default centred crop takes the heads off.
   */
  imagePosition?: string;
};

/**
 * Two-column photo + copy block. The interior pages are built almost entirely
 * from this shape, so it lives in `ui` rather than being duplicated per page.
 */
export function MediaSplit({
  title,
  paragraphs,
  image,
  alt,
  eyebrow,
  reverse = false,
  background = "white",
  actions,
  children,
  id,
  mediaAspect,
  imagePosition,
}: MediaSplitProps) {
  const dark = background === "dark";

  return (
    <section
      id={id}
      className={`pgSection ${classes.section} ${classes[background]}`}
    >
      <div
        className={`pgContainer ${classes.inner} ${reverse ? classes.reverse : ""}`}
      >
        <div
          className={classes.media}
          style={
            mediaAspect
              ? ({ "--pg-media-aspect": mediaAspect } as React.CSSProperties)
              : undefined
          }
        >
          <Image
            src={image}
            alt={alt}
            className={classes.image}
            style={
              imagePosition ? { objectPosition: imagePosition } : undefined
            }
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 992px) 620px, (max-width: 1280px) 46vw, 520px"
          />
        </div>

        <div className={classes.content}>
          {eyebrow ? (
            <p className={`pgEyebrow ${dark ? "pgEyebrowLight" : ""}`}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className={`pgTitle ${dark ? "pgTitleLight" : ""}`}>{title}</h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={`pgLead ${dark ? "pgLeadLight" : ""}`}
            >
              {paragraph}
            </p>
          ))}
          {children}
          {actions ? <div className={classes.actions}>{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
