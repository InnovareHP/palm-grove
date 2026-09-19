import Link from "next/link";
import type { ReactNode } from "react";
import classes from "./Button.module.css";

export type ButtonVariant =
  | "solid"
  | "solidBordered"
  | "outline"
  | "ghostLight"
  | "glass";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  block?: boolean;
  className?: string;
  newTab?: boolean;
  download?: boolean | string;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  leftIcon,
  rightIcon,
  block = false,
  className,
  newTab = false,
  download,
  ...rest
}: ButtonProps) {
  const cn = [
    classes.button,
    classes[variant],
    block ? classes.block : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon ? <span className={classes.icon}>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className={classes.icon}>{rightIcon}</span> : null}
    </>
  );

  const isInternal = href.startsWith("/") || href.startsWith("#");
  const opensNewTab = newTab || href.startsWith("http");

  if (isInternal && !opensNewTab && download === undefined) {
    return (
      <Link href={href} className={cn} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn}
      {...(opensNewTab ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...(download === undefined ? {} : { download })}
      {...rest}
    >
      {content}
    </a>
  );
}
