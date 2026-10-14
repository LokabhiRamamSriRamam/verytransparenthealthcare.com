// Shared palette, gouache filter and figure helpers for the generated illustrations.
// Used by generate-feature-art.mjs and generate-vital-os-art.mjs.

export const C = {
  purple: "#5C3FD0",
  purpleL: "#914BFA",
  lav: "#D8C8FF",
  lavL: "#EEE5FF",
  indigo: "#1F30A0",
  ink: "#191919",
  inkSoft: "#2F2F2F",
  peach: "#FFB59E",
  peachL: "#FFE2D6",
  coral: "#F08A6C",
  mint: "#4CAF6E",
  mintL: "#CDEFD9",
  beige: "#BFB1A6",
  beigeL: "#DCD3CB",
  paper: "#F4F1EC",
  white: "#FFFFFF",
  skin1: "#8D5524",
  skin2: "#C68642",
  skin3: "#E0AC69",
  hair: "#231710",
};

/* Gouache look: wobble every edge a little, then speckle the paint with grain. */
export const DEFS = `
  <defs>
    <filter id="gouache" x="-8%" y="-8%" width="116%" height="116%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="warp"/>
      <feDisplacementMap in="SourceGraphic" in2="warp" scale="4" xChannelSelector="R" yChannelSelector="G" result="rough"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" result="grain"/>
      <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -0.55 0 0 0 1.2" result="grainAlpha"/>
      <feComposite in="rough" in2="grainAlpha" operator="in"/>
    </filter>
  </defs>`;

/** A gouache illustration, 240×180 unless another size is given. */
export const svg = (title, body, w = 240, h = 180) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${title}">
  <title>${title}</title>${DEFS}
  <g filter="url(#gouache)">
${body}
  </g>
</svg>
`;

/* ---------- figure helpers ---------- */

/** Hair drawn in front of the head. */
function hairShape(x, hy, style, color) {
  const cap = `<path d="M${x - 11.5} ${hy + 2} C ${x - 13} ${hy - 14}, ${x + 13} ${hy - 14}, ${x + 11.5} ${hy + 2} C ${x + 7} ${hy - 6}, ${x - 5} ${hy - 7}, ${x - 11.5} ${hy + 2} Z" fill="${color}"/>`;
  if (style === "bun") return `<circle cx="${x - 3}" cy="${hy - 13}" r="5.5" fill="${color}"/>${cap}`;
  return cap; // short, long
}

/** Hair drawn behind the head and shoulders (long hair only). */
function hairBack(x, hy, style, color) {
  if (style !== "long") return "";
  return `<path d="M${x - 13} ${hy - 2} C ${x - 16} ${hy + 14}, ${x - 14} ${hy + 24}, ${x - 9} ${hy + 27} L ${x + 9} ${hy + 27} C ${x + 14} ${hy + 24}, ${x + 16} ${hy + 14}, ${x + 13} ${hy - 2} Z" fill="${color}"/>`;
}

/** Standing figure, feet on y=164. */
export function standing({ x, top, pants, skin, hair = C.hair, hairStyle = "short", arm = "down", shoe = C.ink, coat }) {
  const hy = 44;
  const armR = {
    down: `<path d="M${x + 13} 68 L ${x + 17} 100" stroke="${coat ?? top}" stroke-width="7.5" stroke-linecap="round"/><circle cx="${x + 17.5}" cy="103" r="3.6" fill="${skin}"/>`,
    hold: `<path d="M${x + 13} 68 L ${x + 16} 88 L ${x + 27} 84" stroke="${coat ?? top}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${x + 30}" cy="83" r="3.6" fill="${skin}"/>`,
    gesture: `<path d="M${x + 13} 68 L ${x + 22} 82 L ${x + 34} 74" stroke="${coat ?? top}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${x + 37}" cy="72" r="3.6" fill="${skin}"/>`,
    heart: `<path d="M${x + 13} 68 L ${x + 12} 90 L ${x + 2} 80" stroke="${coat ?? top}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${x}" cy="79" r="3.8" fill="${skin}"/>`,
  }[arm];
  const body = coat
    ? `<path d="M${x - 16} 74 q0 -14 16 -14 q16 0 16 14 v44 h-32z" fill="${coat}"/><path d="M${x - 5} 61 h10 l-2 30 h-6z" fill="${top}"/>`
    : `<path d="M${x - 15} 74 q0 -14 15 -14 q15 0 15 14 v42 h-30z" fill="${top}"/>`;
  return `
    <rect x="${x - 9}" y="110" width="8.5" height="52" rx="3" fill="${pants}"/>
    <rect x="${x + 0.5}" y="110" width="8.5" height="52" rx="3" fill="${pants}"/>
    <ellipse cx="${x - 6}" cy="163.5" rx="7.5" ry="3.3" fill="${shoe}"/>
    <ellipse cx="${x + 7}" cy="163.5" rx="7.5" ry="3.3" fill="${shoe}"/>
    ${hairBack(x, hy, hairStyle, hair)}
    <rect x="${x - 3.5}" y="${hy + 8}" width="7" height="10" fill="${skin}"/>
    <path d="M${x - 13} 68 L ${x - 17} 100" stroke="${coat ?? top}" stroke-width="7.5" stroke-linecap="round"/>
    <circle cx="${x - 17.5}" cy="103" r="3.6" fill="${skin}"/>
    ${body}
    ${armR}
    <circle cx="${x}" cy="${hy}" r="11.5" fill="${skin}"/>
    ${hairShape(x, hy, hairStyle, hair)}`;
}

/** Seated figure facing right; hips at (x, 120). */
export function seated({ x, top, pants, skin, hair = C.hair, hairStyle = "bun", shoe = C.indigo }) {
  const hy = 52;
  return `
    <rect x="${x - 4}" y="112" width="36" height="11" rx="5" fill="${pants}"/>
    <rect x="${x + 25}" y="114" width="9" height="42" rx="3.5" fill="${pants}"/>
    <ellipse cx="${x + 34}" cy="158" rx="8" ry="3.4" fill="${shoe}"/>
    <rect x="${x - 3.5}" y="${hy + 8}" width="7" height="10" fill="${skin}"/>
    <path d="M${x - 14} 82 q0 -14 14 -14 q14 0 14 14 v38 h-28z" fill="${top}"/>
    <path d="M${x + 9} 78 L ${x + 16} 100 L ${x + 26} 106" stroke="${top}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${x + 28}" cy="107" r="3.6" fill="${skin}"/>
    <circle cx="${x}" cy="${hy}" r="11.5" fill="${skin}"/>
    ${hairShape(x, hy, hairStyle, hair)}`;
}

export const pin = (x, y, color, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C -10 -11 -10 -26 0 -26 C 10 -26 10 -11 0 0 Z" fill="${color}"/><circle cx="0" cy="-17" r="4" fill="${C.white}"/></g>`;

export const heartPath = (cx, cy, s, color) =>
  `<path transform="translate(${cx} ${cy}) scale(${s})" d="M0 8 C -14 -2 -16 -12 -9 -16 C -4 -19 -1 -15 0 -12 C 1 -15 4 -19 9 -16 C 16 -12 14 -2 0 8 Z" fill="${color}"/>`;

export const sparkle = (x, y, s, color) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -8 C 1 -2 2 -1 8 0 C 2 1 1 2 0 8 C -1 2 -2 1 -8 0 C -2 -1 -1 -2 0 -8 Z" fill="${color}"/>`;
