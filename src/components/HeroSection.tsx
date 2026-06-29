import portrait from "@/assets/shristy-cutout.png.asset.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#FAF7F3" }}
    >
      {/* Back arrow — top left */}
      <a
        href="#"
        aria-label="Back"
        className="absolute"
        style={{
          top: "5%",
          left: "5%",
          zIndex: 5,
          color: "#1a1208",
          fontSize: 28,
          lineHeight: 1,
          textDecoration: "none",
        }}
      >
        ‹
      </a>

      {/* Sparkle — top right */}
      <div
        className="absolute"
        style={{ top: "5%", right: "5%", zIndex: 5, color: "#6D5D57", fontSize: 18 }}
      >
        ✦
      </div>

      {/* Subtle dotted texture on the right */}
      <div
        aria-hidden
        className="absolute hidden md:block"
        style={{
          top: "22%",
          right: "4%",
          width: 140,
          height: 220,
          zIndex: 1,
          opacity: 0.3,
          backgroundImage: "radial-gradient(#6D5D57 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Layer 2: PORTFOLIO heading (behind portrait) */}
      <div
        className="absolute text-center"
        style={{
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#6D5D57",
            fontFamily: "'Anton', 'Bebas Neue', Impact, sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "clamp(5rem, 17vw, 18rem)",
            lineHeight: 0.9,
            letterSpacing: "0.01em",
          }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* Handwritten "Product Manager" subtitle */}
      <div
        className="absolute"
        style={{
          top: "33%",
          left: "10%",
          zIndex: 4,
          color: "#9C7A5D",
          fontFamily: "'Caveat', cursive",
          fontWeight: 500,
          fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
          transform: "rotate(-5deg)",
        }}
      >
        Product Manager
      </div>

      {/* Layer 3: Portrait in front of PORTFOLIO */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center items-end"
        style={{
          bottom: "6%",
          zIndex: 3,
          height: "70%",
          width: "auto",
        }}
      >
        <img
          src={portrait.url}
          alt="Shristy Kumari"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Bottom-left label */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          left: "5%",
          zIndex: 5,
          color: "#1a1208",
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          borderBottom: "1px solid #1a1208",
          paddingBottom: 4,
        }}
      >
        Product Manager
      </div>

      {/* Bottom-right label */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          right: "5%",
          zIndex: 5,
          color: "#1a1208",
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          borderBottom: "1px solid #1a1208",
          paddingBottom: 4,
        }}
      >
        Shristy Kumari
      </div>
    </section>
  );
};

export default HeroSection;
