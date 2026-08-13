export type CrisisResource = {
  title: string;
  value: string;
  href?: string;
  note?: string;
};

/** National lines, shown on the resources page and in the patient guide. */
export const crisisResources: CrisisResource[] = [
  {
    title: "988 Suicide Crisis Lifeline",
    value: "Call or text 988",
    href: "tel:988",
  },
  {
    title: "Veterans Crisis Line",
    value: "1-800-273-8255 (Press 1)",
    href: "tel:+18002738255",
  },
  {
    title: "SAMHSA National Helpline",
    value: "1-800-662-4357",
    href: "tel:+18006624357",
  },
  {
    title: "National Institute of Mental Health",
    value: "Visit Website",
    href: "https://www.nimh.nih.gov",
  },
  { title: "NAMI", value: "1-800-950-6264", href: "tel:+18009506264" },
  {
    title: "Alzheimer's Association",
    value: "1-800-272-3900",
    href: "tel:+18002723900",
  },
];
