import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import classes from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image?: StaticImageData;
  alt?: string;
  eyebrow?: string;
  actions?: ReactNode;
  imageRight?: boolean;
  imageVariant?: "bleed" | "card";
  imagePosition?: string;
};

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
            sizes={
              imageVariant === "card"
                ? "(max-width: 640px) 100vw, (max-width: 992px) 620px, 460px"
                : "(max-width: 640px) 100vw, (max-width: 992px) 620px, 40vw"
            }
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
