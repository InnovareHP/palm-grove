import Image from "next/image";
import type { ReactNode } from "react";
import iconMark from "@/public/figma/brand/icon-mark.png";
import classes from "./CtaBand.module.css";

type CtaBandProps = {
  title: string;
  lead?: string;
  variant?: "dark" | "light";
  children?: ReactNode;
};

export function CtaBand({
  title,
  lead,
  variant = "dark",
  children,
}: CtaBandProps) {
  const light = variant === "light";

  return (
    <section
      className={`pgSection ${classes.band} ${light ? classes.light : ""}`}
    >
      {light ? (
        <div className={classes.mark} aria-hidden="true">
          <Image
            src={iconMark}
            alt=""
            className={classes.markImage}
            sizes="464px"
          />
        </div>
      ) : null}
      <div className={`pgContainer ${classes.inner}`}>
        <h2 className={classes.title}>{title}</h2>
        {lead ? <p className={classes.lead}>{lead}</p> : null}
        {children ? <div className={classes.actions}>{children}</div> : null}
      </div>
    </section>
  );
}
