import { contactMethods } from "./ContactMethods.data";
import classes from "./ContactMethods.module.css";

export function ContactMethods() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <ul className={classes.grid}>
          {contactMethods.map(({ label, value, href, hint, Icon }) => (
            <li key={label} className={classes.item}>
              <span className={classes.icon}>
                <Icon size={26} stroke={1.6} />
              </span>
              <div>
                <h2 className={classes.label}>{label}</h2>
                {href ? (
                  <a className={classes.value} href={href}>
                    {value}
                  </a>
                ) : (
                  <span className={classes.value}>{value}</span>
                )}
                {hint ? <span className={classes.hint}>{hint}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
