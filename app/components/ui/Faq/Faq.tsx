import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Faq.module.css";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  defaultOpen?: number;
};

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
