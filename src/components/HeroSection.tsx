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
      style={{
        backgroundColor: "#F8F5EF",
        paddingTop: 88,
        paddingBottom: 0,
        minHeight: "100vh",
      }}
    >
      {/* Subtle dotted grid — desktop only, decorative anchor */}
      <div
        aria-hidden
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: 132,
          right: 48,
          width: 140,
          height: 180,
          backgroundImage: "radial-gradient(#1F1F1F 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          opacity: 0.07,
        }}
      />

      <div
        className="mx-auto hero-wrap"
        style={{
          maxWidth: 1320,
          paddingLeft: "clamp(20px, 5vw, 64px)",
          paddingRight: "clamp(20px, 5vw, 64px)",
        }}
      >
        <style>{`
          .hero-wrap { min-height: auto; display: block; }
          @media (min-width: 768px) {
            .hero-wrap {
              min-height: calc(100vh - 88px);
              display: grid;
              align-items: stretch;
            }
            #hero-grid {
              grid-template-columns: 1fr 1.55fr 1fr !important;
              gap: clamp(24px, 3vw, 56px) !important;
              align-items: stretch !important;
              min-height: calc(100vh - 88px);
            }
            #hero-left { order: 1 !important; text-align: left; padding-top: 14vh; }
            #hero-center { order: 2 !important; align-self: end; }
            #hero-right { order: 3 !important; text-align: left; padding-top: 14vh; }
          }
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
          className="grid w-full"
          style={{ gridTemplateColumns: "1fr", gap: 32 }}
        >
          {/* Portrait — dominant center, anchored to bottom of section */}
          <motion.div
            id="hero-center"
            className="flex justify-center items-end relative"
            style={{ order: 0, opacity: portraitOpacity, y: portraitY }}
            {...fadeIn(0.1)}
          >
            <img
              src={portrait}
              alt="Shristy Kumari"
              className="hero-portrait"
              style={{
                width: "auto",
                height: "min(82vh, 720px)",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* Left — eyebrow, headline, CTA */}
          <div id="hero-left" style={{ order: 1 }}>
            <motion.div {...fadeFrom(-24, 0.15)} style={label} className="hero-label">
              PRODUCT MANAGEMENT
            </motion.div>
            <motion.h1
              {...fadeFrom(-24, 0.25)}
              style={{
                marginTop: 24,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
                color: "#1F1F1F",
                maxWidth: 360,
              }}
            >
              Built from real conversations, not assumptions.
            </motion.h1>
            <motion.div {...fadeFrom(-24, 0.35)} style={{ marginTop: 36 }} className="hero-cta-wrap">
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

          {/* Right — eyebrow + about paragraph */}
          <div id="hero-right" style={{ order: 2 }}>
            <motion.div {...fadeFrom(24, 0.15)} style={label} className="hero-label">
              ABOUT
            </motion.div>
            <motion.p
              {...fadeFrom(24, 0.25)}
              style={{
                marginTop: 24,
                color: "#1F1F1F",
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.75,
                maxWidth: 320,
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
