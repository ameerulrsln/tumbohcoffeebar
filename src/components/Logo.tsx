const BLADE = "M72 6 C88 28 88 62 71 93 C50 84 34 62 39 38 C44 18 58 9 72 6 Z";

/**
 * Official Tumboh mark — the folded green leaf with the coloured segment,
 * redrawn as vector so it stays crisp at any size and needs no image request.
 */
export function LeafMark({
  size = 48,
  className,
  title = "Tumboh",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.16}
      viewBox="0 0 100 116"
      fill="none"
      role="img"
      aria-label={title}
    >
      <defs>
        <clipPath id="tumboh-blade">
          <path d={BLADE} />
        </clipPath>
      </defs>

      {/* blade */}
      <path d={BLADE} fill="var(--logo-green)" />

      {/* hand-drawn hatching inside the blade */}
      <g clipPath="url(#tumboh-blade)" opacity="0.45">
        {Array.from({ length: 26 }).map((_, i) => (
          <path
            key={i}
            d={`M${28 + i * 1.1} ${2 + i * 3.6} C${52 + i} ${12 + i * 3.6} ${
              70 + i * 0.9
            } ${13 + i * 3.6} 94 ${8 + i * 3.6}`}
            stroke="var(--logo-green-deep)"
            strokeWidth="0.9"
            fill="none"
          />
        ))}
      </g>

      {/* sweeping tail that runs into the signature */}
      <path
        d="M70 90 C62 107 42 116 8 112 C40 111 56 101 62 85 Z"
        fill="var(--logo-green)"
      />

      {/* the coloured segment — white / yellow / red wedges */}
      <g transform="translate(50 70)">
        <circle r="11.5" fill="#ffffff" />
        <path d="M0 0 L0 -11.5 A11.5 11.5 0 0 1 10 -5.7 Z" fill="#e8ba2e" />
        <path d="M0 0 L10 -5.7 A11.5 11.5 0 0 1 3 11 Z" fill="#e0453f" />
        <circle r="11.5" fill="none" stroke="#241a12" strokeWidth="1.3" />
        <path
          d="M0 0 L0 -11.5 M0 0 L10 -5.7 M0 0 L3 11"
          stroke="#241a12"
          strokeWidth="1.1"
        />
      </g>
    </svg>
  );
}

/**
 * Full lockup: mark + "Tumboh" signature + the underline flourish.
 */
export default function Logo({
  size = 40,
  className,
  tone = "ink",
}: {
  size?: number;
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: tone === "cream" ? "var(--cream)" : "var(--espresso)",
      }}
    >
      <LeafMark size={size} />
      <span style={{ display: "inline-flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: size * 0.62,
            letterSpacing: "-0.015em",
            lineHeight: 1,
          }}
        >
          Tumboh
        </span>
        <svg
          viewBox="0 0 200 10"
          width={size * 2.1}
          height={size * 0.2}
          fill="none"
          aria-hidden="true"
          style={{ marginTop: 2 }}
        >
          <path
            d="M2 6 C40 2 70 8 104 5 C140 2 168 7 198 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </span>
    </span>
  );
}
