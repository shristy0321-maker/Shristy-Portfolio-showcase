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
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const isLast = phraseIndex === ROTATING_PHRASES.length - 1;
    const hold = isLast ? 3000 : 2000;
    const t = setTimeout(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, hold);
    return () => clearTimeout(t);
  }, [phraseIndex, reduce]);

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
    >
      <style>{`
        .ed-hero {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(90px, 11vh, 130px) clamp(28px, 5vw, 80px) 0;
        }

        /* Top editorial label bar */
        .ed-toprow {
          position: relative;
          z-index: 4;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 28px;
          margin-bottom: clamp(18px, 3vh, 34px);
        }
        .ed-label {
          font-family: var(--font-body);
          font-size: 10.5px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          white-space: nowrap;
        }
        .ed-label-left { display: flex; align-items: center; gap: 18px; }
        .ed-label-left .ed-rule {
          flex: 1; height: 1px;
          background: hsl(var(--border));
        }
        .ed-label-right {
          display: flex; flex-direction: column; align-items: flex-end;
          line-height: 1.45;
          text-align: right;
          gap: 2px;
        }

        /* Giant wordmark */
        .ed-wordmark {
          position: relative;
          z-index: 1;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(90px, 15.5vw, 240px);
          line-height: 0.86;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground));
          text-align: center;
          margin: 0;
          white-space: nowrap;
          user-select: none;
        }

        /* rule under wordmark */
        .ed-wordmark-rule {
          position: relative;
          z-index: 2;
          height: 1px;
          background: hsl(var(--border));
          margin-top: clamp(14px, 2vh, 26px);
        }

        /* Main composition — portrait overlaps wordmark */
        .ed-composition {
          position: relative;
          margin-top: clamp(-140px, -14vw, -70px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 5vw, 70px);
          align-items: end;
          padding-bottom: clamp(30px, 5vh, 60px);
        }

        /* LEFT column */
        .ed-left {
          position: relative;
          z-index: 3;
          max-width: 520px;
          padding-top: clamp(140px, 18vw, 240px);
        }
        .ed-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 24px;
        }
        .ed-headline {
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(1.7rem, 3.4vw, 2.85rem);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: hsl(var(--foreground));
          margin: 0;
        }
        .ed-rotator {
          display: inline-block;
          position: relative;
          overflow: hidden;
          vertical-align: bottom;
          height: 1.2em;
          line-height: 1.08;
          white-space: nowrap;
        }
        .ed-rotator-sizer { display: grid; visibility: hidden; pointer-events: none; }
        .ed-rotator-sizer > span { grid-column: 1; grid-row: 1; white-space: nowrap; }
        .ed-rotator-item {
          display: inline-block; position: absolute;
          left: 0; top: 0; white-space: nowrap;
          will-change: transform, opacity;
        }

        /* Quote-style body with left rule */
        .ed-quote {
          margin-top: 28px;
          padding-left: 20px;
          border-left: 1px solid hsl(var(--border));
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
          max-width: 440px;
        }

        .ed-name {
          margin-top: 32px;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(1.4rem, 2.2vw, 1.75rem);
          color: hsl(var(--foreground));
          line-height: 1;
        }
        .ed-based {
          margin-top: 10px;
          font-family: var(--font-body);
          font-size: 10.5px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
        }

        .ed-cta { margin-top: 30px; }

        /* RIGHT column — portrait, no visible box */
        .ed-right {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: clamp(460px, 62vh, 640px);
        }
        .ed-portrait-wrap {
          position: relative;
          width: min(520px, 100%);
          aspect-ratio: 1 / 1.15;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .ed-portrait {
          position: relative;
          z-index: 2;
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom center;
        }

        /* Bottom featured strip */
        .ed-featured {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 72px;
          display: flex; align-items: center; justify-content: center; gap: 22px;
          padding: 0 clamp(20px, 5vw, 60px);
          border-top: 1px solid hsl(var(--border));
          border-bottom: 1px solid hsl(var(--border));
          margin-top: clamp(20px, 4vh, 40px);
          background: hsl(var(--secondary));
        }
        .ed-featured .lbl {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: hsl(var(--foreground));
        }
        .ed-featured .rule { flex: 0 0 clamp(40px, 14vw, 200px); height: 1px; background: hsl(var(--border)); }

        @media (max-width: 899px) {
          .ed-composition {
            grid-template-columns: 1fr;
            margin-top: -40px;
            gap: 20px;
            align-items: center;
          }
          .ed-left { padding-top: 20px; max-width: 100%; }
          .ed-wordmark { font-size: clamp(70px, 18vw, 120px); }
          .ed-toprow { grid-template-columns: 1fr; text-align: center; gap: 10px; }
          .ed-label-right { align-items: center; text-align: center; }
          .ed-label-left { justify-content: center; }
          .ed-right { min-height: 0; }
        }
      `}</style>

      <div className="ed-hero">
        {/* Top editorial labels */}
        <motion.div {...fade(10, 0.05)} className="ed-toprow">
          <div className="ed-label ed-label-left">
            <span>Product Portfolio</span>
            <span className="ed-rule" />
          </div>
          <div className="ed-label">2026 · Edition I</div>
          <div className="ed-label ed-label-right">
            <span>Designing Products</span>
            <span>Building Trust</span>
          </div>
        </motion.div>

        {/* Giant wordmark */}
        <motion.h1 {...fade(20, 0.12)} className="ed-wordmark" aria-label="Shristy">
          SHRISTY
        </motion.h1>

        <motion.div {...fade(6, 0.2)} className="ed-wordmark-rule" aria-hidden="true" />

        {/* Composition with portrait overlapping */}
        <div className="ed-composition">
          {/* LEFT */}
          <div className="ed-left">
            <motion.div {...fade(10, 0.28)} className="ed-eyebrow">
              Product Manager &nbsp;·&nbsp; Operations
            </motion.div>

            <motion.h2 {...fade(20, 0.32)} className="ed-headline">
              Designing products
              <br />
              that create
              <br />
              <span className="ed-rotator" aria-live="polite">
                <span className="ed-rotator-sizer" aria-hidden="true">
                  {ROTATING_PHRASES.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={phraseIndex}
                    className="ed-rotator-item"
                    initial={reduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                    animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.65, ease: EASE }}
                  >
                    {ROTATING_PHRASES[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h2>

            <motion.p {...fade(16, 0.4)} className="ed-quote">
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>

            <motion.div {...fade(12, 0.5)} className="ed-name">
              Shristy Kumari
            </motion.div>
            <motion.div {...fade(8, 0.55)} className="ed-based">
              Based in India
            </motion.div>

            <motion.div {...fade(14, 0.6)} className="ed-cta">
              <Button asChild variant="hero" size="lg">
                <a href="#case-studies" onClick={onView}>
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div className="ed-right" {...fade(24, 0.2)}>
            <div className="ed-portrait-wrap">
              <img src={portrait} alt="Shristy Kumari" className="ed-portrait" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom featured strip */}
      <motion.div {...fade(10, 0.5)} className="ed-featured">
        <span className="rule" />
        <span className="lbl">Featured Work</span>
        <span className="rule" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
