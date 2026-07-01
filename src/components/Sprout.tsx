export default function Sprout({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="A coffee sprout growing"
    >
      {/* cup / soil base */}
      <path
        d="M28 78 h64 l-6 30 a6 6 0 0 1 -6 5 H40 a6 6 0 0 1 -6 -5 Z"
        fill="var(--espresso)"
      />
      <ellipse cx="60" cy="78" rx="32" ry="7" fill="var(--bark)" />
      {/* stem — draws upward */}
      <path
        className="sprout-stem"
        d="M60 78 C60 60 60 48 60 36"
        stroke="var(--sprout)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* left leaf */}
      <path
        className="sprout-leaf leaf-l"
        d="M60 52 C46 50 38 40 39 30 C50 30 60 38 60 52 Z"
        fill="var(--sprout-bright)"
      />
      {/* right leaf */}
      <path
        className="sprout-leaf leaf-r"
        d="M60 46 C74 44 82 33 80 22 C69 23 60 32 60 46 Z"
        fill="var(--sprout)"
      />
      <style>{`
        .sprout-stem {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: grow-stem 1.1s var(--ease) 0.15s forwards;
        }
        .sprout-leaf {
          transform-box: fill-box;
          transform-origin: bottom center;
          transform: scale(0);
          opacity: 0;
        }
        .leaf-l { animation: unfurl 0.7s var(--ease) 0.85s forwards; }
        .leaf-r { animation: unfurl 0.7s var(--ease) 1.05s forwards; }
        @keyframes grow-stem { to { stroke-dashoffset: 0; } }
        @keyframes unfurl {
          to { transform: scale(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sprout-stem { stroke-dashoffset: 0; animation: none; }
          .sprout-leaf { transform: scale(1); opacity: 1; animation: none; }
        }
      `}</style>
    </svg>
  );
}
