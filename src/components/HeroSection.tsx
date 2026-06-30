import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
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
        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          min-height: calc(100vh - 200px);
        }

        /* Giant background wordmark */
        .hero-watermark {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -54%);
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(8rem, 22vw, 22rem);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: hsl(var(--foreground) / 0.10);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          z-index: 0;
        }

        .hero-left { position: relative; z-index: 3; max-width: 520px; }

        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: hsl(var(--accent));
        }

        .hero-headline {
          margin-top: 28px;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(2.4rem, 4.6vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.015em;
          color: hsl(var(--foreground));
        }
        .hero-headline em {
          font-style: italic;
          color: hsl(var(--accent));
        }

        .hero-rule {
          margin-top: 28px;
          width: 56px;
          height: 1px;
          background: hsl(var(--accent));
        }

        .hero-about {
          margin-top: 24px;
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
          max-width: 460px;
        }

        .hero-cta-wrap { margin-top: 36px; }

        /* RIGHT */
        .hero-right {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 560px;
        }

        .hero-arch {
          position: relative;
          width: clamp(320px, 36vw, 460px);
          aspect-ratio: 3/4;
          border-radius: 999px 999px 12px 12px;
          background: hsl(var(--accent));
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .hero-arch::after {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid hsl(var(--accent-foreground) / 0.18);
          border-radius: 999px 999px 8px 8px;
          pointer-events: none;
        }
        .hero-arch img {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 112%;
          height: 102%;
          object-fit: contain;
          object-position: bottom center;
        }

        /* Featured strip */
        .hero-featured {
          position: relative;
          z-index: 4;
          margin-top: 56px;
          display: flex; align-items: center; justify-content: center; gap: 18px;
          border-top: 1px solid hsl(var(--border));
          border-bottom: 1px solid hsl(var(--border));
          padding: 18px 24px;
        }
        .hero-featured .lbl {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: hsl(var(--accent));
        }
        .hero-featured .sp { color: hsl(var(--accent)); font-size: 12px; }
        .hero-featured .rule {
          flex: 0 0 80px; height: 1px; background: hsl(var(--accent) / 0.45);
        }

        @media (max-width: 899px) {
          .hero-grid { grid-template-columns: 1fr; gap: 24px; }
          .hero-left { text-align: center; max-width: 100%; margin: 0 auto; }
          .hero-rule { margin-left: auto; margin-right: auto; }
          .hero-about { margin-left: auto; margin-right: auto; }
          .hero-right { min-height: 0; margin-top: 16px; }
          .hero-arch { width: min(320px, 82%); }
          .hero-watermark { font-size: clamp(5rem, 26vw, 9rem); }
          .hero-featured .rule { flex: 0 0 28px; }
        }
      `}</style>

      <div
        className="mx-auto relative"
        style={{
          maxWidth: 1320,
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
        }}
      >
        {/* Giant background wordmark */}
        <div className="hero-watermark" aria-hidden="true">SHRISTY</div>

        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-left">
            <motion.div {...fade(12, 0.1)} className="hero-eyebrow">
              Product Management
            </motion.div>

            <motion.h1 {...fade(20, 0.2)} className="hero-headline">
              Built from <em>real conversations,</em> not assumptions.
            </motion.h1>

            <motion.div {...fade(10, 0.3)} className="hero-rule" />

            <motion.p {...fade(18, 0.35)} className="hero-about">
              My product education started in client calls and stakeholder rooms — long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>

            <motion.div {...fade(16, 0.45)} className="hero-cta-wrap">
              <Button asChild variant="hero" size="lg">
                <a href="#case-studies" onClick={onView}>
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — arch portrait */}
          <motion.div className="hero-right" style={{ y: portraitY }} {...fade(28, 0.25)}>
            <div className="hero-arch">
              <img src={portrait} alt="Shristy Kumari" />
            </div>
          </motion.div>
        </div>

        {/* Featured strip */}
        <motion.div {...fade(14, 0.5)} className="hero-featured">
          <span className="rule" />
          <span className="sp">✦</span>
          <span className="lbl">Featured Work</span>
          <span className="sp">✦</span>
          <span className="rule" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
