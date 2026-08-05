import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import classes from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  subtitle: string;
  /** Omit for the centred, photo-less banner. */
  image?: StaticImageData;
  alt?: string;
  eyebrow?: string;
  actions?: ReactNode;
  /** Places the photo on the right instead of the left. */
  imageRight?: boolean;
  /** "card" insets the photo as a rounded card instead of bleeding to the edge. */
  imageVariant?: "bleed" | "card";
  /** CSS object-position for the photo, e.g. "center top" to keep faces in frame. */
  imagePosition?: string;
};

/**
 * Interior page banner: full-bleed photo on the left, headline on the right,
 * sitting on the brand gradient. Shared by every page except Home. Without an
 * `image` it renders the centred variant used by Treatment & Services.
 */
export function PageHero({
  title,
  subtitle,
  image,
  alt = "",
  eyebrow,
  actions,
  imageRight = false,
  imageVariant = "bleed",
  imagePosition,
}: PageHeroProps) {
  if (!image) {
    return (
      <section className={classes.hero}>
        <div className={`pgContainer ${classes.centered}`}>
          {eyebrow ? <p className={classes.eyebrow}>{eyebrow}</p> : null}
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.subtitle}>{subtitle}</p>
          {actions ? <div className={classes.actions}>{actions}</div> : null}
        </div>
      </section>
    );
  }

  return (
    <section className={classes.hero}>
      <div
        className={[
          classes.grid,
          imageRight ? classes.imageRight : "",
          imageVariant === "card" ? classes.cardMedia : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={classes.media}>
          <Image
            src={image}
            alt={alt}
            className={classes.image}
            style={
              imagePosition ? { objectPosition: imagePosition } : undefined
            }
            placeholder="blur"
            priority
            fill
            sizes="(max-width: 992px) 100vw, 40vw"
          />
        </div>

        <div className={classes.content}>
          {eyebrow ? <p className={classes.eyebrow}>{eyebrow}</p> : null}
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.subtitle}>{subtitle}</p>
          {actions ? <div className={classes.actions}>{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
