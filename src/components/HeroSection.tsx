import { motion, useReducedMotion } from "framer-motion";
import portrait from "@/assets/shristy-portrait-hero.png";
import avatar1 from "@/assets/meetcraft-editorial.jpg";
import avatar2 from "@/assets/mailniti-editorial.jpg";
import avatar3 from "@/assets/global-makhana-editorial.jpg";

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

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full" style={{ background: "#9FB2AC" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
      />
      <style>{`
        .agency-hero {
          --cream: #FFF9EB;
          --sage: #9FB2AC;
          --blood: #5D0D18;
          --ink: #5D0D18;
          --ink-2: #7A1824;
          --muted: #4A5854;
          --btn: #5D0D18;
          --btn-hover: #7A1824;
          --accent: #FFF9EB;
          --display: 'DM Serif Display', 'Cormorant Garamond', Georgia, serif;
          --body: 'Inter', ui-sans-serif, system-ui, sans-serif;
          padding: clamp(16px, 3vw, 40px);
        }
        .agency-shell {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          background: var(--cream);
          border-radius: clamp(24px, 3vw, 40px);
          padding: clamp(32px, 5vw, 80px);
          overflow: hidden;
          min-height: clamp(560px, 78vh, 780px);
        }
        .agency-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(32px, 6vw, 80px);
          align-items: center;
          height: 100%;
        }

        /* LEFT */
        .agency-left { max-width: 620px; }
        .agency-eyebrow {
          display: inline-flex; align-items: center; gap: 4px;
          color: var(--ink); margin-bottom: 28px;
        }
        .agency-eyebrow svg { display: block; }
        .agency-headline {
          font-family: var(--display);
          font-weight: 400;
          font-size: clamp(2.6rem, 6vw, 5rem);
          line-height: 1.02;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin: 0;
        }
        .agency-body {
          font-family: var(--body);
          font-size: 16px;
          line-height: 1.65;
          color: var(--muted);
          max-width: 460px;
          margin: 28px 0 0;
        }
        .agency-actions {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .agency-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--btn);
          color: #FFF9EB;
          font-family: var(--body);
          font-weight: 600;
          font-size: 15px;
          padding: 16px 32px;
          border-radius: 9999px;
          border: 1.5px solid var(--ink);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .agency-btn:hover {
          background: var(--btn-hover);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(93,13,24,0.28);
        }
        .agency-social { display: flex; align-items: center; gap: 14px; }
        .agency-avatars { display: flex; }
        .agency-avatars img {
          width: 44px; height: 44px;
          border-radius: 9999px;
          border: 2.5px solid var(--cream);
          object-fit: cover;
          margin-left: -12px;
        }
        .agency-avatars img:first-child { margin-left: 0; }
        .agency-social-text { font-family: var(--body); line-height: 1.2; }
        .agency-social-text strong {
          display: block;
          font-family: var(--display);
          font-size: 20px;
          color: var(--ink);
          font-weight: 400;
        }
        .agency-social-text span {
          font-size: 13px; color: var(--muted);
        }

        /* RIGHT — portrait with circular halo + decorative marks */
        .agency-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: clamp(460px, 68vh, 640px);
        }
        .agency-halo {
          position: absolute;
          left: 50%; bottom: 0;
          transform: translateX(-50%);
          width: min(520px, 92%);
          aspect-ratio: 1;
          border-radius: 9999px;
          background: radial-gradient(circle at 50% 55%, #FFF9EB 0%, #F5EBCE 55%, #E8D9A8 100%);
        }
        .agency-portrait {
          position: relative;
          z-index: 2;
          width: min(560px, 100%);
          height: auto;
          object-fit: contain;
          object-position: bottom center;
        }

        /* Decorative marks */
        .mark { position: absolute; z-index: 3; color: #5D0D18; }
        .mark-paperclip { top: 4%; left: 50%; transform: translateX(-50%); }
        .mark-starburst { top: 12%; right: 4%; color: #5D0D18; }
        .mark-corner { bottom: 8%; left: 42%; }
        .mark-x { bottom: 4%; right: 6%; }
        .mark-asterisk-left { bottom: 8%; left: 4%; color: #5D0D18; }

        @media (max-width: 899px) {
          .agency-grid { grid-template-columns: 1fr; gap: 24px; }
          .agency-left { max-width: 100%; order: 2; }
          .agency-right { order: 1; min-height: 380px; }
          .agency-halo { width: min(360px, 80%); }
          .agency-portrait { width: min(380px, 90%); }
          .mark-paperclip { top: 2%; }
          .mark-starburst { top: 6%; right: 2%; transform: scale(0.75); }
          .mark-corner, .mark-x, .mark-asterisk-left { display: none; }
        }
      `}</style>

      <div className="agency-hero">
        <div className="agency-shell">
          <div className="agency-grid">
            {/* LEFT */}
            <div className="agency-left">
              <motion.div {...fade(14, 0.05)} className="agency-eyebrow" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2 L11 7 L3 12 Z" fill="#5D0D18" opacity={0.35 + i * 0.2} />
                  </svg>
                ))}
              </motion.div>

              <motion.h1 {...fade(20, 0.12)} className="agency-headline">
                Building Structured
                <br />
                Solutions From Real
                <br />
                Customer Problems
              </motion.h1>

              <motion.p {...fade(16, 0.24)} className="agency-body">
                Product Manager focused on operations — turning research, conversations, and messy
                real-world problems into structured products that ship.
              </motion.p>

              <motion.div {...fade(14, 0.34)} className="agency-actions">
                <a href="#contact" onClick={scrollTo("contact")} className="agency-btn">
                  Get in Touch
                  <span aria-hidden="true">→</span>
                </a>
                <div className="agency-social">
                  <div className="agency-avatars">
                    <img src={avatar1} alt="" />
                    <img src={avatar2} alt="" />
                    <img src={avatar3} alt="" />
                  </div>
                  <div className="agency-social-text">
                    <strong>4+ Projects Shipped</strong>
                    <span>Let's Work Together!</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div className="agency-right" {...fade(24, 0.18)}>
              <div className="agency-halo" aria-hidden />

              {/* Decorative marks */}
              <span className="mark mark-paperclip" aria-hidden>
                <svg width="26" height="52" viewBox="0 0 26 52" fill="none">
                  <rect x="1.5" y="1.5" width="23" height="49" rx="11.5" stroke="#5D0D18" strokeWidth="2" />
                  <text x="13" y="20" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#5D0D18">0</text>
                </svg>
              </span>
              <span className="mark mark-starburst" aria-hidden>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <g stroke="#5D0D18" strokeWidth="1.5">
                    {Array.from({ length: 16 }).map((_, i) => {
                      const a = (i * Math.PI) / 8;
                      const x1 = 36 + Math.cos(a) * 10;
                      const y1 = 36 + Math.sin(a) * 10;
                      const x2 = 36 + Math.cos(a) * 32;
                      const y2 = 36 + Math.sin(a) * 32;
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                    })}
                  </g>
                  <circle cx="36" cy="36" r="6" fill="#FFF9EB" stroke="#5D0D18" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="mark mark-corner" aria-hidden>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 8 L8 40 L40 40" stroke="#5D0D18" strokeWidth="2" fill="none" />
                  <path d="M12 12 L12 36 L36 36" stroke="#5D0D18" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <span className="mark mark-x" aria-hidden>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M6 6 L30 30 M30 6 L6 30" stroke="#5D0D18" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="mark mark-asterisk-left" aria-hidden>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                  <g stroke="#5D0D18" strokeWidth="1.5" strokeLinecap="round">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const a = (i * Math.PI) / 4;
                      const x1 = 17 + Math.cos(a) * 4;
                      const y1 = 17 + Math.sin(a) * 4;
                      const x2 = 17 + Math.cos(a) * 14;
                      const y2 = 17 + Math.sin(a) * 14;
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                    })}
                  </g>
                </svg>
              </span>

              <img src={portrait} alt="Shristy Kumari" className="agency-portrait" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
