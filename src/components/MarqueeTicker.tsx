import { CSSProperties } from "react";

type MarqueeTickerProps = {
  items: string[];
  variant?: "wine" | "blush" | "rose";
  speed?: number; // seconds per loop
  italic?: boolean;
};

const palettes: Record<NonNullable<MarqueeTickerProps["variant"]>, { bg: string; ink: string; dot: string }> = {
  wine: { bg: "#8c323d", ink: "#FBF1F1", dot: "#c89494" },
  blush: { bg: "#FBF1F1", ink: "#3A0F16", dot: "#8c323d" },
  rose: { bg: "#c89494", ink: "#3A0F16", dot: "#8c323d" },
};

const StarMark = ({ color }: { color: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden
    style={{ flex: "none" }}
  >
    <path
      d="M11 0 L12.6 8.4 L21 10 L12.6 11.6 L11 20 L9.4 11.6 L1 10 L9.4 8.4 Z"
      fill={color}
    />
  </svg>
);

const MarqueeTicker = ({ items, variant = "wine", speed = 38, italic = false }: MarqueeTickerProps) => {
  const p = palettes[variant];
  const strip = [...items, ...items, ...items];

  const trackStyle: CSSProperties = {
    animation: `marquee-scroll ${speed}s linear infinite`,
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: p.bg,
        color: p.ink,
        borderTop: `1px solid ${p.ink}20`,
        borderBottom: `1px solid ${p.ink}20`,
      }}
      aria-hidden
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      <div
        className="marquee-track flex whitespace-nowrap py-5 md:py-6"
        style={trackStyle}
      >
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 pr-6"
            style={{
              fontFamily: italic
                ? "'Cormorant Garamond', Georgia, serif"
                : "'Inter Tight', sans-serif",
              fontStyle: italic ? "italic" : "normal",
              fontSize: italic ? "clamp(1.6rem, 3vw, 2.4rem)" : "clamp(0.95rem, 1.4vw, 1.15rem)",
              fontWeight: italic ? 500 : 500,
              letterSpacing: italic ? "-0.005em" : "0.18em",
              textTransform: italic ? "none" : "uppercase",
            }}
          >
            {item}
            <StarMark color={p.dot} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
