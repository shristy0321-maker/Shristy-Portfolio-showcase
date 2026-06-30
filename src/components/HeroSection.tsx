import { motion, useReducedMotion } from "framer-motion";
import portrait from "@/assets/shristy-portrait-hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const RESUME_URL =
  "https://docs.google.com/document/d/1A1ZRcoT7HX-G9eu5ZbVfYx2sNg9_t0Yh/edit?usp=sharing";

const HeroSection = () => {
  const reduce = useReducedMotion();
  const fade = (y: number, delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  const label: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    fontSize: 11,
    color: "#a89880",
    fontWeight: 600,
  };

  const onScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#f5f0e8", paddingTop: 80 }}
    >
      {/* Asterisk top right */}
      <motion.div
        aria-hidden
        className="absolute"
        style={{ top: 96, right: "5%", color: "#1a1208", fontSize: 20, zIndex: 5 }}
        {...fade(8, 0.1)}
      >
        ✳
      </motion.div>

      <div
        className="mx-auto h-full grid items-center"
        style={{
          maxWidth: 1280,
          paddingLeft: "clamp(20px, 5vw, 56px)",
          paddingRight: "clamp(20px, 5vw, 56px)",
          minHeight: "calc(100vh - 80px)",
          gridTemplateColumns: "1fr",
          gap: 48,
        }}
      >
        <style>{`
          @media (min-width: 900px) {
            #hero-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 32px !important; align-items: center !important; }
            #hero-left { order: 1; }
            #hero-center { order: 2; }
            #hero-right { order: 3; }
          }
        `}</style>

        <div
          id="hero-grid"
          className="grid items-center w-full"
          style={{ gridTemplateColumns: "1fr", gap: 40 }}
        >
          {/* Center photo first on mobile */}
          <motion.div
            id="hero-center"
            className="flex justify-center items-center"
            style={{ order: 0 }}
            {...fade(20, 0.05)}
          >
            <img
              src={portrait}
              alt="Shristy Kumari"
              style={{
                maxHeight: "70vh",
                width: "auto",
                margin: "0 auto",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 30px 60px rgba(40,25,15,0.12))",
              }}
            />
          </motion.div>

          {/* Left text */}
          <div id="hero-left" style={{ order: 1 }}>
            <motion.div {...fade(12, 0.15)} style={label}>
              WELCOME
            </motion.div>
            <motion.h1
              {...fade(14, 0.22)}
              style={{
                marginTop: 18,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                lineHeight: 1.25,
                color: "#1a1208",
              }}
            >
              Built from real conversations, not assumptions.
            </motion.h1>
            <motion.div
              {...fade(14, 0.32)}
              className="flex flex-wrap"
              style={{ gap: 12, marginTop: 28 }}
            >
              <a
                href="#case-studies"
                onClick={onScrollTo("case-studies")}
                style={{
                  backgroundColor: "#1a1208",
                  color: "#f5f0e8",
                  padding: "12px 28px",
                  borderRadius: 999,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Work
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid #1a1208",
                  color: "#1a1208",
                  padding: "12px 28px",
                  borderRadius: 999,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right text */}
          <div id="hero-right" style={{ order: 2 }}>
            <motion.div {...fade(12, 0.18)} style={label}>
              ABOUT ME
            </motion.div>
            <motion.p
              {...fade(14, 0.26)}
              style={{
                marginTop: 18,
                color: "#6b5d4f",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between what
              was promised and what was delivered.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
