
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCES = [
  "public/figma/brochure/page-1.png",
  "public/figma/brochure/page-2.png",
];
const PDF_OUT = "public/palm-grove-brochure.pdf";

const PAGE_WIDTH = 792;
const PAGE_HEIGHT = 612;

const JPEG = { quality: 92, chromaSubsampling: "4:4:4", mozjpeg: true };
const WEBP = { quality: 94, effort: 6 };

const encoder = new TextEncoder();
const bytes = (value) =>
  typeof value === "string" ? encoder.encode(value) : value;

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
