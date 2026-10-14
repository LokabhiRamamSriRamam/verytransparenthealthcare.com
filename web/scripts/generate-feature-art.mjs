// Generates the hand-painted feature illustrations in web/public/features/*.svg
// Run: node web/scripts/generate-feature-art.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { C, heartPath, pin, seated, sparkle, standing, svg } from "./art-kit.mjs";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "features");

/* ---------- scenes ---------- */

const SCENES = {
  "wellness-partner": [
    "A wellness partner chatting with a seated patient",
    `
    <rect x="22" y="122" width="112" height="16" rx="7" fill="${C.beige}"/>
    <rect x="18" y="136" width="120" height="18" rx="8" fill="${C.beigeL}"/>
    <rect x="30" y="152" width="8" height="12" rx="2" fill="${C.beige}"/>
    <rect x="118" y="152" width="8" height="12" rx="2" fill="${C.beige}"/>
    ${seated({ x: 66, top: C.coral, pants: C.indigo, skin: C.skin2, hairStyle: "bun" })}
    ${standing({ x: 178, top: C.purple, pants: C.inkSoft, skin: C.skin1, hairStyle: "short", arm: "gesture" })}
    <path d="M104 18 h46 a12 12 0 0 1 12 12 v14 a12 12 0 0 1 -12 12 h-26 l-10 10 l1 -10 h-11 a12 12 0 0 1 -12 -12 v-14 a12 12 0 0 1 12 -12 z" fill="${C.lavL}"/>
    ${heartPath(127, 38, 0.8, C.purple)}
    `,
  ],
  vip: [
    "A VIP pass ticket",
    `
    <mask id="ticket-notch">
      <rect x="0" y="0" width="240" height="180" fill="#fff"/>
      <circle cx="30" cy="92" r="11" fill="#000"/>
      <circle cx="210" cy="92" r="11" fill="#000"/>
    </mask>
    <g transform="rotate(-7 120 92)">
      <rect x="30" y="46" width="180" height="92" rx="12" fill="${C.purple}" mask="url(#ticket-notch)"/>
      <path d="M164 54 V130" stroke="${C.lav}" stroke-width="2.5" stroke-dasharray="5 6" stroke-linecap="round"/>
      <path d="M58 66 l10 10 l10 -14 l10 14 l10 -10 l-4 20 h-32 z" fill="${C.peach}"/>
      <text x="80" y="122" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="700" font-size="34" fill="${C.white}">VIP</text>
      <circle cx="187" cy="80" r="5" fill="${C.lav}"/>
      <circle cx="187" cy="96" r="5" fill="${C.lav}"/>
      <circle cx="187" cy="112" r="5" fill="${C.lav}"/>
    </g>
    ${sparkle(206, 34, 1.2, C.purpleL)}
    ${sparkle(28, 146, 0.9, C.peach)}
    ${sparkle(222, 150, 0.7, C.lav)}
    `,
  ],
  "same-day": [
    "A tear-off calendar page and a clock",
    `
    <path d="M62 44 H170 V148 l-9 -5 l-9 5 l-9 -5 l-9 5 l-9 -5 l-9 5 l-9 -5 l-9 5 l-9 -5 l-9 5 l-9 -5 l-9 5 z" fill="${C.paper}"/>
    <rect x="60" y="30" width="112" height="20" rx="3" fill="${C.purple}"/>
    <path d="M101 126 V70 l-12 9" stroke="${C.ink}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M122 76 c4 -8 20 -8 20 4 c0 12 -20 24 -20 44 h24" stroke="${C.ink}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="180" cy="130" r="26" fill="${C.mint}"/>
    <circle cx="180" cy="130" r="19" fill="${C.white}"/>
    <path d="M180 130 V117 M180 130 L189 136" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
    ${sparkle(46, 40, 0.9, C.peach)}
    `,
  ],
  "home-lab": [
    "Lab tests collected at home",
    `
    <rect x="34" y="84" width="96" height="72" rx="3" fill="${C.lavL}"/>
    <path d="M24 90 L82 40 L140 90 Z" fill="${C.purple}"/>
    <rect x="70" y="112" width="24" height="44" rx="3" fill="${C.indigo}"/>
    <circle cx="89" cy="135" r="2" fill="${C.lav}"/>
    <rect x="44" y="98" width="18" height="16" rx="2" fill="${C.white}"/>
    <rect x="102" y="98" width="18" height="16" rx="2" fill="${C.white}"/>
    <path d="M150 130 C 140 150, 116 160, 98 158" stroke="${C.purpleL}" stroke-width="3" stroke-dasharray="4 7" stroke-linecap="round" fill="none"/>
    <rect x="152" y="128" width="72" height="12" rx="4" fill="${C.beige}"/>
    <rect x="156" y="140" width="6" height="18" fill="${C.beige}"/>
    <rect x="214" y="140" width="6" height="18" fill="${C.beige}"/>
    <rect x="160" y="64" width="13" height="70" rx="6.5" fill="${C.lavL}" stroke="${C.lav}" stroke-width="2"/>
    <rect x="160" y="96" width="13" height="38" rx="6.5" fill="${C.purple}"/>
    <rect x="182" y="58" width="13" height="76" rx="6.5" fill="${C.lavL}" stroke="${C.lav}" stroke-width="2"/>
    <rect x="182" y="100" width="13" height="34" rx="6.5" fill="${C.mint}"/>
    <rect x="204" y="68" width="13" height="66" rx="6.5" fill="${C.lavL}" stroke="${C.lav}" stroke-width="2"/>
    <rect x="204" y="104" width="13" height="30" rx="6.5" fill="${C.coral}"/>
    <rect x="158" y="60" width="17" height="6" rx="2" fill="${C.ink}"/>
    <rect x="180" y="54" width="17" height="6" rx="2" fill="${C.ink}"/>
    <rect x="202" y="64" width="17" height="6" rx="2" fill="${C.ink}"/>
    `,
  ],
  "compassionate-providers": [
    "A caring doctor with a hand on her heart",
    `
    ${heartPath(120, 84, 5.2, C.peachL)}
    ${standing({ x: 120, top: C.purple, coat: "#E4E0F2", pants: C.indigo, skin: C.skin3, hairStyle: "long", arm: "heart" })}
    <path d="M113 60 C 108 74, 110 84, 116 88 M127 60 C 132 74, 128 90, 122 96" stroke="${C.ink}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="122" cy="98" r="4" fill="${C.ink}"/>
    ${heartPath(168, 44, 0.9, C.coral)}
    ${heartPath(70, 58, 0.6, C.purpleL)}
    `,
  ],
  "continuous-care": [
    "A doctor's clipboard with a health chart under a magnifying glass",
    `
    <rect x="52" y="26" width="104" height="134" rx="9" fill="${C.beige}"/>
    <rect x="61" y="40" width="86" height="112" rx="3" fill="${C.white}"/>
    <rect x="88" y="20" width="32" height="14" rx="4" fill="${C.ink}"/>
    <path d="M70 58 h44 M70 68 h30" stroke="${C.beigeL}" stroke-width="4" stroke-linecap="round"/>
    <path d="M70 128 L86 108 L100 116 L116 90 L136 98" stroke="${C.purple}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="86" cy="108" r="3.5" fill="${C.purple}"/>
    <circle cx="116" cy="90" r="3.5" fill="${C.purple}"/>
    <path d="M70 140 h66" stroke="${C.beigeL}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="170" cy="112" r="26" fill="${C.lavL}" fill-opacity="0.75"/>
    <circle cx="170" cy="112" r="26" fill="none" stroke="${C.indigo}" stroke-width="7"/>
    <path d="M189 131 L210 154" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/>
    <circle cx="146" cy="44" r="14" fill="${C.mint}"/>
    <path d="M139 44 l5 5 l9 -10" stroke="${C.white}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  ],
  "one-roof": [
    "Every kind of care under one roof",
    `
    <rect x="42" y="84" width="156" height="72" rx="4" fill="${C.lavL}"/>
    <path d="M24 92 L120 30 L216 92" stroke="${C.purple}" stroke-width="15" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 122 H182" stroke="${C.lav}" stroke-width="3" stroke-dasharray="3 7" stroke-linecap="round"/>
    <circle cx="64" cy="122" r="17" fill="${C.white}"/>
    ${heartPath(64, 125, 0.95, C.coral)}
    <circle cx="104" cy="122" r="17" fill="${C.white}"/>
    <path d="M94 124 c-4 -10 6 -16 10 -11 c3 -6 13 -2 11 5 c5 3 1 11 -5 9 c-2 5 -10 5 -11 0 c-4 1 -7 -1 -5 -3 z" fill="${C.lav}"/>
    <path d="M100 120 c3 -2 6 2 9 -1" stroke="${C.purple}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="144" cy="122" r="17" fill="${C.white}"/>
    <g transform="rotate(-35 144 122)"><rect x="132" y="116" width="24" height="12" rx="6" fill="${C.mint}"/><rect x="144" y="116" width="12" height="12" rx="6" fill="${C.mintL}"/><rect x="144" y="116" width="6" height="12" fill="${C.mintL}"/></g>
    <circle cx="184" cy="122" r="17" fill="${C.white}"/>
    <path d="M184 112 V132 M174 122 H194" stroke="${C.purple}" stroke-width="6" stroke-linecap="round"/>
    <rect x="30" y="154" width="180" height="6" rx="3" fill="${C.beige}"/>
    `,
  ],
  mumbai: [
    "Doctors across Mumbai",
    `
    <rect x="22" y="92" width="22" height="52" fill="${C.lav}"/>
    <rect x="46" y="70" width="26" height="74" fill="${C.lavL}"/>
    <rect x="150" y="66" width="24" height="78" fill="${C.lavL}"/>
    <rect x="176" y="88" width="20" height="56" fill="${C.lav}"/>
    <rect x="198" y="76" width="22" height="68" fill="${C.lavL}"/>
    <path d="M52 80 h6 M62 80 h6 M52 92 h6 M62 92 h6 M156 76 h5 M165 76 h5 M156 88 h5 M165 88 h5" stroke="${C.white}" stroke-width="4"/>
    <rect x="80" y="74" width="62" height="70" rx="2" fill="${C.beige}"/>
    <path d="M98 144 V112 a13 13 0 0 1 26 0 V144 z" fill="${C.indigo}"/>
    <rect x="76" y="68" width="70" height="9" rx="2" fill="${C.beigeL}"/>
    <circle cx="84" cy="62" r="6" fill="${C.beigeL}"/>
    <circle cx="138" cy="62" r="6" fill="${C.beigeL}"/>
    <circle cx="111" cy="60" r="8" fill="${C.beigeL}"/>
    <path d="M14 150 q14 -8 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" stroke="${C.mint}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M24 164 q14 -8 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" stroke="${C.indigo}" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
    ${pin(59, 58, C.purple, 1)}
    ${pin(162, 52, C.coral, 1)}
    ${pin(210, 66, C.purpleL, 0.8)}
    ${pin(33, 84, C.purpleL, 0.7)}
    `,
  ],
};

mkdirSync(OUT, { recursive: true });
for (const [name, [title, body]] of Object.entries(SCENES)) {
  writeFileSync(join(OUT, `${name}.svg`), svg(title, body));
}
console.log(`Wrote ${Object.keys(SCENES).length} illustrations to ${OUT}`);
