/**
 * The Tumboh leaf mark as a standalone SVG string, with literal colours so it
 * can be embedded as a data URI (CSS variables are not available there).
 * Used by the generated /logo.png and /opengraph-image endpoints.
 */
const BLADE = "M72 6 C88 28 88 62 71 93 C50 84 34 62 39 38 C44 18 58 9 72 6 Z";

const hatch = Array.from(
  { length: 26 },
  (_, i) =>
    `<path d="M${28 + i * 1.1} ${2 + i * 3.6} C${52 + i} ${12 + i * 3.6} ${
      70 + i * 0.9
    } ${13 + i * 3.6} 94 ${8 + i * 3.6}" stroke="#1f7a2c" stroke-width="0.9" fill="none"/>`
).join("");

export const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 116">
<defs><clipPath id="blade"><path d="${BLADE}"/></clipPath></defs>
<path d="${BLADE}" fill="#43b14a"/>
<g clip-path="url(#blade)" opacity="0.45">${hatch}</g>
<path d="M70 90 C62 107 42 116 8 112 C40 111 56 101 62 85 Z" fill="#43b14a"/>
<g transform="translate(50 70)">
<circle r="11.5" fill="#ffffff"/>
<path d="M0 0 L0 -11.5 A11.5 11.5 0 0 1 10 -5.7 Z" fill="#e8ba2e"/>
<path d="M0 0 L10 -5.7 A11.5 11.5 0 0 1 3 11 Z" fill="#e0453f"/>
<circle r="11.5" fill="none" stroke="#241a12" stroke-width="1.3"/>
<path d="M0 0 L0 -11.5 M0 0 L10 -5.7 M0 0 L3 11" stroke="#241a12" stroke-width="1.1"/>
</g>
</svg>`;

export const logoMarkDataUri = `data:image/svg+xml;base64,${Buffer.from(
  logoMarkSvg
).toString("base64")}`;
