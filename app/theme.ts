import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Brand forest-green sampled from the Palm Grove logo / hero design.
const palmGreen: MantineColorsTuple = [
  "#eef4ea",
  "#dde7d2",
  "#bcd1a8",
  "#99ba7b",
  "#7ca755",
  "#699b3d",
  "#5e9433",
  "#4b7d28", // primary (filled buttons)
  "#417022",
  "#345a17",
];

export const theme = createTheme({
  primaryColor: "palmGreen",
  primaryShade: { light: 7, dark: 7 },
  colors: { palmGreen },
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  headings: {
    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
    fontWeight: "600",
  },
  defaultRadius: "md",
});
