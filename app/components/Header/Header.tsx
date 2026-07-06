"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "@/public/Logo/palm-grove-logo.png";
import classes from "./Header.module.css";

const NAV_LINKS = [
  { label: "Our Focus", href: "/our-focus" },
  { label: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
  { label: "Treatment & Services", href: "/treatment-services" },
  { label: "Referral Process", href: "/referral-process" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
  { label: "Price Transparency", href: "/price-transparency" },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Link
          href="/"
          className={classes.logoLink}
          aria-label="Palm Grove Health Center home"
        >
          <Image
            src={logo}
            alt="Palm Grove Health Center"
            className={classes.logo}
            priority
          />
        </Link>

        <nav className={classes.desktopNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          aria-label="Toggle navigation"
          size="sm"
        />
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="80%"
        title="Menu"
        hiddenFrom="md"
      >
        <Stack gap="md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classes.drawerLink}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </header>
  );
}
