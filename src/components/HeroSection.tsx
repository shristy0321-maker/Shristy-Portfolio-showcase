import portrait from "@/assets/shristy-portrait.png.asset.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#f5f0e8", paddingTop: "120px", paddingBottom: "60px" }}
    >
      {/* Small PORTFOLIO label, centered near top */}
      <div
        className="text-center"
        style={{
          color: "#1a1208",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginBottom: "40px",
        }}
      >
        Portfolio
      </div>

      {/* Portrait — large, centered */}
      <div className="flex justify-center">
        <img
          src={portrait.url}
          alt="Shristy Kumari"
          style={{
            maxHeight: "65vh",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Bottom row labels */}
      <div
        className="absolute flex items-center justify-between w-full"
        style={{ bottom: "4%", left: 0, padding: "0 5%" }}
      >
        <div
          style={{
            color: "#1a1208",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          PM Intern
        </div>
        <div
          style={{
            color: "#1a1208",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "15px",
            letterSpacing: "0.12em",
          }}
        >
          aspire. build. ship.
        </div>
        <div
          style={{
            color: "#1a1208",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Shristy Kumari
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
