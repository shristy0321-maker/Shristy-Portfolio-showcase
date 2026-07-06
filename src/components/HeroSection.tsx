import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/Heropicture.png.asset.json";
const portrait = portraitAsset.url;

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
      className="relative w-full overflow-hidden"
      style={{ background: "#F8F4EC", color: "#2C231D" }}
    >
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&display=swap"
      />
      <style>{`
        .ivory-hero {
          --ivory: #F8F4EC;
          --ink: #2C231D;
          --muted: #66584F;
          --btn: #1F1A17;
          --border: #D6CBBE;
          --display: 'Cabinet Grotesk', 'General Sans', ui-sans-serif, system-ui, sans-serif;
          --body: 'Satoshi', 'General Sans', ui-sans-serif, system-ui, sans-serif;
        }
        .ivory-shell {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(96px, 12vh, 140px) clamp(28px, 5vw, 80px) clamp(64px, 9vh, 110px);
        }
        .ivory-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 90px);
          align-items: center;
        }

        /* LEFT */
        .ivory-left { max-width: 560px; }
        .ivory-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .ivory-eyebrow::before {
          content: "";
          width: 28px; height: 1px;
          background: var(--ink);
          opacity: 0.5;
        }
        .ivory-headline {
          font-family: var(--display);
          font-weight: 700;
          font-size: clamp(2.6rem, 5.2vw, 4.75rem);
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0;
        }
        .ivory-body {
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 480px;
          margin: 32px 0 0;
        }
        .ivory-actions {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ivory-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--btn);
          color: var(--ivory);
          font-family: var(--body);
          font-weight: 500;
          font-size: 14.5px;
          letter-spacing: 0.02em;
          padding: 18px 32px;
          border-radius: 9999px;
          transition: transform .3s ease, background .3s ease;
        }
        .ivory-btn:hover { background: #000; transform: translateY(-1px); }
        .ivory-meta {
          font-family: var(--body);
          font-size: 13px;
          color: var(--muted);
          letter-spacing: 0.02em;
        }
        .ivory-meta strong {
          display: block;
          font-family: var(--display);
          font-weight: 700;
          font-size: 16px;
          color: var(--ink);
          letter-spacing: -0.01em;
          margin-bottom: 2px;
        }

        /* RIGHT — portrait with single outlined circle behind */
        .ivory-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: clamp(540px, 74vh, 720px);
        }
        .ivory-portrait-wrap {
          position: relative;
          width: min(720px, 110%);
          height: clamp(560px, 78vh, 760px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow: hidden;
          margin-top: -80px;
          margin-bottom: -60px;
        }
        .ivory-portrait-wrap::before {
          display: none;
        }


        .ivory-portrait {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* Bottom hairline caption row */
        .ivory-footline {
          margin-top: clamp(60px, 8vh, 100px);
          padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          font-family: var(--body);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 899px) {
          .ivory-grid { grid-template-columns: 1fr; gap: 32px; }
          .ivory-left { max-width: 100%; order: 2; }
          .ivory-right { order: 1; min-height: 0; }
          .ivory-portrait-wrap { max-width: 420px; }
          .ivory-portrait-wrap::before { width: 340px; top: 78%; }
          .ivory-headline { font-size: clamp(2.2rem, 9vw, 3rem); }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
          .ivory-portrait-wrap::before { width: 460px; top: 78%; }
        }


      `}</style>

      <div className="ivory-hero">
        <div className="ivory-shell">
          <div className="ivory-grid">
            {/* LEFT */}
            <div className="ivory-left">
              <motion.div {...fade(10, 0.05)} className="ivory-eyebrow">
                Product Manager · Portfolio
              </motion.div>

              <motion.h1 {...fade(20, 0.12)} className="ivory-headline">
                Built from real conversations,<br />not assumptions.
              </motion.h1>

              <motion.p {...fade(16, 0.24)} className="ivory-body">
                My product education started in client calls and stakeholder rooms. Long before
                roadmaps or sprint planning. Just real people, real problems, and the gap between
                what was promised and what was delivered.
              </motion.p>

              <motion.div {...fade(14, 0.34)} className="ivory-actions">
                <a href="#case-studies" onClick={onView} className="ivory-btn">
                  Explore My Work
                  <span aria-hidden="true">→</span>
                </a>
                <div className="ivory-meta">
                  <strong>Shristy Kumari</strong>
                  Building structured solutions
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div className="ivory-right" {...fade(24, 0.18)}>
              <div className="ivory-portrait-wrap">
                <img src={portrait} alt="Shristy Kumari" className="ivory-portrait" />
              </div>
            </motion.div>
          </div>

          <div className="ivory-footline">
            <span>Operations · Discovery · Delivery</span>
            <span>Available for select projects — 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
