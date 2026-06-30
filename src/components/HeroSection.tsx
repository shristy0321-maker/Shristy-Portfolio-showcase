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

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full overflow-hidden bg-background text-foreground"
      style={{ minHeight: "100vh", paddingTop: 96 }}
    >
      <style>{`
        .hero-cta { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
        .hero-cta:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -18px hsl(var(--foreground) / .35); }
        .hero-cta:hover .hero-arrow { transform: translateX(6px); }
        .hero-arrow { transition: transform .35s ease; display: inline-block; }

        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 32px;
          align-items: start;
          min-height: calc(100vh - 200px);
        }

        .hero-toplabel {
          position: absolute;
          top: 0;
          right: 0;
          text-align: right;
          font-family: 'Inter Tight', sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          z-index: 4;
        }

        .hero-left { position: relative; z-index: 3; padding-top: 56px; max-width: 640px; }

        .hero-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-size: clamp(5rem, 13vw, 11rem);
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: hsl(var(--foreground));
          margin: 0;
          position: relative;
          display: inline-block;
        }
        .hero-display .spark {
          position: absolute;
          top: 0.15em;
          right: -0.35em;
          font-size: 0.18em;
          color: hsl(var(--accent));
        }

        .hero-tagline {
          margin-top: 28px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12.5px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
        }
        .hero-rule {
          margin-top: 18px;
          width: 64px;
          height: 1px;
          background: hsl(var(--accent));
        }

        .hero-paragraph {
          margin-top: 36px;
          padding-left: 20px;
          border-left: 1px solid hsl(var(--accent) / 0.5);
          font-family: 'Inter Tight', sans-serif;
          font-size: 15.5px;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
          max-width: 480px;
        }

        .hero-signature {
          margin-top: 36px;
          font-family: 'Caveat', cursive;
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          line-height: 1;
          color: hsl(var(--foreground));
        }
        .hero-credential {
          margin-top: 10px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
        }

        .hero-cta-wrap { margin-top: 36px; }

        /* RIGHT arch */
        .hero-right {
          position: relative;
          align-self: stretch;
          min-height: 560px;
        }
        .hero-portrait-anchor {
          position: absolute;
          top: -40px;
          right: -8%;
          width: clamp(360px, 44vw, 580px);
          z-index: 2;
        }
        .hero-arch-wrap { position: relative; width: 100%; }
        .hero-arch {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 999px 999px 14px 14px;
          background: hsl(var(--foreground));
          overflow: hidden;
        }
        .hero-arch img {
          position: absolute;
          left: 50%; bottom: 0;
          transform: translateX(-50%);
          width: 108%; height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }
        .hero-floral { position: absolute; inset: -20px; pointer-events: none; z-index: 1; opacity: 0.14; }

        /* Featured strip */
        .hero-featured {
          position: relative;
          z-index: 1;
          background: hsl(var(--foreground));
          padding: 16px;
          display: flex; align-items: center; justify-content: center; gap: 16px;
          margin-top: 56px;
        }
        .hero-featured .lbl {
          font-family: 'Inter Tight', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: hsl(var(--background));
        }
        .hero-featured .sp { color: hsl(var(--accent)); font-size: 12px; }
        .hero-featured .rule { flex: 0 0 80px; height: 1px; background: hsl(var(--accent) / 0.5); }

        @media (max-width: 899px) {
          .hero-grid { grid-template-columns: 1fr; gap: 0; }
          .hero-toplabel { position: relative; text-align: center; margin-bottom: 24px; }
          .hero-left { padding-top: 16px; text-align: center; max-width: 100%; }
          .hero-display { font-size: clamp(4rem, 18vw, 7rem); }
          .hero-display .spark { right: -0.3em; }
          .hero-rule { margin-left: auto; margin-right: auto; }
          .hero-paragraph { margin-left: auto; margin-right: auto; padding-left: 0; border-left: 0; border-top: 1px solid hsl(var(--accent) / 0.5); padding-top: 18px; text-align: center; }
          .hero-right { min-height: 0; margin-top: 40px; }
          .hero-portrait-anchor { position: relative; top: 0; right: 0; width: min(360px, 88%); margin: 0 auto; }
          .hero-featured .rule { flex: 0 0 32px; }
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
          {/* Top-right small stacked label */}
          <motion.div {...fade(12, 0.1)} className="hero-toplabel" aria-hidden="false">
            BUILDING
            <br />
            IMPACTFUL PRODUCTS
          </motion.div>

          {/* LEFT */}
          <div className="hero-left">
            <motion.h1 {...fade(20, 0.15)} className="hero-display">
              shristy
              <span className="spark" aria-hidden="true">✦</span>
            </motion.h1>

            <motion.div {...fade(14, 0.25)} className="hero-tagline">
              I don&apos;t guess. I validate, build, and ship.
            </motion.div>
            <motion.div {...fade(10, 0.3)} className="hero-rule" />

            <motion.p {...fade(18, 0.35)} className="hero-paragraph">
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>

            <motion.div {...fade(16, 0.45)} className="hero-signature">
              Shristy Kumari
            </motion.div>
            <motion.div {...fade(12, 0.5)} className="hero-credential">
              MBA (Technology Management) · Institute of Product Leadership
            </motion.div>

            <motion.div {...fade(16, 0.55)} className="hero-cta-wrap">
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

          {/* RIGHT arch portrait */}
          <div className="hero-right">
            <motion.div className="hero-portrait-anchor" style={{ y: portraitY }} {...fade(28, 0.2)}>
              <div className="hero-arch-wrap">
                <svg
                  className="hero-floral"
                  viewBox="0 0 500 700"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.8"
                  aria-hidden="true"
                >
                  <path d="M30 240 C 60 280, 55 340, 80 380" />
                  <circle cx="55" cy="295" r="4" />
                  <path d="M470 240 C 440 280, 445 340, 420 380" />
                  <circle cx="445" cy="295" r="4" />
                </svg>
                <div className="hero-arch">
                  <img src={portrait} alt="Shristy Kumari" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured strip */}
      <div className="hero-featured">
        <span className="rule" />
        <span className="sp">✦</span>
        <span className="lbl">Featured Work</span>
        <span className="sp">✦</span>
        <span className="rule" />
      </div>
    </section>
  );
};

export default HeroSection;
