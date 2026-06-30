import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/shristy-portrait-hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const fade = (y = 24, delay = 0) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  const onView = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("case-studies");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const label: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: "0.32em",
    color: "#6D645B",
    fontWeight: 500,
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#F8F5F0",
        minHeight: "100vh",
        paddingTop: 88,
      }}
    >
      <style>{`
        @keyframes heroBtnArrow { to { transform: translateX(4px); } }
        .hero-cta { transition: transform .4s ${"cubic-bezier(.22,1,.36,1)"}, box-shadow .4s ease, background-color .3s ease; }
        .hero-cta:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -18px rgba(92,45,45,.55); background-color:#451f1f !important; }
        .hero-cta:hover .hero-arrow { transform: translateX(6px); }
        .hero-arrow { transition: transform .35s ease; display: inline-block; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          min-height: calc(100vh - 88px);
          position: relative;
          z-index: 2;
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.05fr 1fr 0.55fr;
            gap: clamp(24px, 4vw, 72px);
          }
        }

        .hero-bg-word {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -52%);
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(7rem, 24vw, 24rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: rgba(60,45,35,0.08);
          white-space: nowrap;
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        .hero-portrait-wrap {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .hero-arch {
          position: relative;
          width: min(440px, 92%);
          aspect-ratio: 3/4;
          border-radius: 999px 999px 24px 24px;
          background: radial-gradient(ellipse at 50% 35%, #6b2f33 0%, #4a1f23 70%, #3a1619 100%);
          border: 1px solid rgba(184,155,94,0.45);
          box-shadow: 0 40px 80px -40px rgba(60,30,30,0.35), inset 0 0 0 8px rgba(248,245,240,0.6);
          overflow: hidden;
        }
        .hero-arch::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'><g fill='none' stroke='%23b89b5e' stroke-width='0.6' opacity='0.35'><path d='M170 240c-15-10-30-30-30-55s10-40 25-50'/><path d='M150 200c-5-8-5-20 0-28'/><circle cx='168' cy='178' r='8'/><path d='M40 60c10-6 22-6 30 2'/><path d='M30 90c8-4 18-2 22 4'/></g></svg>");
          background-repeat: no-repeat;
          background-position: bottom right, top left;
          background-size: 60% auto;
          opacity: .9;
          pointer-events: none;
        }
        .hero-arch img {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 108%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }

        .hero-divider {
          display: inline-block;
          width: clamp(40px, 12vw, 140px);
          height: 1px;
          background: #B89B5E;
          vertical-align: middle;
          margin-left: 14px;
        }

        @media (max-width: 899px) {
          .hero-right { display: none; }
          .hero-left { text-align: center; }
          .hero-left .hero-cta-wrap { justify-content: center; display: flex; }
          .hero-left .hero-divider { display: none; }
        }
      `}</style>

      {/* Giant background wordmark */}
      <motion.div
        className="hero-bg-word"
        aria-hidden="true"
        style={{ opacity: bgOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        SHRISTY
      </motion.div>

      <div
        className="mx-auto"
        style={{
          maxWidth: 1320,
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
        }}
      >
        <div className="hero-grid">
          {/* LEFT — story + CTA */}
          <div className="hero-left">
            <motion.div {...fade(16, 0.15)} style={label}>
              PRODUCT MANAGEMENT
              <span className="hero-divider" />
            </motion.div>

            <motion.h1
              {...fade(20, 0.25)}
              style={{
                marginTop: 28,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                color: "#221F1A",
                maxWidth: 560,
              }}
            >
              Building products<br />
              through insight,<br />
              <em style={{ fontStyle: "italic", color: "#5C2D2D" }}>not assumptions.</em>
            </motion.h1>

            <motion.p
              {...fade(20, 0.35)}
              style={{
                marginTop: 28,
                color: "#6D645B",
                fontFamily: "Inter, sans-serif",
                fontSize: 15.5,
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              I transform user research into meaningful digital experiences — discovering real
              problems, validating ideas, prioritizing opportunities, and building products that
              create measurable impact.
            </motion.p>

            <motion.div {...fade(16, 0.45)} style={{ marginTop: 32 }}>
              <div
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 32,
                  color: "#8a5a3b",
                  lineHeight: 1,
                }}
              >
                Shristy Kumari
              </div>
              <div
                style={{
                  marginTop: 10,
                  ...label,
                  fontSize: 10,
                  letterSpacing: "0.28em",
                  color: "#6D645B",
                }}
              >
                MBA (TECHNOLOGY MANAGEMENT) · INSTITUTE OF PRODUCT LEADERSHIP
              </div>
            </motion.div>

            <motion.div {...fade(16, 0.55)} className="hero-cta-wrap" style={{ marginTop: 32 }}>
              <a
                href="#case-studies"
                onClick={onView}
                className="hero-cta"
                style={{
                  backgroundColor: "#5C2D2D",
                  color: "#F8F5F0",
                  padding: "16px 32px",
                  borderRadius: 999,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 48,
                  boxShadow: "0 10px 30px -18px rgba(92,45,45,.5)",
                }}
              >
                Explore My Work
                <span className="hero-arrow">→</span>
              </a>
            </motion.div>
          </div>

          {/* CENTER — portrait inside editorial arch */}
          <motion.div
            className="hero-portrait-wrap"
            style={{ y: portraitY }}
            {...fade(28, 0.2)}
          >
            <div className="hero-arch">
              <img src={portrait} alt="Shristy Kumari" />
            </div>
          </motion.div>

          {/* RIGHT — editorial details */}
          <div className="hero-right">
            <motion.div {...fade(16, 0.4)} style={{ textAlign: "right" }}>
              <div
                style={{
                  ...label,
                  writingMode: "vertical-rl" as const,
                  transform: "rotate(180deg)",
                  display: "inline-block",
                  fontSize: 11,
                  letterSpacing: "0.4em",
                  color: "#5C2D2D",
                }}
              >
                BUILDING IMPACTFUL PRODUCTS
              </div>
            </motion.div>

            <motion.div {...fade(16, 0.55)} style={{ marginTop: 40, textAlign: "right" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#B89B5E",
                  fontSize: 12,
                }}
              >
                <span style={{ height: 1, width: 60, background: "#B89B5E", display: "inline-block" }} />
                <span>✦</span>
              </div>
              <p
                style={{
                  marginTop: 24,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "#221F1A",
                  maxWidth: 220,
                  marginLeft: "auto",
                }}
              >
                "Great products begin with deep understanding."
              </p>
            </motion.div>

            <motion.svg
              {...fade(16, 0.7)}
              viewBox="0 0 120 160"
              style={{ marginTop: 48, marginLeft: "auto", display: "block", width: 110, height: 150 }}
              fill="none"
              stroke="#B89B5E"
              strokeWidth="0.8"
              opacity="0.7"
              aria-hidden="true"
            >
              <path d="M60 10 C40 40, 30 80, 50 140" />
              <path d="M50 50 C70 55, 80 70, 75 90" />
              <path d="M55 80 C40 88, 35 100, 45 115" />
              <circle cx="75" cy="92" r="3" />
              <circle cx="45" cy="115" r="2.5" />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
