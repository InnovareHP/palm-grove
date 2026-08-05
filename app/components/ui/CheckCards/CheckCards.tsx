import Image from "next/image";
import checkIcon from "@/public/figma/shared/check.svg";
import classes from "./CheckCards.module.css";

type CheckCardsProps = {
  items: string[];
  columns?: 2 | 3;
};

/** Grid of tinted cards, each prefixed with the brand check badge. */
export function CheckCards({ items, columns = 3 }: CheckCardsProps) {
  return (
    <ul className={`${classes.grid} ${columns === 2 ? classes.cols2 : ""}`}>
      {items.map((item) => (
        <li key={item} className={classes.item}>
          <Image
            src={checkIcon}
            alt=""
            width={30}
            height={30}
            className={classes.icon}
          />
          <p className={classes.label}>{item}</p>
        </li>
      ))}
    </ul>
  );
}
