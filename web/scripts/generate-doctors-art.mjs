// Generates the Doctors Panel illustrations in web/public/doctors/
//   hero/panel.svg          the panel, standing together
//   portraits/doc-XX.svg    illustrated head-and-shoulders portraits (placeholders until real photos)
//   specialties/*.svg       small specialty badges
//   vetting/*.svg           how doctors join the panel
//   join.svg                "join the panel" call to action
// Run: node web/scripts/generate-doctors-art.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { C, heartPath, seated, sparkle, standing, svg } from "./art-kit.mjs";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "doctors");
const COAT = "#FFFFFF";
const COAT_SHADE = "#E4E0F2";

const write = (rel, content) => {
  const file = join(OUT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

/* ---------- props ---------- */

const clipboard = (x, y, rot = 0) => `
    <g transform="rotate(${rot} ${x} ${y})">
      <rect x="${x - 9}" y="${y - 12}" width="18" height="24" rx="2.5" fill="${C.beige}"/>
      <rect x="${x - 7}" y="${y - 9}" width="14" height="19" rx="1" fill="${C.white}"/>
      <rect x="${x - 4}" y="${y - 14}" width="8" height="4" rx="1.5" fill="${C.ink}"/>
      <path d="M${x - 4} ${y - 4} h8 M${x - 4} ${y} h6 M${x - 4} ${y + 4} h8" stroke="${C.lav}" stroke-width="1.6" stroke-linecap="round"/>
    </g>`;

/** Stethoscope draped around the neck of a standing figure at x. */
const stethoscope = (x) => `
    <path d="M${x - 6} 61 C ${x - 10} 76, ${x - 9} 86, ${x - 3} 90 M${x + 6} 61 C ${x + 10} 74, ${x + 8} 84, ${x + 2} 92" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="${x + 2}" cy="94" r="3.4" fill="${C.ink}"/>`;

const star = (cx, cy, r, color) => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.45;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(" ")}" fill="${color}" stroke="${color}" stroke-width="${(r * 0.18).toFixed(1)}" stroke-linejoin="round"/>`;
};

/* ---------- hero: the panel ---------- */

const hero = svg(
  "Five doctors from the panel standing together",
  `
    <path d="M30 164 V96 A170 86 0 0 1 370 96 V164 Z" fill="${C.lavL}"/>
    <path d="M62 164 V104 A138 66 0 0 1 338 104 V164 Z" fill="${C.lav}" opacity="0.45"/>
    ${standing({ x: 76, top: C.mint, pants: C.indigo, skin: C.skin2, hairStyle: "bun", arm: "hold", coat: COAT })}
    ${clipboard(107, 88, 8)}
    ${standing({ x: 138, top: C.indigo, pants: C.inkSoft, skin: C.skin1, hairStyle: "short", arm: "down" })}
    ${standing({ x: 200, top: C.purple, pants: C.indigo, skin: C.skin3, hairStyle: "long", arm: "heart", coat: COAT })}
    ${stethoscope(200)}
    ${standing({ x: 262, top: C.coral, pants: C.inkSoft, skin: C.skin2, hair: "#6B6B6B", hairStyle: "short", arm: "down", coat: COAT })}
    ${stethoscope(262)}
    ${standing({ x: 324, top: C.purpleL, pants: C.indigo, skin: C.skin1, hairStyle: "long", arm: "gesture" })}
    <rect x="20" y="162" width="360" height="5" rx="2.5" fill="${C.beige}"/>
    ${heartPath(200, 24, 0.9, C.coral)}
    ${sparkle(118, 30, 1, C.purpleL)}
    ${sparkle(290, 34, 0.8, C.peach)}
    ${sparkle(358, 70, 0.6, C.purple)}
    ${sparkle(40, 74, 0.6, C.mint)}
  `,
  400,
  180,
);

/* ---------- portraits ---------- */

/** Head-and-shoulders portrait in a 160×160 circle. Drawn small at the origin, then scaled up. */
function bust({ bg, top, skin, hair = C.hair, hairStyle = "short", coat = COAT, glasses = false, steth = true }) {
  const cap = `<path d="M-11.5 2 C -13 -14, 13 -14, 11.5 2 C 7 -6, -5 -7, -11.5 2 Z" fill="${hair}"/>`;
  const hairFront = {
    short: cap,
    long: cap,
    bun: `<circle cx="-2" cy="-13" r="5.5" fill="${hair}"/>${cap}`,
    curly: `<g fill="${hair}"><circle cx="-9" cy="-4" r="5"/><circle cx="-5" cy="-10" r="5.5"/><circle cx="2" cy="-12" r="5.5"/><circle cx="8" cy="-8" r="5"/><circle cx="11" cy="-2" r="4"/><circle cx="-11.5" cy="1" r="3.5"/></g>`,
    wrap: `<path d="M-12.5 2 C -14 -17, 14 -17, 12.5 2 C 8 -4, -8 -4, -12.5 2 Z" fill="${hair}"/><circle cx="0" cy="-12.5" r="3" fill="${C.white}" opacity="0.35"/>`,
    none: `<path d="M-11 -3 C -9 -10, -4 -12, 0 -12" stroke="${hair}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.7"/>`,
  }[hairStyle];
  const hairBehind =
    hairStyle === "long"
      ? `<path d="M-13 -2 C -16 14, -14 26, -9 30 L 9 30 C 14 26, 16 14, 13 -2 Z" fill="${hair}"/>`
      : "";
  const specs = glasses
    ? `<g stroke="${C.ink}" stroke-width="1.1" fill="none"><circle cx="-4.6" cy="1" r="3.3"/><circle cx="4.6" cy="1" r="3.3"/><path d="M-1.3 1 h2.6"/></g>`
    : "";
  const scope = steth
    ? `<path d="M-6 19 C -11 30, -9 38, -3 40 M6 19 C 10 29, 8 37, 2 41" stroke="${C.ink}" stroke-width="1.3" fill="none" stroke-linecap="round"/><circle cx="2" cy="42.5" r="2" fill="${C.ink}"/>`
    : "";
  return `
    <clipPath id="frame"><circle cx="80" cy="80" r="80"/></clipPath>
    <g clip-path="url(#frame)">
      <rect width="160" height="160" fill="${bg}"/>
      <g transform="translate(80 64) scale(2.65)">
        ${hairBehind}
        <path d="M-27 48 C -27 26, -18 18, 0 18 C 18 18, 27 26, 27 48 Z" fill="${coat}"/>
        <path d="M-7 18.5 H7 L0 34 Z" fill="${top}"/>
        <path d="M-7 18.5 L-2 34 M7 18.5 L2 34" stroke="${COAT_SHADE}" stroke-width="1.4" stroke-linecap="round"/>
        <rect x="-3.5" y="8" width="7" height="11" fill="${skin}"/>
        ${scope}
        <circle cx="0" cy="0" r="11.5" fill="${skin}"/>
        ${hairFront}
        ${specs}
      </g>
    </g>`;
}

const PORTRAITS = [
  { bg: C.lavL, top: C.purple, skin: C.skin3, hairStyle: "long" },
  { bg: C.peachL, top: C.indigo, skin: C.skin1, hairStyle: "short", glasses: true },
  { bg: C.mintL, top: C.mint, skin: C.skin2, hairStyle: "bun" },
  { bg: C.lavL, top: C.coral, skin: C.skin2, hair: "#6B6B6B", hairStyle: "none", glasses: true },
  { bg: C.peachL, top: C.purpleL, skin: C.skin1, hairStyle: "curly" },
  { bg: C.mintL, top: C.indigo, skin: C.skin3, hairStyle: "short" },
  { bg: C.lavL, top: C.mint, skin: C.skin2, hair: C.indigo, hairStyle: "wrap" },
  { bg: C.peachL, top: C.purple, skin: C.skin3, hair: "#6B6B6B", hairStyle: "bun", glasses: true },
  { bg: C.mintL, top: C.coral, skin: C.skin1, hairStyle: "long" },
  { bg: C.lavL, top: C.inkSoft, skin: C.skin2, hairStyle: "curly", glasses: true },
  { bg: C.peachL, top: C.mint, skin: C.skin2, hairStyle: "short", coat: C.mintL, steth: false },
  { bg: C.mintL, top: C.purpleL, skin: C.skin3, hairStyle: "long", glasses: true },
];

/* ---------- specialty badges (96×96) ---------- */

const badge = (title, body) =>
  svg(title, `<circle cx="48" cy="48" r="44" fill="${C.lavL}"/>${body}`, 96, 96);

const SPECIALTIES = {
  "general-medicine": [
    "General medicine",
    `<rect x="38" y="22" width="20" height="52" rx="5" fill="${C.purple}"/><rect x="22" y="38" width="52" height="20" rx="5" fill="${C.purple}"/>`,
  ],
  "mental-health": [
    "Mental health",
    `<path d="M22 28 h52 a8 8 0 0 1 8 8 v24 a8 8 0 0 1 -8 8 h-30 l-12 10 l2 -10 h-12 a8 8 0 0 1 -8 -8 v-24 a8 8 0 0 1 8 -8 z" fill="${C.purple}"/>${heartPath(48, 50, 0.95, C.white)}`,
  ],
  diabetes: [
    "Diabetes and endocrinology",
    `<path d="M48 18 C 60 36, 70 48, 70 60 a22 22 0 0 1 -44 0 C 26 48, 36 36, 48 18 Z" fill="${C.coral}"/><path d="M38 58 a10 10 0 0 0 8 12" stroke="${C.white}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  ],
  cardiology: [
    "Heart and blood pressure",
    `${heartPath(48, 52, 1.9, C.coral)}<path d="M20 52 h16 l5 -10 l7 20 l6 -14 l4 4 h18" stroke="${C.white}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  ],
  "womens-health": [
    "Women's health and maternity",
    `<g fill="${C.purpleL}"><circle cx="48" cy="30" r="12"/><circle cx="64" cy="42" r="12"/><circle cx="58" cy="61" r="12"/><circle cx="38" cy="61" r="12"/><circle cx="32" cy="42" r="12"/></g><circle cx="48" cy="48" r="9" fill="${C.peach}"/>`,
  ],
  pediatrics: [
    "Children's health",
    `<circle cx="30" cy="30" r="9" fill="${C.beige}"/><circle cx="66" cy="30" r="9" fill="${C.beige}"/><circle cx="48" cy="52" r="26" fill="${C.beige}"/><ellipse cx="48" cy="60" rx="11" ry="8" fill="${C.beigeL}"/><circle cx="39" cy="46" r="3" fill="${C.ink}"/><circle cx="57" cy="46" r="3" fill="${C.ink}"/><circle cx="48" cy="57" r="3" fill="${C.ink}"/>`,
  ],
  dermatology: [
    "Skin and hair",
    `<path d="M48 16 C 70 26, 76 54, 58 76 C 50 84, 40 80, 36 74 C 22 54, 28 28, 48 16 Z" fill="${C.mint}"/><path d="M48 24 C 46 44, 46 60, 44 78" stroke="${C.mintL}" stroke-width="3.5" fill="none" stroke-linecap="round"/>${sparkle(74, 24, 1, C.purpleL)}`,
  ],
  dental: [
    "Dental",
    `<path d="M26 34 C 24 20, 38 18, 48 24 C 58 18, 72 20, 70 34 C 69 46, 64 50, 62 64 C 60 78, 54 80, 52 70 C 51 62, 50 56, 48 56 C 46 56, 45 62, 44 70 C 42 80, 36 78, 34 64 C 32 50, 27 46, 26 34 Z" fill="${C.white}" stroke="${C.purple}" stroke-width="3.5" stroke-linejoin="round"/>${sparkle(72, 22, 0.9, C.purpleL)}`,
  ],
  nutrition: [
    "Nutrition and weight",
    `<path d="M48 34 C 36 24, 20 30, 22 50 C 24 70, 38 80, 48 74 C 58 80, 72 70, 74 50 C 76 30, 60 24, 48 34 Z" fill="${C.coral}"/><path d="M48 34 C 48 26, 50 20, 54 16" stroke="${C.ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M52 24 C 58 14, 70 16, 70 18 C 66 26, 58 28, 52 24 Z" fill="${C.mint}"/>`,
  ],
};

/* ---------- vetting steps (240×180) ---------- */

const VETTING = {
  credentials: [
    "A medical certificate with a seal and a green tick",
    `
    <rect x="40" y="30" width="140" height="110" rx="6" fill="${C.paper}"/>
    <rect x="48" y="38" width="124" height="94" rx="3" fill="none" stroke="${C.lav}" stroke-width="3"/>
    <path d="M70 60 h80" stroke="${C.purple}" stroke-width="6" stroke-linecap="round"/>
    <path d="M66 78 h88 M72 92 h76 M80 106 h40" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <path d="M136 118 l-6 32 l10 -6 l6 10 l4 -30 z" fill="${C.purpleL}"/>
    <path d="M150 118 l6 32 l-10 -6 l-6 10 l-4 -30 z" fill="${C.purple}"/>
    <circle cx="143" cy="116" r="16" fill="${C.purple}"/>
    <circle cx="143" cy="116" r="9" fill="${C.lav}"/>
    <circle cx="192" cy="46" r="22" fill="${C.mint}"/>
    <path d="M181 46 l8 8 l14 -16" stroke="${C.white}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${sparkle(30, 150, 0.9, C.peach)}
    `,
  ],
  interview: [
    "A doctor listening carefully to a seated patient",
    `
    <rect x="22" y="122" width="96" height="16" rx="7" fill="${C.beige}"/>
    <rect x="18" y="136" width="104" height="18" rx="8" fill="${C.beigeL}"/>
    <rect x="30" y="152" width="8" height="12" rx="2" fill="${C.beige}"/>
    <rect x="102" y="152" width="8" height="12" rx="2" fill="${C.beige}"/>
    ${seated({ x: 60, top: C.purpleL, pants: C.indigo, skin: C.skin3, hairStyle: "short" })}
    ${standing({ x: 176, top: C.mint, pants: C.inkSoft, skin: C.skin2, hairStyle: "bun", arm: "hold", coat: COAT })}
    ${stethoscope(176)}
    ${clipboard(207, 88, 8)}
    <rect x="86" y="8" width="68" height="34" rx="12" fill="${C.lavL}"/>
    <path d="M96 40 L84 52 L108 40 Z" fill="${C.lavL}"/>
    <circle cx="104" cy="25" r="4" fill="${C.purple}"/><circle cx="120" cy="25" r="4" fill="${C.purple}"/><circle cx="136" cy="25" r="4" fill="${C.purple}"/>
    ${heartPath(210, 40, 0.8, C.coral)}
    `,
  ],
  fees: [
    "A price tag with the rupee sign beside an itemised bill",
    `
    <path d="M44 24 H136 V150 l-8 -5 l-8 5 l-8 -5 l-8 5 l-8 -5 l-8 5 l-8 -5 l-8 5 l-8 -5 l-8 5 l-8 -5 l-8 5 z" fill="${C.paper}"/>
    <path d="M58 44 h40 M58 60 h52 M58 76 h36 M58 92 h48" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <path d="M112 44 h12 M118 60 h6 M112 76 h12 M116 92 h8" stroke="${C.beige}" stroke-width="4" stroke-linecap="round"/>
    <path d="M58 112 h66" stroke="${C.ink}" stroke-width="2" stroke-dasharray="3 5" stroke-linecap="round"/>
    <path d="M58 126 h26" stroke="${C.purple}" stroke-width="5" stroke-linecap="round"/>
    <path d="M108 126 h16" stroke="${C.purple}" stroke-width="5" stroke-linecap="round"/>
    <g transform="rotate(18 176 96)">
      <path d="M150 58 H194 a6 6 0 0 1 6 6 V132 L172 152 L144 132 V64 a6 6 0 0 1 6 -6 Z" fill="${C.purple}"/>
      <circle cx="172" cy="72" r="6" fill="${C.paper}"/>
      <path d="M160 94 h24 M160 104 h24 M166 94 c14 0 14 20 0 20 l18 20" stroke="${C.white}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M168 48 C 160 30, 176 22, 190 30" stroke="${C.ink}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    ${sparkle(216, 150, 0.9, C.mint)}
    `,
  ],
  reviews: [
    "Five-star patient feedback on a card, with a rising chart",
    `
    <rect x="30" y="40" width="150" height="96" rx="14" fill="${C.white}"/>
    <circle cx="56" cy="66" r="12" fill="${C.skin2}"/>
    <path d="M44.5 68 C 43 52, 69 52, 67.5 68 C 63 60, 51 59, 44.5 68 Z" fill="${C.hair}"/>
    <path d="M76 60 h60 M76 72 h40" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    ${star(48, 108, 9, C.purple)}${star(72, 108, 9, C.purple)}${star(96, 108, 9, C.purple)}${star(120, 108, 9, C.purple)}${star(144, 108, 9, C.purpleL)}
    <rect x="156" y="98" width="62" height="60" rx="10" fill="${C.lavL}"/>
    <path d="M166 146 L180 130 L192 136 L208 112" stroke="${C.mint}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M198 112 h10 v10" stroke="${C.mint}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${heartPath(196, 38, 1, C.coral)}
    ${sparkle(24, 150, 0.8, C.peach)}
    `,
  ],
};

/* ---------- join the panel (240×180) ---------- */

const joinArt = svg(
  "A doctor writing on a tablet as notes turn into tidy records",
  `
    <circle cx="86" cy="96" r="70" fill="${C.lavL}"/>
    ${standing({ x: 70, top: C.indigo, pants: C.inkSoft, skin: C.skin1, hairStyle: "short", arm: "hold", coat: COAT })}
    ${stethoscope(70)}
    <g transform="rotate(-10 106 82)">
      <rect x="92" y="64" width="34" height="44" rx="4" fill="${C.ink}"/>
      <rect x="95" y="67" width="28" height="38" rx="2" fill="${C.white}"/>
      <path d="M99 76 c3 -3 5 3 8 0 s5 3 8 0 M99 86 c3 -3 5 3 8 0 s4 3 6 0" stroke="${C.purple}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    </g>
    <path d="M132 84 C 146 80, 150 64, 160 60" stroke="${C.purpleL}" stroke-width="2.5" stroke-dasharray="3 6" fill="none" stroke-linecap="round"/>
    <rect x="156" y="36" width="66" height="22" rx="7" fill="${C.white}"/>
    <circle cx="168" cy="47" r="6" fill="${C.mint}"/><path d="M178 47 h36" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <rect x="156" y="66" width="66" height="22" rx="7" fill="${C.white}"/>
    <circle cx="168" cy="77" r="6" fill="${C.purple}"/><path d="M178 77 h28" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <rect x="156" y="96" width="66" height="22" rx="7" fill="${C.white}"/>
    <circle cx="168" cy="107" r="6" fill="${C.coral}"/><path d="M178 107 h32" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="200" cy="146" r="18" fill="${C.purple}"/>
    <path d="M200 137 v18 M191 146 h18" stroke="${C.white}" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="20" y="162" width="130" height="5" rx="2.5" fill="${C.beige}"/>
    ${sparkle(140, 24, 0.9, C.peach)}
  `,
);

/* ---------- write ---------- */

write("hero/panel.svg", hero);
PORTRAITS.forEach((p, i) => {
  const n = String(i + 1).padStart(2, "0");
  write(`portraits/doc-${n}.svg`, svg("Illustrated doctor portrait", bust(p), 160, 160));
});
for (const [name, [title, body]] of Object.entries(SPECIALTIES)) write(`specialties/${name}.svg`, badge(title, body));
for (const [name, [title, body]] of Object.entries(VETTING)) write(`vetting/${name}.svg`, svg(title, body));
write("join.svg", joinArt);

const total = 1 + PORTRAITS.length + Object.keys(SPECIALTIES).length + Object.keys(VETTING).length + 1;
console.log(`Wrote ${total} illustrations to ${OUT}`);
