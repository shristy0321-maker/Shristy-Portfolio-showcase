import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/shristy-portrait-hero.png";

const ROTATING_PHRASES = [
  "experiences people remember.",
  "brands people trust.",
  "relationships that last.",
  "value beyond the transaction.",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();

  const fade = (y = 20, delay = 0) =>
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
      id="home"
      className="relative w-full overflow-hidden bg-background text-foreground"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <style>{`
        .hero-shell {
          position: relative;
          flex: 1 1 auto;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: clamp(96px, 12vh, 140px) clamp(32px, 6vw, 100px) clamp(40px, 6vh, 80px);
        }

        /* Giant background wordmark — sits behind portrait, never behind heading */
        .hero-watermark {
          position: absolute;
          left: 100px;
          right: -100px;
          top: 100px;
          width: 100%;
          text-align: center;
          transform: none;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(110px, 13vw, 220px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground) / 0.07);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          overflow: visible;
          z-index: 1;
        }




        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 42% 58%;
          gap: clamp(80px, 9vw, 120px);
          align-items: center;
          min-height: 70vh;
        }

        /* LEFT */
        .hero-left {
          position: relative;
          max-width: 520px;
          z-index: 3;
          padding-top: 90px;
          padding-left: clamp(0px, 1vw, 12px);
          background: linear-gradient(to right, hsl(var(--background)) 75%, transparent);
        }



        .hero-eyebrow-row {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 28px;
        }
        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: hsl(var(--accent));
          white-space: nowrap;
        }
        .hero-eyebrow-rule {
          flex: 1; height: 1px;
          background: hsl(var(--accent) / 0.45);
          max-width: 200px;
        }

        .hero-headline {
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(2.15rem, 4.5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.015em;
          color: #2F241D;
        }

        .hero-divider {
          margin: 28px 0 22px;
          width: 64px; height: 1px;
          background: hsl(var(--accent));
        }

        .hero-body {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.75;
          color: #5C5148;
          max-width: 430px;
        }

        .hero-cta { margin-top: 36px; }
        .hero-cta > * { background: #2B211B !important; color: #F7F3EE !important; border-color: #2B211B !important; }
        .hero-cta > *:hover { background: #3A2C24 !important; color: #F7F3EE !important; }

        /* RIGHT */
        .hero-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          min-height: 700px;
          padding-right: clamp(0px, 2vw, 24px);
        }


        .hero-arch-wrap {
          position: relative;
          width: min(560px, 100%);
          height: clamp(520px, 72vh, 700px);
        }

        .hero-arch {
          position: absolute;
          inset: 0;
          background: #2B211B;
          border: 1.5px solid #D9CDC0;
          border-radius: 280px 280px 6px 6px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: visible;
        }

        .hero-arch-clip {
          position: absolute;
          inset: 0;
          border-radius: 280px 280px 6px 6px;
          overflow: hidden;
        }

        .hero-portrait {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          height: 102%;
          width: auto;
          max-width: 130%;
          object-fit: contain;
          object-position: bottom center;
          z-index: 2;
        }

        /* Vertical label to the right of arch */
        .hero-vertical {
          position: absolute;
          right: -8px;
          top: 8%;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 10.5px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          z-index: 3;
        }
        .hero-vertical .vrule {
          margin: 14px auto 6px;
          width: 1px; height: 56px;
          background: hsl(var(--border));
        }
        .hero-vertical .vstar {
          margin: 0 auto;
          color: hsl(var(--accent));
          font-size: 11px;
        }

        /* Bottom strip */
        .hero-featured {
          position: relative;
          z-index: 2;
          margin-top: auto;
          width: 100%;
          background: #2B211B;
          color: #F7F3EE;
          height: 90px;
          display: flex; align-items: center; justify-content: center; gap: 22px;
          padding: 0 clamp(20px, 5vw, 60px);
          border-top: 1px solid #45362D;
          border-bottom: 1px solid #45362D;
          box-shadow: none;
        }
        .hero-featured .lbl {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #F7F3EE;
        }
        .hero-featured .sp { color: #C8A45A; font-size: 12px; }
        .hero-featured .rule {
          flex: 0 0 clamp(40px, 14vw, 200px);
          height: 1px;
          background: #6C584B;
        }

        @media (max-width: 899px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            min-height: 0;
          }
          .hero-left { max-width: 100%; text-align: left; }
          .hero-right { min-height: 0; margin-top: 8px; }
          .hero-arch-wrap { height: clamp(420px, 70vh, 560px); width: min(420px, 92%); }
          .hero-vertical { right: -4px; font-size: 9.5px; letter-spacing: 0.4em; }
          .hero-watermark { font-size: clamp(5rem, 28vw, 9rem); top: 0; left: calc(50% + 100px); transform: translateX(-50%); }
          .hero-cta .btn-full { width: 100%; }
        }
      `}</style>

      <div className="hero-shell">
        {/* Giant background wordmark */}
        <div className="hero-watermark" aria-hidden="true">SHRISTY</div>

        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-left">



            <motion.h1 {...fade(20, 0.15)} className="hero-headline">
              Built from
              <br />
              real conversations,
              <br />
              not assumptions.
            </motion.h1>

            <motion.div {...fade(8, 0.25)} className="hero-divider" />

            <motion.p {...fade(16, 0.3)} className="hero-body">
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>

            <motion.div {...fade(14, 0.4)} className="hero-cta">
              <Button asChild variant="hero" size="lg" className="btn-full">
                <a href="#case-studies" onClick={onView}>
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div className="hero-right" {...fade(24, 0.2)}>
            <div className="hero-arch-wrap">
              <div className="hero-arch" aria-hidden="true" />
              <div className="hero-arch-clip">
                <img src={portrait} alt="Shristy Kumari" className="hero-portrait" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom featured strip */}
      <motion.div {...fade(10, 0.5)} className="hero-featured">
        <span className="rule" />
        <span className="sp">✦</span>
        <span className="lbl">Featured Work</span>
        <span className="sp">✦</span>
        <span className="rule" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
