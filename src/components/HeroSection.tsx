import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/shristy-portrait-hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const fadeFrom = (x: number, delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, x },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  const label: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: "4px",
    color: "#B89B5E",
    fontWeight: 600,
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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#F8F5EF", paddingTop: 88, paddingBottom: 48 }}
    >
      {/* Subtle dotted grid on right - desktop only */}
      <div
        aria-hidden
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: 120,
          right: 40,
          width: 180,
          height: 220,
          backgroundImage: "radial-gradient(#1F1F1F 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          opacity: 0.08,
        }}
      />

      <div
        className="mx-auto h-full grid items-center hero-wrap"
        style={{
          maxWidth: 1280,
          paddingLeft: "clamp(20px, 6vw, 80px)",
          paddingRight: "clamp(20px, 6vw, 80px)",
          gridTemplateColumns: "1fr",
          gap: 32,
        }}
      >
        <style>{`
          .hero-wrap { min-height: auto; }
          @media (min-width: 768px) {
            .hero-wrap { min-height: calc(92vh - 80px); }
            #hero-grid { grid-template-columns: 1fr 1.2fr 1fr !important; gap: 32px !important; align-items: center !important; }
            #hero-left { order: 1 !important; text-align: left; }
            #hero-center { order: 2 !important; }
            #hero-right { order: 3 !important; }
          }
          /* Mobile: stacked, centered */
          @media (max-width: 767px) {
            #hero-left, #hero-right { text-align: center; }
            #hero-left .hero-label,
            #hero-right .hero-label { display: inline-block; }
            #hero-left h1, #hero-right p { margin-left: auto; margin-right: auto; }
            #hero-left .hero-cta-wrap { display: flex; justify-content: center; }
          }
        `}</style>

        <div
          id="hero-grid"
          className="grid items-center w-full"
          style={{ gridTemplateColumns: "1fr", gap: 32 }}
        >
          {/* Portrait — first on mobile */}
          <motion.div
            id="hero-center"
            className="flex justify-center items-center relative"
            style={{ order: 0, opacity: portraitOpacity, y: portraitY }}
            {...fadeIn(0.1)}
          >
            <img
              src={portrait}
              alt="Shristy Kumari"
              className="hero-portrait"
              style={{
                width: "auto",
                height: "clamp(280px, 52vh, 620px)",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* Left text — tagline + CTA */}
          <div id="hero-left" style={{ order: 1 }}>
            <motion.div {...fadeFrom(-24, 0.15)} style={label} className="hero-label">
              PRODUCT MANAGEMENT
            </motion.div>
            <motion.h1
              {...fadeFrom(-24, 0.25)}
              style={{
                marginTop: 20,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 6.4vw, 4.25rem)",
                lineHeight: 1.08,
                color: "#1F1F1F",
                maxWidth: 340,
              }}
            >
              Built from real conversations, not assumptions.
            </motion.h1>
            <motion.div {...fadeFrom(-24, 0.35)} style={{ marginTop: 28 }} className="hero-cta-wrap">
              <a
                href="#case-studies"
                onClick={onView}
                style={{
                  backgroundColor: "#1F1F1F",
                  color: "#F8F5EF",
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  minHeight: 44,
                  lineHeight: "20px",
                }}
              >
                Explore My Work →
              </a>
            </motion.div>
          </div>

          {/* Right — About */}
          <div id="hero-right" style={{ order: 2 }}>
            <motion.div {...fadeFrom(24, 0.15)} style={label} className="hero-label">
              ABOUT
            </motion.div>
            <motion.p
              {...fadeFrom(24, 0.25)}
              style={{
                marginTop: 20,
                color: "#1F1F1F",
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              My product education started in client calls and stakeholder rooms. Long before
              roadmaps or sprint planning. Just real people, real problems, and the gap between
              what was promised and what was delivered.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
