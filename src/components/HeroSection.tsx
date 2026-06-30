import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/shristy-portrait-hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
    fontFamily: "'Inter Tight', sans-serif",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: "0.32em",
    fontWeight: 500,
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full overflow-hidden bg-background text-foreground"
      style={{ minHeight: "100vh", paddingTop: 88 }}
    >
      <style>{`
        .hero-cta { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease, background-color .3s ease; }
        .hero-cta:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -18px hsl(var(--foreground) / .35); }
        .hero-cta:hover .hero-arrow { transform: translateX(6px); }
        .hero-arrow { transition: transform .35s ease; display: inline-block; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
          min-height: calc(100vh - 160px);
          position: relative;
          z-index: 2;
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.05fr 1fr 0.5fr;
            gap: clamp(24px, 4vw, 72px);
          }
        }

        .hero-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-size: clamp(4.5rem, 13vw, 11rem);
          line-height: 0.92;
          letter-spacing: -0.025em;
          color: hsl(var(--foreground));
          margin: 0;
        }

        .hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(0.95rem, 1.2vw, 1.15rem);
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
        }

        .hero-ornament {
          display: inline-flex; align-items: center; gap: 10px;
          color: hsl(var(--border));
          margin-top: 14px;
        }
        .hero-ornament .line { width: 36px; height: 1px; background: hsl(var(--border)); display: inline-block; }
        .hero-ornament .dot { width: 4px; height: 4px; transform: rotate(45deg); background: hsl(var(--accent)); }

        .hero-arch {
          position: relative;
          width: min(420px, 92%);
          aspect-ratio: 3/4;
          border-radius: 999px 999px 18px 18px;
          background: hsl(var(--foreground));
          border: 1px solid hsl(var(--border));
          box-shadow: 0 40px 80px -40px hsl(var(--foreground) / 0.35);
          overflow: hidden;
          margin: 0 auto;
        }
        .hero-arch img {
          position: absolute;
          left: 50%; bottom: 0;
          transform: translateX(-50%);
          width: 108%; height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }
        .hero-floral {
          position: absolute;
          inset: -24px;
          pointer-events: none;
          z-index: 1;
        }
        .hero-arch-wrap { position: relative; width: min(420px, 92%); margin: 0 auto; }

        .hero-divider { display:inline-block; width: clamp(40px, 10vw, 110px); height:1px; background: hsl(var(--accent)); vertical-align:middle; margin-left:14px; margin-right: 10px; }
        .hero-spark { color: hsl(var(--accent)); font-size: 11px; }

        .hero-featured {
          border-top: 1px solid hsl(var(--border));
          background: hsl(var(--secondary));
          padding: 14px 16px;
          display: flex; align-items: center; justify-content: center; gap: 18px;
        }
        .hero-featured .lbl {
          font-family: 'Inter Tight', sans-serif;
          font-size: 11px; letter-spacing: 0.42em; text-transform: uppercase;
          color: hsl(var(--muted-foreground));
        }
        .hero-featured .sp { color: hsl(var(--accent)); }

        @media (max-width: 899px) {
          .hero-right { display: none; }
          .hero-left { text-align: center; }
          .hero-left .hero-cta-wrap { justify-content: center; display: flex; }
          .hero-ornament { justify-content: center; }
        }
      `}</style>

      <div
        className="mx-auto"
        style={{
          maxWidth: 1320,
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
        }}
      >
        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-left">
            <motion.div {...fade(16, 0.1)} style={label} className="text-muted-foreground">
              PRODUCT MANAGEMENT
              <span className="hero-divider" />
              <span className="hero-spark">✦</span>
            </motion.div>

            <motion.h1 {...fade(20, 0.2)} className="hero-display" style={{ marginTop: 20 }}>
              Shristy
            </motion.h1>

            <motion.div {...fade(16, 0.3)} className="hero-sub" style={{ marginTop: 16 }}>
              Product Thinker &amp; Problem Solver
            </motion.div>
            <div className="hero-ornament">
              <span className="line" />
              <span className="dot" />
              <span className="line" />
            </div>

            <motion.p
              {...fade(20, 0.4)}
              className="text-muted-foreground"
              style={{
                marginTop: 24,
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 15.5,
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              I transform user research into meaningful digital experiences — discovering real
              problems, validating ideas, prioritizing opportunities, and building products that
              create measurable impact.
            </motion.p>

            <motion.div
              {...fade(16, 0.5)}
              className="text-muted-foreground"
              style={{ marginTop: 24, ...label, fontSize: 10, letterSpacing: "0.28em" }}
            >
              MBA (TECHNOLOGY MANAGEMENT) · INSTITUTE OF PRODUCT LEADERSHIP
            </motion.div>



            <motion.div {...fade(16, 0.6)} className="hero-cta-wrap" style={{ marginTop: 28 }}>
              <a
                href="#case-studies"
                onClick={onView}
                className="hero-cta bg-primary text-primary-foreground"
                style={{
                  padding: "15px 30px",
                  borderRadius: 999,
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 48,
                  boxShadow: "0 10px 30px -18px hsl(var(--foreground) / .45)",
                }}
              >
                Explore My Work
                <span className="hero-arrow">→</span>
              </a>
            </motion.div>
          </div>

          {/* CENTER */}
          <motion.div style={{ y: portraitY }} {...fade(28, 0.2)}>
            <div className="hero-arch-wrap">
              {/* floral line art */}
              <svg
                className="hero-floral"
                viewBox="0 0 500 700"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="0.8"
                style={{ opacity: 0.18 }}
                aria-hidden="true"
              >
                <path d="M40 200 C 70 240, 60 300, 90 340 C 120 380, 110 440, 80 500" />
                <circle cx="60" cy="260" r="6" />
                <circle cx="92" cy="345" r="5" />
                <path d="M55 270 q -14 6 -22 18" />
                <path d="M88 355 q 16 4 24 18" />
                <path d="M460 220 C 430 260, 440 320, 410 360 C 380 400, 390 460, 420 520" />
                <circle cx="442" cy="280" r="6" />
                <circle cx="410" cy="365" r="5" />
                <path d="M445 290 q 14 6 22 18" />
                <path d="M412 375 q -16 4 -24 18" />
                <path d="M30 600 q 60 -20 120 -8" />
                <path d="M470 600 q -60 -20 -120 -8" />
              </svg>
              <div className="hero-arch">
                <img src={portrait} alt="Shristy Kumari" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="hero-right">
            <motion.div {...fade(16, 0.4)} style={{ textAlign: "right" }}>
              <div
                className="text-muted-foreground"
                style={{
                  ...label,
                  writingMode: "vertical-rl" as const,
                  transform: "rotate(180deg)",
                  display: "inline-block",
                  fontSize: 11,
                  letterSpacing: "0.4em",
                }}
              >
                BUILDING IMPACTFUL PRODUCTS
              </div>
            </motion.div>

            <motion.div {...fade(16, 0.55)} style={{ marginTop: 40, textAlign: "right" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "hsl(var(--accent))", fontSize: 12 }}>
                <span style={{ height: 1, width: 60, background: "hsl(var(--accent))", display: "inline-block" }} />
                <span>✦</span>
              </div>
              <p
                style={{
                  marginTop: 24,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "hsl(var(--foreground))",
                  maxWidth: 220,
                  marginLeft: "auto",
                }}
              >
                "Great products begin with deep understanding."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured strip */}
      <div className="hero-featured" style={{ marginTop: 48 }}>
        <span className="sp">✦</span>
        <span className="lbl">Featured Work</span>
        <span className="sp">✦</span>
      </div>
    </section>
  );
};

export default HeroSection;
