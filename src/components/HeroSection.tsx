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
          padding: clamp(80px, 10vh, 120px) clamp(28px, 5vw, 80px) clamp(40px, 6vh, 80px);
        }

        /* Oversized background wordmark */
        .ed-wordmark {
          position: absolute;
          left: 0;
          right: 0;
          top: clamp(110px, 14vh, 180px);
          z-index: 1;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(120px, 18vw, 300px);
          line-height: 0.86;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground));
          text-align: center;
          margin: 0;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
        }

        /* 3-column composition: left text | centered portrait | right about */
        .ed-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr minmax(360px, 42%) 1fr;
          gap: clamp(24px, 3vw, 48px);
          align-items: stretch;
          min-height: clamp(560px, 78vh, 780px);
          padding-top: clamp(60px, 8vh, 120px);
        }

        /* LEFT column — vertical stack */
        .ed-left {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 440px;
        }
        .ed-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 22px;
        }
        .ed-headline {
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(1.6rem, 3vw, 2.6rem);
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
        .ed-cta { margin-top: 28px; }

        /* CENTER portrait — no container, no frame */
        .ed-center {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .ed-portrait {
          display: block;
          width: 100%;
          max-width: 560px;
          height: auto;
          object-fit: contain;
          object-position: bottom center;
        }



        /* RIGHT column — vertical about */
        .ed-right {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 340px;
          margin-left: auto;
        }
        .ed-right-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 22px;
        }
        .ed-about {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .ed-name {
          margin-top: 26px;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(1.3rem, 2vw, 1.6rem);
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

        @media (max-width: 899px) {
          .ed-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-top: 20px;
            min-height: 0;
          }
          .ed-wordmark { font-size: clamp(72px, 20vw, 140px); top: 90px; }
          .ed-left, .ed-right { max-width: 100%; margin: 0; }
          .ed-center { order: -1; }
          .ed-portrait { max-width: 380px; margin: 0 auto; }
        }
      `}</style>

      <div className="ed-hero">
        {/* Oversized background typography */}
        <motion.h1 {...fade(20, 0.1)} className="ed-wordmark" aria-label="Shristy">
          SHRISTY
        </motion.h1>

        <div className="ed-grid">
          {/* LEFT — vertical text */}
          <div className="ed-left">
            <motion.div {...fade(10, 0.22)} className="ed-eyebrow">
              Product Manager · Operations
            </motion.div>

            <motion.h2 {...fade(20, 0.28)} className="ed-headline">
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

            <motion.div {...fade(14, 0.4)} className="ed-cta">
              <Button asChild variant="hero" size="lg">
                <a href="#case-studies" onClick={onView}>
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* CENTER — portrait overlaps wordmark, no frame/container */}
          <motion.div className="ed-center" {...fade(24, 0.18)}>
            <div className="ed-arch">
              <img src={portrait} alt="Shristy Kumari" className="ed-portrait" />
            </div>
          </motion.div>



          {/* RIGHT — vertical about */}
          <div className="ed-right">
            <motion.div {...fade(10, 0.24)} className="ed-right-eyebrow">
              About
            </motion.div>
            <motion.p {...fade(16, 0.3)} className="ed-about">
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>
            <motion.div {...fade(12, 0.42)} className="ed-name">
              Shristy Kumari
            </motion.div>
            <motion.div {...fade(8, 0.48)} className="ed-based">
              Based in India
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
