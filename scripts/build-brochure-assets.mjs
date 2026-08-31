/**
 * Builds the two shipped brochure assets from the Figma page exports in
 * `public/figma/brochure/`:
 *
 *   public/palm-grove-brochure.pdf   the download — one file to print or email
 *   public/figma/brochure/*.webp     the "open full size" targets behind each
 *                                    spread on /brochure, ~85% lighter than the
 *                                    PNGs they are made from
 *
 * Re-run after replacing a page export: `pnpm brochure`.
 *
 * The PDF is written by hand rather than with a PDF library: the pages are just
 * two full-bleed photos, so the file only needs a catalog, two pages, and two
 * DCTDecode (JPEG) images. That is ~40 lines of PDF and no extra dependency.
 * Output is byte-for-byte deterministic — no timestamps are embedded.
 */

import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCES = [
  "public/figma/brochure/page-1.png",
  "public/figma/brochure/page-2.png",
];
const PDF_OUT = "public/palm-grove-brochure.pdf";

/** US Letter, landscape, in PostScript points. The exports are 2000x1545, so
 *  they land on this box within 0.03% — close enough that fitting them to the
 *  exact paper size beats carrying their rounding into the print shop. */
const PAGE_WIDTH = 792;
const PAGE_HEIGHT = 612;

/** 4:4:4 rather than the usual 4:2:0: the spreads are mostly type, and chroma
 *  subsampling smears colored text at the stroke edges. */
const JPEG = { quality: 92, chromaSubsampling: "4:4:4", mozjpeg: true };
/** Near-lossless — these are read on screen at up to 2000px wide. */
const WEBP = { quality: 94, effort: 6 };

const encoder = new TextEncoder();
const bytes = (value) =>
  typeof value === "string" ? encoder.encode(value) : value;

/** Serializes numbered PDF objects into a file body, recording byte offsets for
 *  the cross-reference table that the trailer points at. */
function buildPdf(objects, rootRef, infoRef) {
  const chunks = [bytes("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n")];
  const offsets = [];
  let length = chunks[0].length;

  objects.forEach((parts, index) => {
    offsets.push(length);
    const object = [
      bytes(`${index + 1} 0 obj\n`),
      ...parts.map(bytes),
      bytes("\nendobj\n"),
    ];
    for (const chunk of object) {
      length += chunk.length;
      chunks.push(chunk);
    }
  });

  const xrefStart = length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    xref += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root ${rootRef} 0 R /Info ${infoRef} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  chunks.push(bytes(xref));

  return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
}

const pages = await Promise.all(
  SOURCES.map(async (source) => {
    const jpeg = await sharp(source).jpeg(JPEG).toBuffer();
    const { width, height } = await sharp(jpeg).metadata();
    const webp = await sharp(source).webp(WEBP).toBuffer();
    return { source, jpeg, webp, width, height };
  }),
);

// Object numbers: 1 catalog, 2 page tree, then page/content/image per spread,
// and the document info dictionary last.
const pageRefs = pages.map((_, index) => 3 + index * 3);
const infoRef = 3 + pages.length * 3;

const objects = [
  ["<< /Type /Catalog /Pages 2 0 R >>"],
  [
    `<< /Type /Pages /Count ${pages.length} /Kids [${pageRefs
      .map((ref) => `${ref} 0 R`)
      .join(" ")}] >>`,
  ],
];

pages.forEach((page, index) => {
  const pageRef = pageRefs[index];
  const contentRef = pageRef + 1;
  const imageRef = pageRef + 2;
  const content = `q\n${PAGE_WIDTH} 0 0 ${PAGE_HEIGHT} 0 0 cm\n/Im0 Do\nQ\n`;

  objects.push([
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] ` +
      `/Resources << /XObject << /Im0 ${imageRef} 0 R >> >> /Contents ${contentRef} 0 R >>`,
  ]);
  objects.push([
    `<< /Length ${content.length} >>\nstream\n${content}endstream`,
  ]);
  objects.push([
    `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} ` +
      `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpeg.length} >>\nstream\n`,
    page.jpeg,
    "\nendstream",
  ]);
});

objects.push([
  "<< /Title (Palm Grove Health Center Brochure) " +
    "/Author (Palm Grove Health Center) " +
    "/Subject (Psychiatric and behavioral health care for older adults) " +
    "/Producer (scripts/build-brochure-assets.mjs) >>",
]);

await writeFile(PDF_OUT, buildPdf(objects, 1, infoRef));
console.log(`${PDF_OUT}  ${(await sizeOf(PDF_OUT)).toFixed(0)} KB`);

for (const page of pages) {
  const out = page.source.replace(/\.png$/, ".webp");
  await writeFile(out, page.webp);
  console.log(`${out}  ${(page.webp.length / 1024).toFixed(0)} KB`);
}

async function sizeOf(path) {
  const { stat } = await import("node:fs/promises");
  return (await stat(path)).size / 1024;
}
