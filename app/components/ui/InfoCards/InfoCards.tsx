import classes from "./InfoCards.module.css";

export type InfoCard = {
  title: string;
  text: string;
};

type InfoCardsProps = {
  items: InfoCard[];
  columns?: 2 | 3;
};

/** Grid of white cards with a serif heading and a short paragraph. */
export function InfoCards({ items, columns = 3 }: InfoCardsProps) {
  return (
    <ul className={`${classes.grid} ${columns === 2 ? classes.cols2 : ""}`}>
      {items.map((item) => (
        <li key={item.title} className={`pgCard ${classes.card}`}>
          <h3 className={classes.title}>{item.title}</h3>
          <p className={classes.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
