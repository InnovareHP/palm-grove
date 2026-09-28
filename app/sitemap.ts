import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/treatment-services", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/treatment-services/inpatient-psychiatric-program",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/treatment-services/intensive-outpatient-program",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/treatment-services/multidisciplinary-care-team",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/referral-process", priority: 0.9, changeFrequency: "monthly" },
  { path: "/our-focus", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/patient-visitor-guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
  { path: "/brochure", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
