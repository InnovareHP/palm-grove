import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Faq.module.css";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  /** Index of the entry that starts expanded. */
  defaultOpen?: number;
};

/**
 * Disclosure list built on <details>, so it works without client-side JS and
 * stays keyboard accessible.
 */
export function Faq({ items, defaultOpen = 0 }: FaqProps) {
  return (
    <div className={classes.list}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className={classes.item}
          open={index === defaultOpen}
        >
          <summary className={classes.summary}>
            {item.question}
            <IconChevronDown size={16} stroke={2} className={classes.chevron} />
          </summary>
          <p className={classes.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
