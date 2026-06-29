import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#f5f0e8" }}
    >
      {/* Back arrow */}
      <a
        href="#"
        aria-label="Back"
        className="absolute"
        style={{ top: "6%", left: "5%", zIndex: 2, color: "#1a1208", fontSize: "28px", lineHeight: 1, textDecoration: "none" }}
      >
        ‹
      </a>

      {/* Asterisk */}
      <div
        className="absolute"
        style={{ top: "6%", right: "5%", zIndex: 2, color: "#1a1208", fontSize: "20px", lineHeight: 1 }}
      >
        ✳
      </div>

      {/* PORTFOLIO oversized headline */}
      <h1
        className="absolute m-0 whitespace-nowrap text-center"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          color: "#1a1208",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 900,
          fontSize: "clamp(4rem, 17vw, 18rem)",
          lineHeight: 0.85,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}
      >
        Portfolio
      </h1>

      {/* Photo */}
      <div
        className="absolute left-1/2"
        style={{
          top: "15%",
          transform: "translateX(-50%)",
          height: "62%",
          zIndex: 1,
        }}
      >
        <img
          src={profileImg}
          alt="Shristy Kumari"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
          }}
        />
      </div>

      {/* Tagline overlay */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "46%",
          zIndex: 3,
          color: "#f5f0e8",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "14px",
          letterSpacing: "0.18em",
          whiteSpace: "nowrap",
          textShadow: "0 1px 8px rgba(0,0,0,0.25)",
        }}
      >
        aspire. build. ship.
      </div>

      {/* Bottom left label */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          left: "5%",
          zIndex: 2,
          color: "#1a1208",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        PM Intern
      </div>

      {/* Bottom right label */}
      <div
        className="absolute"
        style={{
          bottom: "4%",
          right: "5%",
          zIndex: 2,
          color: "#1a1208",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Shristy Kumari
      </div>
    </section>
  );
};

export default HeroSection;
