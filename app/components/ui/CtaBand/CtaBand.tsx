import type { ReactNode } from "react";
import classes from "./CtaBand.module.css";

type CtaBandProps = {
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** Full-width gradient call-to-action band used at the foot of interior pages. */
export function CtaBand({ title, lead, children }: CtaBandProps) {
  return (
    <section className={`pgSection ${classes.band}`}>
      <div className={`pgContainer ${classes.inner}`}>
        <h2 className={classes.title}>{title}</h2>
        {lead ? <p className={classes.lead}>{lead}</p> : null}
        {children ? <div className={classes.actions}>{children}</div> : null}
      </div>
    </section>
  );
}
