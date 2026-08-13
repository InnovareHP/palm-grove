import {
  IconClock24,
  IconMail,
  IconPhone,
  IconPrinter,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { mailto, siteConfig } from "@/app/lib/site";

export type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  hint?: string;
  Icon: ComponentType<IconProps>;
};

const { phones, emails } = siteConfig;

export const contactMethods: ContactMethod[] = [
  {
    label: phones.main.label,
    value: phones.main.display,
    href: phones.main.href,
    Icon: IconPhone,
  },
  {
    label: phones.intake.label,
    value: phones.intake.display,
    href: phones.intake.href,
    hint: "(Available around the clock)",
    Icon: IconClock24,
  },
  { label: phones.fax.label, value: phones.fax.display, Icon: IconPrinter },
  {
    label: "Email",
    value: emails.info,
    href: mailto(emails.info),
    Icon: IconMail,
  },
];
