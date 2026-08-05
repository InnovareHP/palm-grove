import Image from "next/image";
import checkIcon from "@/public/figma/shared/check.svg";
import classes from "./CheckList.module.css";

type CheckListProps = {
  items: string[];
  size?: "default" | "small";
  tone?: "default" | "light";
};

/** Vertical bullet list using the brand check badge. */
export function CheckList({
  items,
  size = "default",
  tone = "default",
}: CheckListProps) {
  const iconSize = size === "small" ? 24 : 30;

  return (
    <ul
      className={[
        classes.list,
        size === "small" ? classes.small : "",
        tone === "light" ? classes.light : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => (
        <li key={item} className={classes.item}>
          <Image
            src={checkIcon}
            alt=""
            width={iconSize}
            height={iconSize}
            className={classes.icon}
          />
          <p className={classes.label}>{item}</p>
        </li>
      ))}
    </ul>
  );
}
