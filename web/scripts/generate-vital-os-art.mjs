// Generates the Vital OS page assets in web/public/vital-os/**
// Run: node web/scripts/generate-vital-os-art.mjs
//
//   brand/     Vital OS mark and wordmarks
//   hero/      animated "pen to record" tablet (+ static fallback)
//   product/   device mockups, ink-to-data diagram, one-note ripple diagram, device frames, stylus
//   features/  gouache feature illustrations (same style as /public/features)
//   story/     before / after gouache scenes
//   icons/     24px line icons (+ sprite.svg for <use href="…#vo-name">)
//   social/    Open Graph card
//   png/       @2x raster exports of the mockups for decks, emails and social
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { C, heartPath, seated, sparkle, standing, svg } from "./art-kit.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "public", "vital-os");
const LETTERING = JSON.parse(readFileSync(join(HERE, "data", "vital-os-lettering.json"), "utf8"));

const FONT = `Manrope, 'Segoe UI', Arial, sans-serif`;
const SERIF = `'Instrument Serif', Georgia, 'Times New Roman', serif`;
const INK = C.indigo; // fountain-pen blue for everything the doctor writes
const CREAM = "#F8F6F2";
const PAPER = "#FDFBF7";
const RULE = "#E9E3F4";
const MUTED = "#6B6B76";
const HAIR = "#ECE7F3";

/* ---------- small helpers ---------- */

const r = (n) => +n.toFixed(2);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** Rough rendered width of Manrope text, for sizing chips. */
const tw = (s, size, weight = 700) => s.length * size * (weight >= 700 ? 0.6 : 0.55);

function text(x, y, str, { size = 14, weight = 600, fill = C.ink, anchor, ls, family = FONT, italic } = {}) {
  return `<text x="${r(x)}" y="${r(y)}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}"${anchor ? ` text-anchor="${anchor}"` : ""}${ls ? ` letter-spacing="${ls}"` : ""}${italic ? ` font-style="italic"` : ""}>${esc(str)}</text>`;
}

/** Handwritten phrase with its baseline starting at (x, y), drawn `size` px tall. */
function hand(key, x, y, size = 48, fill = INK) {
  const l = LETTERING.lines[key];
  const s = size / 48;
  return {
    svg: `<path transform="translate(${r(x)} ${r(y)}) scale(${r(s)})" d="${l.d}" fill="${fill}"/>`,
    w: l.width * s,
    top: l.top * s,
    bottom: l.bottom * s,
  };
}

/** Instrument Serif headline as outlines, baseline at (x, y). */
function display(key, x, y, size, fill) {
  const l = LETTERING.display[key];
  const s = size / l.size;
  return { svg: `<path transform="translate(${r(x)} ${r(y)}) scale(${r(s)})" d="${l.d}" fill="${fill}"/>`, w: l.width * s };
}

/** Pill-shaped label; returns its markup and width. */
function chip(x, y, label, { fg = C.purple, bg = C.lavL, size = 12, h = 24, anchor = "start", dot = false } = {}) {
  const w = tw(label, size) + (dot ? 34 : 22);
  const left = anchor === "end" ? x - w : x;
  const tx = left + (dot ? 24 : 11);
  return {
    w,
    svg: `<g><rect x="${r(left)}" y="${r(y)}" width="${r(w)}" height="${h}" rx="${h / 2}" fill="${bg}"/>${dot ? `<circle cx="${r(left + 13)}" cy="${r(y + h / 2)}" r="4" fill="${fg}"/>` : ""}${text(tx, y + h / 2 + size * 0.36, label, { size, weight: 700, fill: fg })}</g>`,
  };
}

const SOFT_SHADOW = `
    <filter id="soft" x="-20%" y="-20%" width="140%" height="170%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#2A1B6E" flood-opacity="0.13"/>
    </filter>
    <filter id="blur" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="16"/></filter>`;

const markGradient = (id) => `
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.purpleL}"/>
      <stop offset="1" stop-color="${C.purple}"/>
    </linearGradient>`;

const STYLUS_GRADIENT = `
    <linearGradient id="stylus-body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="0.55" stop-color="#F4F1FA"/>
      <stop offset="1" stop-color="#D9D1EA"/>
    </linearGradient>`;

/** A standalone vector document (no gouache). */
const doc = (title, w, h, body, defs = "", style = "") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(title)}">
  <title>${esc(title)}</title>${defs ? `\n  <defs>${defs}\n  </defs>` : ""}${style ? `\n  <style>${style}\n  </style>` : ""}
${body}
</svg>
`;

/* ---------- brand ---------- */

/** The Vital OS mark: a handwritten loop that turns into a pulse. 64×64 units at (x, y). */
function mark(x, y, size, gid, stroke = C.white) {
  return `<g transform="translate(${r(x)} ${r(y)}) scale(${r(size / 64)})">
    <rect width="64" height="64" rx="17" fill="url(#${gid})"/>
    <path d="M10 38.5c3.5 0 5-9 8.5-9s1.5 10.5 5 10.5c2.6 0 3.1-4.6 5.5-4.6h3.5l4.5-16 5.5 26 4-12h5" fill="none" stroke="${stroke}" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="55.5" cy="33.4" r="3.3" fill="${stroke}"/>
  </g>`;
}

function wordmark(onDark) {
  const ink = onDark ? C.white : C.ink;
  const os = onDark ? C.lav : C.purple;
  const sub = onDark ? C.lav : C.inkSoft;
  return doc(
    "Vital OS by Very Transparent Healthcare",
    340,
    64,
    `  ${mark(0, 0, 64, "vo-g")}
  <text x="78" y="37" font-family="${FONT}" font-size="30" font-weight="800" fill="${ink}" letter-spacing="-0.6">Vital<tspan fill="${os}" dx="6">OS</tspan></text>
  ${text(79, 56, "BY VERYTRANSPARENT HEALTHCARE", { size: 9, weight: 700, fill: sub, ls: 2.6 })}`,
    markGradient("vo-g"),
  );
}

/* ---------- icons ---------- */

const ICONS = {
  stylus: ["Stylus", `<path d="M16.5 3.5l4 4L9 19l-5 1 1-5z"/><path d="M14 6l4 4"/>`],
  handwriting: ["Handwriting", `<path d="M3 16c2-4 3.5-8 5-8s-1 8 1 8 3-5 4.5-5-.5 4 1 4 2-2 3-3"/><path d="M3 20.5h18"/>`],
  record: ["Health record", `<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>`],
  prescription: ["Prescription", `<path d="M7 20V4h5a4 4 0 0 1 0 8H7"/><path d="M11 12l7 8M18 13l-5 7"/>`],
  pharmacy: ["Medicine", `<rect x="6" y="2.5" width="12" height="4" rx="1.2"/><path d="M7 6.5h10v12.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M12 10.5v6M9 13.5h6"/>`],
  portal: ["Patient portal", `<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 15.5s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.8-3 3.8z"/>`],
  billing: ["Itemised bill", `<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5-2 1.5-2.5-1.5L5 21z"/><path d="M9 8h6M9 12h6M9 16h3"/>`],
  rupee: ["Rupee", `<path d="M7 5h10M7 9h10M7 5h3.5a4 4 0 0 1 0 8H7l7 7"/>`],
  lab: ["Lab test", `<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/>`],
  calendar: ["Appointments", `<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14.5h2M14 14.5h2"/>`],
  bell: ["Reminder", `<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>`],
  shield: ["Secure", `<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>`],
  sync: ["Sync", `<path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>`],
  offline: ["Works offline", `<path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.3 9 4.5 4.5 0 0 0 7 18z"/><path d="M3 3l18 18"/>`],
  insights: ["Practice insights", `<path d="M3 20h18"/><path d="M6 16v-4M11 16V8M16 16v-6"/><path d="M5 7.5l5-3.5 4 3 5-4"/>`],
  anatomy: ["Body diagram", `<circle cx="12" cy="4.5" r="2"/><path d="M12 7v7M7 9.5l5-1 5 1M12 14l-3 7M12 14l3 7"/><circle cx="17" cy="15" r="3" stroke-dasharray="2 1.6"/>`],
  transparency: ["Transparency", `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>`],
  clock: ["Time", `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`],
  "time-back": ["Time back", `<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4v4h4"/><path d="M12 8v4l2.5 2"/>`],
  check: ["Done", `<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.3l2.4 2.4 4.6-5"/>`],
  patient: ["Patient", `<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>`],
  share: ["Share", `<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>`],
  tablet: ["Tablet", `<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M11 17h2"/>`],
  message: ["Messages", `<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>`],
  heart: ["Care", `<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>`],
  home: ["Home", `<path d="M4 11l8-7 8 7v9h-5v-5H9v5H4z"/>`],
};

const ICON_ATTRS = `fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"`;

/** Draw one of ICONS at (x, y), `size` px, in `color`. */
const icon = (name, x, y, size, color, sw = 1.75) =>
  `<g transform="translate(${r(x)} ${r(y)}) scale(${r(size / 24)})" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name][1]}</g>`;

/* ---------- devices ---------- */

/** Landscape tablet. Returns markup plus the screen rectangle. */
function tabletShell(x, y, w, h, { bezel = 22, screen = PAPER, shadow = true, screenR = 22 } = {}) {
  const s = { x: x + bezel, y: y + bezel, w: w - 2 * bezel, h: h - 2 * bezel, r: screenR };
  return {
    s,
    svg: `${shadow ? `<ellipse cx="${r(x + w / 2)}" cy="${r(y + h + 18)}" rx="${r(w * 0.44)}" ry="20" fill="#2A1B6E" opacity="0.2" filter="url(#blur)"/>` : ""}
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${bezel + screenR}" fill="${C.ink}"/>
    <rect x="${x + 1.5}" y="${y + 1.5}" width="${w - 3}" height="${h - 3}" rx="${bezel + screenR - 1.5}" fill="none" stroke="#3A3A44" stroke-width="2"/>
    <circle cx="${r(x + w / 2)}" cy="${r(y + bezel / 2)}" r="3.2" fill="#34343D"/>
    ${screen ? `<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.r}" fill="${screen}"/>` : ""}`,
  };
}

/** Stylus with its tip at the origin, leaning `angle` degrees clockwise. */
const stylus = (angle = 32, len = 300) => `<g transform="rotate(${angle})">
      <path d="M-10 -26 L-1.6 -2 Q0 1.2 1.6 -2 L10 -26 Z" fill="#E4DEEF"/>
      <path d="M-1.6 -6 L0 0 L1.6 -6 Z" fill="${C.ink}"/>
      <path d="M-10 ${-len + 10} a10 10 0 0 1 20 0 V-26 H-10 Z" fill="url(#stylus-body)" stroke="#D2C9E4" stroke-width="1.2"/>
      <rect x="-10" y="-84" width="20" height="9" fill="${C.purple}"/>
      <path d="M-10 ${-len + 10} a10 10 0 0 1 20 0 V${-len + 36} H-10 Z" fill="${C.purple}"/>
    </g>`;

/* ---------- hero: pen to record ---------- */

const NOTE = [
  { key: "complaint", tag: "Complaint", fg: C.purple, bg: C.lavL },
  { key: "vitals", tag: "Vitals", fg: "#B4492E", bg: C.peachL, card: ["heart", "Vitals charted", "BP 138/88 · P 78 · 82 kg", C.coral, C.peachL] },
  { key: "dx", tag: "Diagnosis · I10", fg: C.purple, bg: C.lavL, card: ["record", "Diagnosis coded", "Stage 1 hypertension · I10", C.purple, C.lavL] },
  { key: "rx", tag: "e-Prescription", fg: "#2E7D4A", bg: C.mintL, card: ["pharmacy", "e-Prescription sent", "Amlodipine 5 mg · OD · 30 days", C.mint, C.mintL] },
  { key: "labs", tag: "Lab order", fg: C.indigo, bg: "#E3E7FA" },
  { key: "review", tag: "Follow-up", fg: C.indigo, bg: "#E3E7FA", card: ["calendar", "Labs & follow-up booked", "Lipid, HbA1c · 28 Oct, 10:30", C.indigo, "#E3E7FA"] },
  { key: "sign", x: 610, base: 604, size: 42, portal: true },
];

function heroTablet(animate) {
  const W = 1200;
  const H = 820;
  const LOOP = 14; // seconds
  const SPEED = 270; // handwriting px per second
  const x0 = 158;
  const pct = (t) => `${r((t / LOOP) * 100)}%`;

  const tab = tabletShell(60, 90, 800, 600);
  const s = tab.s;

  // Timeline: each line is written in turn, its tag and card follow.
  let t = 0.6;
  const lines = NOTE.map((n, i) => {
    const base = n.base ?? 222 + i * 58;
    const lx = n.x ?? x0;
    const h = hand(n.key, lx, base, n.size ?? 38);
    const start = t;
    const end = start + h.w / SPEED;
    t = end + 0.35;
    return { ...n, i, base, lx, h, start, end };
  });
  const lastEnd = lines.at(-1).end;

  const rules = Array.from({ length: 7 }, (_, i) => 230 + i * 58)
    .map((y) => `<path d="M${s.x + 28} ${y} H${s.x + s.w - 28}" stroke="${RULE}" stroke-width="1.5"/>`)
    .join("\n      ");

  const masks = lines
    .map(
      (l) =>
        `<mask id="vo-m${l.i}" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect class="wipe w${l.i}" x="${r(l.lx - 6)}" y="${r(l.base + l.h.top - 10)}" width="${r(l.h.w + 12)}" height="${r(l.h.bottom - l.h.top + 20)}" fill="#fff"/></mask>`,
    )
    .join("\n    ");

  const ink = lines.map((l) => `<g mask="url(#vo-m${l.i})">${l.h.svg}</g>`).join("\n        ");
  const signLine = lines.at(-1);
  const flourish = `<path d="M${r(signLine.lx - 4)} ${signLine.base + 14} c 60 -8 120 -6 ${r(signLine.h.w + 20)} -2" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;

  const tags = lines
    .filter((l) => l.tag)
    .map((l) => `<g class="tag t${l.i}">${chip(l.lx + l.h.w + 16, l.base - 22, l.tag, { fg: l.fg, bg: l.bg }).svg}</g>`)
    .join("\n        ");

  // Cards pop out of the tablet as each part of the note is understood.
  const cardX = 792;
  const cardW = 364;
  const cards = lines
    .filter((l) => l.card)
    .map((l, k) => {
      const [ic, title, sub, fg, bg] = l.card;
      const y = 150 + k * 102;
      return `<g class="card c${l.i}">
      <rect x="${cardX}" y="${y}" width="${cardW}" height="84" rx="18" fill="${C.white}" filter="url(#soft)"/>
      <rect x="${cardX + 18}" y="${y + 20}" width="44" height="44" rx="13" fill="${bg}"/>
      ${icon(ic, cardX + 28, y + 30, 24, fg, 2)}
      ${text(cardX + 78, y + 37, title, { size: 15.5, weight: 800 })}
      ${text(cardX + 78, y + 60, sub, { size: 13, weight: 600, fill: MUTED })}
      <circle cx="${cardX + cardW - 28}" cy="${y + 42}" r="11" fill="${C.mint}"/>
      <path d="M${cardX + cardW - 33} ${y + 42.5} l3.6 3.6 l6.4 -7" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>`;
    })
    .join("\n    ");
  const portal = `<g class="card c${signLine.i}">
      <rect x="826" y="566" width="306" height="58" rx="29" fill="${C.ink}" filter="url(#soft)"/>
      ${icon("portal", 846, 583, 24, C.lav, 2)}
      ${text(882, 601, "Aarav's portal is up to date", { size: 14.5, weight: 700, fill: C.white })}
      <circle cx="1108" cy="595" r="5" fill="${C.mint}"/>
    </g>`;

  // Stylus rests beside the signature; when animated it follows the ink.
  const rest = { x: 430, y: 640 };
  let style = "";
  if (animate) {
    const at = (x, y) => `transform: translate(${r(x)}px, ${r(y)}px);`;
    const pen = [`0% { ${at(rest.x, rest.y)} }`];
    lines.forEach((l, k) => {
      if (k > 0) {
        const prev = lines[k - 1];
        pen.push(`${pct((prev.end + l.start) / 2)} { ${at((prev.lx + prev.h.w + l.lx) / 2, (prev.base + l.base) / 2 - 36)} }`);
      }
      pen.push(`${pct(l.start)} { ${at(l.lx, l.base - 8)} }`, `${pct(l.end)} { ${at(l.lx + l.h.w, l.base - 8)} }`);
    });
    pen.push(`${pct(lastEnd + 0.7)}, 100% { ${at(rest.x, rest.y)} }`);

    const out = pct(LOOP * 0.93);
    const gone = pct(LOOP * 0.97);
    const kf = [`@keyframes vo-pen { ${pen.join(" ")} }`, `@keyframes vo-ink { 0%, ${out} { opacity: 1; } ${gone}, 100% { opacity: 0; } }`];
    const rules = [
      `.wipe, .tag { transform-box: fill-box; transform-origin: left center; }`,
      `.card { transform-box: fill-box; transform-origin: left center; }`,
      `.pen { animation: vo-pen ${LOOP}s linear infinite; }`,
      `.ink { animation: vo-ink ${LOOP}s linear infinite; }`,
    ];
    for (const l of lines) {
      kf.push(`@keyframes vo-w${l.i} { 0%, ${pct(l.start)} { transform: scaleX(0); } ${pct(l.end)}, 100% { transform: scaleX(1); } }`);
      rules.push(`.w${l.i} { animation: vo-w${l.i} ${LOOP}s linear infinite; }`);
      if (l.tag) {
        kf.push(`@keyframes vo-t${l.i} { 0%, ${pct(l.end + 0.05)} { opacity: 0; transform: scale(0.8); } ${pct(l.end + 0.35)}, 100% { opacity: 1; transform: none; } }`);
        rules.push(`.t${l.i} { animation: vo-t${l.i} ${LOOP}s ease-out infinite; }`);
      }
      if (l.card || l.portal) {
        const a = l.end + 0.25;
        kf.push(`@keyframes vo-c${l.i} { 0%, ${pct(a)} { opacity: 0; transform: translateX(-28px); } ${pct(a + 0.5)}, ${out} { opacity: 1; transform: none; } ${gone}, 100% { opacity: 0; transform: none; } }`);
        rules.push(`.c${l.i} { animation: vo-c${l.i} ${LOOP}s cubic-bezier(.2,.8,.2,1) infinite; }`);
      }
    }
    style = `
    @media (prefers-reduced-motion: no-preference) {
      ${kf.join("\n      ")}
      ${rules.join("\n      ")}
    }`;
  }

  const body = `  <g transform="rotate(-2 460 390)">
    ${tab.svg}
    <clipPath id="vo-screen"><rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.r}"/></clipPath>
    <g clip-path="url(#vo-screen)">
      <rect x="${s.x}" y="${s.y}" width="${s.w}" height="54" fill="${C.white}"/>
      <path d="M${s.x} ${s.y + 54} H${s.x + s.w}" stroke="${HAIR}" stroke-width="1.5"/>
      ${mark(s.x + 18, s.y + 13, 28, "vo-g")}
      ${text(s.x + 56, s.y + 33, "Vital OS", { size: 15, weight: 800 })}
      <rect x="${s.x + 150}" y="${s.y + 13}" width="232" height="28" rx="14" fill="${C.lavL}"/>
      <circle cx="${s.x + 166}" cy="${s.y + 27}" r="9" fill="${C.peach}"/>
      ${text(s.x + 182, s.y + 31.5, "Aarav Mehta · 42 M · Visit 7", { size: 12.5, weight: 700 })}
      <circle cx="${s.x + 452}" cy="${s.y + 27}" r="4.5" fill="${C.mint}"/>
      ${text(s.x + 462, s.y + 31.5, "Auto-saved", { size: 12.5, weight: 700, fill: "#2E7D4A" })}
      ${text(s.x + s.w - 20, s.y + 31.5, "30 Sep 2026 · 10:42", { size: 12.5, weight: 600, fill: MUTED, anchor: "end" })}
      <path d="M${s.x + 52} ${s.y + 54} V${s.y + s.h}" stroke="#F3D9D0" stroke-width="1.5"/>
      ${rules}
      ${text(x0, 188, "CONSULTATION NOTE", { size: 11, weight: 800, fill: C.purple, ls: 2 })}
    </g>
    <g class="ink">
        ${ink}
        <g mask="url(#vo-m${signLine.i})">${flourish}</g>
        ${tags}
    </g>
    <g class="pen" transform="translate(${rest.x} ${rest.y})">
      <ellipse cx="18" cy="6" rx="16" ry="4" fill="#2A1B6E" opacity="0.12"/>
      ${stylus(34, 250)}
    </g>
  </g>
  <g class="cards">
    ${cards}
    ${portal}
  </g>`;

  return doc(
    animate
      ? "A doctor handwrites a consultation note on the Vital OS tablet while each line becomes a coded record, an e-prescription, a booking and a portal update"
      : "A handwritten consultation note on the Vital OS tablet, already turned into a coded record, an e-prescription, a booking and a portal update",
    W,
    H,
    body,
    `${SOFT_SHADOW}${markGradient("vo-g")}${STYLUS_GRADIENT}
    ${masks}`,
    style,
  );
}

/* ---------- product: ink to data ---------- */

const ROW_COLORS = [C.purple, C.coral, C.purpleL, C.mint, C.indigo, "#3A62D8"];

function inkToData() {
  const W = 1200;
  const H = 640;
  const x0 = 84;
  const bases = [168, 222, 276, 330, 384, 438];
  const keys = ["complaint", "vitals", "dx", "rx", "labs", "review"];
  const num = (cx, cy, i) =>
    `<circle cx="${cx}" cy="${cy}" r="10" fill="${ROW_COLORS[i]}"/>${text(cx, cy + 3.8, String(i + 1), { size: 11, weight: 800, fill: C.white, anchor: "middle" })}`;

  const sheet = `<g transform="rotate(-3 255 320)">
    <rect x="40" y="72" width="440" height="500" rx="16" fill="${PAPER}" stroke="#E6DFD3" stroke-width="1.5" filter="url(#soft)"/>
    ${text(x0, 120, "CONSULTATION NOTE", { size: 11, weight: 800, fill: C.purple, ls: 2 })}
    ${text(452, 120, "30 Sep", { size: 12, weight: 700, fill: MUTED, anchor: "end" })}
    ${bases.map((b) => `<path d="M64 ${b + 8} H456" stroke="${RULE}" stroke-width="1.5"/>`).join("\n    ")}
    ${keys.map((k, i) => hand(k, x0, bases[i], 30).svg).join("\n    ")}
    ${keys.map((_, i) => num(62, bases[i] - 9, i)).join("\n    ")}
    ${hand("sign", 300, 514, 32).svg}
    <path d="M296 526 c 50 -6 100 -4 124 -1" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>`;

  const bridge = `<path d="M500 322 C 560 270, 616 372, 676 318" stroke="url(#vo-flow)" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M664 304 L684 316 L668 334" stroke="${C.purple}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  ${[0.18, 0.34, 0.5].map((f, i) => `<circle cx="${r(500 + f * 176)}" cy="${r(i % 2 ? 350 : 294)}" r="${4 - i}" fill="${i ? C.purpleL : INK}"/>`).join("")}
  ${sparkle(560, 236, 1.3, C.purpleL)}${sparkle(640, 410, 1, C.peach)}${sparkle(606, 256, 0.7, C.lav)}
  <rect x="514" y="398" width="152" height="34" rx="17" fill="${C.white}" filter="url(#soft)"/>
  ${mark(522, 403, 24, "vo-g")}
  ${text(554, 420, "reads as you write", { size: 12, weight: 700, fill: C.purple })}`;

  const rows = [
    ["PRESENTING COMPLAINT", "Headache for 2 weeks, fatigue", null],
    ["VITALS", "BP 138/88 mmHg · Pulse 78 · 82 kg", "Charted"],
    ["DIAGNOSIS", "Stage 1 hypertension", "ICD-10 I10"],
    ["PRESCRIPTION", "Amlodipine 5 mg · OD · 30 days", "Sent"],
    ["INVESTIGATIONS", "Lipid profile, HbA1c", "Ordered"],
    ["FOLLOW-UP", "Tue 28 Oct 2026, 10:30", "Booked"],
  ];
  const cx = 700;
  const cw = 460;
  const record = `<rect x="${cx}" y="60" width="${cw}" height="524" rx="24" fill="${C.white}" filter="url(#soft)"/>
  ${mark(cx + 28, 84, 40, "vo-g")}
  ${text(cx + 80, 102, "Encounter record", { size: 19, weight: 800 })}
  ${text(cx + 80, 122, "Aarav Mehta · 42 M · 30 Sep 2026", { size: 13, weight: 600, fill: MUTED })}
  ${rows
    .map(([label, value, tag], i) => {
      const y = 148 + i * 62;
      const c = tag ? chip(cx + cw - 24, y + 24, tag, { fg: ROW_COLORS[i], bg: C.white, size: 11.5, anchor: "end", h: 24 }) : null;
      return `<path d="M${cx + 24} ${y} H${cx + cw - 24}" stroke="${HAIR}" stroke-width="1.5"/>
  ${num(cx + 36, y + 31, i)}
  ${text(cx + 58, y + 25, label, { size: 10.5, weight: 800, fill: MUTED, ls: 1.4 })}
  ${text(cx + 58, y + 47, value, { size: 15, weight: 700 })}
  ${c ? c.svg.replace("<rect", `<rect stroke="${ROW_COLORS[i]}" stroke-opacity="0.35" stroke-width="1.5"`) : ""}`;
    })
    .join("\n  ")}
  <rect x="${cx + 20}" y="528" width="${cw - 40}" height="40" rx="12" fill="${C.mintL}"/>
  ${icon("check", cx + 34, 536, 24, "#2E7D4A", 2)}
  ${text(cx + 66, 553, "Shared with the patient portal · 0 fields typed", { size: 13.5, weight: 700, fill: "#2E7D4A" })}`;

  return doc(
    "Handwritten consultation note on the left, the structured health record Vital OS builds from it on the right",
    W,
    H,
    `  ${sheet}\n  ${bridge}\n  ${record}`,
    `${SOFT_SHADOW}${markGradient("vo-g")}
    <linearGradient id="vo-flow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${INK}"/><stop offset="1" stop-color="${C.purple}"/></linearGradient>`,
  );
}

/* ---------- product: one note, everything moves ---------- */

function ripple() {
  const W = 1000;
  const H = 720;
  const cx = 500;
  const cy = 360;
  const nodes = [
    ["record", "Health record", "Filed and coded", C.purple, C.lavL],
    ["pharmacy", "Pharmacy", "e-Prescription sent", "#2E7D4A", C.mintL],
    ["lab", "Lab", "Tests ordered", C.indigo, "#E3E7FA"],
    ["billing", "Billing", "Itemised bill ready", "#B4492E", C.peachL],
    ["portal", "Patient portal", "Notes and results shared", C.purple, C.lavL],
    ["bell", "Reminders", "Follow-up booked", C.indigo, "#E3E7FA"],
  ];
  const pos = nodes.map((_, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    return { x: cx + 300 * Math.cos(a), y: cy + 236 * Math.sin(a) };
  });
  const links = pos
    .map((p) => {
      const mx = (cx + p.x) / 2 + (p.y - cy) * 0.12;
      const my = (cy + p.y) / 2 - (p.x - cx) * 0.12;
      return `<path d="M${cx} ${cy} Q${r(mx)} ${r(my)} ${r(p.x)} ${r(p.y)}" stroke="${C.lav}" stroke-width="3" stroke-dasharray="1 10" stroke-linecap="round" fill="none"/>`;
    })
    .join("\n  ");
  const nodeSvg = nodes
    .map(([ic, label, sub, fg, bg], i) => {
      const { x, y } = pos[i];
      return `<g>
    <circle cx="${r(x)}" cy="${r(y)}" r="48" fill="${C.white}" filter="url(#soft)"/>
    <circle cx="${r(x)}" cy="${r(y)}" r="36" fill="${bg}"/>
    ${icon(ic, x - 18, y - 18, 36, fg, 1.9)}
    ${text(x, i === 0 ? y - 90 : y + 80, label, { size: 23, weight: 800, anchor: "middle" })}
    ${text(x, i === 0 ? y - 64 : y + 106, sub, { size: 18, weight: 600, fill: MUTED, anchor: "middle" })}
  </g>`;
    })
    .join("\n  ");
  const tab = tabletShell(360, 262, 280, 196, { bezel: 12, screenR: 12, shadow: false });
  const note = hand("rxShort", 392, 346, 30);
  const center = `<circle cx="${cx}" cy="${cy}" r="170" fill="${C.lavL}" opacity="0.55"/>
  <circle cx="${cx}" cy="${cy}" r="124" fill="${C.lavL}"/>
  <g filter="url(#soft)">${tab.svg}</g>
  <path d="M388 318 H612 M388 364 H612 M388 410 H612" stroke="${RULE}" stroke-width="1.5"/>
  ${note.svg}
  ${hand("sign", 470, 402, 26).svg}
  <g transform="translate(596 404)">${stylus(30, 170)}</g>`;
  return doc(
    "One handwritten prescription on the tablet updates the health record, pharmacy, lab, billing, patient portal and reminders at once",
    W,
    H,
    `  ${links}\n  ${center}\n  ${nodeSvg}`,
    `${SOFT_SHADOW}${STYLUS_GRADIENT}`,
  );
}

/* ---------- product: patient portal phone ---------- */

function phoneShell(w = 400, h = 820) {
  return `<rect width="${w}" height="${h}" rx="58" fill="${C.ink}"/>
  <rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="56" fill="none" stroke="#3A3A44" stroke-width="2"/>`;
}

function portalPhone() {
  const W = 400;
  const H = 820;
  const L = 32;
  const R = 368;
  const card = (y, h, fill = C.white) => `<rect x="${L - 4}" y="${y}" width="${R - L + 8}" height="${h}" rx="22" fill="${fill}" filter="url(#soft)"/>`;
  const label = (y, s, fill = MUTED) => text(L + 18, y, s, { size: 10.5, weight: 800, fill, ls: 1.4 });
  const row = (y, name, amount) => `${text(L + 18, y, name, { size: 13, weight: 600, fill: C.inkSoft })}${text(R - 18, y, amount, { size: 13, weight: 700, anchor: "end" })}`;
  const tabs = ["home", "record", "message", "billing"];

  const screen = `<rect x="14" y="14" width="${W - 28}" height="${H - 28}" rx="46" fill="${CREAM}"/>
  <rect x="145" y="26" width="110" height="30" rx="15" fill="#000"/>
  ${text(50, 47, "9:41", { size: 15, weight: 700 })}
  <path d="M312 46 v-4 M318 46 v-7 M324 46 v-10 M330 46 v-13" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round"/>
  <rect x="338" y="35" width="22" height="12" rx="3.5" fill="none" stroke="${C.ink}" stroke-width="1.6"/><rect x="340.5" y="37.5" width="15" height="7" rx="1.5" fill="${C.ink}"/>

  ${text(L, 96, "Good morning,", { size: 15, weight: 600, fill: MUTED })}
  ${text(L, 132, "Aarav", { size: 36, weight: 400, family: SERIF })}
  <circle cx="${R - 22}" cy="110" r="22" fill="${C.peach}"/>
  ${text(R - 22, 115, "AM", { size: 13, weight: 800, fill: "#7A3A26", anchor: "middle" })}

  <rect x="${L - 4}" y="156" width="${R - L + 8}" height="132" rx="24" fill="url(#vo-card)" filter="url(#soft)"/>
  ${icon("calendar", R - 92, 170, 76, "#FFFFFF", 1.2).replace('fill="none"', 'fill="none" opacity="0.16"')}
  ${text(L + 18, 186, "NEXT VISIT", { size: 10.5, weight: 800, fill: C.lav, ls: 1.4 })}
  ${text(L + 18, 216, "Tue, 28 Oct · 10:30", { size: 21, weight: 800, fill: C.white })}
  ${text(L + 18, 238, "Dr. Anika Mehra · Follow-up", { size: 13, weight: 600, fill: C.lavL })}
  <rect x="${L + 18}" y="252" width="108" height="26" rx="13" fill="${C.white}"/>
  ${text(L + 72, 269, "Join by video", { size: 11.5, weight: 800, fill: C.purple, anchor: "middle" })}
  <rect x="${L + 134}" y="252" width="92" height="26" rx="13" fill="none" stroke="${C.lav}" stroke-width="1.5"/>
  ${text(L + 180, 269, "Directions", { size: 11.5, weight: 800, fill: C.white, anchor: "middle" })}

  ${card(304, 152)}
  ${label(332, "YOUR PRESCRIPTION")}
  ${text(R - 18, 332, "in your doctor's hand", { size: 11, weight: 600, fill: C.purple, anchor: "end", italic: true })}
  ${hand("rxShort", L + 18, 372, 27).svg}
  <path d="M${L + 18} 384 H${R - 18}" stroke="${HAIR}" stroke-width="1.5"/>
  ${text(L + 18, 408, "Amlodipine 5 mg", { size: 16, weight: 800 })}
  ${text(L + 18, 427, "Once daily · 30 days", { size: 12.5, weight: 600, fill: MUTED })}
  ${text(R - 18, 408, "Refill in 12 days", { size: 11.5, weight: 800, fill: C.purple, anchor: "end" })}
  <rect x="${L + 18}" y="438" width="${R - L - 36}" height="6" rx="3" fill="${C.lavL}"/>
  <rect x="${L + 18}" y="438" width="${r((R - L - 36) * 0.6)}" height="6" rx="3" fill="${C.purple}"/>

  ${card(472, 112)}
  ${label(500, "LAB RESULTS")}
  ${chip(R - 18, 484, "Reviewed", { fg: "#2E7D4A", bg: C.mintL, size: 11, h: 22, anchor: "end", dot: true }).svg}
  ${text(L + 18, 526, "Lipid profile", { size: 16, weight: 800 })}
  ${text(R - 18, 526, "LDL 96 mg/dL", { size: 13, weight: 700, fill: C.inkSoft, anchor: "end" })}
  <rect x="${L + 18}" y="545" width="${R - L - 36}" height="10" rx="5" fill="#F1ECE6"/>
  <rect x="${L + 18}" y="545" width="190" height="10" rx="5" fill="${C.mintL}"/>
  <circle cx="${L + 140}" cy="550" r="7" fill="${C.mint}" stroke="#fff" stroke-width="2.5"/>
  ${text(L + 18, 572, "In the healthy range · explained in plain words", { size: 11, weight: 600, fill: MUTED })}

  ${card(598, 138)}
  ${label(624, "BILL · 30 SEP · EVERY RUPEE ITEMISED")}
  ${row(650, "Consultation", "₹800")}
  ${row(670, "Lipid profile", "₹450")}
  ${row(690, "HbA1c", "₹200")}
  <path d="M${L + 18} 700 H${R - 18}" stroke="${HAIR}" stroke-width="1.5" stroke-dasharray="3 4"/>
  ${text(L + 18, 720, "Total · paid", { size: 13, weight: 800 })}
  ${text(R - 18, 720, "₹1,450", { size: 15, weight: 800, fill: C.purple, anchor: "end" })}

  <path d="M14 744 H${W - 14} V760 a46 46 0 0 1 -46 46 H60 a46 46 0 0 1 -46 -46 Z" fill="${C.white}"/>
  <path d="M14 744 H${W - 14}" stroke="${HAIR}" stroke-width="1.5"/>
  ${tabs.map((n, i) => icon(n, 58 + i * 88, 754, 24, i === 0 ? C.purple : "#9A98A6", 1.9)).join("\n  ")}
  <circle cx="70" cy="786" r="2.5" fill="${C.purple}"/>
  <rect x="135" y="794" width="130" height="5" rx="2.5" fill="${C.ink}"/>`;

  return doc(
    "The Vital OS patient portal on a phone: next visit, the prescription in the doctor's handwriting and typed out, lab results in plain words, and an itemised bill",
    W,
    H,
    `  ${phoneShell(W, H)}\n  ${screen}`,
    `${SOFT_SHADOW}
    <linearGradient id="vo-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.purpleL}"/><stop offset="1" stop-color="${C.purple}"/></linearGradient>`,
  );
}

/* ---------- product: doctor's day dashboard ---------- */

function dashboard() {
  const W = 1200;
  const H = 840;
  const tab = tabletShell(20, 20, 1160, 790, { bezel: 24, screen: CREAM, shadow: false });
  const s = tab.s;
  const panel = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="${C.white}" stroke="${HAIR}" stroke-width="1.5"/>`;

  const side = `<path d="M${s.x + s.r} ${s.y} H${s.x + 84} V${s.y + s.h} H${s.x + s.r} a${s.r} ${s.r} 0 0 1 -${s.r} -${s.r} V${s.y + s.r} a${s.r} ${s.r} 0 0 1 ${s.r} -${s.r} Z" fill="#F1ECFB"/>
  ${mark(s.x + 20, s.y + 22, 44, "vo-g")}
  <rect x="${s.x + 18}" y="${s.y + 104}" width="48" height="48" rx="14" fill="${C.purple}"/>
  ${icon("home", s.x + 30, s.y + 116, 24, C.white, 2)}
  ${["calendar", "record", "message", "insights", "billing"].map((n, i) => icon(n, s.x + 30, s.y + 180 + i * 64, 24, "#7C7A8C", 1.9)).join("\n  ")}
  <circle cx="${s.x + 42}" cy="${s.y + s.h - 42}" r="20" fill="${C.skin3}"/>
  ${text(s.x + 42, s.y + s.h - 37, "AM", { size: 12, weight: 800, fill: "#5A3A12", anchor: "middle" })}`;

  const mx = s.x + 112;
  const head = `${text(mx, s.y + 62, "Good morning, Dr. Mehra", { size: 34, weight: 400, family: SERIF })}
  ${text(mx, s.y + 88, "Tuesday, 30 September · 14 patients booked", { size: 14, weight: 600, fill: MUTED })}
  <rect x="${s.x + s.w - 196}" y="${s.y + 36}" width="168" height="44" rx="22" fill="${C.purple}"/>
  ${icon("stylus", s.x + s.w - 176, s.y + 46, 24, C.white, 2)}
  ${text(s.x + s.w - 144, s.y + 63, "New note", { size: 15, weight: 800, fill: C.white })}`;

  const stats = [
    ["Notes filed from your pen", "9", "of 9 today", C.purple],
    ["Time spent typing", "0 min", "handwriting only", "#2E7D4A"],
    ["Lab results back", "3", "1 needs your eyes", "#B4492E"],
    ["Portal messages", "5", "2 unread", C.indigo],
  ];
  const tileW = (s.w - 112 - 28 - 48) / 4;
  const tiles = stats
    .map(([label, value, sub, fg], i) => {
      const x = mx + i * (tileW + 16);
      const y = s.y + 114;
      return `${panel(r(x), y, r(tileW), 104)}
  ${text(x + 20, y + 30, label, { size: 12.5, weight: 700, fill: MUTED })}
  ${text(x + 20, y + 70, value, { size: 30, weight: 800 })}
  ${text(x + 20, y + 91, sub, { size: 12, weight: 700, fill: fg })}`;
    })
    .join("\n  ");

  const qx = mx;
  const qy = s.y + 238;
  const qw = 604;
  const qh = s.h - 238 - 24;
  const queue = [
    ["10:30", "Aarav Mehta", "Hypertension review", "In consult", C.purple, C.lavL, C.peach],
    ["10:50", "Priya Nair", "Pregnancy · 24 weeks", "Checked in", "#2E7D4A", C.mintL, C.mintL],
    ["11:10", "Rohan Das", "Type 2 diabetes · HbA1c back", "Waiting", "#B4492E", C.peachL, C.lav],
    ["11:30", "Meera Iyer", "Skin rash · 5 days", "Form done", "#2E7D4A", C.mintL, C.peachL],
    ["11:50", "Kabir Shah", "Annual physical", "Booked", C.purple, C.lavL, C.beigeL],
    ["12:10", "Sana Qureshi", "Anxiety follow-up", "Video", C.indigo, "#E3E7FA", C.mintL],
  ];
  const queueSvg = `${panel(qx, qy, qw, qh)}
  ${text(qx + 24, qy + 38, "Today's queue", { size: 17, weight: 800 })}
  ${chip(qx + qw - 24, qy + 20, "Live", { fg: "#2E7D4A", bg: C.mintL, size: 11.5, anchor: "end", dot: true }).svg}
  ${queue
    .map(([time, name, reason, status, fg, bg, av], i) => {
      const y = qy + 60 + i * 66;
      const initials = name.split(" ").map((p) => p[0]).join("");
      return `<path d="M${qx + 24} ${y} H${qx + qw - 24}" stroke="${HAIR}" stroke-width="1.5"/>
  ${text(qx + 24, y + 39, time, { size: 14, weight: 800, fill: i === 0 ? C.purple : C.ink })}
  <circle cx="${qx + 104}" cy="${y + 33}" r="18" fill="${av}"/>
  ${text(qx + 104, y + 37.5, initials, { size: 12, weight: 800, fill: C.inkSoft, anchor: "middle" })}
  ${text(qx + 134, y + 29, name, { size: 15, weight: 800 })}
  ${text(qx + 134, y + 49, reason, { size: 12.5, weight: 600, fill: MUTED })}
  ${chip(qx + qw - 24, y + 21, status, { fg, bg, size: 11.5, anchor: "end" }).svg}`;
    })
    .join("\n  ")}`;

  const px = qx + qw + 16;
  const pw = s.x + s.w - 28 - px;
  const filed = [
    ["rxShort", "e-Rx", "Amlodipine 5 mg", "#2E7D4A", C.mintL],
    ["dx", "Dx", "Stage 1 HTN · I10", C.purple, C.lavL],
    ["review", "Booked", "Tue 28 Oct · 10:30", C.indigo, "#E3E7FA"],
  ];
  const filedSvg = `${panel(px, qy, pw, 240)}
  ${text(px + 22, qy + 38, "Just filed from your pen", { size: 16, weight: 800 })}
  ${filed
    .map(([key, tag, value, fg, bg], i) => {
      const y = qy + 56 + i * 60;
      return `<rect x="${px + 18}" y="${y}" width="${pw - 36}" height="56" rx="14" fill="${CREAM}"/>
  <g transform="translate(${px + 30} ${y + 36}) scale(0.9)">${hand(key, 0, 0, 20).svg}</g>
  ${text(px + 194, y + 24, tag.toUpperCase(), { size: 10, weight: 800, fill: fg, ls: 1.2 })}
  ${text(px + 194, y + 43, value, { size: 13, weight: 700 })}
  <path d="M${px + 162} ${y + 28} h10 m-4 -4 l4 4 l-4 4" stroke="${C.lav}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="${px + 184}" y="${y + 12}" width="4" height="32" rx="2" fill="${bg}"/>`;
    })
    .join("\n  ")}`;

  const ly = qy + 256;
  const labs = [
    ["Rohan Das", "HbA1c 8.1%", "High", "#B4492E", C.peachL],
    ["Aarav Mehta", "Lipid profile", "Normal", "#2E7D4A", C.mintL],
    ["Meera Iyer", "CBC", "Pending", C.purple, C.lavL],
  ];
  const labSvg = `${panel(px, ly, pw, qy + qh - ly)}
  ${text(px + 22, ly + 36, "Lab results", { size: 16, weight: 800 })}
  ${labs
    .map(([name, test, flag, fg, bg], i) => {
      const y = ly + 50 + i * 52;
      return `${icon("lab", px + 22, y + 10, 22, fg, 1.9)}
  ${text(px + 56, y + 20, name, { size: 14, weight: 800 })}
  ${text(px + 56, y + 38, test, { size: 12.5, weight: 600, fill: MUTED })}
  ${chip(px + pw - 22, y + 10, flag, { fg, bg, size: 11.5, anchor: "end" }).svg}`;
    })
    .join("\n  ")}`;

  return doc(
    "The Vital OS doctor's home screen on a tablet: today's queue, notes filed from handwriting, lab results and portal messages",
    W,
    H,
    `  ${tab.svg}\n  ${side}\n  ${head}\n  ${tiles}\n  ${queueSvg}\n  ${filedSvg}\n  ${labSvg}`,
    `${SOFT_SHADOW}${markGradient("vo-g")}`,
  );
}

/* ---------- product: empty device frames and stylus ---------- */

function tabletFrame() {
  const W = 1200;
  const H = 860;
  const b = 26;
  const R = 50;
  const sr = 24;
  return doc(
    "Tablet frame",
    W,
    H,
    `  <!-- Screen opening: x=${b} y=${b} width=${W - 2 * b} height=${H - 2 * b} radius=${sr}. Place content underneath. -->
  <path fill-rule="evenodd" fill="${C.ink}" d="M${R} 0 H${W - R} a${R} ${R} 0 0 1 ${R} ${R} V${H - R} a${R} ${R} 0 0 1 -${R} ${R} H${R} a${R} ${R} 0 0 1 -${R} -${R} V${R} a${R} ${R} 0 0 1 ${R} -${R} Z M${b + sr} ${b} a${sr} ${sr} 0 0 0 -${sr} ${sr} V${H - b - sr} a${sr} ${sr} 0 0 0 ${sr} ${sr} H${W - b - sr} a${sr} ${sr} 0 0 0 ${sr} -${sr} V${b + sr} a${sr} ${sr} 0 0 0 -${sr} -${sr} Z"/>
  <rect x="1.5" y="1.5" width="${W - 3}" height="${H - 3}" rx="${R - 1.5}" fill="none" stroke="#3A3A44" stroke-width="2"/>
  <circle cx="${W / 2}" cy="${b / 2}" r="3.5" fill="#34343D"/>`,
  );
}

function phoneFrame() {
  const W = 400;
  const H = 820;
  const b = 14;
  const R = 58;
  const sr = 46;
  return doc(
    "Phone frame",
    W,
    H,
    `  <!-- Screen opening: x=${b} y=${b} width=${W - 2 * b} height=${H - 2 * b} radius=${sr}. Place content underneath. -->
  <path fill-rule="evenodd" fill="${C.ink}" d="M${R} 0 H${W - R} a${R} ${R} 0 0 1 ${R} ${R} V${H - R} a${R} ${R} 0 0 1 -${R} ${R} H${R} a${R} ${R} 0 0 1 -${R} -${R} V${R} a${R} ${R} 0 0 1 ${R} -${R} Z M${b + sr} ${b} a${sr} ${sr} 0 0 0 -${sr} ${sr} V${H - b - sr} a${sr} ${sr} 0 0 0 ${sr} ${sr} H${W - b - sr} a${sr} ${sr} 0 0 0 ${sr} -${sr} V${b + sr} a${sr} ${sr} 0 0 0 -${sr} -${sr} Z"/>
  <rect x="2" y="2" width="${W - 4}" height="${H - 4}" rx="${R - 2}" fill="none" stroke="#3A3A44" stroke-width="2"/>
  <rect x="145" y="26" width="110" height="30" rx="15" fill="#000"/>`,
  );
}

const stylusAsset = () =>
  doc("Vital OS stylus", 60, 440, `  <g transform="translate(30 426)">${stylus(0, 410)}</g>`, STYLUS_GRADIENT);

/* ---------- gouache: feature illustrations ---------- */

const tabletG = (x, y, w, h, screen = C.paper) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.ink}"/><rect x="${x + 7}" y="${y + 7}" width="${w - 14}" height="${h - 14}" rx="6" fill="${screen}"/>`;

const penG = (x, y, angle = 38, len = 86) =>
  `<g transform="translate(${x} ${y}) rotate(${angle})"><path d="M-5 -13 L0 0 L5 -13 Z" fill="${C.beige}"/><rect x="-5" y="${-len}" width="10" height="${len - 12}" rx="5" fill="${C.lavL}"/><rect x="-5" y="-30" width="10" height="5" fill="${C.purple}"/><rect x="-5" y="${-len}" width="10" height="14" rx="5" fill="${C.purple}"/></g>`;

const check = (cx, cy, rad = 13) =>
  `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="${C.mint}"/><path d="M${cx - rad * 0.5} ${cy} l${rad * 0.36} ${rad * 0.36} l${rad * 0.66} -${rad * 0.72}" stroke="${C.white}" stroke-width="${r(rad * 0.26)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

const scribble = (x, y, w, color = INK, sw = 2.4) => {
  let d = `M${x} ${y}`;
  for (let i = 0; i < w; i += 8) d += ` q2 -5 4 0 t4 0`;
  return `<path d="${d}" stroke="${color}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`;
};

const FEATURES = {
  handwriting: [
    "A stylus writing naturally on the Vital OS tablet",
    `
    ${tabletG(22, 34, 184, 124)}
    <path d="M36 84 H192 M36 110 H192 M36 136 H192" stroke="${C.lavL}" stroke-width="2"/>
    ${hand("keepWriting", 40, 102, 22).svg}
    ${scribble(40, 128, 72)}
    ${penG(170, 126, 36)}
    ${sparkle(212, 36, 1.1, C.purpleL)}
    ${sparkle(30, 22, 0.8, C.peach)}
    `,
  ],
  "auto-records": [
    "A handwritten note turning into neat digital record cards",
    `
    <g transform="rotate(-6 64 92)">
      <rect x="22" y="36" width="84" height="112" rx="6" fill="${C.paper}"/>
      ${scribble(32, 60, 60)}${scribble(32, 80, 48)}${scribble(32, 100, 64)}${scribble(32, 120, 40)}
    </g>
    <path d="M112 92 C 122 80, 130 104, 140 92" stroke="${C.purple}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M134 84 L142 92 L134 100" stroke="${C.purple}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${[
      [44, C.coral],
      [82, C.purple],
      [120, C.mint],
    ]
      .map(
        ([y, c]) =>
          `<rect x="150" y="${y}" width="72" height="30" rx="8" fill="${C.white}"/><rect x="157" y="${y + 8}" width="14" height="14" rx="4" fill="${c}"/><rect x="177" y="${y + 9}" width="36" height="5" rx="2.5" fill="${C.ink}"/><rect x="177" y="${y + 18}" width="24" height="4" rx="2" fill="${C.beige}"/>`,
      )
      .join("")}
    ${check(216, 40, 11)}
    ${sparkle(126, 56, 0.8, C.purpleL)}
    `,
  ],
  "e-prescription": [
    "A handwritten prescription sent straight to the patient's phone",
    `
    <rect x="24" y="28" width="104" height="130" rx="8" fill="${C.white}"/>
    <rect x="24" y="28" width="104" height="22" rx="8" fill="${C.purple}"/><rect x="24" y="40" width="104" height="10" fill="${C.purple}"/>
    <text x="34" y="80" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="24" fill="${C.purple}">Rx</text>
    ${hand("rxShort", 34, 106, 13.5).svg}
    ${scribble(34, 128, 56)}
    ${scribble(34, 144, 34, C.beige)}
    <path d="M132 96 C 144 70, 160 70, 164 78" stroke="${C.purpleL}" stroke-width="3" stroke-dasharray="4 7" stroke-linecap="round" fill="none"/>
    <rect x="152" y="54" width="62" height="108" rx="12" fill="${C.ink}"/>
    <rect x="158" y="62" width="50" height="92" rx="7" fill="${C.lavL}"/>
    <g transform="rotate(-35 183 100)"><rect x="165" y="92" width="36" height="16" rx="8" fill="${C.mint}"/><rect x="183" y="92" width="18" height="16" rx="8" fill="${C.mintL}"/><rect x="183" y="92" width="8" height="16" fill="${C.mintL}"/></g>
    <rect x="166" y="126" width="34" height="5" rx="2.5" fill="${C.purple}"/>
    <rect x="166" y="136" width="22" height="4" rx="2" fill="${C.beige}"/>
    <circle cx="210" cy="56" r="7" fill="${C.coral}"/>
    `,
  ],
  "patient-portal": [
    "A patient checking her records on the patient portal",
    `
    ${standing({ x: 70, top: C.coral, pants: C.indigo, skin: C.skin2, hairStyle: "long", arm: "hold" })}
    <rect x="96" y="70" width="16" height="26" rx="3" fill="${C.ink}"/>
    <path d="M112 76 C 124 64, 128 58, 134 52" stroke="${C.purpleL}" stroke-width="2.5" stroke-dasharray="3 6" stroke-linecap="round" fill="none"/>
    <rect x="132" y="22" width="88" height="124" rx="12" fill="${C.white}"/>
    <rect x="132" y="22" width="88" height="26" rx="12" fill="${C.purple}"/><rect x="132" y="36" width="88" height="12" fill="${C.purple}"/>
    ${heartPath(150, 38, 0.55, C.white)}
    <rect x="164" y="31" width="40" height="5" rx="2.5" fill="${C.lav}"/>
    <circle cx="146" cy="66" r="5" fill="${C.mint}"/><rect x="156" y="63" width="50" height="6" rx="3" fill="${C.ink}"/>
    <circle cx="146" cy="84" r="5" fill="${C.coral}"/><rect x="156" y="81" width="40" height="6" rx="3" fill="${C.ink}"/>
    <path d="M142 128 L156 114 L168 120 L186 100 L206 106" stroke="${C.purple}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${sparkle(222, 160, 0.8, C.peach)}
    `,
  ],
  "transparent-billing": [
    "An itemised bill examined under a magnifying glass",
    `
    <path d="M52 24 H154 V150 l-8.5 -6 l-8.5 6 l-8.5 -6 l-8.5 6 l-8.5 -6 l-8.5 6 l-8.5 -6 l-8.5 6 l-8.5 -6 l-8.5 6 l-8.5 -6 l-8.5 6 Z" fill="${C.white}"/>
    <rect x="66" y="40" width="44" height="7" rx="3.5" fill="${C.purple}"/>
    ${[62, 78, 94, 110].map((y) => `<rect x="66" y="${y}" width="46" height="5" rx="2.5" fill="${C.beige}"/><rect x="122" y="${y}" width="20" height="5" rx="2.5" fill="${C.ink}"/>`).join("")}
    <path d="M66 124 H142" stroke="${C.beigeL}" stroke-width="2.5" stroke-dasharray="3 4"/>
    <rect x="66" y="132" width="30" height="7" rx="3.5" fill="${C.ink}"/><rect x="114" y="132" width="28" height="7" rx="3.5" fill="${C.purple}"/>
    <circle cx="168" cy="98" r="30" fill="${C.lavL}" fill-opacity="0.8"/>
    <text x="168" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="38" fill="${C.purple}">₹</text>
    <circle cx="168" cy="98" r="30" fill="none" stroke="${C.indigo}" stroke-width="7"/>
    <path d="M190 120 L210 142" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/>
    ${check(50, 30, 14)}
    `,
  ],
  "lab-integration": [
    "Lab samples flowing into a results chart on the tablet",
    `
    <rect x="22" y="118" width="84" height="12" rx="4" fill="${C.beige}"/>
    <rect x="28" y="130" width="6" height="26" fill="${C.beige}"/><rect x="94" y="130" width="6" height="26" fill="${C.beige}"/>
    ${[
      [32, 56, C.purple],
      [56, 50, C.mint],
      [80, 60, C.coral],
    ]
      .map(
        ([x, y, c]) =>
          `<rect x="${x}" y="${y}" width="14" height="${124 - y}" rx="7" fill="${C.lavL}" stroke="${C.lav}" stroke-width="2"/><rect x="${x}" y="${y + (124 - y) * 0.45}" width="14" height="${r((124 - y) * 0.55)}" rx="7" fill="${c}"/><rect x="${x - 2}" y="${y - 5}" width="18" height="7" rx="2" fill="${C.ink}"/>`,
      )
      .join("")}
    <path d="M106 80 C 118 66, 126 66, 134 72" stroke="${C.purpleL}" stroke-width="3" stroke-dasharray="4 7" stroke-linecap="round" fill="none"/>
    ${tabletG(128, 48, 94, 76, C.white)}
    <path d="M142 106 L156 94 L168 100 L184 80 L206 86" stroke="${C.purple}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="184" cy="80" r="4.5" fill="${C.coral}"/>
    <rect x="142" y="62" width="30" height="5" rx="2.5" fill="${C.ink}"/>
    ${check(214, 50, 12)}
    `,
  ],
  "smart-scheduling": [
    "A calendar filling itself with booked appointments",
    `
    <rect x="30" y="34" width="144" height="124" rx="12" fill="${C.white}"/>
    <rect x="30" y="34" width="144" height="30" rx="12" fill="${C.purple}"/><rect x="30" y="50" width="144" height="14" fill="${C.purple}"/>
    <rect x="56" y="24" width="8" height="20" rx="4" fill="${C.ink}"/><rect x="140" y="24" width="8" height="20" rx="4" fill="${C.ink}"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const cx = 42 + (i % 4) * 32;
      const cy = 74 + Math.floor(i / 4) * 27;
      const fill = [C.lav, C.paper, C.purple, C.paper, C.mint, C.lav, C.paper, C.purpleL, C.paper, C.coral, C.lav, C.paper][i];
      return `<rect x="${cx}" y="${cy}" width="24" height="20" rx="5" fill="${fill}"/>`;
    }).join("")}
    <path d="M186 96 v-14 a16 16 0 0 1 32 0 v14 l5 6 h-42 z" fill="${C.peach}"/>
    <circle cx="202" cy="110" r="5" fill="${C.ink}"/>
    <circle cx="218" cy="66" r="7" fill="${C.coral}"/>
    ${sparkle(206, 144, 0.9, C.purpleL)}
    `,
  ],
  "time-back": [
    "A clock winding back, giving doctors time for patients",
    `
    <path d="M40 92 A 72 72 0 1 1 72 150" stroke="${C.lav}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M26 82 L40 96 L54 80" stroke="${C.lav}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="120" cy="92" r="52" fill="${C.white}"/>
    <circle cx="120" cy="92" r="52" fill="none" stroke="${C.purple}" stroke-width="8"/>
    ${[0, 90, 180, 270].map((a) => `<rect x="118" y="46" width="4" height="10" rx="2" fill="${C.beige}" transform="rotate(${a} 120 92)"/>`).join("")}
    <path d="M120 92 V64 M120 92 L140 104" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="120" cy="92" r="5" fill="${C.ink}"/>
    ${heartPath(196, 44, 1, C.coral)}
    ${heartPath(210, 76, 0.55, C.peach)}
    ${sparkle(36, 30, 1, C.purpleL)}
    `,
  ],
  "secure-records": [
    "A shield with a lock protecting a patient's records",
    `
    <path d="M36 50 h40 l10 12 h92 a8 8 0 0 1 8 8 v76 a8 8 0 0 1 -8 8 h-142 a8 8 0 0 1 -8 -8 v-88 a8 8 0 0 1 8 -8 z" fill="${C.beige}"/>
    <rect x="46" y="38" width="80" height="100" rx="4" fill="${C.white}" transform="rotate(-8 86 88)"/>
    <rect x="60" y="34" width="80" height="100" rx="4" fill="${C.paper}"/>
    ${scribble(70, 58, 50)}${scribble(70, 76, 38)}
    <path d="M28 86 h150 a8 8 0 0 1 8 8 v52 a8 8 0 0 1 -8 8 h-150 a8 8 0 0 1 -8 -8 v-52 a8 8 0 0 1 8 -8 z" fill="${C.beigeL}"/>
    <path d="M170 38 l36 14 v28 c0 26 -16 44 -36 52 c-20 -8 -36 -26 -36 -52 v-28 z" fill="${C.purple}"/>
    <rect x="158" y="80" width="24" height="20" rx="4" fill="${C.white}"/>
    <path d="M163 80 v-6 a7 7 0 0 1 14 0 v6" stroke="${C.white}" stroke-width="4" fill="none"/>
    <circle cx="170" cy="90" r="3" fill="${C.purple}"/>
    ${sparkle(218, 34, 1, C.peach)}
    `,
  ],
  "offline-sync": [
    "A tablet syncing notes to the cloud, even after working offline",
    `
    ${tabletG(22, 70, 108, 80)}
    ${scribble(38, 100, 64)}${scribble(38, 120, 44)}
    <path d="M150 74 a22 22 0 0 1 8 -42 a28 28 0 0 1 52 8 a18 18 0 0 1 2 36 z" fill="${C.lav}"/>
    <path d="M120 60 C 124 40, 140 34, 152 38" stroke="${C.purple}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M146 30 L154 38 L144 44" stroke="${C.purple}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M178 86 C 176 108, 160 118, 142 116" stroke="${C.mint}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M148 108 L140 116 L148 124" stroke="${C.mint}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 48 q14 -12 28 0 M46 55 q8 -6 16 0" stroke="${C.ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <circle cx="54" cy="62" r="3" fill="${C.ink}"/>
    <path d="M36 38 L72 66" stroke="${C.coral}" stroke-width="4" stroke-linecap="round"/>
    ${check(196, 142, 13)}
    `,
  ],
  "anatomy-sketch": [
    "A doctor's sketch circled on a body diagram on the tablet",
    `
    ${tabletG(34, 20, 172, 144)}
    <circle cx="100" cy="46" r="10" fill="${C.beige}"/>
    <path d="M86 60 h28 l6 44 h-10 l-2 44 h-9 l-3 -34 l-3 34 h-9 l-2 -44 h-10 z" fill="${C.beigeL}"/>
    <path d="M86 62 l-12 38 M114 62 l12 38" stroke="${C.beigeL}" stroke-width="8" stroke-linecap="round"/>
    <path d="M104 118 c -14 -4, -12 -20, 2 -20 c 14 0, 16 18, 2 21 c -6 1, -10 -2, -11 -4" stroke="${C.coral}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M122 110 C 136 104, 146 96, 150 88" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M144 88 l7 -1 l-1 7" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${scribble(150, 76, 40)}${scribble(150, 92, 28)}
    ${penG(196, 150, 34, 74)}
    `,
  ],
  "practice-insights": [
    "A practice dashboard with rising bars and a trend line",
    `
    <rect x="26" y="28" width="188" height="130" rx="12" fill="${C.white}"/>
    <rect x="42" y="42" width="54" height="7" rx="3.5" fill="${C.ink}"/>
    ${[
      [48, 46, C.lav],
      [74, 62, C.lav],
      [100, 58, C.purpleL],
      [126, 78, C.purpleL],
      [152, 92, C.purple],
    ]
      .map(([x, h, c]) => `<rect x="${x}" y="${144 - h}" width="18" height="${h}" rx="5" fill="${c}"/>`)
      .join("")}
    <path d="M56 96 L82 84 L108 88 L134 66 L160 50" stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="160" cy="50" r="5" fill="${C.coral}"/>
    <circle cx="192" cy="56" r="14" fill="none" stroke="${C.mintL}" stroke-width="8"/>
    <path d="M192 42 a14 14 0 0 1 13 19" stroke="${C.mint}" stroke-width="8" fill="none"/>
    ${sparkle(212, 20, 1, C.purpleL)}
    `,
  ],
  "shared-view": [
    "Doctor and patient looking at the same record together",
    `
    ${standing({ x: 50, top: C.purple, coat: "#E4E0F2", pants: C.indigo, skin: C.skin1, hairStyle: "short", arm: "gesture" })}
    <g transform="translate(380 0) scale(-1 1)">${standing({ x: 190, top: C.mint, pants: C.inkSoft, skin: C.skin3, hairStyle: "bun", arm: "gesture" })}</g>
    <rect x="92" y="22" width="56" height="74" rx="8" fill="${C.white}"/>
    ${heartPath(120, 42, 0.6, C.coral)}
    <rect x="102" y="58" width="36" height="5" rx="2.5" fill="${C.ink}"/>
    <rect x="102" y="68" width="26" height="4" rx="2" fill="${C.beige}"/>
    <rect x="102" y="78" width="32" height="4" rx="2" fill="${C.beige}"/>
    ${sparkle(120, 110, 0.9, C.purpleL)}
    `,
  ],
};

/* ---------- gouache: before / after ---------- */

const STORY = {
  "before-paperwork": [
    "Before: a doctor typing at a computer with their back to the patient, buried in paperwork",
    `
    <circle cx="124" cy="32" r="16" fill="${C.white}"/><circle cx="124" cy="32" r="16" fill="none" stroke="${C.beige}" stroke-width="4"/>
    <path d="M124 32 V22 M124 32 L132 38" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="122" width="84" height="14" rx="6" fill="${C.beige}"/>
    <rect x="20" y="134" width="7" height="30" rx="2" fill="${C.beige}"/><rect x="82" y="134" width="7" height="30" rx="2" fill="${C.beige}"/>
    ${seated({ x: 40, top: C.peach, pants: C.indigo, skin: C.skin3, hairStyle: "short" })}
    <path d="M30 14 h40 a10 10 0 0 1 10 10 v8 a10 10 0 0 1 -10 10 h-24 l-8 8 l1 -8 h-9 a10 10 0 0 1 -10 -10 v-8 a10 10 0 0 1 10 -10 z" fill="${C.lavL}"/>
    <circle cx="40" cy="28" r="3" fill="${C.ink}"/><circle cx="50" cy="28" r="3" fill="${C.ink}"/><circle cx="60" cy="28" r="3" fill="${C.ink}"/>
    <rect x="148" y="122" width="44" height="12" rx="5" fill="${C.beige}"/><rect x="166" y="132" width="7" height="32" fill="${C.beige}"/>
    ${seated({ x: 166, top: C.purple, pants: C.inkSoft, skin: C.skin1, hairStyle: "short" })}
    <rect x="200" y="102" width="150" height="10" rx="3" fill="${C.beige}"/>
    <rect x="210" y="110" width="7" height="54" fill="${C.beige}"/><rect x="334" y="110" width="7" height="54" fill="${C.beige}"/>
    <rect x="194" y="96" width="40" height="6" rx="2" fill="${C.inkSoft}"/>
    <rect x="236" y="36" width="78" height="54" rx="5" fill="${C.ink}"/><rect x="242" y="42" width="66" height="42" rx="2" fill="${C.lavL}"/>
    <path d="M250 52 h40 M250 60 h48 M250 68 h30 M250 76 h44" stroke="${C.lav}" stroke-width="3" stroke-linecap="round"/>
    <rect x="268" y="90" width="14" height="12" fill="${C.inkSoft}"/>
    <rect x="228" y="34" width="16" height="16" fill="${C.peach}" transform="rotate(-10 236 42)"/>
    <rect x="304" y="40" width="16" height="16" fill="${C.mintL}" transform="rotate(8 312 48)"/>
    <rect x="306" y="62" width="16" height="16" fill="${C.coral}" transform="rotate(-6 314 70)"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${318 + (i % 2) * 3}" y="${94 - i * 7}" width="30" height="7" rx="1" fill="${i % 2 ? C.paper : C.white}" stroke="${C.beigeL}" stroke-width="1"/>`).join("")}
    <rect x="236" y="154" width="30" height="20" rx="1" fill="${C.white}" transform="rotate(-14 251 164)"/>
    <rect x="282" y="158" width="28" height="18" rx="1" fill="${C.paper}" transform="rotate(10 296 167)"/>
    `,
  ],
  "after-vital-os": [
    "After: a doctor faces the patient and writes on the Vital OS tablet while the records update themselves",
    `
    <rect x="30" y="122" width="96" height="14" rx="6" fill="${C.beige}"/>
    <rect x="38" y="134" width="7" height="30" rx="2" fill="${C.beige}"/><rect x="110" y="134" width="7" height="30" rx="2" fill="${C.beige}"/>
    ${seated({ x: 70, top: C.coral, pants: C.indigo, skin: C.skin2, hairStyle: "bun" })}
    <g transform="translate(460 0) scale(-1 1)">${standing({ x: 230, top: C.purple, coat: "#E4E0F2", pants: C.indigo, skin: C.skin3, hairStyle: "long", arm: "hold" })}</g>
    <g transform="rotate(-12 190 82)">
      <rect x="170" y="66" width="36" height="28" rx="4" fill="${C.ink}"/><rect x="173" y="69" width="30" height="22" rx="2" fill="${C.paper}"/>
      <path d="M176 76 q2 -3 4 0 t4 0 t4 0 t4 0 M176 84 q2 -3 4 0 t4 0 t4 0" stroke="${INK}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    </g>
    ${heartPath(148, 44, 1.6, C.peachL)}
    ${heartPath(148, 44, 0.7, C.coral)}
    <path d="M198 62 C 206 14, 246 12, 262 28" stroke="${C.purpleL}" stroke-width="2.5" stroke-dasharray="3 6" stroke-linecap="round" fill="none"/>
    ${[
      [18, C.coral],
      [48, C.purple],
      [78, C.mint],
    ]
      .map(
        ([y, c]) =>
          `<rect x="266" y="${y}" width="78" height="24" rx="7" fill="${C.white}"/><rect x="272" y="${y + 6}" width="12" height="12" rx="3.5" fill="${c}"/><rect x="290" y="${y + 7}" width="38" height="4.5" rx="2" fill="${C.ink}"/><rect x="290" y="${y + 14}" width="24" height="3.5" rx="1.7" fill="${C.beige}"/>`,
      )
      .join("")}
    ${sparkle(330, 118, 1, C.purpleL)}
    ${sparkle(110, 26, 0.8, C.peach)}
    `,
  ],
};

/* ---------- social card ---------- */

function ogCard() {
  const W = 1200;
  const H = 630;
  const tab = tabletShell(780, 110, 560, 420, { bezel: 18, screenR: 18, shadow: false });
  const s = tab.s;
  const lines = ["vitals", "dx", "rx"].map((k, i) => hand(k, s.x + 36, s.y + 92 + i * 60, 34).svg).join("\n    ");
  const body = `  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <circle cx="1080" cy="80" r="260" fill="${C.lavL}"/>
  <circle cx="1180" cy="560" r="180" fill="${C.lavL}" opacity="0.7"/>
  <g transform="rotate(-6 1060 320)">
    <g filter="url(#soft)">${tab.svg}</g>
    ${[0, 1, 2, 3].map((i) => `<path d="M${s.x + 24} ${s.y + 100 + i * 60} H${s.x + s.w - 24}" stroke="${RULE}" stroke-width="1.5"/>`).join("\n    ")}
    ${text(s.x + 36, s.y + 42, "CONSULTATION NOTE", { size: 12, weight: 800, fill: C.purple, ls: 2 })}
    ${lines}
    <g transform="translate(${s.x + 420} ${s.y + 206})">${stylus(32, 300)}</g>
  </g>
  <g>
    <rect x="690" y="430" width="300" height="78" rx="18" fill="${C.white}" filter="url(#soft)"/>
    <rect x="708" y="447" width="44" height="44" rx="13" fill="${C.mintL}"/>
    ${icon("pharmacy", 718, 457, 24, "#2E7D4A", 2)}
    ${text(766, 465, "e-Prescription sent", { size: 16, weight: 800 })}
    ${text(766, 488, "Amlodipine 5 mg · OD", { size: 14, weight: 600, fill: MUTED })}
  </g>
  ${mark(80, 70, 56, "vo-g")}
  <text x="152" y="108" font-family="${FONT}" font-size="30" font-weight="800" fill="${C.ink}" letter-spacing="-0.6">Vital<tspan fill="${C.purple}" dx="6">OS</tspan></text>
  ${display("keepPen", 78, 280, 96, C.ink).svg}
  ${display("losePaper", 78, 382, 96, C.purple).svg}
  ${text(82, 452, "The stylus-first clinic OS,", { size: 28, weight: 600, fill: C.inkSoft })}
  ${text(82, 490, "with a patient portal built in.", { size: 28, weight: 600, fill: C.inkSoft })}
  ${text(82, 566, "verytransparenthealthcare.com/vital-os", { size: 18, weight: 700, fill: C.purple })}`;
  return doc(
    "Vital OS: Keep your pen. Lose the paperwork.",
    W,
    H,
    body,
    `${SOFT_SHADOW}${markGradient("vo-g")}${STYLUS_GRADIENT}`,
  );
}

/* ---------- write everything ---------- */

const written = [];
function emit(rel, content) {
  const path = join(OUT, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  written.push(rel);
}

emit("brand/vital-os-mark.svg", doc("Vital OS", 64, 64, `  ${mark(0, 0, 64, "vo-g")}`, markGradient("vo-g")));
emit("brand/vital-os-logo.svg", wordmark(false));
emit("brand/vital-os-logo-white.svg", wordmark(true));

emit("hero/pen-to-record.svg", heroTablet(true));
emit("hero/pen-to-record-static.svg", heroTablet(false));

emit("product/ink-to-data.svg", inkToData());
emit("product/one-note-ripple.svg", ripple());
emit("product/patient-portal-phone.svg", portalPhone());
emit("product/doctor-dashboard.svg", dashboard());
emit("product/tablet-frame.svg", tabletFrame());
emit("product/phone-frame.svg", phoneFrame());
emit("product/stylus.svg", stylusAsset());

for (const [name, [title, body]] of Object.entries(FEATURES)) emit(`features/${name}.svg`, svg(title, body));
for (const [name, [title, body]] of Object.entries(STORY)) emit(`story/${name}.svg`, svg(title, body, 360, 180));

for (const [name, [label, inner]] of Object.entries(ICONS)) {
  emit(
    `icons/${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="${C.purple}" ${ICON_ATTRS} role="img" aria-label="${label}"><title>${label}</title>${inner}</svg>\n`,
  );
}
emit(
  "icons/sprite.svg",
  `<svg xmlns="http://www.w3.org/2000/svg">
${Object.entries(ICONS)
  .map(([name, [label, inner]]) => `  <symbol id="vo-${name}" viewBox="0 0 24 24" ${ICON_ATTRS}><title>${label}</title>${inner}</symbol>`)
  .join("\n")}
</svg>
`,
);

const og = ogCard();
emit("social/og-vital-os.svg", og);

// Raster exports (@2x unless noted), on the page cream so soft shadows survive any background.
const RASTERS = [
  ["social/og-vital-os.png", og, 1],
  ["png/pen-to-record@2x.png", heroTablet(false), 2],
  ["png/ink-to-data@2x.png", inkToData(), 2],
  ["png/one-note-ripple@2x.png", ripple(), 2],
  ["png/patient-portal-phone@2x.png", portalPhone(), 2],
  ["png/doctor-dashboard@2x.png", dashboard(), 2],
  ["brand/vital-os-mark-512.png", doc("Vital OS", 64, 64, `  ${mark(0, 0, 64, "vo-g")}`, markGradient("vo-g")), 8, "transparent"],
];
for (const [rel, source, scale, bg = CREAM] of RASTERS) {
  const path = join(OUT, rel);
  mkdirSync(dirname(path), { recursive: true });
  let img = sharp(Buffer.from(source), { density: 72 * scale });
  if (bg !== "transparent") img = img.flatten({ background: bg });
  await img.png({ compressionLevel: 9 }).toFile(path);
  written.push(rel);
}

console.log(`Wrote ${written.length} files to ${OUT}`);
