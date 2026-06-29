import portrait from "@/assets/shristy-portrait.png.asset.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#FAF8F5" }}
    >
      {/* Back arrow — top left */}
      <a
        href="#"
        aria-label="Back"
        className="absolute"
        style={{
          top: "5%",
          left: "5%",
          zIndex: 4,
          color: "#1a1208",
          fontSize: 28,
          lineHeight: 1,
          textDecoration: "none",
        }}
      >
        ‹
      </a>

      {/* Star — top right */}
      <div
        className="absolute"
        style={{ top: "5%", right: "5%", zIndex: 4, color: "#6A5B55", fontSize: 18 }}
      >
        ✦
      </div>

      {/* Subtle dotted texture on the right */}
      <div
        aria-hidden
        className="absolute hidden md:block"
        style={{
          top: "20%",
          right: "4%",
          width: 140,
          height: 220,
          zIndex: 1,
          opacity: 0.35,
          backgroundImage: "radial-gradient(#6A5B55 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* PORTFOLIO heading */}
      <div
        className="absolute text-center"
        style={{
          top: "11%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#6A5B55",
            fontFamily: "'Bebas Neue', 'Anton', Impact, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(5rem, 16vw, 16rem)",
            lineHeight: 0.9,
            letterSpacing: "0.04em",
          }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* Handwritten "product manager" tag */}
      <div
        className="absolute"
        style={{
          top: "32%",
          left: "10%",
          zIndex: 3,
          color: "#8A7666",
          fontFamily: "'Caveat', cursive",
          fontWeight: 500,
          fontSize: "clamp(1.4rem, 2.4vw, 2.2rem)",
          transform: "rotate(-4deg)",
        }}
      >
        product manager
      </div>

      {/* Portrait — lower center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center items-end"
        style={{ bottom: "10%", zIndex: 2, width: "min(560px, 70vw)" }}
      >
        <img
          src={portrait.url}
          alt="Shristy Kumari"
          style={{
            width: "100%",
            height: "auto",
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
          zIndex: 4,
          color: "#3a3328",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          borderBottom: "1px solid #3a3328",
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
          zIndex: 4,
          color: "#3a3328",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          borderBottom: "1px solid #3a3328",
          paddingBottom: 4,
        }}
      >
        Shristy Kumari
      </div>
    </section>
  );
};

export default HeroSection;
