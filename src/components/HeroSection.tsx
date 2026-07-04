import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/shristy-portrait-hero.png";

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
      style={{ minHeight: "auto" }}
    >
      <style>{`
        .hero-shell {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(110px, 14vh, 160px) clamp(28px, 5vw, 80px) clamp(60px, 8vh, 100px);
          display: flex;
          flex-direction: column;
        }

        /* Faded background wordmark — top band, fully visible */
        .hero-watermark {
          position: relative;
          z-index: 1;
          text-align: center;
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(110px, 16vw, 240px);
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: hsl(var(--foreground) / 0.09);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          margin: 0 0 clamp(48px, 7vh, 90px);
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 44% 56%;
          gap: clamp(50px, 7vw, 100px);
          align-items: center;
        }



        /* LEFT */
        .hero-left {
          position: relative;
          z-index: 3;
          max-width: 520px;
        }
        .hero-headline {
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: hsl(var(--foreground));
          margin: 0;
        }
        .hero-divider {
          margin: 26px 0 22px;
          width: 64px; height: 1px;
          background: hsl(var(--accent));
        }
        .hero-body {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
          max-width: 440px;
          margin: 0;
        }
        .hero-cta { margin-top: 34px; }

        /* RIGHT — portrait with arch backdrop */
        .hero-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: clamp(500px, 70vh, 700px);
        }
        .hero-arch {
          position: relative;
          width: min(520px, 100%);
          aspect-ratio: 4 / 5;
          background: #2F241D;
          border-radius: 9999px 9999px 0 0;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .hero-portrait {
          display: block;
          width: 108%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        @media (max-width: 899px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hero-left { max-width: 100%; }
          .hero-right { min-height: 0; }
          .hero-arch { max-width: 380px; }
          .hero-watermark { font-size: clamp(72px, 22vw, 140px); top: 90px; }
        }
      `}</style>

      <div className="hero-shell">
        <div className="hero-watermark" aria-hidden="true">SHRISTY</div>

        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-left">
            <motion.h1 {...fade(20, 0.15)} className="hero-headline">
              Built from real conversations, not assumptions.
            </motion.h1>

            <motion.div {...fade(8, 0.25)} className="hero-divider" />

            <motion.p {...fade(16, 0.3)} className="hero-body">
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>

            <motion.div {...fade(14, 0.4)} className="hero-cta">
              <Button asChild variant="hero" size="lg">
                <a href="#case-studies" onClick={onView}>
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div className="hero-right" {...fade(24, 0.2)}>
            <div className="hero-arch">
              <img src={portrait} alt="Shristy Kumari" className="hero-portrait" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
